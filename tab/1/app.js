const tabButtons = document.querySelectorAll(".tablinks")
for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function () {
        var tabName = this.dataset.tab;
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll('.tabcontent')
        

        for (var j = 0;
            j < allTabContent.length;
            j++) {
            allTabContent[j].style.display = 'none';
            tabButtons[j].classList.remove('active')
        }
        
        tabContent.style.display = "block";
        this.classList.add('active')
    })
}

document.querySelector('.tablinks').click();