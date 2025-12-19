const questionForm = document.querySelector("#question-form");
const intro = document.querySelector("#question-intro");
const question = document.querySelector("#quiz-question");
const optionA = document.querySelector("#optA");
const optionB = document.querySelector("#optB");
const optionC = document.querySelector("#optC");
const optionD = document.querySelector("#optD");

const optionAValue = document.getElementById("option-A-input");
const optionBValue = document.getElementById("option-B-input");
const optionCValue = document.getElementById("option-C-input");
const optionDValue = document.getElementById("option-D-input");

let currentQuestion;
let i = 1;

clearSummary()
fetchQuestion(i);

questionForm.addEventListener("submit", (e) => {
  questionTime(e);
  i += 1;
  if (i >= 11) {
    setTimeout(() => {
      window.location.assign("summary.html");
    }, 1500);
    
  }
  setTimeout(() => {
    fetchQuestion(i);
  }, 1500);
});

async function clearSummary() {
  try {
    const clear = await fetch('https://week-5-project-nylk.onrender.com/clear');
  } catch (error) {
    return new Error("Failed to clear summary");
  }
}

async function fetchQuestion(question_id) {
  try {
    const response = await fetch(
      `https://week-5-project-nylk.onrender.com/question/${question_id}`
    );
    const data = await response.json();
    currentQuestion = data;
    console.log(data);
    displayQuestion(data);
  } catch (error) {
    return new Error("Failed to fetch question");
  }
}

function displayQuestion(data) {
  intro.textContent = data["question_intro"];
  question.textContent =   `Question ${data["question_id"]}: ${data["question"]}`;
  optionA.textContent = data["option_a"];
  optionB.textContent = data["option_b"];
  optionC.textContent = data["option_c"];
  optionD.textContent = data["option_d"];

  optionAValue.value = data["option_a"];
  optionBValue.value = data["option_b"];
  optionCValue.value = data["option_c"];
  optionDValue.value = data["option_d"];
}

async function questionTime(e) {
  e.preventDefault();
  let answerBox = document.querySelector('input[name="answer"]:checked');
  let answer = answerBox.value;

  try {
    const response = await fetch(
      `https://week-5-project-nylk.onrender.com/question/${i}`
    );
    const data = await response.json();

    console.log({
      question_intro: data["question_intro"],
      question: data["question"],
      student_option: answer,
      correct_option: data["correct_option"],
      topic: data["topic"]
    });

    const respCreate = await fetch(
      `https://week-5-project-nylk.onrender.com/cqadd`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "question_intro": data["question_intro"],
          "question": data["question"],
          "student_option": answer,
          "correct_option": data["correct_option"],
          "topic": data["topic"]
        }),
      }
    );
  } catch (error) {
    new Error("Failed to post question")
  }


  if (answer == currentQuestion["correct_option"]) {
    console.log("Correct!");
    answerBox.classList.add("correct");
    setTimeout(() => {
      answerBox.classList.remove("correct");
    }, 1499);
  } else {
    console.log("Incorrect!");
    answerBox.classList.add("wrong");
    setTimeout(() => {
      answerBox.classList.remove("wrong");
    }, 1499);
  }
}
