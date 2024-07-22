/*
Create a faulty calculator where it takes 2 numbers as inputs from user then

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the time

*/

let random = Math.random()
console.log(random)

let a = prompt("Enter the first number")
let c = prompt("Enter the operation")
let b = prompt("Enter the second number")


let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}