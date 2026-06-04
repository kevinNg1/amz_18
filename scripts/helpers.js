function updateBondUI() {
    bondBar.style.width = bond + "%";
    bondText.innerText = bond + " / 100";
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