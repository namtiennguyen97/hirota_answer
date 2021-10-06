function soundMenu(){
    let mainMenuSound = $('#mainMenuSound')[0];
    mainMenuSound.play();
    mainMenuSound.loop();
}
function soundMenuStop(){
    let mainMenuSound = $('#mainMenuSound')[0];
    mainMenuSound.pause();
    mainMenuSound.currentTime = 0;
}