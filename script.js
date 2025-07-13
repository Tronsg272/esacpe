const answers = ["przyprawy", "zegarek", "serce"]; // wpisz swoje odpowiedzi
let current = 0;

function checkAnswer() {
  const input = document.getElementById("answer");
  const feedback = document.getElementById("feedback");

  if (input.value.trim().toLowerCase() === answers[current]) {
    feedback.textContent = "";
    input.value = "";
    current++;

    if (current < answers.length) {
      document.getElementById("videoSource").src = `${current + 1}.mp4`;
      document.getElementById("video").load();
    } else {
      // KONIEC GRY
      document.querySelector("video").style.display = "none";
      document.querySelector(".input-box").style.display = "none";
      document.getElementById("title").style.display = "none";
      document.getElementById("final").style.display = "block";
    }
  } else {
    feedback.textContent = "❌ Spróbuj jeszcze raz!";
  }
}
