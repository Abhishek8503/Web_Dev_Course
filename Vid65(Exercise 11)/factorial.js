let a = 6;

function fact(num){
    let arr = Array.from(Array(num+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,)
    let d = c.reduce((a,b)=>a*b)
    return d
}
console.log("Using reduce method ",fact(a))

function facFor(number){
    let fac= 1
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log("Using for loops ",facFor(a))