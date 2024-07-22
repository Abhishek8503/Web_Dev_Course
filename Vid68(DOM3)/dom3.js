console.log("Abhi")
// let box = document.getElementsByClassName("box")
// console.log(box)

// box[1].style.backgroundColor = "aqua"


// document.getElementById("aqua").style.backgroundColor = "aqua"


// document.querySelector(".box").style.backgroundColor = "Limegreen"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "Limegreen";
})

console.log(document.getElementsByTagName("div"))