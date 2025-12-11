const artistWhiteBGs = document.querySelectorAll(".artistWhiteBG");


for (const artistWhiteBG of artistWhiteBGs){
    artistWhiteBG.addEventListener("mouseover", () => {
        artistWhiteBG.style.backgroundColor = "#00B0B6";
        artistWhiteBG.style.color = "#fff";
        artistWhiteBG.querySelector("h3").style.color = "#fff";
        artistWhiteBG.querySelector("p").style.color = "#fff"
    })
    artistWhiteBG.addEventListener("mouseout", () => {
        artistWhiteBG.style.backgroundColor = "#fff";
        artistWhiteBG.style.color = "#000";
        artistWhiteBG.querySelector("h3").style.color = "#00B0B6";
        artistWhiteBG.querySelector("p").style.color = "#000"
    }
)}

const artistTealBGs = document.querySelectorAll(".artistTealBG");

for (const artistTealBG of artistTealBGs){
    artistTealBG.addEventListener("mouseover", () => {
        artistTealBG.style.backgroundColor = "#fff";
        artistTealBG.style.color = "#ff0000ff";
        artistTealBG.querySelector("h3").style.color = "#00B0B6";
        artistTealBG.querySelector("p").style.color = "#000"
    })
    artistTealBG.addEventListener("mouseout", () => {
        artistTealBG.style.backgroundColor = "#00B0B6";
        artistTealBG.style.color = "#ff0000ff";
        artistTealBG.querySelector("h3").style.color = "#fff";
        artistTealBG.querySelector("p").style.color = "#fff"
    }
)}

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

let form = document.querySelector(".didYouKnow")

let answerResponse = document.querySelector("#answerResponse")

let response = document.querySelector('input');


let getResponse = () => {
    let yesOrNo = form.answer.value;
    console.log(yesOrNo)
    if (yesOrNo === "oui"){
        console.log(yesOrNo)
        answerResponse.textContent = "Je suis honnêtement un peu surpris !"
    } else if (yesOrNo === "non"){
        answerResponse.textContent = "Un peu déçu mais pas si surprenant"
        console.log(yesOrNo)
        console.log("nan")
    } else{
        answerResponse.textContent = ""
        console.log("zglourb")
    }
}

response.addEventListener('change', getResponse);