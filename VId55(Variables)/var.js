console.log("Hey this is tutorial on variavbles")

var a = 10;
var b = 20;
var c = "Abhi"
var _a = "Adeeb"
// var 55a = "Gaurav" this is not allowed coz variable names should not start with numbers

console.log(a+b+c+10)
console.log(typeof a, typeof b, typeof c)

// const a1 = 6;
// a1 = a1 + 6;  this is not allowed as const assigned values cannot be changed


//But instead of var in modern javascripts we use "let" for variable declarations. "Let" is a declaration which can be used inside a block and also can be used as a global variables

//If we use var outside a block or inside a block  and if we assign let for the same variable, the one with var is take that's why we have to use let

let d = 12;
var abhi = 2;
{
    let abhishek = 21;
    var abhi = 66;
    let d = 10;
    console.log("Value of d is "+d)
    console.log("Value of abhi inside a block: "+abhi)
    console.log("Value of abhishek inside a block is: "+abhishek)
}

console.log("Value of d outside a block is "+d)

console.log("Value of abhi outside a block is: "+abhi)

let x = 230;
let y = 120.234;
let z = "AbhishekRao"
const p = true
let q = undefined
let r = null

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Abhi", "Job code": "5400",
    "is_alive": true
}
console.log(o)
o.salary = "10lakh"
console.log(o)
console.log(typeof o)

console.log("This is a quiz")

let student = {
    name: "Abhi",
    phone: "9999999999",
    marks: "100"
}

console.log(student)
console.log(typeof student)