import psycopg2
from dotenv import *
import os

load_dotenv()

def get_token(user_id):

    conn = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )

    cur = conn.cursor()

    cur.execute(
        "SELECT access_token FROM oauth_tokens WHERE user_id = %s",
        (user_id,)
    )

    result = cur.fetchone()

    cur.close()
    conn.close()

    if result is None:
        raise Exception("No OAuth token found for user")

    return result[0]