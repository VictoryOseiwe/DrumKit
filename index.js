var buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "b":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "c":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "e":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "f":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "g":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}