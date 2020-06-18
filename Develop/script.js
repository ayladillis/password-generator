// Assignment Code

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
const specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "_", "+"];
const generateButton = document.getElementById('generateBtn');

let combined = [];
let displayElement = document.getElementById("#password");
let password = [];
let numResponse = 0;
let specialCharacterResponse = " ";


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

  var numbersPrompt = confirm(
    'Click OK to confirm including numeric characters.'
  );
  
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be no less than 8 and no more than 128.");

    var numbers = confirm("Do you want numbers in your password?");

    var lowerCases = confirm("Do you want lowercases in your password?");

    var upperCases = confirm("Do you want uppercases in your password?");

    var specialCharacters = confirm("Do you want special characters in your password?");

    var minimumCount =0;

    var minimumNumbers = " ";
    var minimumLowerCases = " ";
    var minimumUpperCases = " ";
    var minimumSpecialCharacters = " ";

    var functionArray = {
      getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },

      getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      },

      getUpperCase: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },

      getSpecialCharacters: function() {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      }
    };
    
    if (numbers === true) {
      minimumNumbers = functionArray.getNumbers();
      minimumCount++;
    }
    
    if (upperCases === true) {
      minimumLowerCases = functionArray.getLowerCases();
      minimumCount++;
    }

    if (upperCases === true) {
      minimumUpperCases = functionArray.getUpperCases();
      minimumCount++;
    }

    if (special === true) {
      minimumSpecialCharacters = functionArray.getSpecialCharacters();
      minimimCount++;
    }

  var randomPasswordGenerated = " ";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  

}


  for (var i = 0; i < userResponse; i++); {
    Math.floor(math.random);
  }

  for (var i = 0; i < spCharResponse; i++); {
    Math.floor(math.random)
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  
    
    