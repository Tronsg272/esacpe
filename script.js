function checkAnswer() {
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (answer === "przyprawy") {
    result.style.color = "lightgreen";
    result.innerHTML = "✅ Poprawna odpowiedź!";
    // Możesz przekierować do następnej strony, np.:
    // window.location.href = "nastepna.html";
  } else {
    result.style.color = "red";
    result.innerHTML = "❌ Spróbuj jeszcze raz!";
  }
}
