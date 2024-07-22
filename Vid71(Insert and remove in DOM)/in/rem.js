// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>by Abhi</b>"
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "<b>This is abhi after the end</b>")