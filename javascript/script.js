// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() { // This creates the prompt the user sees
  var length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) { // This defines the min and max password character limit
    alert("Password length must be a number between 8 and 128.");
    return null;
  }

  // Below are array lists for each type of character to be included in the password
  includeSpecialCharacters = confirm("Include special characters?"),
  includeNumericCharacters = confirm("Include numeric characters?"),
  includeLowerCasedCharacters = confirm("Include lowercase characters?"),
  includeUpperCasedCharacters = confirm("Include uppercase characters?")

if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowerCasedCharacters && !includeUpperCasedCharacters) {
    alert("Must include at least 1 character from each character type.");
    return null;
}

  var passwordOptions = {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
    includeUpperCasedCharacters: includeUpperCasedCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return "";
  }

  var allCharacters = [];
  var password = [];

  if (options.includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
    password.push(getRandom(specialCharacters));
  }

  if (options.includeNumericCharacters) {
    allCharacters = allCharacters.concat(numericCharacters);
    password.push(getRandom(numericCharacters));
  }

  if (options.includeLowerCasedCharacters) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
    password.push(getRandom(lowerCasedCharacters));
  }

  if (options.includeUpperCasedCharacters) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
    password.push(getRandom(upperCasedCharacters));
  }

  for (var i = password.length; i < options.length; i++) {
    var randomChar = getRandom(allCharacters);
    password.push(randomChar);
  }

  return password.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);