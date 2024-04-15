import { readdir } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

process.on("message", async (message) => {
  console.log(message);

  const input = await readdir("./input");
  const output = await readdir("./output");
  const diff = input.filter((file) => !output.includes(file));
  diff.forEach(async (file_name) => {
    await sharp(`./input/{file_name}`)
      .resize(200)
      .toFile("output.webp", (err, info) => {});
  });
  console.log(diff);

  if (process.send)
    process.send("Hello from child process, Completed the work!");
  process.exit(0);
});
