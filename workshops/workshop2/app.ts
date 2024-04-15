import prompts from "prompts";
import cron from "node-cron";
import generate_thumbnails from "./thumbnails";

async function app() {
  const { interval } = await prompts([
    {
      type: "select",
      name: "interval",
      message: "Pick an interval",
      choices: [
        { title: "2 seconds", value: 2 },
        { title: "15 seconds", value: 15 },
        { title: "30 seconds", value: 30 },
      ],
    },
  ]);
  cron.schedule(`*/${interval} * * * * *`, () => {
    //   console.log("running every minute 1, 2, 4 and 5");
      generate_thumbnails();
  });
}
app();
