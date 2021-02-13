window.addEventListener('keydown', (evt) => {
  const audio = document.querySelector(`audio[data-key="${evt.code}"]`);
  const key = document.querySelector(`div[data-key="${evt.code}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function removeTransition(evt) {
  if (evt.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
