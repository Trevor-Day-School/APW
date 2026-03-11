from sections_and_assignments import *

USER_ID = 1


def main():

    print("\nStudent Profile")
    profile = get_student_profile(USER_ID)
    print(profile)

    print("\nSections")
    sections = get_sections(USER_ID)
    print(sections)

    print("\nGrades")
    grades = get_grades(USER_ID)
    print(grades)

    print("\nAssignments")
    assignments = get_assignments(USER_ID)
    print(assignments)


if __name__ == "__main__":
    main()