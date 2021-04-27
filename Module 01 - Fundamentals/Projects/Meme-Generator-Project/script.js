/* add text on image */
const textInput = document.querySelector('#text-input');

function insertText() {
    const textImage = document.querySelector('#meme-text');
    textImage.innerText = textInput.value;
}

textInput.addEventListener('keyup', insertText);

/* function uploadImg */
const insert = document.querySelector('#meme-insert');

function uploadImg() {
    const image = document.querySelector('#meme-image img');
    image.src = URL.createObjectURL(insert.files[0]);
}

insert.addEventListener('change', uploadImg);
