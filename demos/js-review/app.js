//alert("hello")

/*
variables are declared with the var/let/const keyword (case sensitive)
• types are not specified, but JS does have types ("loosely typed")
• Number, Boolean, String, Null, Undefined, Symbol, Object
• can find out a variable's type by calling typeof
*/

console.log(!!65)
//undefined is different from null and reference error
//var will get hoisted to the top of the function they are in

//objects in js
//1. point objects -  do not belong to any class ==>are singleton

const person = {
    name: 'Bacha',
    age: 30,
    studyAt: 'MIU',
    'home address': "Jimma"
}

console.log(person['home address'])

let arr = [];
arr[4] = 'Home'
console.log(arr.length, arr[0])
arr[1]=3
console.log(arr[1])
console.log(arr)
arr.push("Bob")
arr.unshift("Hurry")
arr.sort()
console.log("********************\n")
const slice1 = arr.slice(1, 4) 
console.log(arr.slice(0,5))
console.log(slice1.reverse())
console.log(arr)

console.log("******************************************")
console.log("Functions declarations are hoisted")
console.log(foo('Bacha'))
function foo(something) {
    return "Hi " + [something]
}

const functionExpression = function fac() {
    function factorial() {
        console.log("in factorial")
    }
    console.log('inside fac')
}
functionExpression()


const x = window.onload = console.log("Humburger")
console.log(x)

print('a',b,{name:'tola'}, 'cow','oop')
function print(a, b, c, d, ...extra) {
    console.log(print.arguments[0])
    console.log(print.arguments.length)
}

var b = 'b'

console.log(ret())
function ret() {
    return "function value is also hoisted"
}
