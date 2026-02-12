const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

const messages = [
    "Bist du sicher?",
    "Wirklich sicher??",
    "Denk nochmal drüber nach...",
    "Pookie, bitte!",
    "Du machst mich traurig :(",
    "Ich werde weinen...",
    "LETZTE CHANCE!"
];

let messageIndex = 0;

noBtn.addEventListener('click', () => {
    // 1. Text des Nein-Buttons ändern
    noBtn.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // 2. Ja-Button größer machen
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.5) + "px";
    yesBtn.style.padding = (currentSize * 0.8) + "px " + (currentSize * 1.5) + "px";
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});