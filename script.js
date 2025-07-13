function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (input === "przyprawy") {
    result.style.color = "lightgreen";
    result.innerHTML = "✅ Poprawna odpowiedź!";
    // Można dodać przekierowanie, np.:
    // window.location.href = "kolejny_etap.html";
  } else {
    result.style.color = "red";
    result.innerHTML = "❌ Spróbuj jeszcze raz!";
  }
}
