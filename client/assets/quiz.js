const questionForm = document.querySelector("#question-form");
const intro = document.querySelector("#question-intro");
const question = document.querySelector("#quiz-question");
const optionA = document.querySelector("#optA");
const optionB = document.querySelector("#optB");
const optionC = document.querySelector("#optC");
const optionD = document.querySelector("#optD");

questionForm.addEventListener("submit", questionTime)

async function fetchQuestion (question_id) {
try {
    const response = await fetch(`https://week-5-project-nylk.onrender.com/question/${question_id}`)
    const data = await response.json();
    console.log(data);
    displayQuestion(data);
} catch (error) {
    return new Error("Failed to fetch question");
}
}

function displayQuestion (data) {
    intro.textContent = data["question_intro"];
    question.textContent = data["question"];
    optionA.textContent = data["option_a"];
    optionB.textContent = data["option_b"];
    optionC.textContent = data["option_c"];
    optionD.textContent = data["option_d"];
}

async function updateCurrent(question_id,student_option) {
    try {
        
    } catch(error) {
        return new Error("Failed to update current")
    }
}



let i = 1

while(i<=9)

function questionTime(e) {
     e.preventDefault()
     updateCurrent(i)
     fetchQuestion(i+1)
}

if (i==10) {
    //go to summary
}
//     optionAValue.value = data["option_a"];
//     optionBValue.value = data["option_b"];
//     optionCValue.value = data["option_c"];
//     optionDValue.value = data["option_d"];

//     currentQuestion = data;

//     let answer = document.querySelector('input[name="answer"]:checked').value;
//     console.log(answer);
//     console.log(currentQuestion);
//     if (answer == currentQuestion['correct_option']) {
//         console.log('Correct!');
//     } else {
//         console.log('Incorrect!');
//     }
// }



// const optionAValue = document.getElementById("option-A-input");
// const optionBValue = document.getElementById("option-B-input");
// const optionCValue = document.getElementById("option-C-input");
// const optionDValue = document.getElementById("option-D-input");





// }

// async function fetchQuestion (i) {
//     try {
//         const response = await fetch(`https://week-5-project-nylk.onrender.com/question/${i}`)
//         const data = await response.json();
//         displayQuestion(data);
//     } catch (error) {
//         return new Error("Failed to fetch question");
//     }
// }

// fetchQuestion(7);



// questionForm.addEventListener("submit", nextQuestion); 

// function nextQuestion(e) {
//     e.preventDefault()
//     let answer = document.querySelector('input[name="answer"]:checked').value;
//     console.log(answer);
//     console.log(currentQuestion);
//     if (answer == currentQuestion['correct_option']) {
//         console.log('Correct!');
//     } else {
//         console.log('Incorrect!');
//     }
// }
