let mainSection = document.querySelector('.create-section') //section
let section = document.querySelector('.section-btn') //section  btn
let paragraph = document.querySelector('.p-btn') //paragraph btn
let link = document.querySelector('.link-btn') //link btn
let h1 = document.querySelector('.h1') //heading btn
let btn = document.querySelector('.btn') //btn button
let video = document.querySelector('.video') //video btn

//section create
section.addEventListener('click', function(){
   var sectionN = document.createElement('section')
   mainSection.append(sectionN)
   sectionN.innerText = 'New Section created';
})

//paragraph

paragraph.addEventListener('click', function(){
   var paragraphN = document.createElement('p') //element create
   var  paragraphName =  prompt("Please enter paragarph name"); //name prompt
   if (!paragraphName=='' || !paragraphName==null){
       
       mainSection.append(paragraphN)  // append in section
       paragraphN.innerText = paragraphName; // prompt data for text
   }
})

// links

link.addEventListener('click', function(){
    var linkN = document.createElement('a')
    var  linkName =  prompt("Please enter link name");
    var linkhttp = prompt("Please enter link")
    var text
    if (!linkName=='' || !linkName==null){
        
        mainSection.append(linkN)
        linkN.href = linkhttp;   // link attach
        linkN.innerText = linkName;
    }

 })

 //heading

 h1.addEventListener("click", function(){
    var h1N = document.createElement("h1")
    var  h1Name =  prompt("Please enter Heading name");
    mainSection.append(h1N)
    h1N.innerText =h1Name
 })
 
 // btn

 btn.addEventListener("click", function(){
    var btnN = document.createElement("button")
    var  btnName =  prompt("Please enter button name"); 
    mainSection.append(btnN)
    btnN.innerText = btnName || ("Button");
 })

 //video

 video.addEventListener('click', function(){
    var vidN = document.createElement('video')
    var vidSrc = prompt("Please enter video src")
    if (!vidSrc=='' || !vidSrc==null){

       mainSection.append(vidN)
       vidN.src = vidSrc
    }
 })