import { readdir } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";
const elasticMail = require("elasticemail");

process.on("message", async (message) => {
  console.log(message);

  const input = await readdir("./input");
  const output = await readdir("./output");
  const diff = input.filter((file) => !output.includes(file));
  diff.forEach(async (file_name) => {
    await sharp(`./input/${file_name}`)
      .resize(200)
      .toFile(`./output/${file_name}`);
  });
  if (diff.length) {
    var client = elasticMail.createClient(process.env.API_KEY);
    const msg = {
      from: "bachanegese21@gmail.com",
      from_name: "Bacha Wondimu",
      to: "bachanegese21@gmail.com",
      subject: "Hello",
      body_text: "Hello recieve this",
    };
    console.log("Message being sent: ", diff.length);

    client.mailer.send(msg, (err, result) => {
      if (err) {
        console.error("Error sending email:", err);
      } else {
        console.log("Email sent successfully. Result:", result);
      }
    });

    if (process.send)
      process.send("Hello from child process, Completed the work!");
    process.exit(0);
  }
});
