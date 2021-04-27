/* random color */
const balls = document.querySelectorAll('.ball');

function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
}

for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = generateRandomColor();
}

// ---------- function display one random color in rgb text ----------
const rgbText = document.querySelector('#rgb-color');

function getRandomColorToText() {
    const randomN = Math.floor(Math.random() * 6);
    const randomC = balls[randomN].style.backgroundColor;
    const randomCT = randomC.slice(3);
    rgbText.innerText = randomCT;
}

getRandomColorToText();

// ---------- function answer ----------
const answer = document.querySelector('#answer');

function checkAnswer(e) {
    const text = document.querySelector('#rgb-color');
    const textColor = `rgb${text.innerText}`;
    if (e.target.style.backgroundColor === textColor) {
        answer.innerText = 'Acertou!';
    } else {
        answer.innerText = 'Errou! Tente novamente!';
    }
    answer.style.backgroundColor = textColor;
}

for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', checkAnswer);
}
