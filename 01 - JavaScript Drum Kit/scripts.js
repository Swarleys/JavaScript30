function playSound(e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio) return; // Stop the function from running
   audio.currentTime = 0; // rewind to the start, so we can play the audio without finishing the sound
   audio.play();
   key.classList.add("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

function removeTransition(e){
   if(e.propertyName !== "transform") return; //skip it if it's not a transform
   this.classList.remove("playing");
}

for (const key of keys) {
   key.addEventListener("transitionend", removeTransition);
}
