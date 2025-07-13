const answers = ["głośnik", "przyprawy", "łóżko"];
const videos = ["1.mp4", "2.mp4", "3.mp4"];
let stage = 0;

function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const message = document.getElementById("message");

  if (input === answers[stage]) {
    stage++;
    if (stage < answers.length) {
      document.getElementById("video").src = videos[stage];
      document.getElementById("answer").value = "";
      message.textContent = "Dobra odpowiedź! Dalej...";
    } else {
      document.getElementById("stage-container").innerHTML = `
        <p class="final">Gratulacje! Hasło do kłódki: <strong>2xx5</strong><br/>
        Dwie cyfry znajdziesz przy kłódce 🕵️‍♂️</p>
      `;
    }
  } else {
    message.textContent = "Nieprawidłowa odpowiedź. Spróbuj ponownie.";
  }
}
