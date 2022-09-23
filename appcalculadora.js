//getting elements//

const numbers = Array.from(document.getElementsByClassName("number"));
const equals = document.getElementById("equals");
const clear_all = document.getElementById("clear_all");
const clear = document.getElementById("clear");
const dot = document.getElementById("dot");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
let previous = document.getElementById("prev_result");
let result = document.getElementById("result");

//verification functions, isNumber and isMultiply verifies if the last input was a number or a multiplication symbol, and HasDot doesn't let you put more than one dot in a number//

function hasDot(){
    let dotver = previous.textContent.replaceAll('*', '$').replaceAll('-', '$').replaceAll('+', '$').replaceAll('/', '$').split('$');
    let numberIncludesDot = dotver[dotver.length - 1].includes(".");
    return numberIncludesDot;
}

function isNumber(){
    if (previous.textContent.slice(-1) == "/" || previous.textContent.slice(-1) == "+" || previous.textContent.slice(-1) == "-" || previous.textContent == ""){
        return false;
    } else{
        return true;
    }
}
function isMultiply(){
    if (previous.textContent.slice(-1) == "*"){
        return true;
    }
}
//numbers input//

numbers.map( button => {
    button.addEventListener("click", function(number){
        previous.textContent += number.target.innerText;
    })
})

dot.addEventListener("click", function(){
    if (hasDot() == false){
        previous.textContent += ".";
    } else if (hasDot() == true){
        previous.textContent += "";
    }
})

//clear input//

clear_all.addEventListener("click", function(){
    result.textContent = "";
    previous.textContent = "";
})

clear.addEventListener("click", function(){
    previous.textContent = previous.textContent.substring(0, previous.textContent.length -1);
})

//operations//

division.addEventListener("click", function(){
    if (isNumber() === false){
        previous.textContent += ""    
    } else if (isMultiply() === true){
        previous.textContent += "";
    } else {
        previous.textContent += "/";
    }
})

add.addEventListener("click", function(){
    if (isNumber() === false){
        previous.textContent += ""    
    } else if (isMultiply() === true){
        previous.textContent += "";
    } else {
    previous.textContent += "+";
    }
})

minus.addEventListener("click", function(){
    if (isNumber() === false){
        previous.textContent += "";
    } else if (isMultiply() === true){
        previous.textContent += "-";  
    }else {
    previous.textContent += "-";
    }
})

multiplication.addEventListener("click", function(){
    if (isNumber() === false){
        previous.textContent += "";
    } else if (isMultiply() === true){
        previous.textContent += "";
    } else {
    previous.textContent += "*";
    }
})

//equal//

equals.addEventListener("click", function(){
    result.textContent = eval(previous.textContent);
})