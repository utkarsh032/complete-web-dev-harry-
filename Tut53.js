console.log("This is Tutorial 53");


function greet(name, greetText = "Greetings from JavaScript") {
    let name1 = "Name";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b , c){
    let d = a + b + c;
    return d;
    // This line will never execute(unreachable code)
    // console.log("Function is returned")
}
let name1 = "Utkarsh";
let name2 = "Nishu";
let name3 = "Shivam";
let name4 = "Shekhar";
let greetText = "Good Morning";
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
// let returnval = greet(name4)
// console.log(returnval)

let returnval = sum(1, 2, 3);
console.log(returnval)
// greet(name4, greetText);

// console.log(name1 + " is a good Boy")
// console.log(name2 + " is a good Boy")
// console.log(name3 + " is a good Boy")
// console.log(name4 + " is a good Boy")