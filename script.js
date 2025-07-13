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
// ...twój aktualny kod JS tutaj...

// 👇 Wklej to poniżej
const video = document.querySelector("video");

const hasloContainer = document.createElement("div");
hasloContainer.id = "haslo-container";
hasloContainer.style.display = "none";
hasloContainer.style.color = "white";
hasloContainer.style.marginTop = "20px";
hasloContainer.style.fontSize = "1.3rem";
hasloContainer.style.textAlign = "center";
hasloContainer.innerHTML = `
  🔒 Kod do kłódki: <strong>2 _ _ 9</strong><br>
  <small>Reszta cyfr znajduje się obok kłódki.</small>
`;

document.body.appendChild(hasloContainer);

video.addEventListener("ended", () => {
  if (current === videos.length) {
    hasloContainer.style.display = "block";
  }
});

