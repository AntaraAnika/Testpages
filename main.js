const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    // links.forEach(link => {
    //     link.classList.toggle("fade");
    // })
});


// TYPING
const texts = ['Creativity'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
    }
    setTimeout(type, 400);

}());

// difference animation text
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 30);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade2');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
