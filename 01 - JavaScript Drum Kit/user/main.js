window.addEventListener('keydown', playSound);
function playSound(e) {
  // `${backticks}` for es6 template strings
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return // if there's no audio return func to break
  audio.currentTime = 0; // set audio current play time to start for repeating keystrokes
  audio.play();
  key.classList.add('playing');
  // don't use timeout to remove class since we are using css transition for it's own timeout functionality so we use a transitionEnd event see below for removing via classList again
}
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip if not transform
  this.classList.remove('playing')
 }
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));