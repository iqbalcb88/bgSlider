const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

let currentIndex = 0;
rightBtn.addEventListener('click', function () {
  if (currentIndex === slides.length - 1) {
    currentIndex = -1;
  }
  /* slides.forEach((slide) => {
    if (slide.classList.contains('active')) {
      currentIndex++;
    }
  }); */
  currentIndex++;
  // console.log(currentIndex);
  getSliding();
});
leftBtn.addEventListener('click', function () {
  if (currentIndex === 0) {
    currentIndex = slides.length;
  }
  /* slides.forEach((slide) => {
    if (slide.classList.contains('active')) {
      currentIndex--;
    }
  }); */
  currentIndex--;
  console.log(currentIndex);

  getSliding();
});

function getSliding() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[currentIndex].classList.add('active');
  body.setAttribute('style', slides[currentIndex].getAttribute('style').trim());
}

(function () {
  const interval = setInterval(() => {
    if (currentIndex === slides.length - 1) {
      currentIndex = -1;
    }
    currentIndex++;
    getSliding();
  }, 2000);

  setTimeout(() => {
    clearInterval(interval);
  }, 2000 * 60);
})();
