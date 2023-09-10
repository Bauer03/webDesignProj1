let headerElm = document.querySelector(".first-section");
let scrollFirst = document.querySelector(".scroll-first")
let scrollSecond = document.querySelector(".scroll-second");
let scrollThird = document.querySelector(".scroll-third");
let container = document.querySelector(".container");

// elements needed for scroll button functionality
let downArrow = document.querySelector(".down-btn"); 
let upArrow = document.querySelector(".up-btn");
let featuresItems = document.querySelector(".features-items")
let homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", e => {
    scrollFirst.scrollIntoView();
})

let scrollContainer = document.querySelector(".scroll-container");

let scrollPageArray = [ // holds references for scrolling
    scrollFirst,
    scrollSecond,
    scrollThird
];
// offsetTop returns height diff between scroll elm and parent elm

let currentIndex = 0;

// window.addEventListener("scrollend",e => {
//     currentIndex = // either scrollFirst,scrollSecond, or ScrollThird, depending on which is closest
// })

window.addEventListener("DOMContentLoaded", e => {
    window.scrollTo({
        top: scrollPageArray[currentIndex]
    }); 
});

downArrow.addEventListener("click", e => {
    scrollThroughElms(false);
});
upArrow.addEventListener("click", e => {
    scrollThroughElms(true);
});

function scrollThroughElms(scrollingUp) {
    if (scrollingUp) {
        currentIndex = currentIndex - 1 >= 0 ? currentIndex -1 : 2
    } else {
        currentIndex = currentIndex + 1 <= 2 ? currentIndex +1 : 0
    }

    scrollPageArray[currentIndex].scrollIntoView();
}

// ADD SOME WAY TO DETECT SCROLL AND UPDATE CURRENTINDEX BASED ON POSITION