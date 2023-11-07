window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let items = document.querySelectorAll(".links");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgb(237, 237, 237)";
    if ((header.style.backgroundColor = "rgb(237, 237, 237)")) {
      items.forEach((element) => {
        element.style.color = "maroon";
        element.addEventListener("mouseenter", function () {
          element.style.color = "white";
          if (element.style.color === "white"){
            element.style.backgroundColor = "maroon";
          }
        });
        element.addEventListener("mouseleave", function () {
            element.style.color = "maroon"
            if(element.style.color === "maroon"){
              element.style.backgroundColor = "transparent"
            }
        });
    });
    }
  } else {
    header.style.backgroundColor = "maroon";
    if (header.style.backgroundColor = "maroon"){
        items.forEach(element => {
            element.style.color = "white"
            element.addEventListener("mouseenter", function(){
              element.style.color = "maroon"
               if (element.style.color === "maroon"){
                element.style.backgroundColor = "white"
               }
            })
            element.addEventListener("mouseleave", function(){
                element.style.color = "white"
                if(element.style.color = "white"){
                  element.style.backgroundColor = "transparent"
                }
            })
        })
    }
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// let slideIndex = 1;
// let slideTimer;
// showSlides(slideIndex);

// function currentSlide(n) {
//   resetTimer;
//   showSlides((slideIndex = n));
// }

// function plusSlides(n) {
//   resetTimer();
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   } else if (n < 1) {
//     slideIndex = slides.length;
//   } else {
//     slideIndex = n;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }

//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";

//   slideIndex++;

//   resetTimer();

//   slideTimer = setTimeout(() => {
//     showSlides(slideIndex);
//   }, 5000);
// }

// function resetTimer() {
//   clearTimeout(slideTimer); // Clear the existing timer
// }


