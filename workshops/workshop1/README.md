# CS572-Workshop-01-TS
1. Clone this repository
2. Install the dependencies with `npm i`
3. Enjoy and good luck
   
## Exercise 01

Fix all the Type errors in the `./fixme` folder.

## Exercise 02

Complete the code for the `./exercise02/storage.ts` file, implement the methods
to get, add, update, and remove key-value pairs in the `state` immutable private
property. Some methods return a `boolean` to indicate whether the operation was
successfull or not. To test run the script with `npm run exercise2`
  
Tips: Use the `structuredClone()` method to deep-clone the `state` object. After modifying the cloned copy, convert it to an immutable object with `Object.freeze()`.

## Exercise 03 (optional - for practice purposes)

Implement CRUD operations for the data structures within `./exercise03`
folder. All functions return a boolean, except those who read the data.

- each class encapsulates the data as a private member and provide public
  methods to read and manipulate the data.
- perform the changes with mutation vs. in immutable way.
