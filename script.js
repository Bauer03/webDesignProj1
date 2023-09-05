let thirdSection = document.querySelector(".features-div");
let secondSection = document.querySelector(".second-section")
let headerElm = document.querySelector(".first-section");
let downArrow = document.querySelector(".down-btn");
let upArrow = document.querySelector(".up-btn");
let fourthSection = document.querySelector(".fourth-section");

let headerHeight = headerElm.offsetHeight;

let scrollArray = [0, thirdSection.offsetTop - headerHeight, fourthSection.offsetTop - headerHeight];
let currentIndex = 0;

let features = {
    feature1: {
        fill:`
            <div class="feature">
                The 2020 Yamaha MT-09 is powered by a sweet 847cc, DOHC, liquid-cooled, inline three-cylinder engine that is 
                tuned for the type of low-end power that makes a hooligan bike so much fun to ride.
                <img src="images/engine.jpg" alt="engine">
            </div>
        `
    },
    feature2: {
        fill: `
            <div class="feature">
                <img src="images/MT_09_raven.jpg" alt="engine">
                The control-filled cast aluminum frame features swoopy lines and the braced swingarm that incorporates
                a horizontal placement of the Monocross shock to create a responsive-handling chassis.
            </div>
        `
    },
    feature3: {
        fill: `
            <div class="feature">
                <img src="images/MT_09_raven.jpg" alt="engine">
                The control-filled cast aluminum frame features swoopy lines and the braced swingarm that incorporates
                a horizontal placement of the Monocross shock to create a responsive-handling chassis.
            </div>
        `
    },
    feature4: {
        fill: `
            <div class="feature">
                The MT-09 engine utilizes Yamaha’s Crossplane Crankshaft Concept which produces a linear torque delivery
                that is the trademark of the Hyper Naked lineup.
                <img src="images/engine.jpg" alt="engine">
            </div>
        `
    },
    feature5: {
        fill: `
            <div class="feature">
                <img src="images/MT_09_raven.jpg" alt="engine">
                A variety of rider assist functions begins with the YCC-T controlled D-Mode 
                throttle mapping that allows for two separate levels of throttle response to 
                choose from.
            </div>
        `
    },
    feature6: {
        fill: `
            
        `
    },
    feature7: {
        fill: `
            
        `
    },
}

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
