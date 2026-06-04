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

        const success = bond >= 50;

        const ball = document.querySelector(".cinematic-ball img");
        if (ball) ball.style.animation = "none";

        if (success) {

            handleSuccess();

        } else {

            handleFail();
        }
    }

    function handleSuccess() {

        cinText.innerText = "Capture successful...";

        setTimeout(() => {

            cinematic.classList.add("open");

            setTimeout(() => {
                closeCinematicAndShow(true);
            }, 800);

        }, 1200);
    }

    function handleFail() {

        cinText.innerText = "Oh no... she broke free!";

        setTimeout(() => {

            cinematic.classList.add("fail");

            setTimeout(() => {
                closeCinematicAndShow(false);
            }, 800);

        }, 1200);
    }
}