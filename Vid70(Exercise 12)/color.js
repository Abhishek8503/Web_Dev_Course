// let a = document.getElementById("#box1")
// let b = document.getElementById("#box2")
// let c = document.getElementById("#box3")
// let d = document.getElementById("#box4")
// let e = document.getElementById("#box5")


// a.style.backgroundColor = "aqua"
// b.style.backgroundColor = "limegreen"
// c.style.backgroundColor = "red"
// d.style.backgroundColor = "pink"
// e.style.backgroundColor = "yellow"

let boxes = document.querySelector(".container").children

function getRandom(){
    let val1 = Math.ceil(0 + Math.random()* 255); 
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandom()
    e.style.color = getRandom()
})