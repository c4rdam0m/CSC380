const button1 = document.getElementById('submit1');
const section1 = document.getElementById('aboutSect');

button1.addEventListener('click', () => {
    section1.scrollIntoView({ behavior: 'smooth'}); });

const button2 = document.getElementById('submit2');
const section2 = document.getElementById('projSect');

button2.addEventListener('click', () => {
    section2.scrollIntoView({ behavior: 'smooth'}); });