// # Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol and BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567899n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["hulk", "Iron-man", "thor"]
let myObj = {
    name: "Sultan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);