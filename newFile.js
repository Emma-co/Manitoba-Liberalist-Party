window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let items = document.querySelectorAll(".items");
  if (window.scrollY > 100) {
    header.style.background = "rgb(237, 237, 237)";
    items.forEach((element) => {
      element.style.color = "maroon";
    });
    // element.addEventListener("mouseenter", function(){
    //     element.style.color = "maroon"
    //     element.style.backgroundColor = ""
    // })
    // element.addEventListener("mouseleave", function(){
    //     element.style.color = "maroon"
    // })
  } else {
    header.style.background = "maroon";
    items.forEach((element) => {
      element.style.color = "white";
      // element.addEventListener("mouseenter", function(){
      //     element.style.color = "maroon"
    });
    // element.addEventListener("mouseleave", function(){
    //     element.style.color = "white"
    // })
  }
});
