/* Create a business name generator by using a list of adjectivesand shop name and another word 

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros 
Limited 
Hub

*/

// function adjective(){
//     let a = "Crazy"
//     let b = "Amazing"
//     let c = "Fire"

//     let d = Math.floor(Math.random()*3)

//     if(d==0){
//         return a
//     }
//     else if(d==1){
//         return b
//     }
//     else{
//         return c
//     }
// }
// function shop_name(){
//     let a = "Engine"
//     let b = "Foods"
//     let c = "Garments"

//     let d = Math.floor(Math.random()*3)

//     if(d==0){
//         return a
//     }
//     else if(d==1){
//         return b
//     }
//     else{
//         return c
//     }
// }
// function third_word(){
//     let a = "Bros"
//     let b = "Limited"
//     let c = "Hub"

//     let d = Math.floor(Math.random()*3)

//     if(d==0){
//         return a
//     }
//     else if(d==1){
//         return b
//     }
//     else{
//         return c
//     }
// }

// console.log("Business Names\n ", adjective(), shop_name(), third_word())

let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}


let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}


let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hubs"
}

let ran1 = Math.floor(Math.random()*3)+1
let ran2 = Math.floor(Math.random()*3)+1
let ran3 = Math.floor(Math.random()*3)+1

console.log(obj1[ran1]+ " "+obj2[ran2]+" "+obj3[ran3])