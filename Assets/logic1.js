const restartButton = document.getElementById("restart");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const aButton = document.getElementById("a");
const bButton = document.getElementById("b");
const cButton = document.getElementById("c");
const questionText = document.getElementById("question-text");

let currentQuestion = 0;
var score = 0;
var secondsLeft = 120;

button.addEventListener("click", () => {
    alert("Quiz Started");
    questionsBlock.classList.remove("hidden");
    createNextQuestion();
    setInterval(function () {
      console.log(secondsLeft);
      time.innerText = secondsLeft;
      secondsLeft--;
    }, 1000);
  });

let questions = [
  {
    questNumber: 1,
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

  ,
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
previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
submitButton.addEventListener("click", submit);

function beginQuiz() {
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;
  aButton.innerHTML = questionText[currentQuestion].answers[0].option;
  aButton.onclick = () => {
    let ans = 0;
    if (questions[currentQuestion].answers[ans].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  bButton.innerHTML = questions[currentQuestion].answers[1].option;
  bButton.onclick = () => {
    let ans = 1;
    if (questions[currentQuestion].answers[ans].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  cButton.innerHTML = questions[currentQuestion].answers[2].option;
  cButton.onclick = () => {
    let ans = 2;
    if (questions[currentQuestion].answers[ans].answer) {
      if (score < 1) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 3) {
      next();
    }
  };
  previousButton.classList.add("hide");
}

beginQuiz();

function restart() {
    currentQuestion = 0;
    previousButton.classList.remove("hide");
    nextButton.classList.remove("hide");
    submitButton.classList.remove("hide");
    aButton.classList.remove("hide");
    bButton.classList.remove("hide");
    cButton.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next() {
    currentQuestion++;
    if(currentQuestion>=2){
        nextButton.classList.add("hide");
        previousButton.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    aButton.innerHTML = questions[currentQuestion].answers[0].option;
    aButton.onclick = () => {}
    let ans=0;
    if(questions[currentQuestion].answers[ans].answer){
        if(score<3) {
            score++;
        
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2) {
        next();
    }
}
