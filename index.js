let selectedNumber= document.querySelectorAll(".drum").length;

//for handling the keypress
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAminamtion(event.key);
})
//for handling clicks
for(let i=0;i<=selectedNumber;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    let buttonListener = this.innerHTML;
    makeSound(buttonListener);
    buttonAminamtion(buttonListener);

  });
}
function makeSound(key){
  switch (key) {
    case "w":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  }
}

function buttonAminamtion(currentButton){
  let actionButton=document.querySelector("."+currentButton);
  actionButton.classList.add("pressed");
  setTimeout(function(){
    actionButton.classList.remove("pressed")
  },100);
}
