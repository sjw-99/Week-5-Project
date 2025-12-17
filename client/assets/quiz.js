const questionForm = document.querySelector("#question-form");

const intro = document.getElementById("question-intro");
const question = document.getElementById("quiz-question");
const optionA = document.getElementById("option-A");
const optionB = document.getElementById("option-B");
const optionC = document.getElementById("option-C");
const optionD = document.getElementById("option-D");

const optionAValue = document.getElementById("option-A-input");
const optionBValue = document.getElementById("option-B-input");
const optionCValue = document.getElementById("option-C-input");
const optionDValue = document.getElementById("option-D-input");

let currentQuestion;

function displayQuestion (data) {
    intro.textContent = data["question_intro"];
    question.textContent = data["question"];
    optionA.textContent = data["option_a"];
    optionB.textContent = data["option_b"];
    optionC.textContent = data["option_c"];
    optionD.textContent = data["option_d"];

    optionAValue.value = data["option_a"];
    optionBValue.value = data["option_b"];
    optionCValue.value = data["option_c"];
    optionDValue.value = data["option_d"];

    currentQuestion = data;

}

async function fetchQuestion (i) {
    try {
        const response = await fetch(`https://week-5-project-nylk.onrender.com/question/${i}`)
        const data = await response.json();
        displayQuestion(data);
    } catch (error) {
        return new Error("Failed to fetch question");
    }
}

fetchQuestion(6);



questionForm.addEventListener("submit", nextQuestion); 

function nextQuestion(e) {
    e.preventDefault()
    let answer = document.querySelector('input[name="answer"]:checked').value;
    console.log(answer);
    console.log(currentQuestion);
    if (answer == currentQuestion['correct_option']) {
        console.log('Correct!');
    } else {
        console.log('Incorrect!');
    }
}
