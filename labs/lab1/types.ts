export type Faculty = {
    firstname: string;
    lastname: string;
}

export type Course = {
    title: String;
    code: String;
    faculties: Faculty[];
}

export interface Program{
    name: string;
    courses: Array<Course>;
}
