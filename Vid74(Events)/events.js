let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    // alert("I am clicked")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy the new content  "
})

btn.addEventListener("contextmenu", ()=>{
    alert("Only left click on the button")
})
 
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})