var about = document.querySelector('.about')
var btns = document.querySelectorAll('.tab-btn')
var articles = document.querySelectorAll('.tabcontent')

about.addEventListener('click', function (e){
    var id = e.target.dataset.id

    if (id) {
        btns.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add('active')
        })

    
    }

    articles.forEach(function(article){
        article.classList.remove('active')
    })

    const articleDisply = document.getElementById(id)
    articleDisply.classList.add('active')


})