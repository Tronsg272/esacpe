const answers = ["głośnik", "łóżko", "rocznica"];
let currentStep = 0;

function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const video = document.getElementById("video");

  if (input === answers[currentStep]) {
    currentStep++;
    if (currentStep < answers.length) {
      const nextVideo = `${currentStep + 1}.mp4`; // np. 2.mp4, 3.mp4
      video.src = nextVideo;
      video.load();
      video.play();
      feedback.textContent = "✅ Dobra odpowiedź!";
    } else {
      feedback.textContent = "🎉 Gratulacje! Hasło: ROCZNICA2025";
    }
  } else {
    feedback.textContent = "❌ Spróbuj jeszcze raz!";
  }
}

