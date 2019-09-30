

//all possible characters 
var specialChar = "~!@#$%^&*(){}+";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var passLength = document.getElementById("length").value;
var password = "";


function checkedCharacters() {
    if(document.getElementById("uppercase").checked) {
        var randomNum = Math.floor(Math.random() * upperCase.length);
        password += upperCase[randomNum];
        console.log(password);
    }
    if(document.getElementById("lowercase").checked) {
        var randomNum = Math.floor(Math.random() * lowerCase.length);
        password += lowerCase[randomNum];
        console.log(password);
    }

    if(document.getElementById("numeric").checked) {
        var randomNum = Math.floor(Math.random() * 10);
        password += randomNum;
        console.log(password);
    }

    if(document.getElementById("special").checked) {
        var randomNum = Math.floor(Math.random() * specialChar.length);
        password += specialChar[randomNum];
        console.log(password);
    }
    
}

document.getElementById("generate").onclick = function() {
    document.getElementById("password").innerText = "";
    checkedCharacters();
   
    document.getElementById("password").innerText = password;
}




