function updateHP() {
    hp = Math.max(0, Math.min(100, hp));
    hpBar.style.width = hp + "%";
    hpText.innerText = hp + " / 100";
}

function setDialogue(text) {
    if (!messageLocked) {
        dialogue.innerText = text;
    }
}

function flashScreen() {
    document.body.classList.add("flash");
    setTimeout(() => document.body.classList.remove("flash"), 200);
}

function shakeEnemy() {
    enemyImg.classList.add("hit");
    setTimeout(() => enemyImg.classList.remove("hit"), 300);
}

function typeText(text, speed = 25) {
    const el = document.getElementById("dialogue");
    el.innerText = "";

    let i = 0;

    function step() {
        if (i < text.length) {
            const char = text[i];

            // preserve spaces explicitly (important for visual clarity)
            el.innerText += char === " " ? " " : char;

            i++;
            setTimeout(step, speed);
        }
    }

    step();
}