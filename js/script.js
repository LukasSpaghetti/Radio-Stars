const phover = document.querySelectorAll('.border');

phover.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        elem.classList.add("border");
    });

    elem.addEventListener("mouseout", () => {
        elem.classList.remove("border");
    });
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