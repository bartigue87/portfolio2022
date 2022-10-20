let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: 600,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

let tnsControls = document.querySelector(".tns-controls");
console.log(tnsControls);
tnsControls.firstChild.innerHTML = "<span>&#8592;</span>";
tnsControls.lastChild.innerHTML = "<span>&#8594;</span>";
