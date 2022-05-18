const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total')
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