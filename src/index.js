import './index.css';
import kongoGumiIntro from './assets/kongo-gumi-intro.jpg';
import princeShotoku from './assets/prince-Shotoku.jpg';
import shitennoJi from './assets/shitenno-ji.jpg';
import osakaCastle from './assets/osaka-castle.jpg';
import kongoGumiWorkers from './assets/kongo-gumi-workers.jpg';
import yoshieKongo from './assets/yoshie-kongo.jpg';
import seigantoJi from './assets/seiganto-ji.jpg';
import horuyoJi from './assets/horuy-ji.png';

const body = document.body;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = Array.from(document.getElementsByClassName("dot"));

prevButton.addEventListener('click', () => {
  plusSlides(-1);
});
nextButton.addEventListener('click', () => {
  plusSlides(1);
});

body.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') plusSlides(-1);
  if (event.key === 'ArrowRight') plusSlides(1);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide(index + 1);
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
