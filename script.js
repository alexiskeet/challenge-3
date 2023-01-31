var passCharacterBase = ""
var passLength = ""

function getLength(){
  console.log("Getting Length")
  passLength = prompt("Please give a password length between 8 and 128 characters.");
  if(passLength >= 8 && passLength <= 128){
    return passLength
  }
  alert("You must give a value as an integer between 8 and 128")
  if(confirm("Do you want to try again")){
    return getLength()
  }
}

function getBase(){
  console.log("Getting Characters")
  
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericCharacters = "1234567890"
  var specialCharacters = "!@#$%^&*-_+=,<>.;:?"

  if(confirm("Do you want lowercase characters?")){
    passCharacterBase = passCharacterBase.concat(lowercaseCharacters)
  }
  if(confirm ("Do you want uppercase characters?")){
    passCharacterBase = passCharacterBase.concat(uppercaseCharacters)
  }
  if(confirm ("Do you want numerical characters?")){
    passCharacterBase = passCharacterBase.concat(numericCharacters)
  }
  if(confirm ("Do you want special characters?")){
    passCharacterBase = passCharacterBase.concat(specialCharacters)
  }

  if(passCharacterBase !== ""){ 
     return passCharacterBase
     }

    alert("You must give password character specifications")
    if(confirm("Do you want to try again")){
      return getBase()
    }
  
  return passCharacterBase
}

function passArray(){
  for (var i = 1; i < getLength; i++) {

  }
}
// Creating generatePassword Function
function generatePassword() {
  // Generating Random Password Length Prompt
    var passLength = getLength() 
    if(passLength === undefined){
      return
    }
    console.log("Back in generate password: ", passLength)
    // Generating Random Password Character Prompt
    var passCharacterBase = getBase()
    if(passCharacterBase === undefined){
      return
    }
    
  // Validate Prompts
  console.log(passCharacterBase)
  // Create Password

  var password = "";
  for (var i = 0; i < passLength; i++) {
    password += passCharacterBase.charAt(Math.floor(Math.random() * passLength));
  }
  //return Math.floor(Math.random())
  //large passCharacterBase

  // Print Password
  return password
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password =  generatePassword();
  //evaluate what that function returns
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
