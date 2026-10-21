const studyTimeInput = document.querySelector('#studyTime');
const startButton = document.querySelector('#startButton');
const resultParagraph = document.querySelector('#result');


startButton.addEventListener("click", function() {
    const studyTime = parseInt(studyTimeInput.value);
    const result = document.getElementById("result");

    if (studyTime < 0) {
        result.textContent = "error!";
    } else if (studyTime >= 0 && studyTime <= 24) {
        result.textContent = "Keep going!";
    }
     else if (studyTime >= 25 && studyTime <= 49) {
        result.textContent = "Take a 5-minute break!";
    } else if (studyTime >= 50 && studyTime <= 89) {
        result.textContent = "Take a 10-minute break!";
    } else if (studyTime >= 90) {
        result.textContent = "Take a longer break!";
    } else {
        result.textContent = "error!";
    }

    console.log(studyTime);
});