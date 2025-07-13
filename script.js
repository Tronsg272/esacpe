const videos = ["1.mp4", "2.mp4", "3.mp4"];
const passwords = ["głośnik", "przyprawy", "łóżko"];
let current = 0;

function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const correct = passwords[current].toLowerCase();

  if (input === correct) {
    current++;

    if (current < videos.length) {
      document.getElementById("video").src = videos[current];
      document.getElementById("step").textContent = `Zagadka ${current + 1}/3`;
      document.getElementById("password").value = "";
      document.getElementById("message").textContent = "";
    } else {
      document.querySelector(".input-group").style.display = "none";
      document.getElementById("step").textContent = "🎉 Gratulacje!";
      document.getElementById("message").innerHTML =
        'Hasło do kłódki to: <strong>2xx65</strong><br><em>(pozostałe cyfry znajdziesz przy kłódce)</em>';
    }
  } else {
    document.getElementById("message").textContent = "❌ Spróbuj jeszcze raz!";
  }
}
