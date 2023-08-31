let thirdSection = document.querySelector(".features-div");
let headerElm = document.querySelector(".first-section");
let downArrow = document.querySelector(".down-btn");
let upArrow = document.querySelector(".up-btn");
let fourthSection = document.querySelector(".fourth-section");

let headerHeight = headerElm.offsetHeight;

let scrollArray = [0, thirdSection.offsetTop - headerHeight, fourthSection.offsetTop - headerHeight];
let currentIndex = 0;

window.addEventListener("DOMContentLoaded", e => {
    window.scrollTo({
        top: scrollArray[currentIndex]
    });
});

downArrow.addEventListener("click", e => {
    scrollThroughElms(false);
});

upArrow.addEventListener("click", e => {
    scrollThroughElms(true);
});

function scrollThroughElms(scrollUp) {
    if (scrollUp) {
        currentIndex = currentIndex - 1 >= 0 ? currentIndex -1 : 2
    } else {
        currentIndex = currentIndex + 1 <= 2 ? currentIndex +1 : 0
    }

    window.scrollTo({
        top: scrollArray[currentIndex],
    });
}
