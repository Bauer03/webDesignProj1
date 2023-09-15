let headerElm = document.querySelector(".first-section");
let scrollFirst = document.querySelector(".scroll-first")
let scrollSecond = document.querySelector(".scroll-second");
let scrollThird = document.querySelector(".scroll-third");
let container = document.querySelector(".container");

let downArrow = document.querySelector(".down-btn"); 
let upArrow = document.querySelector(".up-btn");
let featuresItems = document.querySelector(".features-items")
let homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", e => {
    scrollFirst.scrollIntoView();
    currentIndex = 0;
})

let scrollContainer = document.querySelector(".scroll-container");

let scrollPageArray = [
    scrollFirst,
    scrollSecond,
    scrollThird
];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", e => {
    scrollContainer.scrollTo({
        top: scrollPageArray[currentIndex]
    }); 
    let containerArr = document.querySelectorAll(".scroll-child");
    let tempHeight = container.getBoundingClientRect().height;
    containerArr.forEach(element => {
        element.style.height = tempHeight - headerElm.getBoundingClientRect().height;
        console.log(element.getBoundingClientRect().height);
    });
});

downArrow.addEventListener("click", e => {
    currentIndex = (currentIndex + 1 <= 2) ? currentIndex + 1 : 0;
    scrollPageArray[currentIndex].scrollIntoView();
});

upArrow.addEventListener("click", e => {
    currentIndex = (currentIndex - 1 >= 0) ? currentIndex - 1 : 2;
    scrollPageArray[currentIndex].scrollIntoView();
});


