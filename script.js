var hiddenElement = document.querySelector('.back-to-top');

if (hiddenElement) {
    window.addEventListener('scroll', function () {
        if (isScrolledIntoView(hiddenElement)) {
            hiddenElement.classList.add('visible');
        }
    });
}

function isScrolledIntoView(element) {
    if (!element) {
        return false;
    }
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var topVisible = rect.top < windowHeight;
    var bottomVisible = rect.bottom >= 0;
    return (topVisible && bottomVisible);
}

const hamburger1 = document.querySelector(".hamburger");
const navMenu1 = document.querySelector(".nav-menu");

hamburger1.addEventListener("click", () => {
    hamburger1.classList.toggle("active");
    navMenu1.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.
    addEventListener("click", () => {
        hamburger1.classList.remove("active");
        navMenu1.classList.remove("active");
    }));





