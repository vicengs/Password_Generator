/* ----------------------------- */
/* Project  : Password_Generator */
/* File     : script.js          */
/* Author   : Vicente Garcia     */
/* Date     : 02/21/2022         */
/* Modified : 02/26/2022         */
/* ----------------------------- */
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword(){
  var strPassword = "";
  var firstTime = true;
  var strRandom="";
  // Private function to define length
  var fncLength = function(){
    // Ask length of password
    var promptLength = prompt("Please type the length of characters of your password a number between 8 and 128.");
    while(promptLength < 8 || promptLength > 128 || isNaN(promptLength)){
      // Verify a valid value, just a number between 8 and 128
      promptLength = prompt("Remember a number with the length of at least 8 characters and no more than 128 characters.");
    }
    return promptLength
  }
  // Private function to generate each random value
  var fncRandom = function(){
    var numChrs;
    // Private function that determines type of value 
    var fncType = function(){
      var strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var strLower = "abcdefghijklmnopqrstuvwxyz";
      var strSpecial = "!@#$%^&*=~-_+()[]{}|?";
      var strNumber = "0123456789";
      var strType;
      // JavaScript Function to get random number between 1 and 4 where 1 is lowercase, 2 is uppercase, 3 special character and 4 number
      var rdmType = Math.floor(Math.random() * 4) + 1 ;
      // Validate if user choice all types
      if(lowerCase && upperCase && specialChr && intNumber){
        if(i > pwdLength-4){
          if(!strRandom.includes("1")){
            rdmType = 1;
          }else if(!strRandom.includes("2")){
            rdmType = 2;
          }else if(!strRandom.includes("3")){
            rdmType = 3;
          }else if(!strRandom.includes("4")){
            rdmType = 4;
          }
        }
      // Validate if user choices different 3 posibilities BEGIN
        // If random number is a number not between the choices selected, the number changes to a valid choice
        // If in the last iterations a select type is not in the password string, this type is assigned
      }else if(lowerCase && upperCase && specialChr){
        if (rdmType === 4){
          rdmType = 2;
        }
        if(i > pwdLength-3){
          if(!strRandom.includes("1")){
            rdmType = 1;
          }else if(!strRandom.includes("2")){
            rdmType = 2;
          }else if(!strRandom.includes("3")){
            rdmType = 3;
          }
        }
      }else if(lowerCase && upperCase && intNumber){
        if (rdmType === 3){
          rdmType = 1;
        }
        if(i > pwdLength-3){
          if(!strRandom.includes("1")){
            rdmType = 1;
          }else if(!strRandom.includes("2")){
            rdmType = 2;
          }else if(!strRandom.includes("4")){
            rdmType = 4;
          }
        }
      }else if(lowerCase && specialChr && intNumber){
        if (rdmType === 2){
          rdmType = 4;
        }
        if(i > pwdLength-3){
          if(!strRandom.includes("1")){
            rdmType = 1;
          }else if(!strRandom.includes("3")){
            rdmType = 3;
          }else if(!strRandom.includes("4")){
            rdmType = 4;
          }
        }
      }else if(upperCase && specialChr && intNumber){
        if (rdmType === 1){
          rdmType = 3;
        }
        if(i > pwdLength-3){
          if(!strRandom.includes("2")){
            rdmType = 2;
          }else if(!strRandom.includes("3")){
            rdmType = 3;
          }else if(!strRandom.includes("4")){
            rdmType = 4;
          }
        }
      // Validate if user choices diferent 3 posibilities END
      // Validate if user choices diferent 2 posibilities BEGIN
        // If random number is a number not between the choices selected, the number changes to a valid choice
        // If in the last iterations a select type is not in the password string, this type is assigned
      }else if(lowerCase && upperCase){
        if (rdmType === 3){
          rdmType = 1;
        }else if(rdmType === 4){
          rdmType = 2;
        }
        if(i > pwdLength-2){
          if(!strRandom.includes("1")){
            rdmType = 1;
          }else if(!strRandom.includes("2")){
            rdmType = 2;
          }
        }
      }else if(lowerCase && specialChr){
        if (rdmType === 2){
          rdmType = 1;
        }else if(rdmType === 4){
          rdmType = 3;
        }
        if(i > pwdLength-2){
          if(!strRandom.includes("1")){
            rdmType = 1;
          }else if(!strRandom.includes("3")){
            rdmType = 3;
          }
        }
      }else if(lowerCase && intNumber){
        if (rdmType === 2){
          rdmType = 4;
        }else if(rdmType === 3){
          rdmType = 1;
        }
        if(i > pwdLength-2){
          if(!strRandom.includes("1")){
            rdmType = 1;
          }else if(!strRandom.includes("4")){
            rdmType = 4;
          }
        }
      }else if(upperCase && specialChr){
        if (rdmType === 1){
          rdmType = 3;
        }else if(rdmType === 4){
          rdmType = 2;
        }
        if(i > pwdLength-2){
          if(!strRandom.includes("2")){
            rdmType = 2;
          }else if(!strRandom.includes("3")){
            rdmType = 3;
          }
        }
      }else if(upperCase && intNumber){
        if (rdmType === 1){
          rdmType = 2;
        }else if(rdmType === 3){
          rdmType = 4;
        }
        if(i > pwdLength-2){
          if(!strRandom.includes("2")){
            rdmType = 2;
          }else if(!strRandom.includes("4")){
            rdmType = 4;
          }
        }
      }else if(specialChr && intNumber){
        if (rdmType === 1){
          rdmType = 3;
        }else if(rdmType === 2){
          rdmType = 4;
        }
        if(i > pwdLength-2){
          if(!strRandom.includes("3")){
            rdmType = 3;
          }else if(!strRandom.includes("4")){
            rdmType = 4;
          }
        }
      // Validate if user choices diferent 2 posibilities END
      // Validate if user choices just 1 type BEGIN
      }else if(lowerCase){
        rdmType = 1;
      }else if(upperCase){
        rdmType = 2;
      }else if(specialChr){
        rdmType = 3;
      }else{
        rdmType = 4;
      }
      // Validate if user choices just 1 type END
      // Depending the random number generated (or changed) the length and type of string is assigned BEGIN
      if(rdmType === 1){
        numChrs = 26;
        strType = strLower;
      }else if(rdmType === 2){
        numChrs = 26;
        strType = strUpper;
      }else if(rdmType === 3){
        numChrs = 21;
        strType = strSpecial;
      }else if(rdmType === 4){
        numChrs = 10;
        strType = strNumber;
      }
      // Depending the random number generated (or changed) the length and type of string is assigned END
      // Generate the types (by number) string
      strRandom = strRandom + rdmType;
      return strType;
    }
    // JavaScript function to generate random value depending of type selected and generated randomly by internal function fncType
    var chrRandom = fncType().charAt(Math.floor(Math.random() * numChrs));
    return chrRandom;
  }
  // Call private function to get length for password from 8 to 128
  var pwdLength = fncLength();
  // Validate at least one option type is selected
  while(!lowerCase && !upperCase && !specialChr && !intNumber || firstTime){
    // Using variable to determine if is the first time or the user hasn't selected at least one type for password
    if(firstTime === false){
      // Alert that there isn't at least one type selected
      alert("You should choose at least one type for password.");
    }
    // Ask for type choices
    var lowerCase = confirm("Do you want to use letters in lower case?");
    var upperCase = confirm("Do you want to use letters in upper case?");
    var specialChr = confirm("Do you want to use special characters?");
    var intNumber = confirm("Do you want to use numbers?");
    firstTime = false;
  }
  for(i=0; i<pwdLength; i++){
    // Loop to call function to generate each random value depending the length
    strPassword = strPassword + fncRandom();
  }
  return strPassword;
}
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  // Call funtion to generate random password
  var password = generatePassword();
  passwordText.setAttribute("style", "font-size:25px;");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
