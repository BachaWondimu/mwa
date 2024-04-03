type Student = { student_id: string, firstname: string; lastname: string; };
type Course = { [id: string]: { title: string, students: Student[]; }; }; // Record<string, { title: string, students: Student[] }>

export class Data6 {
    // data structure 6
    #data: Course[] = [];

    // add course (if course id does not exist)
    // update course title (if course id exist)
    // delete course (if course id exist)
    // read course title by course id (if course id exist)
    // add student in course (if course id exist, and student_id does not exist)
    // update student full name in course (if course id exist, and student_id exist)
    // delete student from a course (if course id exist, and student_id exist)
    // read student full name by student_id, and course id (if course id exist, and student_id exist)

}



