for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })
};


document.addEventListener("keydown", function(event) {
  makesound(event.key)
  buttonAnimation(event.key)
});



function makesound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log(this.innerHTML);
  }
};


function buttonAnimation(currentkey){
document.querySelector("."+ currentkey).classList.add("pressed");
setTimeout(function(){
  document.querySelector("."+currentkey).classList.remove("pressed");
},100);
}
