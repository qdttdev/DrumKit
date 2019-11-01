function buttonAnimation(buttonLetter_)
{
    // Get activeButton class name
    var activeButton = document.querySelector("." + buttonLetter_);

    // Add class ".pressed" to the tag
    activeButton.classList.add("pressed");

    setTimeout(function() // Set timer
    {
        activeButton.classList.remove("pressed"); // Remove class when done
    }, 100);
}

function makeSound (buttonLetter_)
{
    // Execute tasks for each button using SWITCH statements
    switch (buttonLetter_) {

        case "w":   audio_w = new Audio("sounds/crash.mp3");
                    audio_w.play();            
            break;

        case "a":   audio_a = new Audio("sounds/kick-bass.mp3");
                    audio_a.play();            
            break;

        case "s":   audio_s = new Audio("sounds/snare.mp3");
                    audio_s.play();            
            break;

        case "d":   audio_d = new Audio("sounds/tom-1.mp3");
                    audio_d.play();            
            break;

        case "j":   audio_j = new Audio("sounds/tom-2.mp3");
                    audio_j.play();            
            break;

        case "k":   audio_k = new Audio("sounds/tom-3.mp3");
                    audio_k.play();            
            break;

        case "l":   audio_l = new Audio("sounds/tom-4.mp3");
                    audio_l.play();            
            break;

        default: console.log(buttonLetter_);
            break;

    } // END switch(buttonLetter)
} // END function makeSound (buttonLetter_)

var buttonNum = document.querySelectorAll(".drum").length;

for(var i = 0; i < buttonNum; i++)
{
    /************************************************************************* 
     **                 WHAT HAPPENS WHEN WE CLICK THE BUTTON               **   
     *************************************************************************/
    // addEventListener is added to specific buttons
     document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var buttonLetter = this.innerHTML;  // Get buttonLetter for SWITCH      // Change text into white
        makeSound(buttonLetter);
        buttonAnimation(buttonLetter);
    
    }); // END addEventListener/click

    /************************************************************************* 
     **                 WHAT HAPPENS WHEN WE PRESS THE KEYS                 **   
     *************************************************************************/
    // addEventListener is added to the entire document
     document.addEventListener("keypress", function (event)
    {
        var keyPress = event.key;
        makeSound(keyPress);
        buttonAnimation(keyPress);
    
    }); // // END addEventListener/keypress

} // END for(var i = 0; i < buttonNum; i++)








