
for (var i = 0; i <  document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonanime(buttonInnerHTML);



  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonanime(event.key);


});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}
//what we have done is class === event.keys so wecan write one function to do it all
// which takes one parameter as keys and we pass a parsmeter event.keys for kes pressed
// and this.innerHTML for the html inside the numberOfDrumButtons
// the case aterbute makes the sounds for the class ..
// and it is obvious that we have looped though all instances of the keyword .drum to adress all the drum plates
function buttonanime(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
//this is a animation function ..
//which adds a class and then renoves it
//buy yje timeout method
