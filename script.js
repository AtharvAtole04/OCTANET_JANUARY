const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1
  },
  {
    question: "What is the capital of India?",
    answers: ["Kolkata", "Mumbai", "Pune", "Delhi"],
    correct: 3
  },
  {
    question: "What is the square of 5?",
    answers: ["16", "36", "25", "49"],
    correct: 2
  },
  {
    question: "What is the molecular formula of water?",
    answers: ["Ca", "H2O", "CO2", "Ka"],
    correct: 1
  },
  {
    question: "When was the first computer invented?",
    answers: ["1822", "1821", "1820", "1823"],
    correct: 0
  },
  {
    question: "How many continents are there in the world?",
    answers: ["9", "8", "7", "6"],
    correct: 2
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Ganges", "Brahmaputra", "Amazon", "Nile"],
    correct: 3
  },
  {
    question: "What is the smallest country in the world by land area?",
    answers: ["Brunei", "Vatican City", "Singapore", "UAE"],
    correct: 1
  },
  {
    question: "What is the capital of Russia?",
    answers: ["Moscow", "St. Petersburg", "Stalingrad", "Samara"],
    correct: 0
  }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const currentQuestion = quizData[currentQuiz];
  document.getElementById("question").innerText = currentQuestion.question;
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach((button, index) => {
    button.innerText = currentQuestion.answers[index];
  });
}

function selectAnswer(answerIndex) {
  if (answerIndex === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  const resultElement = document.getElementById("result");
  resultElement.style.display = "block";
  resultElement.innerText = `You answered ${score} out of ${quizData.length} questions correctly!`;
}

document.addEventListener("DOMContentLoaded", loadQuiz);
