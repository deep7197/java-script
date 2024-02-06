let prNaInput = document.getElementById("product-1")
let prRcInput =  document.getElementById("#r-c")
let mPRinput = prNaInput.maxLength;

function updateRC(event) {
    let enterText = event.targat.value;
    let enterTextLenght = enterText.length;

    let prCInput = prNaInput - mPRinput;

    prRcInput.textContent = prCInput;
}

prNaInput.addEventListener("input", updateRC)