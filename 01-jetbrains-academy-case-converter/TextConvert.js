function ConvertToUpper() {
    let text = document.getElementById("text-area").value;
    text = text.toUpperCase();
    document.getElementById("text-area").value = text;
}

function ConvertToLower() {
    let text = document.getElementById("text-area").value;
    text = text.toLowerCase();
    document.getElementById("text-area").value = text;
}

function ConvertToProper() {
    let text = document.getElementById("text-area").value;
    text = text.split(" ");
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].slice(0,1).toUpperCase() + text[i].slice(1).toLowerCase();
    }
    text = text.join(" ");
    document.getElementById("text-area").value = text;
}

function ConvertToSentence() {
    let text = document.getElementById("text-area").value;
    text = text.split(". ");
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].slice(0,1).toUpperCase() + text[i].slice(1).toLowerCase();
    }
    text = text.join(". ");
    document.getElementById("text-area").value = text;
}

function Download() {
    let filename = "text";
    let text = document.getElementById("text-area").value;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

document.getElementById("button-uppercase").addEventListener("click", ConvertToUpper);
document.getElementById("button-lowercase").addEventListener("click", ConvertToLower);
document.getElementById("button-propercase").addEventListener("click", ConvertToProper);
document.getElementById("button-sentencecase").addEventListener("click", ConvertToSentence);
document.getElementById("button-save").addEventListener("click", Download);