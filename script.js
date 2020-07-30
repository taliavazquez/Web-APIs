const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
var quizTimer = document.querySelector("#quiz-timer");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort();
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "1. What is your favorite animal in the world?",
    answers: [
      { text: "Invertebrates", correct: true },
      { text: "Fish", correct: true },
      { text: "Amphibians", correct: true },
      { text: "Reptiles", correct: true },
      { text: "Birds", correct: true },
      { text: "Mammals", correct: true }
    ]
  },
  {
    question: "2. What is your second-favorite animal in the world?",
    answers: [
      { text: "Invertebrates", correct: true },
      { text: "Fish", correct: true },
      { text: "Amphibians", correct: true },
      { text: "Reptiles", correct: true },
      { text: "Birds", correct: true },
      { text: "Mammals", correct: true }
    ]
  },
  {
    question: "3. When you think of the ocean, what do you think of",
    answers: [
      { text: "Beautiful", correct: true },
      { text: "Deep", correct: true },
      { text: "Mysterious", correct: true },
      { text: "Scary", correct: true },
      { text: "Calming", correct: true },
      { text: "Other", correct: true }
  
    ]
  },
  {
    question: "4. When you think of darkness, what do you think of",
    answers: [
      { text: "Beautiful", correct: true },
      { text: "Deep", correct: true },
      { text: "Secretive", correct: true },
      { text: "Scary", correct: true },
      { text: "Calming", correct: true },
      { text: "Other", correct: true }
    ]
  }
]
