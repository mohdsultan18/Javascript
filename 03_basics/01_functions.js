function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("L");
    console.log("T");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }



function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sultan"));
console.log(loginUserMessage("sultan"));