import requests
from dotenv import load_dotenv
from get_student_id import get_token
import os

load_dotenv()

def sky_request(user_id, endpoint, params=None):

    token = get_token(user_id)

    headers = {
        "Authorization": f"Bearer {token}",
        "Bb-Api-Subscription-Key": os.getenv("SUBSCRIPTION_KEY"),
        "Content-Type": "application/json"
    }

    url = f"{os.getenv('BASE_URL')}{endpoint}"

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        raise Exception(f"SKY API Error: {response.text}")

    return response.json()

def get_student_profile(user_id):

    return sky_request(
        user_id,
        "/school/v1/me"
    )


def get_sections(user_id):

    return sky_request(
        user_id,
        "/school/v1/academics/sections"
    )


def get_grades(user_id):

    return sky_request(
        user_id,
        "/school/v1/academics/grades"
    )


def get_assignments(user_id):

    return sky_request(
        user_id,
        "/school/v1/academics/assignments"
    )