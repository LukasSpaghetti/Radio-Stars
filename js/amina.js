// MANIPULATION DU DOM
// SECTION PNL
const sectionPnl = document.querySelector(".pnl");
const h4Pnl = sectionPnl.querySelector("h4");
const pPnl = sectionPnl.querySelectorAll("p");

sectionPnl.addEventListener("mouseover", function () {
    sectionPnl.style.backgroundColor = "#001952";
    h4Pnl.style.backgroundColor = "#FFF4DE";     
    h4Pnl.style.color = "#001952";
    pPnl.forEach(p => p.style.color = "#FFF4DE");
});
sectionPnl.addEventListener("mouseout", function () {
    sectionPnl.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    h4Pnl.style.backgroundColor = "#fff";     
    h4Pnl.style.color = "#001952";
    pPnl.forEach(p => p.style.color = "#001952");
});

// SECTION BILLIE
const sectionBillie = document.querySelector(".billie");
const h4Billie = sectionBillie.querySelector("h4");

sectionBillie.addEventListener("mouseover", function () {
    sectionBillie.style.backgroundColor = "#FFF4DE";
    h4Billie.style.backgroundColor = "#001952";
    h4Billie.style.color = "#FFF4DE";
});
sectionBillie.addEventListener("mouseout", function () {
    sectionBillie.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    h4Billie.style.backgroundColor = "#fff";
    h4Billie.style.color = "#001952";
});

// SECTION PLK
const sectionPlk = document.querySelector(".plk");
const h4Plk = sectionPlk.querySelector("h4");
const pPlk = sectionPlk.querySelectorAll("p");

sectionPlk.addEventListener("mouseover", function () {
    sectionPlk.style.backgroundColor = "#001952";
    h4Plk.style.backgroundColor = "#FFF4DE";
    h4Plk.style.color = "#001952";
    pPlk.forEach(p => p.style.color = "#FFF4DE");
});
sectionPlk.addEventListener("mouseout", function () {
    sectionPlk.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    h4Plk.style.backgroundColor = "#fff";
    h4Plk.style.color = "#001952";
    pPlk.forEach(p => p.style.color = "#001952");
});

// SECTION NEIGHBOURHOOD
const sectionNeighbourhood = document.querySelector(".neighbourhood");
const h4Neighbourhood = sectionNeighbourhood.querySelector("h4");

sectionNeighbourhood.addEventListener("mouseover", function () {
    sectionNeighbourhood.style.backgroundColor = "#FFF4DE";
    h4Neighbourhood.style.backgroundColor = "#001952";
    h4Neighbourhood.style.color = "#FFF4DE";
});
sectionNeighbourhood.addEventListener("mouseout", function () {
    sectionNeighbourhood.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    h4Neighbourhood.style.backgroundColor = "#fff";
    h4Neighbourhood.style.color = "#001952";
});

// FONCTION LOGIQUE
const coeur = document.getElementById("coeur");
const likeText = document.getElementById("like-text");
let compteur = 99;

coeur.addEventListener("click", function() {
    compteur++;
    likeText.textContent = compteur + " personnes ont aimé cette page !";
    if (compteur === 100) {
        alert("🎉 Félicitations ! Vous êtes la centième personne à liker cette page");
    }
});

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
