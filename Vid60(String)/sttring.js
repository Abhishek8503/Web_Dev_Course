console.log("This is a tutorial about strings")

let a = "Abhi";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
// console.log(a[4]) this shows undefined

console.log("Number of characters in a is: ",a.length)

let real_name = "Abhi";
let friend = "Adeeb"

console.log("His name is "+real_name+" and his friend's name is "+friend)
console.log(`His name is ${real_name} and his friend's name is ${friend}`) //This is called template literals where we use $ and ` and with this we can use double quotes inside a string

let b = "Abhishek"
console.log(b.length)
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1,4))
console.log(b.slice(1))
console.log(b.replace("Abhi", "aBhi"))
console.log(b.concat(a,"Rahul", "Adeeb", "Gaurav", "Hitesh"))

//String are immutable ie their initial values cannot be changed