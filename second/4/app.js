let pNIE = document.getElementById("product-name")
let rCE = document.getElementById("remaining-char")
let mAC = pNIE.maxLength;

console.dir(pNIE)
function uRC(event) {
    let eT = event.target.value;
    let eTL = eT.length;
    let rC = mAC - eTL
    rCE.textContent = rC ;

   if (rC === 0){
    rCE.classList.add("error")
    pNIE.classList.add("error")
   } else if (rC <= 10) {
        rCE.classList.add("warning")
        pNIE.classList.add("warning")
        rCE.classList.remove("error",)
        pNIE.classList.remove("error")
    } else {
        rCE.classList.remove("warning")
        pNIE.classList.remove("warning")
    }
}
pNIE.addEventListener("input",uRC)




//Years ago, we didn't have the for-of loop in JavaScript.

//To still loop through all the elements of an array, this code could be used:

//for (let i = 0; i < someArray.length; i++) {
 //   console.log(someArray[i]);
//}
//This code still works today and you can absolutely use it instead of using a for-of loop. But of course it's longer and a bit more clunky, so there is no strong reason to use that code, unless you prefer it.
