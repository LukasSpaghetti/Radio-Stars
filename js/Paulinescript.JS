const input = document.querySelector('.bForm');
const noteR = document.querySelector('#noteRB');

input.addEventListener("input", () => {
    if(input.value === "0"){
        noteR.textContent = "Tu n'aimes pas du tout Blackpink ? 💔​​​​​";
    }else if(input.value === "1") {
        noteR.textContent = "Pas terrible comme note...​​​​​😰​";
    } else if (input.value === "2"){
        noteR.textContent = "Tu vas attirer la ​​​⚡​ des Blink.";
    }else if (input.value === "3"){
        noteR.textContent = "Tu ne rentreras jamais dans le fandom Blink.​​​​​😥​";
    }else if (input.value === "4"){
        noteR.textContent = "Espérons que le prochain MV te fasse devenir fan.​​​​​⏳​";
    }else if (input.value === "5"){
        noteR.textContent = "Pas loin du kiff.";
    }else if (input.value === "6"){
        noteR.textContent = "J'adore voir ça, tu es presque prêt à rejoindre le fandom Blink.​​​​​💪​";
    }else if (input.value === "7"){
        noteR.textContent = "Tu es une Blink.​​💗 ​​​​​🖤​​";
    }else if (input.value === "8"){
        noteR.textContent = "À ce stade, tu as toute la collection des PC et des albums.​​😍​";
    }else if (input.value === "9"){
        noteR.textContent = "💖 tellement que tu vas à tous leurs concerts.";
    }else if (input.value === "10"){
        noteR.textContent = "​​​​⚠️​ tu n'es pas loin d'être une Sasaeng";
    }else {
        noteR.textContent = "On bannit les Sasaeng ici ​​​​☠️​";
    }
});

const inputF = document.querySelector('.form');
const note = document.querySelector('#note');

inputF.addEventListener("input", () => {
    if(inputF.value === "0"){
        note.textContent = "Tu n'aimes pas du tout Fifty Fifty ? 💔";
    } else if(inputF.value === "1") {
        note.textContent = "Pas terrible comme note... 😰";
    } else if (inputF.value === "2"){
        note.textContent = "Tu vas attirer la ⚡ des Tweny.";
    } else if (inputF.value === "3"){
        note.textContent = "Tu ne rentreras jamais dans le fandom Tweny. 😥";
    } else if (inputF.value === "4"){
        note.textContent = "Espérons que le prochain MV te fasse devenir fan. ⏳";
    } else if (inputF.value === "5"){
        note.textContent = "Pas loin du kiff.";
    } else if (inputF.value === "6"){
        note.textContent = "J'adore voir ça, tu es presque prêt à rejoindre le fandom Tweny. 💪";
    } else if (inputF.value === "7"){
        note.textContent = "Tu es une Tweny. 💗 🖤";
    } else if (inputF.value === "8"){
        note.textContent = "À ce stade, tu as toute la collection des PC et des albums. 😍";
    } else if (inputF.value === "9"){
        note.textContent = "💖 tellement que tu vas à tous leurs concerts.";
    } else if (inputF.value === "10"){
        note.textContent = "⚠️ tu n'es pas loin d'être une Sasaeng";
    } else {
        note.textContent = "On bannit les Sasaeng ici ☠️";
    }
});

///style hover border text
const phover = document.querySelectorAll('.border');

phover.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        elem.classList.add("border");
    });

    elem.addEventListener("mouseout", () => {
        elem.classList.remove("border");
    });
});