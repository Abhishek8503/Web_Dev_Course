console.log("Abhi is here")
console.log("Adeeb is here")

setTimeout(() => {
    console.log("I am inside a settimeout function")
}, 2000);

setTimeout(() => {
    console.log("I am inside a settimeout2 function")
}, 2000);

console.log("The end")

const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Abhi", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)