let hamburger = document.getElementById('hamburger');
let navPopUp = document.getElementById('nav-pop-up');
let secondLineHam = document.querySelector('.two');


hamburger.addEventListener("click", openNavBar)
document.getElementById('arrow-close').addEventListener("click", openNavBar)

// const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 800
// });

function openNavBar() {
    console.log(navPopUp.style.display);
    if (navPopUp.style.display === 'none' || navPopUp.style.display === '') {
        navPopUp.style.display = 'block';
        secondLineHam.style.width = '65%';
    } else{
        navPopUp.style.display = 'none'; 
        secondLineHam.style.width = '100%'
    } 
}

gsap.registerPlugin(ScrollTrigger);

gsap.to("#section-B", {
    scrollTrigger:"#section-B",
    start: "bottom bottom",
    y: 20,
    delay: 0.25,
    autoAlpha: 1,
    duration: 3
});
gsap.to("#section-B h1", {
    scrollTrigger:"#s-B-title",
    start: "bottom bottom",
    y: 20,
    delay: 0.01,
    autoAlpha: 1,
    duration: 3
});
gsap.to("#section-B img", {
    scrollTrigger:"#section-B img",
    start: "bottom",
    delay: 0.01,
    autoAlpha: 1,
    duration: 2
});
gsap.to(".container-A p", {
    scrollTrigger:".container p",
    start: "bottom",
    delay: 0.01,
    autoAlpha: 1,
    duration: 2
});

gsap.to(".container-B p", {
    scrollTrigger:".container p",
    start: "bottom",
    delay: 0.01,
    autoAlpha: 1,
    duration: 2
});

gsap.to(".container-C h2", {
    scrollTrigger:".container p",
    start: "bottom",
    delay: 0.01,
    autoAlpha: 1,
    duration: 2
});