const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.ocuupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value
//All functions

//Function to update count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
const countSelectedSeats = selectedSeats.length;
count.innerText = countSelectedSeats;
total.innerText = ticketPrice * countSelectedSeats;
}
//Adding EventListener for Change on Select Movie dropdown 
movieSelect.addEventListener( 'change' , e =>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
    }
)


//Adding EventListener for click on Available Seats Selected
container.addEventListener( 'click' , (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})
