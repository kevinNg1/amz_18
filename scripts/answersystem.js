function answer(correct, text) {

    if (waitingForNext) return; // prevent spam clicks

    const enemy = document.querySelector(".enemy-sprite img");

    lastCorrect = correct;
    lastText = text;
    waitingForNext = true;

    document.getElementById("nextBtn").classList.add("show");

    document.body.classList.add("flash");
    setTimeout(() => document.body.classList.remove("flash"), 200);

    if (correct) {
        updateBond(+10, "correct");
        typeText(`💖 ${text} — It's super effective!`);

    } else {
        updateBond(-20, "wrong");
        typeText(`💔 ${text} missed! Emotional distance increased...`);
    }
}

function nextTurn() {

    document.getElementById("nextBtn").classList.remove("show");
    waitingForNext = false;

    qIndex++;

    if (qIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function updateBond(amount) {
    bond += amount;
    bond = Math.max(0, Math.min(100, bond));

    bondBar.style.width = bond + "%";
    bondText.innerText = bond + " / 100";

    bondBar.classList.add("bond-pulse");
    setTimeout(() => bondBar.classList.remove("bond-pulse"), 400);

    updateBondStateVisual();
}