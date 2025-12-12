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

// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.getElementById('header');
//   const errorEl = document.getElementById('error');

//   if (!header) {
//     console.error("Element #header introuvable.");
//     return;
//   }

//   // <-- MODIFIE ICI les chemins pour tester (ex: "PaulineImg/image1.jpg" ou "./PaulineImg/image1.jpg")
//   const images = [
//     "PaulineImg/image1.jpg",
    
//     "PaulineImg/image2.jpg"
//   ];

//   let index = 0;
//   const validImages = []; // chemins qui ont bien chargé

//   // préchargement avec onload / onerror
//   const loadPromises = images.map((src) => {
//     return new Promise((resolve) => {
//       const img = new Image();
//       img.onload = () => {
//         console.log("Loaded:", src);
//         validImages.push(src);
//         resolve({ src, ok: true });
//       };
//       img.onerror = (e) => {
//         console.error("Erreur de chargement:", src, e);
//         resolve({ src, ok: false });
//       };
//       img.src = src;
//     });
//   });

//   Promise.all(loadPromises).then((results) => {
//     const okCount = results.filter(r => r.ok).length;
//     console.log(`${okCount} / ${results.length} images chargées correctement.`);

//     if (okCount === 0) {
//       // si aucune image valide : afficher message d'erreur visible
//       errorEl.textContent = "Aucune image trouvée — vérifie les chemins dans script.js";
//       errorEl.style.display = 'block';
//       return;
//     }

//     // si tout est bon : démarrer le slideshow avec les images valides
//     function changeBackground() {
//       const src = validImages[index];
//       header.style.backgroundImage = `url('${src}')`;
//       console.log("Background appliqué ->", src);
//       index = (index + 1) % validImages.length;
//     }

//     changeBackground();
//     setInterval(changeBackground, 3000);
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const errorEl = document.getElementById('error');

  if (!header) {
    console.error("Element #header introuvable.");
    return;
  }

  // LISTE DES IMAGES + POSITION personnalisée
  const backgrounds = [
    {
      src: "PaulineImg/image1.jpg",
      position: "top",

    },
    {
      src: "PaulineImg/image2.jpg",
      position: "top",

    },
    {
      src: "PaulineImg/image3.jpg",
      position: "top",

    },
    {
      src: "PaulineImg/image4.jpg",
      position: "top",

    },
    {
      src: "PaulineImg/image5.jpg",
      position: "top",

    }
  ];

  let index = 0;
  const validImages = [];

  // préchargement
  const loadPromises = backgrounds.map((bg) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        console.log("Loaded:", bg.src);
        validImages.push(bg);  // on ajoute l'objet complet, pas juste src
        resolve({ src: bg.src, ok: true });
      };
      img.onerror = (e) => {
        console.error("Erreur de chargement:", bg.src, e);
        resolve({ src: bg.src, ok: false });
      };
      img.src = bg.src;
    });
  });

  Promise.all(loadPromises).then((results) => {
    const okCount = results.filter(r => r.ok).length;
    console.log(`${okCount} / ${results.length} images chargées correctement.`);

    if (okCount === 0) {
      errorEl.textContent = "Aucune image trouvée — vérifie les chemins dans script.js";
      errorEl.style.display = 'block';
      return;
    }

    // applique une image avec les options
    function changeBackground() {
      const bg = validImages[index];

      header.style.backgroundImage = `url('${bg.src}')`;
      header.style.backgroundPosition = bg.position || "center";
      header.style.backgroundSize = bg.size || "cover";

      console.log("Background appliqué ->", bg);

      index = (index + 1) % validImages.length;
    }

    changeBackground();
    setInterval(changeBackground, 3000);
  });
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