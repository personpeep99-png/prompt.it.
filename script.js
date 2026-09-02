const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");
const stepOne = document.getElementById("stepOne");

startButton.addEventListener("click", function() {

    homeScreen.style.display = "none";

    stepOne.style.display = "flex";

});
