// singleton

//object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Sultan",
    "full name": "Mohd Sultan",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "Sultan@google.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "Sultan@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Sultan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());

