let audio = document.getElementById("cancion");
let play_btn = document.getElementById("play");
let pausa_btn = document.getElementById("pausa");
play_btn.addEventListener("click", () => {
    audio.play();
});
pausa_btn.addEventListener("click", () => {
    audio.pause();
});