/* ----------------------------- */
/* Project  : Password_Generator */
/* File     : resume_VGS.html    */
/* Author   : Vicente Garcia     */
/* Date     : 02/21/2022         */
/* Modified : 02/22/2022         */
/* ----------------------------- */
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword(){
  var strPassword="";
  // Function to define lenght
  var fncLenght = function(){
    var promptLenght = window.prompt("Please type the length of characters of your password a number between 8 and 128");
    while (promptLenght < 8 || promptLenght > 128 || isNaN(promptLenght)){
      promptLenght = window.prompt("Remember a number with the length of at least 8 characters and no more than 128 characters");
    }
    return promptLenght
  }
  var intLength = fncLenght(); // 8 to 128
  var lowerCase = window.confirm("Do you want to use letters in lower case?"); // lowercase, uppercase, numbers ans special characters
  var upperCase = window.confirm("Do you want to use at least one letter in upper case?");
  var specialChr = window.confirm("Do you want to use at least special character?");
  var intNumber = window.confirm("Do you want to use al least one number?");
  console.log("entra = " + strPassword);
  for (i=1; i<intLength; i++){
    console.log("cuenta = " + i);
    strPassword = strPassword + "a";
  }
  console.log("sale = " + strPassword);
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
