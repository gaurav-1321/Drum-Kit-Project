let numberofbtn=document.querySelectorAll(".drum").length;

console.log(numberofbtn);

for(let i=0;i<numberofbtn;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var buttonInnerHTML=this.innerHTML;
   makeSound(buttonInnerHTML);
   buttononclick(buttonInnerHTML);
  })
}
function makeSound(key){
  switch(key){
    case "w":
      let tom1=new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
      case "a":
      let tom2=new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
      case "s":
      let tom3=new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
      case "d":
      let tom4=new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
      case "j":
      let snare=new Audio("./sounds/snare.mp3");
      snare.play();
      break;
      case "k":
      let kick=new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
      case "l":
      let crash=new Audio("./sounds/crash.mp3");
      crash.play();
      break;
  }
}
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttononclick(event.key);
  
});
function buttononclick(currentKey){
    let btn=document.querySelector("."+currentKey);

  if(btn){
    btn.classList.add("pressed");
    setTimeout(function(){
      btn.classList.remove("pressed");
    },200);
  }

}