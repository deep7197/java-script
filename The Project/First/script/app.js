const colors = ['red', 'green', 'rgb(184, 134, 11)', '#f150825']
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener('click', function changeColor() {
    const randomNumber = getColor()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
 } );

 function getColor() {
    return Math.floor(Math.random()*colors.length) 
 }
 