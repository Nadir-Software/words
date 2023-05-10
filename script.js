const container = document.querySelector('.container');
const word = document.querySelector('.word');

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


function getRandomGradient() {
    const gradients = [
        'linear-gradient(to right, #ff416c, #ff4b2b)',
        'linear-gradient(to right, #1c92d2, #f2fcfe)',
        'linear-gradient(to right, #74ebd5, #ACB6E5)',
        'linear-gradient(to right, #f2709c, #ff9472)',
        'linear-gradient(to right, #43cea2, #185a9d)',
        'linear-gradient(to right, #ff512f, #dd2476)',
        'linear-gradient(to right, #4facfe, #00f2fe)',
        'linear-gradient(to right, #f12711, #f5af19)',
        'linear-gradient(to right, #fc5c7d, #6a82fb)',
        'linear-gradient(to right, #8360c3, #2ebf91)'
    ];
    return gradients[getRandomNumber(gradients.length)];
}

async function getEnglishWords() {
    const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt');
    const text = await response.text();
    const words = text.split('\n').filter(word => word.match(/^[a-z]+$/i));
    return words;
}

async function generateRandomWord() {
    const englishWords = await getEnglishWords();
    var randomWord = "DUMMY TEXT";
    
    while (!/^[a-z]+$/.test(randomWord)) {
        randomWord = englishWords[getRandomNumber(englishWords.length)];
    }

    word.innerHTML = randomWord;
    container.style.background = getRandomGradient();
}

generateRandomWord();
