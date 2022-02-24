/* ----------------------------- */
/* Project  : Password_Generator */
/* File     : script.js          */
/* Author   : Vicente Garcia     */
/* Date     : 02/21/2022         */
/* Modified : 02/23/2022         */
/* ----------------------------- */
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword(){
  var strPassword = "";
  var firstTime = true;
  var strRandom="";
  // Function to define lenght
  var fncLenght = function(){
    var promptLenght = window.prompt("Please type the length of characters of your password a number between 8 and 128.");
    while(promptLenght < 8 || promptLenght > 128 || isNaN(promptLenght)){
      promptLenght = window.prompt("Remember a number with the length of at least 8 characters and no more than 128 characters.");
    }
    return promptLenght
  }
  var fncRandom = function(){
    var numChrs;
    var fncType = function(){
      var strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var strLower = "abcdefghijklmnopqrstuvwxyz";
      var strSpecial = "!@#$%^&*=~-_+()[]{}|?";
      var strNumber = "0123456789";
      var strType;
      var rdmType = Math.floor(Math.random() * 4) + 1 ;
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
      }else if(lowerCase){
        rdmType = 1;
      }else if(upperCase){
        rdmType = 2;
      }else if(specialChr){
        rdmType = 3;
      }else{
        rdmType = 4;
      }
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
      strRandom = strRandom + rdmType;
      return strType;
    }
    var chrRandom = fncType().charAt(Math.floor(Math.random() * numChrs));
    return chrRandom;
  }
  var pwdLength = fncLenght(); // Get length for password from 8 to 128
  while(!lowerCase && !upperCase && !specialChr && !intNumber || firstTime){
    if(firstTime === false){
      window.alert("You should choose at least one type for password.");
    }
    var lowerCase = window.confirm("Do you want to use letters in lower case?");
    var upperCase = window.confirm("Do you want to use letters in upper case?");
    var specialChr = window.confirm("Do you want to use special characters?");
    var intNumber = window.confirm("Do you want to use numbers?");
    firstTime = false;
  }
  for(i=0; i<pwdLength; i++){
    strPassword = strPassword + fncRandom();
  }
  alert("Your secure password is: " + strPassword);
  return strPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
