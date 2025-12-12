/////////////////// Menu Burger
const toggle = document.getElementById("toggle");
const navigation = document.getElementById("topNav");

document.onclick = function(element) {
    if(element.target.id !== "toggle" && element.target.id !== "navigation"){
        toggle.classList.remove("active");
        navigation.classList.remove("active");
    }
}

toggle.onclick = function(){
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

////////////////////////////////// Quiz

let quiz = document.querySelector(".quiz")

let questions = document.querySelectorAll(".question")

let trueAnswer = document.querySelector(".vrai")

const makeTextGreen = document.querySelector("label")




