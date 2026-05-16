function loadQuestion() {
    const q = questions[qIndex];

    document.getElementById("question").innerText = q.q;

    let html = "";

    q.a.forEach(opt => {
        html += `
        <button class="action-btn" onclick="answer(${opt.correct}, '${opt.text}')">
            ${opt.text}
        </button>`;
    });

    document.getElementById("answers").innerHTML = html;

    typeText("Choose your answer...");
}