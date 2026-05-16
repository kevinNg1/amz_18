function endGame() {

    const cinematic = document.getElementById("cinematic");
    const cinText = document.getElementById("cinText");

    cinematic.classList.remove("hidden");

    let attempts = 0;

    cinText.innerText = "⚡ Initiating Love Ball capture...";

    function shakeFlashCycle() {

        cinematic.classList.add("active-flash");
        cinematic.classList.add("active-shake");

        setTimeout(() => {
            cinematic.classList.remove("active-flash");
            cinematic.classList.remove("active-shake");
        }, 300);

        attempts++;

        if (attempts < 3) {
            setTimeout(shakeFlashCycle, 3000);
        } else {
            setTimeout(resolveCapture, 3000);
        }
    }

    setTimeout(shakeFlashCycle, 800);

    function resolveCapture() {

        const success = hp >= 60;

        const ball = document.querySelector(".cinematic-ball img");
        if (ball) ball.style.animation = "none";

        if (success) {
            cinText.innerText = "💖 Capture successful...";

            setTimeout(() => {
                cinematic.classList.add("open");
                showFinalScreen(true);
            }, 1200);

        } else {
            cinText.innerText = "💔 Oh no... she broke free!";

            setTimeout(() => {
                cinematic.classList.add("fail");
                showFinalScreen(false);
            }, 1200);
        }
    }
}