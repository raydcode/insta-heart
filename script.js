const heart = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

const createHeart = (event) => {
  const clickHeart = document.createElement('i');
  clickHeart.classList.add('fas');
  clickHeart.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  const innerX = x - leftOffset;
  const innerY = y - topOffset;

  clickHeart.style.left = `${innerX}px`;
  clickHeart.style.top = `${innerY}px`;

  times.innerHTML = ++timesClicked;

  heart.appendChild(clickHeart);
  setTimeout(() => clickHeart.remove(), 1000);
};

heart.addEventListener('click', (event) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(event);
    } else {
      clickTime = new Date().getTime();
    }
  }
});
