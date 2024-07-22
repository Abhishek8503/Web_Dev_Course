let a = prompt("Enter the first number")

let b = prompt("Enter the second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

function main(){
    let x = 1   
    // console.log("The sum is: ",sum*x)
    try {
        console.log("The sum is: ",sum*x)
        return true
        
    } catch (error) {
        console.log("Error has occured")
        return false
    }
    finally{

        console.log("FIles are being closed")
    }
}

main()