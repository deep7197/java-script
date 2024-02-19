var btn = document.querySelector(".nav-toggle")
var asidebar = document.querySelector(".sidebar")
var closebtn = document.querySelector(".close-btn")

btn.addEventListener("click", activeF)


function activeF () {
    asidebar.classList.toggle("show-sidebar")
}

closebtn.addEventListener("click", function () {
    asidebar.classList.remove("show-sidebar")
})