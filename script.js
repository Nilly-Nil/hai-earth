const cards = Array.from(document.querySelectorAll('.device-card'));
let index = 0;

function rotateCards() {
  cards[index].classList.remove('active');
  index = (index + 1) % cards.length;
  cards[index].classList.add('active');
}

setInterval(rotateCards, 3200);
