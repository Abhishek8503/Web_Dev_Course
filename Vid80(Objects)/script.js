// let obj = {
//     a: 1,
//     b: "ABhi"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jump: true
// };
// rabbit.__proto__ = animal;


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("I am eating")
    }
    jumps(){
        console.log("I am jumping")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created... and he is a Lion")        
    }
    roars(){
        console.log("I am roaring")
    }
    eats(){
        super.eats()
        console.log("I am eating and I am a lion")
    }
}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Sher")
console.log(l)