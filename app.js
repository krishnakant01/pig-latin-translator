var translate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructTranslationURL(inputText) {

    return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("error occured!");
}

function clickHandler() {

    var inputText = textInput.value;
    console.log(inputText);
    fetch(constructTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}

translate.addEventListener("click", clickHandler);