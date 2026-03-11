from dotenv import load_dotenv
import psycopg2
import os

load_dotenv()

def connect_db():
    return psycopg2.connect(os.getenv("DATABASE_URL"))


def get_most_recent_student_id(cur):
    cur.execute("SELECT user_id FROM oauth_tokens ORDER BY user_id DESC LIMIT 1")
    return cur.fetchone()[0]


def get_sections(cur, student_id):
    cur.execute(
        "SELECT section_id, name FROM sections WHERE user_id = %s",
        (student_id,)
    )
    return cur.fetchall()


def get_assignments(cur, student_id, section_id):
    cur.execute(
        "SELECT assignment_id, name, category, grade FROM assignments WHERE user_id = %s AND section_id = %s",
        (student_id, section_id)
    )
    return cur.fetchall()


def main():
    conn = connect_db()
    cur = conn.cursor()

    student_id = get_most_recent_student_id(cur)
    print("Most recent student ID:", student_id)

    sections = get_sections(cur, student_id)

    for section_id, section_name in sections:
        print(f"\nSection: {section_name}")

        assignments = get_assignments(cur, student_id, section_id)

        for assignment_id, name, category, grade in assignments:
            print(f"  {name} | Category: {category} | Grade: {grade}")

    cur.close()
    conn.close()


main()
