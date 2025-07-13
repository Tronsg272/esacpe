let currentStep = 1;

const passwords = {
  1: "głośnik",
  2: "przyprawy",
  3: "2xx5" // Przykładowe hasło końcowe z 2 cyframi jawnie
};

function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const error = document.getElementById("error");

  if (input === passwords[currentStep]) {
    currentStep++;

    if (currentStep > 3) {
      document.querySelector("video").style.display = "none";
      document.getElementById("title").innerText = "Hasło końcowe: 2xx5";
      document.querySelector(".input-section").style.display = "none";
    } else {
      loadStep();
    }
  } else {
    error.innerText = "❌ Spróbuj jeszcze raz!";
  }
}

function loadStep() {
  const video = document.getElementById("video");
  const title = document.getElementById("title");
  const error = document.getElementById("error");
  const input = document.getElementById("password");

  video.src = `${currentStep}.mp4`;
  title.innerText = currentStep === 2 ? "Rocznica Czas tyka" : "Ostatnie pytanie";
  input.value = "";
  error.innerText = "";
}
