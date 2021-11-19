const elementButton = document.getElementById("button");

const elementLightP = document.getElementById("light");
const elementMediumP = document.getElementById("medium");
const elementDarkP = document.getElementById("dark");

const elementRadioSwitch = document.getElementById("checkbox");

const elementRGB = document.getElementById("rgb");
const elementHEX = document.getElementById("hex");

// Starting values
let colorStatus = "rgb"; // Starting the site with rgb colors
let CSSColors = funcColorPalette(20, 3);
funcReloadColors(); // Starting the site with random colors

elementButton.addEventListener("click", funcReloadColors); // Generate! button reloads color theme

elementLightP.addEventListener("click", funcCopyToClipboard); // Copy to clipboard dialog box on click
elementMediumP.addEventListener("click", funcCopyToClipboard);
elementDarkP.addEventListener("click", funcCopyToClipboard);

elementRadioSwitch.addEventListener("click", funcSwitchColorStatus); // Toogle between rgb and hex on click

elementHEX.addEventListener("click",
    function(){
        if (colorStatus == "hex"){
            return;
        } else {
            funcSwitchColorStatus();
        }      
    }
)

elementRGB.addEventListener("click",
    function(){
        if (colorStatus == "rgb"){
            return;
        } else {
            funcSwitchColorStatus();
        }
    }
)


function funcSwitchColorStatus(){
    let switchSelector = funcGetSelectorFromCSS("#circle");

    if (colorStatus == "rgb") {
        switchSelector.style.setProperty("left", "22px");
        colorStatus = "hex";
    } else {
        switchSelector.style.setProperty("left", "3px");
        colorStatus = "rgb";
    }
    
    function funcGetCSSColorsInHEX(arr_pos){
        return (
            Number(CSSColors[arr_pos][0]).toString(16).toUpperCase()+
            Number(CSSColors[arr_pos][1]).toString(16).toUpperCase()+
            Number(CSSColors[arr_pos][2]).toString(16).toUpperCase()
        )
    }
    
    if (colorStatus == "rgb"){
        elementLightP.innerHTML = `Light<br>rgb(${CSSColors[0]})`;
        elementMediumP.innerHTML = `Medium<br> rgb(${CSSColors[1]})`;
        elementDarkP.innerHTML = `Dark<br> rgb(${CSSColors[2]})`;
    } else {
        elementLightP.innerHTML = `Light<br>#${funcGetCSSColorsInHEX(0)}`;
        elementMediumP.innerHTML = `Medium<br>#${funcGetCSSColorsInHEX(1)}`;
        elementDarkP.innerHTML = `Dark<br>#${funcGetCSSColorsInHEX(2)}`;
    }
}

function funcReloadColors(){
    let CSSColors = funcColorPalette(20, 3);
    
    let selector = funcGetSelectorFromCSS("html");

    function funcGetCSSColorsInHEX(arr_pos){
        return (
            Number(CSSColors[arr_pos][0]).toString(16).toUpperCase()+
            Number(CSSColors[arr_pos][1]).toString(16).toUpperCase()+
            Number(CSSColors[arr_pos][2]).toString(16).toUpperCase()
        )
    }
    
    selector.style.setProperty("--colorBackground", `rgb(${CSSColors[0]})`);
    selector.style.setProperty("--colorLightBackground", `rgb(${CSSColors[1]})`);
    selector.style.setProperty("--colorHover", `rgb(${CSSColors[2]})`);
    
    if (colorStatus == "rgb"){
        elementLightP.innerHTML = `Light<br>rgb(${CSSColors[0]})`;
        elementMediumP.innerHTML = `Medium<br> rgb(${CSSColors[1]})`;
        elementDarkP.innerHTML = `Dark<br> rgb(${CSSColors[2]})`;
    } else {
        elementLightP.innerHTML = `Light<br>#${funcGetCSSColorsInHEX(0)}`;
        elementMediumP.innerHTML = `Medium<br>#${funcGetCSSColorsInHEX(1)}`;
        elementDarkP.innerHTML = `Dark<br>#${funcGetCSSColorsInHEX(2)}`;
    }
}



function funcCopyToClipboard(){
    window.prompt(
        "To copy to clipboard press Ctrl+C", 
        this.innerHTML.slice(this.innerHTML.indexOf(">")+1)
    );
}

function funcChangeInnertext(elementID, innerText){
    document.getElementById(elementID).innerHTML = innerText;    
}

function funcColorPalette(difference, quantity){ 
    /*  Returns an array of different colors stored as an array of rgb values ranging form 100 to 255 (to prevent dark colors)
        [[R1,G1,B1],[R2,G2,B2],...]
        difference (Integer): R2-R1
        quantity (Integer): # of subarrays */
    
    let baseColor = funcGenerateRandomRGBArray(100, 255); // Generate new random color with rgb values form 100 to 255
    colors = new Array(); 
    colors.push(baseColor); 

    for (i = 1; i < quantity; i++){
        colors.push([colors[0][0],colors[0][1],colors[0][2]]); // 
        for (j = 0; j < 3; j++){ 
            colors[i][j] -= difference*i;
        }
    }

    return colors;
}

function funcGenerateRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function funcGenerateRandomRGBArray(min, max){
    colorArray = new Array();
    for (i=0; i < 3; i++){
        colorArray.push(funcGenerateRandomNumber(min, max));
    }
    return colorArray;
}

function funcGetSelectorFromCSS(selectorName){
    const stylesheet = document.styleSheets[0];
    let selector;
    for (let i = 0; i < stylesheet.cssRules.length; i++){
        if(stylesheet.cssRules[i].selectorText == selectorName){
            selector = stylesheet.cssRules[i];
        }
    }
    return selector;
}


