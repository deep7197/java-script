let inputname = document.getElementById("full-name")
let inputR = document.getElementById("remaning-1")
let maxinput = inputname.maxLength

function inputChanges(event) {
    let eventT = event.target.value;
    let eTLength = eventT.length;
    let rChar = maxinput - eTLength;
    inputR.textContent = rChar;
}

inputname.addEventListener("input", inputChanges)

let inputname2 = document.getElementById("mobile")
let inputR2 = document.getElementById("remaning-2")
let maxinput2 = inputname2.maxLength

function inputChanges2(event) {
    let eventT = event.target.value;
    let eTLength = eventT.length;
    let rChar = maxinput2 - eTLength;
    inputR2.textContent = rChar;
}

inputname2.addEventListener("input", inputChanges2)

let inputname3 = document.getElementById("email")
let inputR3 = document.getElementById("remaning-3")
let maxinput3 = inputname3.maxLength

function inputChanges3(event) {
    let eventT = event.target.value;
    let eTLength = eventT.length;
    let rChar = maxinput3 - eTLength;
    inputR3.textContent = rChar;
}

inputname3.addEventListener("input", inputChanges3)

let inputname4 = document.getElementById("messege")
let inputR4 = document.getElementById("remaning-4")
let maxinput4 = inputname4.maxLength

function inputChanges4(event) {
    let eventT = event.target.value;
    let eTLength = eventT.length;
    let rChar = maxinput4 - eTLength;
    inputR4.textContent = rChar;
}

inputname4.addEventListener("input", inputChanges4)

let formSubmit = document.getElementById("form-submit")

formSubmit.onsubmit= function (event) {


    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let messege = document.getElementById("messege").value;


    function clearError() {
        let errors =document.querySelectorAll("color-char")
        for (let error of errors){
            error.classList.remove
        }
    }
    
    if(fullName=="") {
        document.getElementById("fullnameT").textContent= "Please fill Your Name *"
        return false
    }
    if (fullName.length <= 2 ) {
        document.getElementById("fullnameT").innerHTML= "Please fill correct Name *"
        return false
    }else
    if (!isNaN(fullName)) {
        document.getElementById("fullnameT").innerHTML= "only cracter are allowed *"
        return false
    };
    
    if(mobile=="") {
        document.getElementById("mobileT").innerHTML= "Please fill Your Mobile Number *";
        return false;
    };
    
    if (mobile.length <= 10) {
        document.getElementById("mobileT").innerHTML= "Numbers Must be 10 Digits*";
        return false;
    };
    
    if (isNaN(mobile)) {
        document.getElementById("mobileT").innerHTML= "Numbers only*";
        return false;
    };
    
    if (mobile.length!=10) {
        document.getElementById("mobileT").innerHTML= "Numbers Must be 10 Digits only*";
        return false;
    };
    
    if(email=="") {
        document.getElementById("emailT").innerHTML= "Email is required*"
        return false
    };
    
    if (email.indexOf("@") <= 0) {
        document.getElementById("emailT").innerHTML= "Invaled E-mail"
        return false
    };
    
    if ((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")) {
        document.getElementById("emailT").innerHTML= "Invaled E-mail"
        return false
    };
    
    if(messege=="") {
        document.getElementById("messegeT").textContent= "Please Enter Your Messege *";
        return false;
    };
    
    if (messege.length <= 30) {
        document.getElementById("messegeT").innerHTML= "Please Enter Minimum 30 Words*"
        return false;
    }

    event.preventDefault();
    } 

/* formSubmit.addEventListener('submit', e => 
{
    e.preventDefault();
    validationForm();
})


function validationForm() {
    let fullName = document.getElementById("full-name").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobile").value;
let messege = document.getElementById("messege").value;

if(fullName=="") {
    document.getElementById("fullnameT").textContent= "Please fill Your Name *"
    return false
}
if (fullName.length <= 2 ) {
    document.getElementById("fullnameT").innerHTML= "Please fill correct Name *"
    return false
}else
if (!isNaN(fullName)) {
    document.getElementById("fullnameT").innerHTML= "only cracter are allowed *"
    return false
};

if(mobile=="") {
    document.getElementById("mobileT").innerHTML= "Please fill Your Mobile Number *";
    return false;
};

if (mobile.length <= 10) {
    document.getElementById("mobileT").innerHTML= "Numbers Must be 10 Digits*";
    return false;
};

if (isNaN(mobile)) {
    document.getElementById("mobileT").innerHTML= "Numbers only*";
    return false;
};

if (mobile.length!=10) {
    document.getElementById("mobileT").innerHTML= "Numbers Must be 10 Digits only*";
    return false;
};

if(email=="") {
    document.getElementById("emailT").innerHTML= "Email is required*"
    return false
};

if (email.indexOf("@") <= 0) {
    document.getElementById("emailT").innerHTML= "Invaled E-mail"
    return false
};

if ((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")) {
    document.getElementById("emailT").innerHTML= "Invaled E-mail"
    return false
};

if(messege=="") {
    document.getElementById("messegeT").textContent= "Please Enter Your Messege *";
    return false;
};

if (messege.length <= 30) {
    document.getElementById("messegeT").innerHTML= "Please Enter Minimum 30 Words*"
    return false;
}
} */