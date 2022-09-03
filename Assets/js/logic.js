// HTML page with quiz start button
// timer to start quiz*
// first quiz question appears
// option to answer the question
// if correct, another quiz question appears
// if incorrect, time is subtracted from timer
// when time runs out - or all questions are answered - game is over
// high scores page with option to save initials are score displays
 const codeQuestions = [
    {
      question:
        "Which built-n method combines the text of two strings and returns a new string?",
      answers: {
        a: "append()",
        b: "concat()",
        c: "attach()",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which JavaScript label catches all the values, except for the ones specified?",
      answers: {
        a: "catch",
        b: "label",
        c: "default",
      },
      correctAnswer: "c",
    },
    {
      question: "What will the following code return? Boolean(2<8)",
      answers: {
        a: "true",
        b: "false",
        c: "NaN",
      },
      correctAnswer: "a",
    },
  ];

var secondsLeft = 120
var questionNumber = 0

const button = document.getElementById("start")
const time = document.getElementById("time")
const questionTitle =document.getElementById("question-title")
const questionsBlock =document.getElementById("codeQuestions")
console.log(button)
console.log(time)


button.addEventListener("click", () => {
    alert("Quiz Started")
    questionsBlock.classList.remove("hidden")
    createNextQuestion()
    setInterval(function () {
        console.log(secondsLeft)
        time.innerText=secondsLeft
        secondsLeft--
    }, 1000)
  })

function createNextQuestion() {
    var question = codeQuestions[questionNumber]
    var title = question.question
    questionTitle.innerText = title

}
