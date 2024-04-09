let age = 19

let number = document.getElementById('number');
let exponent = document.getElementById('exponent');

function checkAge(age) {
    switch (age){
        case (age < 18):
            console.log("You are not old enough to vote.");
            break;
        case (age >= 18):
            console.log("You are old enough to vote.");
            break;
        default:    
            console.log("Please enter a valid age.");
    }
}
function checkAgeTernary(age) {
    return age < 18 ? "You are not old enough to vote." : "You are old enough to vote.";
}

function checkAgeOr(age) {
    if (age < 18 || age > 100) {
        console.log("You are not eligible to vote.");
    } 
    else{
        console.log("You are eligible to vote.");
    }
}

function min(a, b) {
    return a < b ? a : b;
}

function pow(number, exponent) {
    return Math.pow(x, n);
}

let paragraphCount = $('p').length;
console.log(paragraphCount);

let paragraph = $('p'); // Select the paragraph element
paragraph.text("New content"); // Change the content of the paragraph

