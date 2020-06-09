const container = document.querySelector('.container');
// Select all seats from a row not occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
// + beside it converts it to a number
let ticketPrice = +movieSelect.value;

// Save Selected Movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMovieProce', moviePrice);
}

// Update count and total
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Copy selected seats to an array
  // Map through the array (high order array map => similar to for each but returns an array), return the index of dom element seats (as above)
  // return a new array of indexes => spread operator [...]

  // const seatsIndex = [...selectedSeats].map((seat) => {
  //   return [...seats].indexOf(seat);
  // });
  // Because there is only one expression we can remove the return keyword and curleys
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  // console.log(seatsIndex);

  // Save to local storeage - String - Covert array to JSON.stringify
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount);
  // Update the count text
  count.innerText = selectedSeatsCount;
  // update the total: selectedSeatsCount * ticketPrice
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  // console.log(ticketPrice);
  // console.log(e.target.selectedIndex, e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click Event
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
