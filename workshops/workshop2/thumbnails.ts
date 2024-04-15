import { fork } from "child_process";

export default function generate_thumbnails(): void {
  console.log("Generating Thumbnails...");
    // your implementation here
    
    const child_process = fork('./child.ts');
    child_process.send({ message: "Hello from child process" });
    child_process.on('message', (message) => console.log(message));

}
