// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// define var for special characters
// define var for numeric characters
// define var for lowercase characters
// define var for uppercase charater  
// define var for i = 0 

// we need a prompt to say: How many charater would you like your password to contain? 
      // user add number--> receive an userAnswer , Now check the follwong if:
          // if the number in less than 8 or bigger than 128 --> prommpt to say: Password length must be between 8 to 128 charater. bring up the previous promt after clicking on ok
          //else & go to the next prompt
// we need a prompt to say: Click Ok to confirm your password including special character.
      //if user click on OK --> choose a random var from special charater
      //else go to the next prompt & call function (numberOfCancelation) to i++

// We need a prompt to say: Click Ok to confirm your password including numeric character.
      //if user click on OK --> choose a random var from numeric character
      //else go to the next prompt & call function (numberOfCancelation) to i++

// We need a prompt to say: Click Ok to confirm your password including lowercase character.
      //if user click on OK --> choose a random var from lowercase character
      //else go to the next prompt & call function (numberOfCancelation) to i++

// We need a prompt to say: Click Ok to confirm your password including uppercase character.
      //if user click on OK --> choose a random var from uppercase character
      //else go to the next prompt & call function (numberOfCancelation) to i++

// we need IF to say :
      //if i=4 --> window.alert(At least one charater type must be selected)

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var numericCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];

var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

