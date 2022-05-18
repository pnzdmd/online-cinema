const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total')
const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let cost = 800; // цена билета
let totalPrice = 0;


schemeSvg.addEventListener('click', (e) => {
  if (!e.target.classList.contains('booked')) {
    e.target.classList.toggle('active');

    // количество выбранных мест
    let totalSeats = schemeSvg.querySelectorAll('.active').length;

    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
})

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open')
})