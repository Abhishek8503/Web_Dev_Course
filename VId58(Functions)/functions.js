console.log("I am a function")

function nice(name) {  
    console.log("Hey " +name+ " you are nice")    
    console.log("Hey " +name+ " you exist")    
    console.log("Hey " +name+ " you need to build a PC")    
}

nice("Abhi")


function sum(a,b) {
    // console.log(a**b)
    // result = sum(2,3)
    // console.log(a+"to the power of "+b+" is: "+result)
    return a**b    
}
result = sum(2,3)
console.log("a to the power of b is: "+result)


const func1 = (x) =>{
    console.log("I am an arrow function: ",x)
}

func1(69)
func1(420)