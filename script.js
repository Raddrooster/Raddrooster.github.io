// Typing effect for the home section
const typingElement = document.getElementById('typing');
const words = ['Information Systems Security Officer.', 'Java Developer.', 'Helpdesk Specialist.', 'Cybersecurity Enthusiast.'];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;
let isEnd = false;

function type() {
    if (wordIndex === words.length) {
        wordIndex = 0;
    }
    currentWord = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, letterIndex--);
        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, letterIndex++);
        if (letterIndex === currentWord.length) {
            isEnd = true;
            isDeleting = true;
        }
    }
    const speed = isEnd ? 2000 : isDeleting ? 100 : 200;
    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', type);
