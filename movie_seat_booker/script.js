// querySelector - Selects one (1st found)
// querySelectorAll - Selects all and stores in an array (node list)
const container = document.querySelector('.container');
// Select all seats from a row not occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// Get the ticket price from the selected movie
const ticketPrice = +movieSelect.value;

console.log(container);
console.log(seats);
console.log(count);
console.log(total);
console.log(movieSelect);
console.log(ticketPrice);
console.log(typeof ticketPrice);

// Add an Event listener - Clicking on a seat - change class
//  Add event listener on the container and check if the click is on a seat => Use arrow function
container.addEventListener('click', (e) => {
  // This will show what is element is clicked on within the container
  console.log(e.target);
});
