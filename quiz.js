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
    },
    {
        question: "What is BMW's headquarters location?",
        options: ["Munich, Germany", "Berlin, Germany", "Stuttgart, Germany"],
        answer: "Munich, Germany"
    },
    {
        question: "Which BMW series is known for sports performance?",
        options: ["M Series", "X Series", "Z Series"],
        answer: "M Series"
    },
    {
        question: "What is BMW's electric vehicle brand called?",
        options: ["i", "e", "x"],
        answer: "i"
    },
    {
        question: "What does BMW's logo represent?",
        options: ["Propeller of an airplane", "Wheel of a car", "Flag of Bavaria"],
        answer: "Propeller of an airplane"
    },
    {
        question: "Which BMW model is a luxury sedan?",
        options: ["7 Series", "3 Series", "X1"],
        answer: "7 Series"
    },
    {
        question: "BMW launched its first electric car in which year?",
        options: ["2013", "2015", "2018"],
        answer: "2013"
    },
    {
        question: "Which BMW model is a coupe roadster?",
        options: ["Z4", "X6", "5 Series"],
        answer: "Z4"
    },
    {
        question: "What type of engines is BMW famous for?",
        options: ["Inline-6 engines", "V8 engines", "V10 engines"],
        answer: "Inline-6 engines"
    },
    {
        question: "Which BMW series is popular for compact executive cars?",
        options: ["3 Series", "7 Series", "1 Series"],
        answer: "3 Series"
    },
    {
        question: "BMW sponsors which prestigious motorsport event?",
        options: ["Formula E", "Formula 1", "MotoGP"],
        answer: "Formula E"
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
        questionElement.textContent = questions[currentQuestion].question;

        optionsElement.innerHTML = ""; // Clear previous options
        questions[currentQuestion].options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            button.classList.add("option-button");
            optionsElement.appendChild(button);
        });

        scoreElement.textContent = `Score: ${score}`;
    } else {
        questionElement.textContent = "Quiz Complete!";
        optionsElement.innerHTML = `<p>Your final score is: ${score}</p>`;
        scoreElement.textContent = "";
        document.getElementById("submitQuiz").style.display = "block";
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

document.getElementById("submitQuiz").addEventListener("click", () => {
    alert("Congratulations! You’ve completed the quiz,questions thode hard the.");
    window.location.href = "birthday-wish.html";
});

loadQuestion();
