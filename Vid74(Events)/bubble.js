document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child was clicked")
})
document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("ChildContainer was clicked")
})
document.querySelector(".container").addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("container was clicked")
})

function getRandom() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// let a = setInterval(() => {
//         document.querySelector(".container").style.backgroundColor = getRandom();
//         }, 1000);

let a = setTimeout(() => {
    document.querySelector(".container").style.backgroundColor = getRandom();
    }, 3000);

console.log(a)
