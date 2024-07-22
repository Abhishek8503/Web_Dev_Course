// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 1000);
//     })
// }

async function getData(){
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await (await x).json()
    console.log(data)
}


async function main(){
console.log("Loading Modules")

console.log("Do something else")

console.log("Load Data")
let data = await getData()

console.log(data)
    
console.log("Process Data")
    
console.log("Task 2")
}

main()


// data.then((v)=>{

//     console.log(data)
    
//     console.log("Process Data")
    
//     console.log("Task 2")
// })


