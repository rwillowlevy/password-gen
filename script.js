// Assignment Code
// Write password to the #password input
var generateBtn = document.querySelector("#generate");
function writePassword() {
  let lowercasevalue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppercasevalue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numericvalue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specialcharactervalue = ['!', '@', '#', '$', '%', '^', '&', '*'];
  let passwordarray = []
  let count = 0
  let password = []
  let caselength = prompt('Choose a length of characters between 8 and 128.');
  let lowercase = confirm('Do you want any lower case characters in your password');
  let uppercase = confirm('Do you want any upper case characters in your password');
  let numeric = confirm('Do you want any numberic values in your password');
  let specialcharacters = confirm('Do you want any special characters in your password');

  // if (uppercase, lowercase, numeric, specialcharacters)
  if (uppercase == true || lowercase == true || numeric == true || specialcharacters == true){
    let passconfirm = confirm(`password length is ${ caselength }. You want lower-case characters in your password: ${ lowercase }. You want upper-case characters in your password: ${uppercase}. You want numeric values in your password: ${numeric}. You want special characters in your password ${specialcharacters}.`)
    if (passconfirm == true) {
      if (uppercase == true) {
        passwordarray.push(uppercasevalue)
      }
      if (lowercase == true) {
        passwordarray.push(lowercasevalue)
      }
      if (numeric == true) {
        passwordarray.push(numericvalue)
      }
      if (specialcharacters == true) {
        passwordarray.push(specialcharactervalue)
      }
      while(count < caselength){
        let generator = passwordarray[Math.floor(Math.random() * passwordarray.length)]
        password.push(generator[Math.floor(Math.random() * generator.length)])
        count++
      }
      password = password.join("")
      alert(`Your password is: ${password}`)
    }

  }
else{
  alert('Please select atleast one special character')
}



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
