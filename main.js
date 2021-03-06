var slideIndex = 1;
var slideIndex1 = 1;
var slideIndexMin = 1;
var slideIndex1Text = 1;
var slideIndexMinText = 1;

showDivs(slideIndex, slideIndex, ".sliderImg");
showDivs(slideIndex1, slideIndex1, ".primaryScreen-img");
showDivs(slideIndex1Text, slideIndex1Text, ".primaryScreen__content");
showDivs(slideIndexMin, slideIndexMin, ".primaryScreenMin-img");
showDivs(slideIndexMinText, slideIndexMinText, ".primaryScreenMin__content");

function plusDivs(n) {
  slideIndex = showDivs(slideIndex += n, slideIndex, ".sliderImg");
}

function plusDivs1(n) {
  slideIndex1 = showDivs(slideIndex1 += n, slideIndex1, ".primaryScreen-img");
  slideIndex1Text = showDivs(slideIndex1Text += n, slideIndex1Text, ".primaryScreen__content");
  slideIndexMin = showDivs(slideIndexMin += n, slideIndexMin, ".primaryScreenMin-img");
  slideIndexMinText = showDivs(slideIndexMinText += n, slideIndexMinText, ".primaryScreenMin__content");
}

function showDivs(n, index, selector) {
  var x = document.querySelectorAll(selector);
  if (n > x.length) {
    index = 1;
  }
  if (n < 1) {
    index = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[index-1].style.display = "block";
  return index;
}

const body = document.querySelector("body");
const burgerMenu = document.querySelector(".burger");
const nav = document.querySelector("nav");
const shadow = document.querySelector(".shadow");

burgerMenu.addEventListener('click',function(){
  body.classList.toggle("hidden");
  burgerMenu.classList.toggle("close");
  nav.classList.toggle("visible");
});

shadow.addEventListener("click", (event)=>{
  if(event.target.classList.contains("shadow")){
    body.classList.remove("hidden");
    nav.classList.remove("visible");
    burgerMenu.classList.remove("close");
  }
})