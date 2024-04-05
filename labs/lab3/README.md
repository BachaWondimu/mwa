# Exercise 01
Create a file `data.json` which contains the following JSON structure:
```json
[{"id": "1", "name": "Asaad Saad"}, {"id": "2", "name": "Theo Saad"}]
```
* Create a class `Names`, once instantiated (in the constructor) it reads the JSON file synchronously, and assigns its content to a private property `data`, and then it emits an event `notification` with the value `Data loaded from file successfully`.
* Create a method `persist()` to write the data within the private property `data` back into the `data.json` file, and emit an event `notification` with the value `Data persisted back to file successfully`.  
* Create a method `addName(id: string, name: string): void {}` to add an object to `data`, then persist the changes to the hard drive in `data.json`.
* Create a method `getNames(): Name[] {}` to return all names from `data`.  
* Create a method `getNameById(id: string): string {}` to return the name of the given `id`. 
* Create a method `deleteNameById(id: string): void {}` to remove the name object of the given `id` from `data`, then persist the changes to the hard drive in `data.json`.
  
Test your code: 
* create an instance of `Names` class.
* listen to `notification` event, and print the message you receive.
* call all the methods and test.
  
# Exercise 02
Create an **asynchronous** function `checkSystem()` that returns a promise and checks if the OS memory size is at least 8 GB and the processor has at least 4 cores (use `node:os` core module, which has the following methods: `cpus()` and `totalmem()`).  

* If the system doesn't have enough memory, reject with a message: `You need at least 4 GB of RAM`
* If the system doesn't have at least 4 cores, reject with this message: `Processor must have at least 4 cores`
* otherwise, resolve with the following message `System is checked successfully.`  
  
Note: 1 KB is 1024 bytes, 1 MB is 1024 KB, 1 GB is 1024 MB.

