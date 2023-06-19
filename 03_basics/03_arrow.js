const user = {
    username: "sultan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "sultan"
//     console.log(this.username);
// }

// coffee()

// const coffee = function () {
//     let username = "sultan"
//     console.log(this.username);
// }

const coffee =  () => {
    let username = "sultan"
    console.log(this);
}


coffee()

() addTwo = (num1, num2) =>  return num1 + num2


console.log(addTwo(3, 4))