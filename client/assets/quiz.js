const nextButton = document.getElementById("next-button");

function displayQuestion (data) {
    const intro = document.getElementById("question-intro");
    intro.textContent = data["question_intro"];

    const question = document.getElementById("quiz-question");
    question.textContent = data["question"];

    const optionA = document.getElementById("option-A");
    optionA.textContent = data["option_a"];

    const optionB = document.getElementById("option-B");
    optionB.textContent = data["option_b"];

    const optionC = document.getElementById("option-C");
    optionC.textContent = data["option_c"];

    const optionD = document.getElementById("option-D");
    optionD.textContent = data["option_d"];

}

async function fetchQuestion (i) {
    try {
        const response = await fetch(`http://localhost:3000/question/${i}`)
        const data = await response.json();
        return data;
    } catch (error) {
        return new Error("Failed to fetch question");
    }
}

for (let i=1; i <= 10; i++) {
    const data = await fetchQuestion(i);
    displayQuestion(data);
    if (document.getElementById("next-button").clicked == true) {
        continue;
    }
};
