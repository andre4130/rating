//Ejercicio Rating codigo JS

function rate(rating){
  for (var i = 0; i < rating; i++) {

    play = document.getElementById(i+1);
    play.classList.remove("rate")
    play.classList.add("rated")
  }
  console.log("Your Rating was "+rating);
};
window.addEventListener('click', function(e){
  if (document.getElementById('rating').contains(e.target)){
    console.log("Rated!")
  } else{
    for (var i = 0; i < 5; i++) {
      play = document.getElementById(i+1);
      play.classList.remove("rated")
      play.classList.add("rate")
    }
    console.log("Rating reset");
  }
});
