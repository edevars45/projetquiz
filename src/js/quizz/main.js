import { chargerQuestions, verifierReponse } from './logique.js';

let score = 0;
let currentQuestion = 0;
let questions = [];

document.querySelectorAll('#choix-theme button').forEach(btn => {
  btn.addEventListener('click', async () => {
    const theme = btn.dataset.theme;
    questions = await chargerQuestions(theme);
    score = 0;
    currentQuestion = 0;
    afficherQuestion();
  });
});

function afficherQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  if (currentQuestion >= questions.length) {
    quizContainer.innerHTML = `<h2>✨ Ton score final est : ${score} / ${questions.length}</h2>`;
    return;
  }

  const question = questions[currentQuestion];
  const questionElem = document.createElement("div");
  questionElem.innerHTML = `<p>${question.question}</p>`;

  if (question.type === "multiple" && question.choices) {
    question.choices.forEach(choice => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="option" value="${choice}">
        ${choice}
      `;
      questionElem.appendChild(label);
    });
  }

  const bouton = document.createElement("button");
  bouton.textContent = "Valider";
  bouton.onclick = () => {
    const bonne = verifierReponse(questions[currentQuestion]);
    const reponse = document.querySelector('input[name="option"]:checked')?.value;
    if (reponse === bonne) score++;
    currentQuestion++;
    afficherQuestion();
  };

  questionElem.appendChild(bouton);
  quizContainer.appendChild(questionElem);
}
