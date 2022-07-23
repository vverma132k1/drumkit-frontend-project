
 
// DETECTING MOUSE CLICKS ON THE BUTTONS 
// here we are adding event listner on all the buttons with the class .drum 
// whenever this "click" event occurs then this function written in this will automatically be triggered 
var numberofdrums = 7;
for (let i = 0; i < numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// DETECTING KEYBOARD PRESS ON THE WHOLE PAGE
// here we will add the event listener to the complete page instead of any specific element
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key) {

    switch (key) {
        case "w":
            var myaudio1 = new Audio("sounds/crash.mp3");
            myaudio1.play();
            break;

        case "a":
            var myaudio2 = new Audio("sounds/tom-2.mp3");
            myaudio2.play();
            break;

        case "s":
            var myaudio3 = new Audio("sounds/tom-3.mp3");
            myaudio3.play();
            break;

        case "d":
            var myaudio4 = new Audio("sounds/tom-4.mp3");
            myaudio4.play();
            break;

        case "j":
            var myaudio5 = new Audio("sounds/tom-1.mp3");
            myaudio5.play();
            break;

        case "k":
            var myaudio6 = new Audio("sounds/kick-bass.mp3");
            myaudio6.play();
            break;

        case "l":
            var myaudio7 = new Audio("sounds/snare.mp3");
            myaudio7.play();
            break;

    }
}

function buttonAnimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");
    // now this will remain in the pressed effect if dont remove this class, so to do that we will use a time out function and after some time we will remove this class from the element

    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);
}