var res = document.querySelector(".clicked")
var inptext = document.querySelector("#text")
var outputtext = document.querySelector(".optext")

// res.addEventListener("click", function ToDoevent() {
//     console.log("clicked!!!")
// })

function newfun() {
    // console.log(inptext.value);
    outputtext.innerHTML = "new lang " + inptext.value
}

res.addEventListener("click", newfun)