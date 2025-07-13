
let aktualne = 0;
const filmy = ["1.mp4", "2.mp4", "3.mp4"];
const hasla = ["głośnik", "przyprawy", "łóżko"];

function sprawdzOdpowiedz() {
  const odp = document.getElementById("odpowiedz").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  if (odp === hasla[aktualne]) {
    aktualne++;
    if (aktualne < filmy.length) {
      document.getElementById("video").src = filmy[aktualne];
      document.getElementById("odpowiedz").value = "";
      feedback.textContent = "";
    } else {
      document.getElementById("video").style.display = "none";
      document.getElementById("pytanie").style.display = "none";
      document.getElementById("odpowiedz").style.display = "none";
      document.querySelector("button").style.display = "none";
      feedback.style.display = "none";
      document.getElementById("final").style.display = "block";
    }
  } else {
    feedback.textContent = "Błędna odpowiedź. Spróbuj ponownie.";
  }
}
