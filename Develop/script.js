// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var cancelationNumber = 0;
var passwordLenght;
var password = [];

function generatePassword () {
  var passwordLenght = prompt ("How many charater would you like your password to contain?", " ")
  if (passwordLenght === null) {
  return; 
  } else if ((passwordLenght<8) || (passwordLenght>128)) {
  window.alert ("Password length must be between 8 to 128 charater.");
  };

  var special = confirm("Click Ok to confirm your password including special character");
  var numeric = confirm("Click Ok to confirm your password including numeric character");
  var lowerCase = confirm("Click Ok to confirm your password including lowercase character");
  var upperCase = confirm("Click Ok to confirm your password including uppercase character");
  
  if (!special && !numeric && !lowerCase && !upperCase) { 
      window.alert("At least one charater type must be selected")
    };

  For (password.length < passwordLenght) {
    if (special) {
      function specialCharacterFunction ();
    }
    if (numeric) {
      function numericCharacterFunction ();
    }
    if (lowerCase) {
      function lowerCaseCharacterFunction ();
    }
    if (upperCase) {
      function upperCaseCharacterFunction ();
    }
  }

};

function specialCharacterFunction () {
  var randomIndex = Math.floor(Math.random() * specialCharacters.length);
  randomElement = specialCharacters [randomIndex];
  password=password.unshift(randomElement);
  return;
};

function numericCharacterFunction () {
  var randomIndex = Math.floor(Math.random() * numericCharacters.length);
  randomElement = numericCharacters [randomIndex];
  password=password.unshift(randomElement);
  return;
};

function lowerCaseCharacterFunction () {
  var randomIndex = Math.floor(Math.random() * lowerCaseCharacters.length);
  randomElement = lowerCaseCharacters [randomIndex];
  password=password.unshift(randomElement);
  return;
};

function upperCaseCharacterFunction () {
  var randomIndex = Math.floor(Math.random() * upperCaseCharacters.length);
  randomElement = upperCaseCharacters [randomIndex];
  password=password.unshift(randomElement);
  return;
};

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

