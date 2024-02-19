const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("img-person");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prvbtn = document.querySelector(".prv-btn");
const nextbtn = document.querySelector(".next-btn");
const renbtn = document.querySelector(".ren-btn");
let curItem = 0;

//function call
window.addEventListener("DOMContentLoaded",main);
nextbtn.addEventListener('click',nBtn)
prvbtn.addEventListener('click', pBtn)
renbtn.addEventListener('click',rendombtn)

//card content call
function main() {
  callPerson(curItem)
}
//person content call
function callPerson(){
  const item = reviews[curItem];
  img.src = reviews[curItem].img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}


//next btn call
function nBtn() {
  curItem++
  if (curItem > reviews.length-1){
    curItem = 0;
  }
  callPerson()
}

// previous button
function pBtn() {
  curItem++
  if (curItem > reviews.length-1){
    curItem = 0;
  }
  callPerson()
}

// suprise me button

function rendombtn(){
  curItem = Math.floor(Math.random() * reviews.length)
  callPerson();
}
