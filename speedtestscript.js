
const sampleText = document.getElementById("sample-text").innerHTML;
const typingArea = document.getElementById("typing area");

let timer = 60;
let interval;
let started = false;

function startTest() {
    if (started) return;

    started = true;
    typingArea.disabled = false;
    typingArea.focus();
    typingArea.disables
    interval = setInterval(() => {
        timer--;
        document.getElementById("timer").innerHTML = timer;

        if (timer <= 0) {
            clearInterval(interval);
            typingArea.disabled = true;
            calculateResult();
        }
    }, 1000);
}

function calculateResult() {
    const typedText = typingArea.value;

    let correctChars = 0;
    let errors = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === sampleText[i]) {
            correctChars++;
        } else {
            errors++;
        }
    }

    const wordsTyped = typedText.trim().split(/\s+/).length;
    const wpm = wordsTyped;

    const accuracy = typedText.length > 0
        ? ((errors / typedText.length) * 100).toFixed(2)
        : 0;

    document.getElementById("wpm").innerHTML = wpm;
    document.getElementById("accuracy").innerText = accuracy;
    document.getElementById("cpm").innerText = errors;
    document.getElementById("errors").innerHTML = correctChars;
}

function resetTest() {
    clearInterval(interval);

    timer = 60;
    started = false;

    document.getElementById("timer").innerHTML = timer;
    document.getElementById("wpm").innerHTML = 0;
    document.getElementById("accuracy").innerHTML = 0;
    document.getElementById("errors").innerHTML = 0;
    document.getElementById("cpm").innerHTML = 0;

    typingArea.value = "";
    typingArea.disabled = true;
}

