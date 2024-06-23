const intro = document.querySelector('.intro');
const greeting = document.querySelector('.greeting');
const descriptor = document.querySelector('#descriptor');
let animationInterval;

function introAnimation() {
    const descriptions = ['Student','Hobbyist','Future Developer'];
    let current = 0;

    setTimeout(() => {
        greeting.scrollIntoView({ behavior: 'smooth' });
    }, 1000)

    animationInterval = setInterval(() => {
        descriptor.textContent = descriptions[current];
        current = (current + 1) % 3;
    }, 1500);
}

introAnimation();

function doIt() {
    const body = document.querySelector('body');
    const description = document.querySelector('#descriptor_call');

    intro.textContent = 'I can do it.';
    intro.scrollIntoView();
    body.classList.add('white-theme');
    descriptor.classList.add('white-color');

    setTimeout(() => {
        intro.innerHTML = `I <span class='highlight-color'>will</span> do it!`;
    }, 1000);

    setTimeout(() => {
        greeting.scrollIntoView();
        clearInterval(animationInterval);
        description.textContent = "I am a ";
        descriptor.textContent = 'Future Developer';
    }, 2000);

    setTimeout(() => {
        description.textContent = "I will be a ";
        descriptor.textContent = "Developer";
    }, 3000);
}