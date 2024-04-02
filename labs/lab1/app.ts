import { addCourseToProgram, addFacultyToCourse, combineTwoItems } from "./helpers";
import { Course, Faculty, Program } from "./types";


const mscs: Program = { name: 'Masters in Computer Science', courses: [] };
const asaad: Faculty = { firstname: "Asaad", lastname: "Saad" };
const keith: Faculty = { firstname: "Keith", lastname: "Levi" };
const mwa: Course = { title: "MWA", code: "CS572", faculties: [] };

addFacultyToCourse(mwa, asaad);
addFacultyToCourse(mwa, keith);
addCourseToProgram(mscs, mwa);

console.dir(mscs, { depth: null });
// Expected output is:
// {
//     courses: [
//       {
//         title: 'MWA',
//         code: "CS572",
//         faculty: [
//           { firstname: 'Asaad', lastname: 'Saad' },
//           { firstname: 'Keith', lastname: 'Levi' }
//         ]
//       }
//     ]
//   }

const theo: string[] = combineTwoItems("Theo", "Saad"); //  [ "Theo", "Saad" ]
const grades: number[] = combineTwoItems(100, 95);  //  [ 100, 95 ]

console.log(theo);
console.log(grades);