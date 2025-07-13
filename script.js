const videos = ["1.mp4", "2.mp4", "3.mp4"];
const answers = ["głośnik", "przyprawy", "łóżko"];
let current = 0;

const video = document.getElementById("video");
const input = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");

function loadVideo(index) {
  video.src = videos[index];
  input.value = "";
  feedback.textContent = "";
}

function checkAnswer() {
  const userAnswer = input.value.trim().toLowerCase();
  if (userAnswer === answers[current]) {
    feedback.textContent = "✅ Dobrze!";
    current++;
    if (current < videos.length) {
      setTimeout(() => loadVideo(current), 1500);
    } else {
      feedback.textContent = "🎉 Gratulacje! Ukończyłeś escape room!";
      input.disabled = true;
    }
  } else {
    feedback.textContent = "❌ Błędna odpowiedź. Spróbuj jeszcze raz.";
  }
}

loadVideo(current);
