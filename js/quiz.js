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
const questions = [
    {
        question: "Quel est le lien principal entre Billie Eilish et son frère Finneas dans la création de sa musique ?",
        answers: [
            { text: "Il est uniquement responsable de ses clips", correct: false },
            { text: "Il est son manager personnel", correct: false },
            { text: "Il compose et produit ses morceaux avec elle", correct: true },
            { text: "Il joue de la guitare pendant ses concerts", correct: false }
        ],
        img : "img/QuizA1.jpg"
    },
    {
        question: "Par qui le projet musical Lemon Demon fût-il créé ?",
        answers: [
            { text: "Neil Ciciereja", correct: false },
            { text: "Niel Cicierega", correct: false },
            { text: "Neil Cisiereja", correct: false },
            { text: "Neil Cicierega", correct: true }
        ],
        img : "img/QuizL1.jpg"
    },
    {
        question: "De combien de membres le groupe Fifty Fifty est-il composé ?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false }
        ],
        img : "img/QuizP1.jpg"
    },
    {
        question: "Dans quelle ville le Grunge est-il apparu pour la première fois?",
        answers: [
            { text: "Seattle", correct: true },
            { text: "Vancouver", correct: false },
            { text: "New York", correct: false },
            { text: "Aberdeen", correct: false }
        ],
        img : "img/QuizF1.jpg"
    },
    {
        question: "Quel aspect fait que PNL est une référence majeure du rap français ?",
        answers: [
            { text: "Leurs collaborations exclusives avec des artistes américains", correct: false },
            { text: "La qualité de leurs projets musicaux et leur identité unique", correct: true },
            { text: "Ils sont le seul groupe de rap français à avoir rempli l'Accor Arena", correct: false },
            { text: "Le fait qu'ils aient popularisé l'autotune en France", correct: false }
        ],
        img : "img/QuizA2.jpg"
    },
    {
        question: "Sur quel support la musique alternative est apparue ?",
        answers: [
            { text: "Musique de supermarché", correct: false },
            { text: "Radios Universitaires", correct: true },
            { text: "Les clubs de musique underground des grandes villes", correct: false },
            { text: "Les chaînes de télévision comme MTV", correct: false }
        ],
        img : "img/QuizL2.jpg"
    },
    {
        question: "Quel est le nom de l’agence de Blackpink ?",
        answers: [
            { text: "HYBE Corporation", correct: false },
            { text: "JYP Entertainment", correct: false },
            { text: "Source Music", correct: false },
            { text: "YG Entertainment", correct: true }
        ],
        img : "img/QuizP2.jpg"
    },
    {
        question: "En quel annés l’album « Bleach », de nirvanna est-il sorti ?",
        answers: [
            { text: "1969", correct: false },
            { text: "1979", correct: false },
            { text: "1989", correct: true },
            { text: "1999", correct: false }
        ],
        img : "img/QuizF2.jpg"
    }
];

const questionElement = document.querySelector("#question");
const questionNumber = document.querySelector("#questionNumber");
const answerButtons = document.querySelector("#answer-buttons");
const resultElement = document.querySelector("#result");
const image = document.querySelector("#image");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.innerHTML = "";
    showQuestion();
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestion.question}`;
    questionNumber.innerText = `Question ${currentQuestionIndex + 1}`

    image.style.display = "block";
    image.src = currentQuestion.img;

    for(answer of currentQuestion.answers){
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    };
}

const resetState = () => {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
            
    if (isCorrect) {
        score++;
        selectedBtn.style.backgroundColor = "#28a745";
    } else {
        selectedBtn.style.backgroundColor = "#dc3545";
    }

    for (const button of answerButtons.children) {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "#28a745";
        }
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }, 1000);
}

const showScore = () => {
    resetState();
    questionElement.innerText = "Quiz terminé !";
    questionNumber.innerText = "";
    resultElement.innerText = `Votre score : ${score} / ${questions.length}`;

    image.style.display = "none";

    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Rejouer";
    restartBtn.addEventListener("click", startQuiz);
    answerButtons.appendChild(restartBtn);
}

startQuiz();




