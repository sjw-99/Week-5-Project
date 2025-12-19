const stats = document.querySelector("#stats")
const backToHome = document.querySelector("#close-cross");

backToHome.addEventListener("click",backToStart)

function backToStart() {
    window.location.assign("index.html")
}

fetchStats()
async function fetchStats() {
  try {
    const response = await fetch(
      `https://week-5-project-nylk.onrender.com/student/summary`
    );
    const data = await response.json();
    console.log(data);
    stats.innerHTML= `Topic: ${data[0] ['topic']} <br> Average Percent: ${data[0] ['tp']}% <br> Times Completed: ${data[0] ['times_completed']}`
    } catch (err) {
        return new Error("Could not fetch stats")
    }
}