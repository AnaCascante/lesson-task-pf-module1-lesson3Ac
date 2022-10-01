 // Question 1 Given these two variables: write an if statement that checks whether firstNumber is smaller than secondNumber. If it is, log the message "The first number is smaller than the second". 

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber <89) {
    console.log ("The first number is smaller than the second");
}
   
// Question 2 Given these two variables: write code that checks whether age meets the minimumAge requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

var age = 11;
var minimumAge = "13";

if  (minimumAge>=13) {
    console.log ("You can play");
}
else {
    console.log ("you are too young")
}


// Question 3 Given these two variables: write code that checks whether income meets the maximumIncome requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

var income = "11.050";
var maximumIncome = "13.075";

if (maximumIncome >=13.075){
    console.log ("I accept this salary")
} else {
    console.log ("This salary is too low for this jobb, increase the offer")
}


// Question 4 Fix this code:

var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
} else {
    console.log ("I love this colour")
}

// Question 5 Given the following variable: write code that logs the message "Not paid" if the invoice has not been paid.

var invoicePaid = false;
if (invoicePaid === false){
    console.log ("Not paid")
}


// Question 6 Given these two variables:write code that checks if the winning number hasn't been selected. If it hasn't, log the message "You lose again". Use the strict inequality operator. 

var selectedNumber =11;
var winningNumber = "15";
if (selectedNumber!==15) {
    console.log ("You lose again")
} else { 
    console.log ("Congratulations")
}



// Question 7 Given this variable: write a switch statement that log the weekday name depending on the value of dayOfTheWeek. If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".
// If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

var dayOfTheWeek = 3;
var dayName; 

switch (dayOfTheWeek) {
    case 1: 
        dayName = "Monday";
        break;
    case 2: 
        dayName = "Tuesday";
        break;
    case 3: 
        dayName = "Wednesday";
        break;
    case 4: 
        dayName= "Thursday";
        break;
    case 5: 
        dayName= "Friday";
        break;
    case 6: 
        dayName= "Saturday";
        break;
    case 7: 
        dayName= "Sunday";
        break;
    default: 
        dayName = "Invalid day number";
        break;
    }
console.log (dayOfTheWeek)