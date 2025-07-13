let currentVideo = 1;

const answers = {
  1: "prezent",
  2: "przyprawy",
  3: "zegarek"
};

function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (input === answers[currentVideo]) {
    feedback.textContent = "✅ Dobra odpowiedź!";
    feedback.className = "success";
    nextVideo();
  } else {
    feedback.textContent = "❌ Spróbuj jeszcze raz!";
    feedback.className = "error";
  }
}

function nextVideo() {
  currentVideo++;
  if (currentVideo > 3) {
    document.getElementById("feedback").textContent = "🎉 Gratulacje! Ukończyłeś zagadki!";
    document.getElementById("video").style.display = "none";
    document.getElementById("answerInput").style.display = "none";
    document.querySelector("button").style.display = "none";
    return;
  }

  document.getElementById("videoSource").src = `${currentVideo}.mp4`;
  document.getElementById("video").load();
  document.getElementById("answerInput").value = "";
}

