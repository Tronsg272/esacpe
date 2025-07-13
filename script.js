const video = document.getElementById('video');
const sources = ['1.mp4', '2.mp4', '3.mp4'];
let current = 0;

function nextVideo() {
  current = (current + 1) % sources.length;
  video.src = sources[current];
  video.play();
}
