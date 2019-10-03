

//all possible characters 
var specialChar = "~!@#$%^&*(){}+";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var finalchars = "";
var passLength = document.getElementById("length");
var password = "";
var slider = document.getElementById("slider");
var copy = document.getElementById("copy");
var generate = document.getElementById("generate")

function checkedCharacters() {
    if(document.getElementById("uppercase").checked) {
      
        finalchars+=upperCase;
        
    }
    if(document.getElementById("lowercase").checked) {
       
        finalchars+=lowerCase;  
    }

    if(document.getElementById("numeric").checked) {
        finalchars+=numeric;
    }

    if(document.getElementById("special").checked) {
        finalchars+=specialChar;
    }   
}

generate.onclick = function() {
    document.getElementById("password").innerText = "";
    password = "";
    checkedCharacters();
    for(var i=0; i<=slider.value; i++){
        password += finalchars[Math.floor(Math.random() * finalchars.length)];
    }
    document.getElementById("password").innerText = password;
}

slider.oninput = function () {
    if (slider.value > 8) {
        passLength.innerHTML = "Length: " + slider.value;
    } else {
        passLength.innerHTML = "Length: 8";
    }
}

copy.addEventListener("click", copyToClipboard);

function copyToClipboard () {
    var copyPassword = document.getElementById("password");
    copyPassword.select();
    document.execCommand("copy");
alert("Password copied to clipboard " + copyPassword.value)

}
