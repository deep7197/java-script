
var outputs = document.querySelector('.output')
var btn = document.getElementById('submit')

btn.addEventListener('click', output)
function output (){
    var names = document.getElementById("name").value;
    outputs.innerHTML = `name ${names}`

}
