const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");

const stepTwoQuestion = document.getElementById("stepTwoQuestion");
const stepTwoOptions = document.getElementById("stepTwoOptions");


// Remember what the user chooses
let selectedAction = "";


// START BUTTON

startButton.addEventListener("click", function() {

    homeScreen.style.display = "none";

    stepOne.style.display = "flex";

});


// STEP 1 BUTTONS

const actionButtons = document.querySelectorAll(".option");

actionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedAction = button.dataset.action;

        showStepTwo();

    });

});


// SHOW STEP 2

function showStepTwo() {

    stepOne.style.display = "none";

    stepTwo.style.display = "flex";

    stepTwoOptions.innerHTML = "";


    if (selectedAction === "Compare") {

        stepTwoQuestion.textContent = "What are you comparing?";

        createOption("The two books");
        createOption("The two poems");
        createOption("The two passages");
        createOption("The two ideas");

    }


    else if (selectedAction === "Explain") {

        stepTwoQuestion.textContent = "What do you want explained?";

        createOption("The book");
        createOption("The poem");
        createOption("The passage");
        createOption("The concept");

    }


    else if (selectedAction === "Help me study") {

        stepTwoQuestion.textContent = "What are you studying?";

        createOption("The book");
        createOption("The poem");
        createOption("The study guide");
        createOption("My notes");
        createOption("The test");

    }


    else {

        stepTwoQuestion.textContent =
            "What would you like to work with?";

        createOption("The book");
        createOption("The poem");
        createOption("The passage");
        createOption("The topic");

    }

}


// CREATE A BUTTON

function createOption(text) {

    const button = document.createElement("button");

    button.classList.add("option");

    button.textContent = text;

    button.addEventListener("click", function() {

        alert("You selected: " + text);

    });

    stepTwoOptions.appendChild(button);

}
