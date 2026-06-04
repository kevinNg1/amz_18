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

    splash.classList.remove("active");

    setTimeout(() => {
        splash.remove();
    }, 400);
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