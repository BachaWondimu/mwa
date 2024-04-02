
import { Program, Course, Faculty } from './types.ts'

export function addFacultyToCourse(course: Course, faculty: Faculty): boolean {
    if (!course.faculties.includes(faculty)) {
        course.faculties.push(faculty)
        return true;
    }

    else
        return false;
}

export function addCourseToProgram(program: Program, course: Course): boolean {
    if (!program.courses.some(c => c.code === course.code)) {
        program.courses.push(course)
        return true;
    }

    else
        return false;
}

export function combineTwoItems<T>(item1: T, item2: T): T[] {
    return [item1, item2];
}


