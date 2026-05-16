function showFinalScreen(success) {

    document.body.innerHTML = `
    <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        font-family: Arial;
        background: ${success ? "linear-gradient(#fff, #ffe6f2)" : "#111"};
        color: ${success ? "#000" : "#fff"};
        flex-direction: column;
    ">

        <h1>${success ? "💖 CAPTURE COMPLETE 💖" : "💔 ESCAPED..."}</h1>

        <p style="max-width:300px;">
            ${success
            ? "A strong emotional bond has been formed."
            : "The heart resisted the capture... for now."}
        </p>

        <h2>Will you be my girlfriend? 💕</h2>

        <button>YES 💖</button>
        <button>YES 😳</button>
        <button>YES 💕</button>

    </div>
    `;
}