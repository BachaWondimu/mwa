type Student = { student_id: string, firstname: string; lastname: string; };
type Course = { [id: string]: { title: string, students: Student[]; }; }; // Record<string, { title: string, students: Student[] }>

export class Data5 {
    // data structure 5
    #data: Course = {};

    // for a given course:
    // add student in course (if course id exist, and student_id does not exist)
    // update student full name in course (if course id exist, and student_id exist)
    // delete student from a course (if course id exist, and student_id exist)
    // read student full name by student_id, and course id (if course id exist, and student_id exist)

}