

//all possible characters 
var specialChar = "~!@#$%^&*(){}+";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var passLength = document.getElementById("length");
var password = "";
var slider = document.getElementById("slider");
var copy = document.getElementById("copy");
var generate = document.getElementById("generate")

function checkedCharacters() {
    if(document.getElementById("uppercase").checked) {
        var randomNum = Math.floor(Math.random() * upperCase.length);
        password += upperCase[randomNum];
        
    }
    if(document.getElementById("lowercase").checked) {
        var randomNum = Math.floor(Math.random() * lowerCase.length);
        password += lowerCase[randomNum];
        
    }

    if(document.getElementById("numeric").checked) {
        var randomNum = Math.floor(Math.random() * 10);
        password += randomNum;
     
    }

    if(document.getElementById("special").checked) {
        var randomNum = Math.floor(Math.random() * specialChar.length);
        password += specialChar[randomNum];
        
    }
    
}

generate.onclick = function() {
    document.getElementById("password").innerText = "";
    checkedCharacters();
    document.getElementById("password").innerText = password;
}

slider.oninput = function () {
    if (slider.value > 0) {
        passLength.innerHTML = "Length: " + slider.value;
    } else {
        passLength.innerHTML = "Length: 1";
    }
}

copy.addEventListener("click", copyToClipboard);

function copyToClipboard () {
    var copyPassword = document.getElementById("password");
    copyPassword.select();
    document.execCommand("copy");
alert("Password copied to clipboard " + copyPassword.value)
}
