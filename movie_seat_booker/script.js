const container = document.querySelector('.container');
// Select all seats from a row not occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
// + beside it converts it to a number
const ticketPrice = +movieSelect.value;

// Update count and total
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount);
  // Update the count text
  count.innerText = selectedSeatsCount;
  // update the total: selectedSeatsCount * ticketPrice
  total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click', (e) => {
  // This will show what is element is clicked on within the container
  // console.log(e.target);
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    // console.log('Available seat selected');
    // Add 'selected' class(toggle -on/off)
    e.target.classList.toggle('selected');
    // Update the count in the span text(dom => count)
    updateSelectedCount();
  }
});
