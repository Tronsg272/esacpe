const questions = [
  {
    question: "Zagadka 1: Co ma cztery nogi rano, dwie w południe, a trzy wieczorem?",
    answer: "człowiek"
  },
  {
    question: "Zagadka 2: Bez języka, a mówi. Bez skrzydeł, a leci.",
    answer: "echo"
  },
  {
    question: "Zagadka 3: Im więcej zabierasz, tym większy się staje. Co to?",
    answer: "dziura"
  }
];

let current = 0;

function loadQuestion() {
  if (current < questions.length) {
    document.getElementById("question").textContent = questions[current].question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
  } else {
    document.getElementById("question-box").innerHTML = "<h2>Gratulacje! Uciekłeś! 🎉</h2>";
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  if (userAnswer === questions[current].answer) {
    current++;
    loadQuestion();
  } else {
    document.getElementById("feedback").textContent = "Niepoprawna odpowiedź. Spróbuj ponownie.";
  }
}

// Start
loadQuestion();
