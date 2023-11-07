document.addEventListener("DOMContentLoaded", function () {
    const animateElements = document.querySelectorAll(".animate-in");

    function animateOnScroll() {
        animateElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowBottom = window.innerHeight;

            if (elementTop < windowBottom) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check for elements in view
});
