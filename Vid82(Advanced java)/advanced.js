async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a,b,c){
    return a+b+c
}

(async function main(){
    //This is IIFE function 
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    //This is destructuring
    let [x,y, ...rest] = [1,2,3,4,5,6,7,8,9,10]
    console.log(x,y,rest)

    let arr = [1,4,6]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))

})()