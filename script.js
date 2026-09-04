const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const materialStep = document.getElementById("materialStep");
const whyStep = document.getElementById("whyStep");
const howStep = document.getElementById("howStep");
const finalStep = document.getElementById("finalStep");

const finalPrompt = document.getElementById("finalPrompt");

const copyButton = document.getElementById("copyButton");

const restartButton = document.getElementById("restartButton");

const copyMessage = document.getElementById("copyMessage");

const stepTwoQuestion = document.getElementById("stepTwoQuestion");
const stepTwoOptions = document.getElementById("stepTwoOptions");

const materialQuestion = document.getElementById("materialQuestion");
const materialInputs = document.getElementById("materialInputs");
const materialNext = document.getElementById("materialNext");

const skipWhy = document.getElementById("skipWhy");
const skipHow = document.getElementById("skipHow");

// Remember the user's choices

let selectedAction = "";
let selectedMaterial = "";
let selectedPurpose = "";
let selectedStyle = "";

let materialNames = [];

// START

startButton.addEventListener("click", function() {

    homeScreen.style.display = "none";
    stepOne.style.display = "flex";

});


// STEP 1

const actionButtons = document.querySelectorAll("#stepOne .option");

actionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedAction = button.dataset.action;

        showStepTwo();

    });

});


// STEP 2

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


// CREATE STEP 2 BUTTON

function createOption(text) {

    const button = document.createElement("button");

    button.classList.add("option");

    button.textContent = text;

    button.addEventListener("click", function() {

        selectedMaterial = text;

        showMaterialInput();

    });

    stepTwoOptions.appendChild(button);

}


// MATERIAL INPUT

function showMaterialInput() {

    stepTwo.style.display = "none";
    materialStep.style.display = "flex";

    materialInputs.innerHTML = "";


    if (selectedMaterial === "The two books") {

        materialQuestion.textContent = "Which two books?";

        createInput("Book 1", "book1");
        createInput("Book 2", "book2");

    }

    else if (selectedMaterial === "The two poems") {

        materialQuestion.textContent = "Which two poems?";

        createInput("Poem 1", "poem1");
        createInput("Poem 2", "poem2");

    }

    else if (selectedMaterial === "The two passages") {

        materialQuestion.textContent = "Which two passages?";

        createInput("Passage 1", "passage1");
        createInput("Passage 2", "passage2");

    }

    else {

        materialQuestion.textContent =
            "What are you working with?";

        createInput("Name or describe it", "material");

    }

}


// CREATE INPUT

function createInput(labelText, inputID) {

    const container = document.createElement("div");

    container.classList.add("input-container");


    const label = document.createElement("label");

    label.textContent = labelText;

    label.setAttribute("for", inputID);


    const input = document.createElement("input");

    input.id = inputID;
    input.type = "text";
    input.placeholder = "Type here...";


    container.appendChild(label);
    container.appendChild(input);

    materialInputs.appendChild(container);

}


// NEXT BUTTON

materialNext.addEventListener("click", function() {

    materialNames = [];

    const inputs = materialInputs.querySelectorAll("input");

    inputs.forEach(function(input) {

        if (input.value.trim() !== "") {
            materialNames.push(input.value.trim());
        }

    });

    materialStep.style.display = "none";

    whyStep.style.display = "flex";

});
const whyButtons = document.querySelectorAll("#whyOptions .option");

whyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedPurpose = button.dataset.purpose;

        finishPrompt();

    });

});
skipWhy.addEventListener("click", function() {

    selectedPurpose = "";

    finishPrompt();

});
function finishPrompt() {

    whyStep.style.display = "none";

    howStep.style.display = "flex";

}
const howButtons = document.querySelectorAll("#howOptions .option");

howButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedStyle = button.dataset.style;

        buildPrompt();

    });

});
skipHow.addEventListener("click", function() {

    selectedStyle = "";

    buildPrompt();

});
function buildPrompt() {

    howStep.style.display = "none";
    finalStep.style.display = "flex";

    let prompt = "";

    const purpose = selectedPurpose;
    const style = selectedStyle;


    // =========================
    // COMPARE
    // =========================

    if (selectedAction === "Compare") {

        if (selectedMaterial === "The two books") {

            prompt =
                "I'm " +
                (purpose ? purpose.toLowerCase() : "trying to better understand these books") +
                " and I'd like to compare " +
                materialNames[0] +
                " and " +
                materialNames[1] +
                ". ";

            prompt +=
                "Focus on their major themes, characters, similarities, and differences. ";

        }

        else if (selectedMaterial === "The two poems") {

            prompt =
                "I'd like to compare " +
                materialNames[0] +
                " and " +
                materialNames[1] +
                ". ";

            prompt +=
                "Focus on their themes, tone, literary devices, similarities, and differences. ";

        }

        else if (selectedMaterial === "The two passages") {

            prompt =
                "I'd like to compare these two passages: " +
                materialNames[0] +
                " and " +
                materialNames[1] +
                ". ";

            prompt +=
                "Focus on their main ideas, similarities, differences, and important details. ";

        }

        else {

            prompt =
                "I'd like to compare " +
                materialNames.join(" and ") +
                ". ";

        }

    }


    // =========================
    // EXPLAIN
    // =========================

    else if (selectedAction === "Explain") {

        prompt =
            "I'd like to better understand " +
            materialNames[0] +
            ". ";

        prompt +=
            "Explain the most important ideas, details, and concepts I should know. ";

    }


    // =========================
    // HELP ME STUDY
    // =========================

    else if (selectedAction === "Help me study") {

        prompt =
            "Help me study " +
            materialNames[0] +
            ". ";

        prompt +=
            "Review the most important information I should know and help me check my understanding. ";

    }


    // =========================
    // OTHER ACTIONS
    // =========================

    else {

        prompt =
            selectedAction +
            " " +
            materialNames.join(" and ") +
            ". ";

    }


    // =========================
    // PURPOSE
    // =========================

    if (purpose) {

        prompt +=
            "I'm doing this " +
            purpose.toLowerCase() +
            ". ";

    }


    // =========================
    // RESPONSE STYLE
    // =========================

    if (style) {

        prompt +=
            style +
            ". ";

    }


    // Final cleanup

    prompt = prompt.trim();

    finalPrompt.textContent = prompt;

}


    finalPrompt.textContent = prompt;

}
restartButton.addEventListener("click", function() {

    location.reload();

});
