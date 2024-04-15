import prompts from "prompts";

function generate_thumbnails(): void {
  console.log("Generating Thumbnails...");
  // your implementation here
}

prompts([
  {
    type: "select",
    name: "interval",
    message: "Pick an interval",
    choices: [
      { title: "5 seconds", value: 5 },
      { title: "15 seconds", value: 15 },
      { title: "30 seconds", value:30},
    ],
  },
]).then((interval)=>console.log(interval));
