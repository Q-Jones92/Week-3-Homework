var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
        console.log(password);
    

}

function generatePassword() {
    alert('Select which characters you would like the password to have');

    var inputCharacter = prompt('Capital case(A), Lower case(a), Special characters(!), Numbers(0');
        if((inputCharacter === 'A') ||
          (inputCharacter === 'a') ||
          (inputCharacter === '!') ||
          (inputCharacter === '0')) {
            console.log('no changes')  
          }
    alert('Select a password length between 8 and 128');
    
     var inputNumber = prompt('Range between 8-128');
        if (inputNumber > 8 && inputNumber < 128); {
            console.log('inputNumber is valid');
        } 
       
    alert('Memorize and keep secure')
    
    var   charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+=-_?/<>.,",
        retVal = "";
    for (var i = 0; i < inputNumber; ++i) {

        var randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
        console.log(randomChar);
        retVal += randomChar
    }
    return retVal;
}





generateBtn.addEventListener("click", writePassword);
