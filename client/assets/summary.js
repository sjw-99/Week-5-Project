fetchAllQuestions()

async function fetchAllQuestions() {
  try {
    const response = await fetch(
      `https://week-5-project-nylk.onrender.com/mission/summary`
    );
    const data = await response.json();
    currentQuestion = data;
    console.log(data);
    //displayQuestion(data);
  } catch (error) {
    return new Error("Failed to fetch question");
  }
}

