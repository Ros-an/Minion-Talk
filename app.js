var btnTranslate = document.querySelector("#translate-btn");
var textInput = document.querySelector("#translate-ip");
var translatedOutput = document.querySelector("#translate-op");
  
// url for minions api

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

//translated url which will be the final URL

function translatedUrl(input) {
    return serverUrl+ "?" + "text=" +input;
}

function errorHandler () {
    alert("Some error found in server! try again later");
}

function clickHandler() {
    console.log("button clicked");
    
    var inputText = textInput.value; // taking input

    var finalUrl = translatedUrl(inputText);//getting translated url

    //calling server for processing

    fetch(finalUrl).then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        translatedOutput.innerText = translatedText;
    }).catch(errorHandler);

}

//action when button clicked
btnTranslate.addEventListener("click", clickHandler);
