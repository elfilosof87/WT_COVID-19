const covid_open_btn = document.querySelector(".covid-open-btn");
const covid_close_btn = document.querySelector(".covid-close-btn");
const covid_nav = document.querySelectorAll(".covid-nav");

covid_open_btn.addEventListener("click", () => {
  covid_nav.forEach(nav_el => {
    nav_el.classList.add("visible");
  });
});

covid_close_btn.addEventListener("click", () => {
  covid_nav.forEach(nav_el => {
    nav_el.classList.remove("visible");
  });
});

// GET IN TOUCH COMPONENT
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
