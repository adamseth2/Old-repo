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