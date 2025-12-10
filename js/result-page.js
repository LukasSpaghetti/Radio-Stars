const greeting = document.querySelector(".greeting")
const email = document.querySelector(".email")
const subject = document.querySelector(".subject")
const message = document.querySelector(".message")
const programsLiked = document.querySelector(".programsLiked")

greeting.textContent += ` ${localStorage.getItem("firstname_data")} ${localStorage.getItem("lastname_data")} !`

let emailspan = email.querySelector("span")
emailspan.textContent += ` ${localStorage.getItem("email_data")}` 
emailspan.style.color = "#fff"

let subjectspan = subject.querySelector("span")
subjectspan.textContent += ` ${localStorage.getItem("subject_data")}` 
subjectspan.style.color = "#fff"

let messagespan = message.querySelector("span")
messagespan.textContent += ` ${localStorage.getItem("message_data")}` 
messagespan.style.color = "#fff"

let kpopspan = programsLiked.querySelector(".kpop")
let alternativespan = programsLiked.querySelector(".alternative")
let eclectiquespan = programsLiked.querySelector(".eclectique")
let grungespan = programsLiked.querySelector(".grunge")


const isLiked = (e, f) => {
    f.style.color = "#fff"
    console.log(e)
    if (e === "true"){
        f.textContent += "oui"
    } else if (e === "false") {
        f.textContent += "non"
    }
}

isLiked(localStorage.getItem("kpop_data"), kpopspan)
isLiked(localStorage.getItem("alternative_data"), alternativespan)
isLiked(localStorage.getItem("eclectique_data"), eclectiquespan)
isLiked(localStorage.getItem("grunge_data"), grungespan)




// email.textContent += ` ${localStorage.getItem("email_data")}`
// subject.textContent += ` ${localStorage.getItem("subject_data")}`
// message.textContent += ` ${localStorage.getItem("message_data")}`