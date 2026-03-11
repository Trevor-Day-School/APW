from sections_and_assignments import get_sections_and_assignments
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )

def calculate_category_grades():
    section_data = get_sections_and_assignments()
    conn = get_connection()
    cur = conn.cursor()

    category_grades = {}

    for section, data in section_data.items():

        assignments = data["assignments"]

        category_totals = {}
        category_possible = {}

        for assignment_id, category, points_possible in assignments:

            cur.execute("""
                SELECT points_earned
                FROM submissions
                WHERE assignment_id = %s
            """, (assignment_id,))

            result = cur.fetchone()

            if result is None:
                continue

            points_earned = result[0]

            category_totals.setdefault(category, 0)
            category_possible.setdefault(category, 0)

            category_totals[category] += points_earned
            category_possible[category] += points_possible

        category_grades[section] = {}

        for category in category_totals:
            grade = category_totals[category] / category_possible[category]
            category_grades[section][category] = grade

    cur.close()
    conn.close()

    return category_grades