
// var tom1 = new Audio("sounds/tom-1.mp3");
// var tom2 = new Audio("sounds/tom-2.mp3");
// var tom3 = new Audio("sounds/tom-3.mp3");
// var tom4 = new Audio("sounds/tom-4.mp3");
// var snare = new Audio("sounds/snare.mp3");
// var kick = new Audio("sounds/kick-bass.mp3");
// var crash = new Audio("sounds/crash.mp3");
 
// document.querySelector(".w").addEventListener("click",function(){snare.play()});
// document.querySelector(".s").addEventListener("click",function(){kick.play()});
// document.querySelector(".l").addEventListener("click",function(){crash.play()});
// document.querySelector(".a").addEventListener("click",function(){tom1.play()});
// document.querySelector(".d").addEventListener("click",function(){tom2.play()});
// document.querySelector(".k").addEventListener("click",function(){tom3.play()});
// document.querySelector(".j").addEventListener("click",function(){tom4.play()});

var numberOfButtons = document.querySelectorAll(".btn").length;

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        makeAnimation(buttonInnerHtml);
        
    });
}

document.addEventListener("keydown",function(event){

    var pressedChar = event.key;

    makeSound(pressedChar);
    makeAnimation(pressedChar);

});

function makeSound(key){
    switch (key) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();                
            break;
        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();                
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();                
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();                
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();                
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();                
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();                
            break;
            
    
        default:
            break;
    }
}

function makeAnimation(ckey){

    var activeButton = document.querySelector("."+ckey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}