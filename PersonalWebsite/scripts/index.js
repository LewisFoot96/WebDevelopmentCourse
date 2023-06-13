var myName = "Lewis";
console.log(myName.slice(0,3));
var modulusOf20And3 = addition(5, 6);
console.log(modulusOf20And3);

var randomNumberArray = [1,4,6,19,30];
console.log(randomNumberArray[2]);
//Will return bool
console.log(randomNumberArray.includes(6));

//Pop removes from the end.
randomNumberArray.push(46);

var names = [1,2,4,3];
//console.log(names.length);
var randomNumber = Math.round(Math.random() * names.length);
console.log(names[randomNumber]);
 var i = 1;
while(i < 2)
{
    console.log(i);
    i++;
}

for(j=0;j<=2;j++)
{
    console.log(j);
}

// document.getElementsByTagName -> tag name.
var heading = document.getElementsByClassName("red-heading");

for (var i =0; i< heading.length;i++)
{
    //This is the full inner HTML, could be internal tags too. Can add tags etc. 
    //textContent can be used for just the text. 
    heading[i].innerHTML = "This has been changed by JavaScript";
    heading[i].style.color = "blue";
}

// Returns one element from selector. We can combine selectors, like in CSS.
// If there is more than one from selector just get back the first. 
// Can find all this stuff in the DOM object documentation. 
// Values have to be represented as strings
//All of our styles should be in CSS not in java script.
document.querySelector("h1").style.color = "blue";

// Adding style class to p tag, can be used to toggle styling of things
document.querySelector("p").classList.add("invisible");

//Gets attributes of a tag. Can also setAttriburte to set them. 
document.querySelector("p").attributes;

alert("Java script finished.");

function addition(numberA, numberB)
{
    console.log(numberA + numberB); 
    return Math.pow(20 % 3, 2);
}

function IsNumberGreaterThanOrEqualTo10(number)
{
    //3 equlas checks to see if data types are also a match, 2 equals just the values.
    if (number > 10 || number === 10)
        return true;
    else
        return false;
}

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here
        var arrayVal = [0,1];
        
        for (var i = 2; i < n; i++)
        {
            var value = (arrayVal[i-2] + arrayVal[i-1]);
            arrayVal.push(value);
        }
        
        if(n === 1)
        {
            return [0];
        }
        //Return an array of fibonacci numbers starting from 0.
        return arrayVal;
        
    //Do NOT change any of the code below 👇
    }
    
    