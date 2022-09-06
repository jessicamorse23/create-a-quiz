const restartButton = document.getElementById("restart");
const aButton = document.getElementById("a");
const bButton = document.getElementById("b");
const cButton = document.getElementById("c");
const questionText = document.getElementById("question-text");
const startButton = document.getElementById("start");
const questionsBlock = document.getElementById("question-area");
const userScore = document.getElementById("user-score");
const submitInitials =document.getElementById("submit-initials");
const initials = document.getElementById("initials");
const submitButton = document.getElementById("submit")

let currentQuestion = 0;
var score = 0;
var secondsLeft = 120;

let questions = [
  {
    question:
      "Which built-n method combines the text of two strings and returns a new string?",
    answers: {
      a: "append()",
      b: "concat()",
      c: "attach()",
    },
    correctAnswer: "b",
    answer: "concat()",
    options: ["append()", "concat()", "attach()"],
  },

  {
    questNumber: 2,
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    answers: {
      a: "catch",
      b: "label",
      c: "default",
    },
    correctAnswer: "c",
    answer: "default",
    options: ["catch", "label", "default"],
  },

  {
    questNumber: 3,
    question: "What will the following code return? Boolean(2<8)",
    answers: {
      a: "true",
      b: "false",
      c: "NaN",
    },
    correctAnswer: "a",
    answer: "true",
    options: ["true", "false", "NaN"],
  },
];

restartButton.addEventListener("click", restart);

function createQuestion() {
  questionText.innerHTML = questions[currentQuestion].question;
  aButton.innerHTML = questions[currentQuestion].answers.a;
  aButton.onclick = () => {
    if (questions[currentQuestion].correctAnswer === "a") {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;

    next();
  };
  bButton.innerHTML = questions[currentQuestion].answers.b;
  bButton.onclick = () => {
    if (questions[currentQuestion].correctAnswer === "b") {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;

    next();
  };
  cButton.innerHTML = questions[currentQuestion].answers.c;
  cButton.onclick = () => {
    if (questions[currentQuestion].correctAnswer === "c") {
      if (score < 1) {
        score++;
      }
    }
    userScore.innerHTML = score;

    next();
  };
}

startButton.addEventListener("click", () => {
  // alert("Quiz Started");
  questionsBlock.classList.remove("hidden");
  createQuestion();
  // createNextQuestion();
  setInterval(function () {
    // console.log(secondsLeft);
    time.innerText = secondsLeft;
    secondsLeft--;
  }, 1000);
});
function restart() {
  currentQuestion = 0;
  aButton.classList.remove("hide");
  bButton.classList.remove("hide");
  cButton.classList.remove("hide");
  score = 0;
  userScore.innerHTML = score;
  secondsLeft = 120;
  createQuestion();
}

function next() {
  currentQuestion++;
  if (currentQuestion > 2) {
    endQuiz();
  } else {
    createQuestion();
  }
}

function endQuiz() {
  alert("Quiz Ended!");

  questionsBlock.classList.add("hidden");
  submitInitials.classList.remove("hidden");
}

submitButton.addEventListener("click", () => {
var input = initials.value
console.log(input)
  // window.location.href="../html/highscores.html"
})