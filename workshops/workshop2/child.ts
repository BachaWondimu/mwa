import { readdir } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";
import elasticMail from "elasticemail"

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
    if (diff) {
        var client = elasticMail.createClient({
            username: 'baacaauumaa@gmail.com',
            apiKey: 'FDC715315D100DBE02ED6BDAF6DA1CE0319D'
        });
 
        var msg = {
            from: 'baacaauumaa@gmail.com',
            from_name: 'Bacha Wondimu',
            to: 'bwondimu@miu.edu',
            subject: 'Hello',
            body_text: diff
        };
 
        client.mailer.send(msg, function (err, result) {
            if (err) {
                return console.error(err);
            }
        })

        if (process.send)
            process.send("Hello from child process, Completed the work!");
        process.exit(0);
    }
});
