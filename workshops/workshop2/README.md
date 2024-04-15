# Workshop-02
   
In this workshop, you will create an automated thumbnail generator application, to meet the following specifications:
1. Create a descriptor `package.json` file and install `tsc` and `@types/node` as development dependencies. 
2. Create a `.gitignore` file, so you exclude the `node_modules` folder from being staged or tracked.
3. Create a folder `/input` and place a few high-resolution photos from [Pexels](https://www.pexels.com/).
4. Create an empty folder `/output`.
5. Declare a function:
```typescript
function generate_thumbnails(): void {
   console.log('Generating Thumbnails...');
   // your implementation here
}
```
6. When the application starts, use the [prompts](https://www.npmjs.com/package/prompts) package and ask the user to choose a number of seconds for how often they want to run a cron-job function *(display the following options to choose from: 5, 15, 20, 30, 40, 50)*
7. Register the `generate_thumbnails()` function to run as a cron-job on an interval based on the user selection.
   * Use [Node Cron](https://www.npmjs.com/package/node-cron) to schedule a cron job.
   * Example: A step value of `*/30 * * * * *` runs the script every 30 seconds.

8. The `generate_thumbnails()` function creates a new child process, and the child process will terminate when it finishes the thumbnail generation task.
9. Implement the following within the <ins>**child process**</ins>:
   * Use the [`readdir()`](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options) API, and read all the file names in both the `/input` and `/output` folders, and determine the difference between them (files that exist in `/input` but does not exist in `/output`). 
   * If an image exists in `/input` and does not exist in `/output`, use [Sharp](https://www.npmjs.com/package/sharp) to resize the source image to a thumbnail size of 200 width, and save the thumbnail image in the `/output` directory.
   * If new thumbnails were generated, the system will send you an email using one of the following services:
      * [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
      * [ElasticEmail](https://elasticemail.com/email-api)
      * [Brevo](https://www.brevo.com/)
      * [SMTP2Go](https://www.smtp2go.com/) 
```
From: Thumbnail Generator App
To: youremail@miu.edu
Subject: Status Report
Body: 
This is an automated email. 
The input folder has 33 thumbnails.
The output folder has 31 thumbnails.
Generated 2 new thumbnails. 
```
10. Environment variables hold secret keys and sensitive configuration data that we prefer to keep in a safe place. They are usually excluded from GitHub staging and the file that store them is added to the `.gitignore` file. Environment variables can be accessed from the `process.env` global object. Use the [dotenv](https://www.npmjs.com/package/dotenv) module to save any API keys, email subject, from , to as environment variables. 
11. Before Node process exits, we usually perform a clean up logic, terminating connections, logging to files, send a report to the server administrator.. etc. In this application, we want to fetch a random quote of Kanye West, using [Kanye Rest API](https://api.kanye.rest/), and display the quote before Node process exits. Use [axios](https://www.npmjs.com/package/axios) to perform the fetch request. The following code runs before the process exits:
```typescript
process.on('exit', (code: number) => {
    console.log('bye');
});
```
  

Remember to install the definitely typed (DT) package as a development dependency (with `-D`) if the package does not provide types.  
  
*Happy coding!*
