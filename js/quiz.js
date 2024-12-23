const questions = [
    {
        question: "What does BMW stand for?",
        options: ["Bavarian Motor Works", "Berlin Motor Works", "British Motor World"],
        answer: "Bavarian Motor Works"
    },
    {
        question: "What is BMW’s iconic luxury SUV called?",
        options: ["X5", "Q5", "CX-5"],
        answer: "X5"
    },
    {
        question: "What year was BMW founded?",
        options: ["1916", "1925", "1932"],
        answer: "1916"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quiz = document.getElementById("quiz");
    const questionElement = quiz.querySelector(".question");
    const optionsElement = quiz.querySelector(".options");
    const scoreElement = document.querySelector(".score");

    if (currentQuestion < questions.length) {
        // Display question
        questionElement.textContent = questions[currentQuestion].question;

        // Display options
        optionsElement.innerHTML = ""; // Clear previous options
        questions[currentQuestion].options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsElement.appendChild(button);
        });

        scoreElement.textContent = `Score: ${score}`;
    } else {
        // Quiz finished
        questionElement.textContent = "Quiz Complete!";
        optionsElement.innerHTML = `<p>Your final score is: ${score}</p>`;
        scoreElement.textContent = "";
    }
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

// Load the first question
loadQuestion();
