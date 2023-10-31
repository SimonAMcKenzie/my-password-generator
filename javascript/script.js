// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Get references to the elements
var lengthSlider = document.querySelector('#passwordLength');
var lengthValue = document.querySelector('#passwordLengthValue');
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Add event listener to slider input
lengthSlider.addEventListener('input', function () {
  lengthValue.textContent = lengthSlider.value;
});

// Add event listener to generate button
generateBtn.addEventListener('click', function () {
  var length = parseInt(lengthSlider.value) || 8; // Default length is set to 8 characters
  var includeSpecialCharacters = document.querySelector('#specialCharactersCheckbox').checked;
  var includeNumericCharacters = document.querySelector('#numericCharactersCheckbox').checked;
  var includeLowerCasedCharacters = document.querySelector('#lowercaseCharactersCheckbox').checked;
  var includeUpperCasedCharacters = document.querySelector('#uppercaseCharactersCheckbox').checked;

  var passwordOptions = {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
    includeUpperCasedCharacters: includeUpperCasedCharacters
  };

  var password = generatePasswordWithOptions(passwordOptions);
  passwordText.value = password;
});

// Function to generate password with custom options
function generatePasswordWithOptions(options) {
  var allCharacters = [];
  // Add characters based on options
  if (options.includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  if (options.includeNumericCharacters) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
  if (options.includeLowerCasedCharacters) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUpperCasedCharacters) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  var password = [];
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(allCharacters);
    password.push(randomChar);
  }

  return password.join('');
}

// Get reference to the #copy button
var copyBtn = document.querySelector('#copy');

// Add event listener to copy button
copyBtn.addEventListener('click', function () {
  var generatedPassword = passwordText.value;
  if (generatedPassword) {
    navigator.clipboard.writeText(generatedPassword).then(function () {
      alert('Password copied to clipboard!');
    }).catch(function (err) {
      console.error('Failed to copy text: ', err);
    });
  } else {
    alert('No password generated to copy!');
  }
});


// Function to get a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
