const form = document.querySelector(".radioForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const prenom = document.querySelector("#prenom").value;
    localStorage.setItem("firstname_data", prenom);

    const nom = document.querySelector("#nom").value;
    localStorage.setItem("lastname_data", nom);

    const email = document.querySelector("#email").value;
    localStorage.setItem("email_data", email);

    const sujet = document.querySelector("#sujet").value;
    localStorage.setItem("subject_data", sujet);

    const message = document.querySelector("#message").value;
    localStorage.setItem("message_data", message);

    const kpop = document.querySelector("#kpop").checked;
    localStorage.setItem("kpop_data", kpop);

    const alternative = document.querySelector("#alternative").checked;
    localStorage.setItem("alternative_data", alternative);

    const eclectique = document.querySelector("#eclectique").checked;
    localStorage.setItem("eclectique_data", eclectique);

    const grunge = document.querySelector("#grunge").checked;
    localStorage.setItem("grunge_data", grunge);


    const inputs = form.querySelectorAll(".clearInput");
    for (const input of inputs){
        input.value = "";
        input.checked = false;
    }
    const textArea = form.querySelector("textarea");
    textArea.value = "";
})






