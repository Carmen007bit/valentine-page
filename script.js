const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');
const mainGif = document.getElementById('main-gif');

// Sätze, die erscheinen, wenn man auf "Nein" klickt
const messages = [
    "Bist du sicher?",
    "Wirklich sicher??",
    "Denk nochmal drüber nach...",
    "Liebling, bitte!",
    "Du machst mich traurig :(",
    "Ich werde weinen...",
    "Komm schon, sag ja! ❤️"
];

// GIFs, die passend zu den Sätzen wechseln
const gifs = [
    "https://media.tenor.com/9C9XUshv_mMAAAAi/milk-and-mocha.gif",
    "https://media.tenor.com/7S_3Uv5KzV0AAAAi/milk-and-mocha-bear.gif",
    "https://media.tenor.com/I76f9Ya9S7EAAAAi/milk-and-mocha-bear.gif",
    "https://media.tenor.com/vH_fMv7v678AAAAi/milk-and-mocha-bear.gif",
    "https://media.tenor.com/9nF_Xy19f-0AAAAi/milk-and-mocha-bear.gif"
];

let messageIndex = 0;
let scale = 1; // Start-Größe für den Ja-Button

noBtn.addEventListener('click', () => {
    // 1. Text ändern
    noBtn.innerText = messages[messageIndex % messages.length];
    
    // 2. Gif ändern
    mainGif.src = gifs[messageIndex % gifs.length];
    
    messageIndex++;

    // 3. Ja-Button dramatisch wachsen lassen (exponentiell)
    scale += 0.4;
    yesBtn.style.transform = `scale(${scale})`;
    
    // 4. Den Nein-Button leicht wegschieben, damit der Ja-Button Platz hat
    noBtn.style.marginLeft = `${scale * 10}px`;
});

yesBtn.addEventListener('click', () => {
    // Alles verstecken und Erfolgs-Seite zeigen
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
    
    // Konfetti-Regen!
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ffffff']
    });
});
