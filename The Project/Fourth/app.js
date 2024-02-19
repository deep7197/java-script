const navShow = document.querySelector(".links")
const navbtn = document.querySelector(".nav-toggle")


navbtn.addEventListener("click",navbtnRun)
function navbtnRun () {
   /*  if(navShow.classList.contains("show-links")) {
        navShow.classList.remove("show-links")
    }
    else {
        navShow.classList.add("show-links")
    } */

    navShow.classList.toggle("show-links")
}