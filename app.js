var res = document.querySelector(".clicked")
var inptext = document.querySelector("#text")
var outputtext = document.querySelector(".optext")

// res.addEventListener("click", function ToDoevent() {
console.log(inptext.value)
// })
var url = "https://api.funtranslations.com/translate/minion.json"
function getURL(text) {
    // url for API +query selector + key + value passed
    return url + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
}

function newfun() {
    // console.log(inptext.value);
    var inputText = inptext.value;
    fetch(getURL(inputText))
        .then(response => response.json())
        .then(json => {
            var val = json.contents.translated;
            outputtext.innerText = val;
        }).catch(errorHandler)
}

res.addEventListener("click", newfun)