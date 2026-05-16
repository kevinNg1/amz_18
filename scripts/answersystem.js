function answer(correct, text) {

    if (waitingForNext) return; // prevent spam clicks

    const enemy = document.querySelector(".enemy-sprite img");

    lastCorrect = correct;
    lastText = text;
    waitingForNext = true;

    document.getElementById("nextBtn").classList.remove("hidden");

    document.body.classList.add("flash");
    setTimeout(() => document.body.classList.remove("flash"), 200);

    if (correct) {
        hp += 10;
        dialogue.innerText = `💖 ${text} — It's super effective!`;

        enemy.classList.add("hit");
        setTimeout(() => enemy.classList.remove("hit"), 300);

    } else {
        hp -= 20;
        dialogue.innerText = `💔 ${text} missed! Emotional damage!`;

        document.body.classList.add("shake");
        setTimeout(() => document.body.classList.remove("shake"), 300);
    }

    hp = Math.max(0, Math.min(100, hp));

    document.getElementById("enemyHp").style.width = hp + "%";
    document.getElementById("enemyHpText").innerText = hp + " / 100";
}

function nextTurn() {

    document.getElementById("nextBtn").classList.add("hidden");
    waitingForNext = false;

    qIndex++;

    if (qIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}