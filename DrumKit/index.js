
//Keyword new. 
var lewisObject = new TestLewisObjects("Lewis", 10);
//Calling method in object. 
lewisObject.moveLewis();

for(i = 0; i<document.querySelectorAll(".drum").length;i++)
{
    //First param event type, second method on event.
    //Can add anonoymous function. 
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

//Entire web page listener. 
document.addEventListener("keypress", function(e){
    playDrumSound(e.key); //Passng in the event and the key that caused it. 
    buttonAnimation(e.key);
})


//Can pass in functions, for example calculating between
//2 numbers, add, subtract,mutiply etc. Higher order funnctions
function handleClick()
{
    //this is the identity of the button that triggered the listener. 
    var buttonInnerHtml = this.innerHTML;
    playDrumSound(buttonInnerHtml);  
    buttonAnimation(buttonInnerHtml);
}

function playDrumSound (letter)
{
    switch(letter)
    {
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "a": 
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
            case "s": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            case "d": 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            case "j": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "k": 
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            case "l": 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
    }
}

//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();

//Factories are used a lot in Javascript to produce lots of objects of a specific type
//Constructor function
//Can actually add functions to this object constructor function
function TestLewisObjects(name, coolness)
{
    this.name = name; 
    this.coolness = coolness;
    this.moveLewis = function()
    {
        alert("Lewis Object Alert");
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function returnButto()
    {
        activeButton.classList.remove("pressed");
    }, 100);
}