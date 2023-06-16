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





//  *********************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "MohdSultandotcom"

let anothername = myYoutubename
anothername = "codewithsultan"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Sultan@google.com"

console.log(userOne.email);
console.log(userTwo.email);