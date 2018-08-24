function playAudio(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    sound.play();
    sound.currentTime = 0;
    key.classList.add('playing');
}

function removeClass(event){
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.remove("playing");
}

window.addEventListener('keydown', playAudio);
window.addEventListener('keyup', removeClass);