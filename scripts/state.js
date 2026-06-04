let hp = 100;
let qIndex = 0;
let messageLocked = false;
let waitingForNext = false;
let lastCorrect = null;
let lastText = "";
let battleState = "WAITING"; 
let bond = 50;
let displayBond = 50;

const bondBar = document.getElementById("bondBar");
const bondText = document.getElementById("bondText");

function updateBond(amount, type = "normal") {

    const previous = bond;
    bond = Math.max(0, Math.min(100, bond + amount));

    // ❌ WRONG ANSWER = smooth decay
    if (type === "wrong") {
        animateBondTo(bond, 0.05);
        return;
    }

    // 💖 CORRECT ANSWER = quick dip then rise
    if (type === "correct") {

        // quick reaction dip first
        animateBondTo(previous - 5, 0.25);

        setTimeout(() => {
            animateBondTo(bond, 0.08);
        }, 250);

        return;
    }

    // default
    animateBondTo(bond, 0.08);
}

function typeText(text, speed = 25) {
    const el = document.getElementById("dialogue");
    el.innerText = "";
    messageLocked = true;

    let i = 0;

    function step() {
        if (i < text.length) {
            el.innerText += text[i];
            i++;
            setTimeout(step, speed);
        } else {
            messageLocked = false;
        }
    }

    step();
}

function updateBondStateVisual() {

    document.body.classList.remove(
        "bond-low",
        "bond-mid",
        "bond-high",
        "bond-max"
    );

    if (bond < 30) {
        document.body.classList.add("bond-low");
    } 
    else if (bond < 60) {
        document.body.classList.add("bond-mid");
    } 
    else if (bond < 85) {
        document.body.classList.add("bond-high");
    } 
    else {
        document.body.classList.add("bond-max");
    }
}

function animateBondTo(target, speed = 0.02) {

    function step() {
        displayBond += (target - displayBond) * speed;

        bondBar.style.width = displayBond + "%";
        bondText.innerText = Math.round(displayBond) + " / 100";

        if (Math.abs(target - displayBond) > 0.5) {
            requestAnimationFrame(step);
        } else {
            displayBond = target;
            bondBar.style.width = target + "%";
            bondText.innerText = target + " / 100";
        }
    }

    step();
}