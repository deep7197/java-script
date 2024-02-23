var btn = document.querySelector('.switch-btn')
var video = document.querySelector('.video-y')
var preLoader = document.querySelector(".preloader")

btn.addEventListener('click', function(){
    if (!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause();
    }
    else {
        btn.classList.remove("slide")
        video.play();
    }
})

preLoader.addEventListener("load", function(){
    if(!preLoader.classList.contains("hide")){
        preLoader.classList.add("hide")
    }
    else {
        preLoader.classList.remove("hide")
    }
})

