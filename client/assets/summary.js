const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3 = document.querySelector("#q3");
const q4 = document.querySelector("#q4");
const q5 = document.querySelector("#q5");
const q6 = document.querySelector("#q6");
const q7 = document.querySelector("#q7");
const q8 = document.querySelector("#q8");
const q9 = document.querySelector("#q9");
const q10 = document.querySelector("#q10");
const q1Status = document.querySelector("#q1-status");
const q2Status = document.querySelector("#q2-status");
const q3Status = document.querySelector("#q3-status");
const q4Status = document.querySelector("#q4-status");
const q5Status = document.querySelector("#q5-status");
const q6Status = document.querySelector("#q6-status");
const q7Status = document.querySelector("#q7-status");
const q8Status = document.querySelector("#q8-status");
const q9Status = document.querySelector("#q9-status");
const q10Status = document.querySelector("#q10-status");


const backToHome = document.querySelector("#close-cross"); 
const toDash = document.querySelector("#dash"); 

let runThrough = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q1Status,q2Status,q3Status,q4Status,q5Status,q6Status,q7Status,q8Status,q9Status,q10Status]

fetchAllQuestions()
async function fetchAllQuestions() {
  try {
    const response = await fetch(
      `https://week-5-project-nylk.onrender.com/mission/summary`
    );
    const data = await response.json();
    data;
    let counter = 0;
    for (let i=0; i<10; i++) {
        let question = data[i]["question"]
        let studentAnswer = data[i]["student_option"]
        let correctAnswer = data[i]["correct_option"]
        runThrough[i].textContent=`Question ${i+1}: ${question}`
        if(studentAnswer===correctAnswer) {
            let status = "Correct!"
            counter += 10
            runThrough[i+10].textContent = `Your answer: "${studentAnswer}" was ${status}`
        } else {
            let status = "Incorrect!"
            runThrough[i+10].textContent = `Your answer: "${studentAnswer}" was ${status} The correct answer was : "${correctAnswer}"`
        }      
    }
  } catch (error) {
    return new Error("Failed to fetch question");
  }
}

//Potential method for finding score but much easier solution
// addtostudents()
// async function addtostudents() {
//   try {
//     const response = await fetch('https://week-5-project-nylk.onrender.com/addtostudents');
//     const latest = await fetch('https://week-5-project-nylk.onrender.com/latest/score');
//     const data = await latest.json()
//     console.log(data);
//   } catch (error) {
//     return new Error("Failed to add to students");
//   }
// }

backToHome.addEventListener("click",clearSummary)
toDash.addEventListener("click",clearSummary)

async function clearSummary() {
  try {
    const clear = await fetch('https://week-5-project-nylk.onrender.com/clear');
  } catch (error) {
    return new Error("Failed to clear summary");
  }
}



