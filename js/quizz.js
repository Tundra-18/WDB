const quizData = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyper Tool Multi Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        answer: 2
    },

    {
        question: "Which language is used to add interactivity to a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "define"
        ],
        answer: 0
    },

    {
        question: "Which method is used to select an element by ID?",
        options: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "queryId()"
        ],
        answer: 0
    }

];


// Get HTML Elements
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const scoreElement = document.getElementById("score");
const totalQuestions = document.getElementById("totalQuestions");
const restartButton = document.getElementById("restartButton");


// Variables
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


// Load Question
function loadQuestion() {

    const currentQuiz = quizData[currentQuestion];
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

    question.textContent = currentQuiz.question;

    options.innerHTML = "";

    selectedAnswer = null;


    // Create Answer Buttons
    currentQuiz.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option");


        button.addEventListener("click", function() {

            // Remove previous selection
            const allOptions =
                document.querySelectorAll(".option");

            allOptions.forEach(function(optionButton) {

                optionButton.classList.remove("selected");
            });


            // Select current option
            button.classList.add("selected");
            selectedAnswer = index;
        });
        options.appendChild(button);
    });
}

// Next Button
nextButton.addEventListener("click", function() {

    // Check if an answer was selected
    if (selectedAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    // Check answer
    if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    // Move to next question
    currentQuestion++;

    // Check if quiz is finished
    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
    else {
        showResult();
    }
});


// Show Result
function showResult() {

    quiz.style.display = "none";
    result.style.display = "block";
    scoreElement.textContent = score;
    totalQuestions.textContent = quizData.length;
}

// Restart Quiz
restartButton.addEventListener("click", function() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    quiz.style.display = "block";
    result.style.display = "none";
    loadQuestion();
});

// Start Quiz
loadQuestion();