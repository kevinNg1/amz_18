function showFinalScreen(success) {

    console.log("FINAL SCREEN:", success);

    const endScreen = document.getElementById("endScreen");
    const successCard = document.getElementById("successCard");
    const failCard = document.getElementById("failCard");

    // safety check (THIS catches 90% of bugs)
    if (!endScreen || !successCard || !failCard) {
        console.error("End screen elements missing!");
        return;
    }

    endScreen.classList.remove("hidden");

    requestAnimationFrame(() => {
        endScreen.classList.add("active");
    });

    if (success) {
        successCard.classList.add("active");
        failCard.classList.remove("active");
    } else {
        failCard.classList.add("active");
        successCard.classList.remove("active");
    }
}

function startGame() {

    const splash = document.getElementById("splashScreen");
    const launch = document.getElementById("launchScreen");
    const game = document.getElementById("game");

    splash.classList.add("fade-out");

    setTimeout(() => {

        splash.classList.add("hidden");

        launch.classList.remove("hidden");
        launch.classList.add("active");

        runLaunchSequence();

    }, 600);
}

function runLaunchSequence() {

    const status = document.getElementById("launchStatus");
    const launch = document.getElementById("launchScreen");
    const game = document.getElementById("game");
    const flash = document.getElementById("screenFlash");

    setTimeout(() => {
        status.innerText = "Checking DLC...";
    }, 2000);

    setTimeout(() => {
        status.innerText = "Loading relationship data...";
    }, 2000);

    setTimeout(() => {
        status.innerText = "Preparing Love Battle...";
    }, 2000);

    setTimeout(() => {

        // ⚡ TRIGGER FLASH HERE (THIS IS THE KEY MOMENT)
        flash.classList.remove("active");
        void flash.offsetWidth;
        flash.classList.add("active");

        setTimeout(() => {

            // hide launch screen
            launch.classList.add("hidden");

            // show game
            game.classList.add("active");

        }, 350);

    }, 3200);
}

function restartGame() {

    // reset core state
    bond = 50;
    qIndex = 0;
    waitingForNext = false;
    messageLocked = false;

    // reset UI visibility
    document.getElementById("endScreen").classList.add("hidden");
    document.getElementById("cinematic").classList.add("hidden");

    // reset bond UI
    animateBondTo(50, 1);

    // reset dialogue
    setDialogue("A wild emotional battle begins...");

    // reload first question
    loadQuestion();
}

function acceptChoice() {
    const stamp = document.getElementById("resultStamp");
    const anniversary = document.getElementById("anniversary");

    document.querySelector(".end-buttons.row").style.display = "none";

    setTimeout(() => {
        stamp.classList.remove("hidden");
        stamp.classList.add("show");
    }, 400);

    setTimeout(() => {
        anniversary.classList.remove("hidden");
        anniversary.classList.add("show");
    }, 1200);
}

function closeCinematicAndShow(success) {

    cinematic.classList.add("hidden");

    setTimeout(() => {
        showFinalScreen(success);
    }, 500); // matches CSS transition
}