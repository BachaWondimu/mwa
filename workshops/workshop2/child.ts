process.on('message', (message) => {
    if (process.send)
      process.send("Hello from child process, Completed the work!");
    process.exit(0);
})