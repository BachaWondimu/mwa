// Object (pending => resolved, rejected)


const p = new Promise((resolve, reject) => {
    console.log(`promise here 1`);
    resolve('hello'); // return a value == async
    // reject(`something went wrong`); // throw an error == async
    console.log(`promise here 2`);
});
console.log(`start`);
p.then(console.log) // async
    .catch(console.log); // async
console.log(`end`);

// async 
// does NOT make it asyncronous 
// does make the returned value asyncronous

async function foo() {
    console.log(`foo is working`);
    return `foo result`; // wrapped by promise
}
console.log(`start`);
foo().then((console.log));
console.log(`end`);

// await
// syntactic surgar for .then()
// everything you see after await, runs asyncronously
