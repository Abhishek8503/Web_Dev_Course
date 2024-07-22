let arr =[1,2,3,4,5,6,7]
//Arrays are mutable

console.log(arr)
console.log(arr.length)

// arr[0] = 5666
// console.log(arr, typeof(arr))
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

console.log(arr.toString())
console.log(arr.join(" to "))
console.log("arr.pop() removes the last element", arr.pop(), arr)

console.log("arr.push() is used to push an item in the last element: ", arr.push("Abhi"), arr)
console.log("There are other array operation, I can check in the written notes I downloaded")


console.log("There were loop operations for arrays too. I can check that in notes too")

let a = [1,5,9,11,15]
// let newArr = []

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newArr.push(element**2)
// }
// console.log(a)
// console.log(newArr)

let newArr = a.map((e, ind, array)=>{
    return e**2
})
console.log(newArr)

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(index, element)
}
console.log(newArr)

let greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(a.filter(greaterThanSeven))
console.log(newArr.filter(greaterThanSeven))



let arr2 = [1,2,3,4,5,6]


const red = (a,b)=>{
    return a*b
}
console.log(arr2)
console.log(arr2.reduce(red),"This is reduce function")