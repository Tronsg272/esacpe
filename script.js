const videos = ['1.mp4', '2.mp4', '3.mp4'];
const answers = ['głośnik', 'przyprawy', 'łóżko'];
let current = 0;

const video = document.getElementById('video');
const stepElem = document.getElementById('step');
const input = document.getElementById('answer');
const btn = document.getElementById('checkBtn');
const msg = document.getElementById('message');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
  const user = input.value.trim().toLowerCase();
  const correct = answers[current];

  if (user === correct) {
    current++;

    if (current < videos.length) {
      video.src = videos[current];
      stepElem.textContent = current + 1;
      input.value = '';
      msg.textContent = '';
    } else {
      // Wszystkie zagadki rozwiązane
      title.innerHTML = '🎉 Gratulacje!';
      document.querySelector('.input-group').style.display = 'none';
      msg.innerHTML = 'Hasło do kłódki: <strong>xxx</strong><br><em>(przy szafie)</em>';

      // Wyświetl ostatni film
      video.src = '4.mp4';
      video.style.display = 'block';
    }
  } else {
    msg.textContent = '❌ Spróbuj jeszcze raz!';
  }
});

