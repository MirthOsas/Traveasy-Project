const hamburger = document.querySelector('.hamburger');
const closeMobileNav = document.querySelector('.close');
const mainNav = document.querySelector('.main-nav');
const backdrop = document.querySelector('.backdrop');

let buttonLeft = document.getElementById('slide-left');
let buttonRight = document.getElementById('slide-right');
let country = document.getElementsByClassName('country');
let countryPage = Math.ceil(country.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    // closeMobileNav.classList.toggle('show');
    mainNav.style.display = 'flex';
    backdrop.style.display = 'block';
});

closeMobileNav.addEventListener('click', () => {
    mainNav.style.display = 'none';
    hamburger.style.display = 'block';
    backdrop.style.display = 'none';
    
});

backdrop.addEventListener('click', () => {
    mainNav.style.display = 'none';
    hamburger.style.display = 'block';
    backdrop.style.display = 'none';
});

// mobile view for carousel slider 
let mobileView = window.matchMedia("(max-width: 764px)");
if (mobileView.matches) {
    movePer = 25.36;
    maxMove =504;
};

let rightMover = () => {
    l = l + movePer;
    if (country === 1) {l = 0};
    for (const i of country) {
        if (l > maxMove) {l = l + movePer}
        i.style.left = '-' + l + '%';
    }
};

let leftMover = () => {
    l = l - movePer;
    if (l<=0) {l=0;};
    for (const i of country) {
        if (countryPage > 1)
        i.style.left = '-' + l + '%';
    }
};

buttonRight.onclick = () => {rightMover();}
buttonLeft.onclick = () => {leftMover();}



