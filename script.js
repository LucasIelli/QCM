const questions = [
  {
    question: "Quel est le langage de programmation le plus populaire ?",
    answers: ["JavaScript", "Python", "C++", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    question: "Quelle est la balise HTML pour créer un paragraphe ?",
    answers: ["p", "br", "div", "span"],
    correctAnswer: "p",
  },
  {
    question: "Quelle est la signification de CSS ?",
    answers: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet",
      "Creative Style Sheet",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question:
      "Quel est le langage de programmation utilisé pour créer des pages web dynamiques/interactives ?",
    answers: ["HTML", "CSS", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question:
      "Quelle balise HTML est utilisée pour créer une liste non ordonnée ?",
    answers: ["ul", "ol", "li", "dl"],
    correctAnswer: "ul",
  },
  {
    question: "Quelle est la signification de HTML ?",
    answers: [
      "Hyper Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Highly Text Markup Language",
      "Hyper Transfer Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Quelle est la dernière version de JavaScript ?",
    answers: ["ES5", "ES6", "ES7", "ES2021"],
    correctAnswer: "ES2021",
  },
  {
    question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
    answers: ["a", "link", "href", "url"],
    correctAnswer: "a",
  },
  {
    question: "Quelle est la <u>principale</u> fonction de CSS ?",
    answers: [
      "Gestion des bases de données",
      "Style et mise en page des pages web",
      "Programmation de jeux vidéo",
      "Traitement des paiements en ligne",
    ],
    correctAnswer: "Style et mise en page des pages web",
  },
  {
    question: "Quelle est la signification de HTTP ?",
    answers: [
      "HyperText Transfer Protocol",
      "HyperText Testing Protocol",
      "Hyper Transfer Text Protocol",
      "Highway Traffic Testing Protocol",
    ],
    correctAnswer: "HyperText Transfer Protocol",
  },
];

const quizForm = document.getElementById("quiz-form");
let currentQuestionIndex = 0;

function displayQuestions(index) {
  const answersArray = questions[index].answers;
  quizForm.innerHTML = `
  <h2>Question ${index + 1}: <span>${questions[index].question}</span></h2>
  ${answersArray
    .map(
      (answer, i) =>
        `
    <div>
      <input type="radio" name="answer" id="answer${i + 1}" value="">
      <label for="answer${i + 1}">${answer}</label>
    </div>
  `
    )
    .join("")}
`;
}

function verifyAnswer() {
  const selectedAnswer = document.querySelector("input[name='answer']:checked");

  if (!selectedAnswer) {
    alert("Veuillez sélectionner une réponse.");
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = selectedAnswer.nextElementSibling.textContent;
  if (userAnswer === currentQuestion.correctAnswer) {
    selectedAnswer.parentElement.style.backgroundColor = "green";
  } else {
    selectedAnswer.parentElement.style.backgroundColor = "red";
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      displayQuestions(currentQuestionIndex);
    }, 800);
  } else {
    alert("Félicitations, vous avez terminé le questionnaire !");
  }
}

quizForm.addEventListener("click", (event) => {
  if (event.target.type === "radio") {
    verifyAnswer();
  }
});
displayQuestions(currentQuestionIndex);
