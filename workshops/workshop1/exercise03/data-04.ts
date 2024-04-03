type Student = { student_id: string, firstname: string; lastname: string; };
type Group = { [id: string]: Student[]; }; // Record<string, Student[]>

export class Data4 {
    // data structure 4
    #data: Group = {};

    // for a given group:
    // add student (if group id exist, and student_id does not exist)
    // update student full name (if group id exist, and student_id exist)
    // delete student (if group id exist, and student_id exist)
    // read student full name by student_id, and group id (if group id exist, and student_id exist)

}