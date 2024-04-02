[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/XwiKe38Q)
# CS572-Homework-01-TS
## Exercise 01
Create a new TypeScript workspace, that has 3 files:
* `app.ts`
* `helpers.ts`
* `types.ts`
* remember to create a `.gitignore` file and exclude `node_modules` folder from being staged, committed, and pushed.
### `types.ts`
* create a type called `Faculty` which represents an object with `firstname`, and `lastname` properties, both accept a `string`.
* create a type called `Course` which represents an object with `title`, `code`, and `faculty`. The `title` and `code` accept a `string` value, and `faculty` accepts an array of `Faculty`.
* create a type called `Program` which represents an object with `name` and `courses` properties. The `name` property accepts a `string` value, and the `courses` property accepts an array of `Course`.
   
### `helpers.ts`
create a function `addFacultyToCourse` which accepts two parameters: `course` and `faculty`. The function returns boolean.
* return `true` if the faculty's `firstname` and `lastname` does not previously exists in the course, and was added successfully.
* return `false` if the faculty's `firstname` and `lastname` already exists in the course, do not accept adding the same faculty twice.

create a function `addCourseToProgram` which accepts two parameters: `program` and `course`. The function returns boolean.
* return `true` if the course `code` does not previously exists in the program, and was added successfully.
* return `false` if the course `code` already exists in the program, do not accept adding the same course twice.
   
### `app.ts`
Test if you have the correct implementation by using the following code snippet
```typescript
import { addCourseToProgram, addFacultyToCourse } from "./helpers";
import { Course, Faculty, Program } from "./types";

const mscs: Program = { name: 'Masters in Computer Science', courses: [] };
const asaad: Faculty = { firstname: "Asaad", lastname: "Saad" };
const keith: Faculty = { firstname: "Keith", lastname: "Levi" };
const mwa: Course = { title: "MWA", code: "CS572", faculty: [] };

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
```
## Exercise 02
Create a function `combineTwoItems` inside the `helpers.ts` file, which accepts two parameters of a certain type, and returns an array of that type containing the two parameters.
You may test your code by adding the following code snippet to your `app.ts` file
```typescript
const theo: string[] = combineTwoItems("Theo", "Saad"); //  [ "Theo", "Saad" ]
const grades: number[] = combineTwoItems(100, 95);  //  [ 100, 95 ]
```

