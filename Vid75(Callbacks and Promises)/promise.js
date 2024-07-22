// alert('Abhi');
console.log('This is abhi');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.5){
        console.log(a)
        reject("Number is less than 0.5 so I will reject Yes I am Done and Abhi")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Abhi")
        }, 2000);
    }
})
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.5){
        console.log(a)
        reject("Number is less than 0.5 so I will reject Yes I am Done and Abhi - 2")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done - 2")
            resolve("Abhi - 2")
        }, 1000);
    }
})

let p3 = Promise.allSettled([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })