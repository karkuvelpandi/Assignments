// Home page scripts

let mountain1 = document.getElementById("mountain1");
let mountain2 = document.getElementById("mountain2");
let navbar = document.getElementById("navbar");
let aElements = document.querySelectorAll("#nav-list a");
let homeText = document.getElementById("home-text-container");
let navbarLogo = document.getElementById("logo");
let isMobile = window.innerWidth < 480;
//
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    homeText.style.transform = "translateY(-40px)";
  }
});
//
document.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    mountain1.style.transform = "translateX(30px)";
    mountain2.style.transform = "translateX(-30px)";
    navbar.style.position = "fixed";
    navbar.style.backgroundColor = "white";
    navbarLogo.setAttribute(
      "src",
      `${isMobile ? "./assets/images/logo1.png" : "./assets/images/logo2.png"}`
    );
    homeText.style.transform = "translateY(40px)";
    aElements.forEach(function (aElement) {
      aElement.classList.add("nav-link-active");
    });
  } else {
    mountain1.style.transform = "none";
    mountain2.style.transform = "none";
    navbar.style.position = "absolute";
    navbar.style.backgroundColor = "transparent";
    navbarLogo.setAttribute("src", "./assets/images/logo1.png");
    homeText.style.transform = "translateY(-40px)";
    aElements.forEach(function (aElement) {
      aElement.classList.remove("nav-link-active");
    });
  }
});
//

// Team section script

let tabOne = document.getElementById("tab-one");
let tabTwo = document.getElementById("tab-two");
let firstTab = document.getElementById("first-tab");
let secondTab = document.getElementById("second-tab");

tabOne.addEventListener("click", () => {
  tabOne.classList.add("tab-active");
  tabTwo.classList.remove("tab-active");
  firstTab.style.display = "block";
  secondTab.style.display = "none";
});

tabTwo.addEventListener("click", () => {
  tabOne.classList.remove("tab-active");
  tabTwo.classList.add("tab-active");
  firstTab.style.display = "none";
  secondTab.style.display = "block";
});

// Slider functionality
function changeSlider(event) {
  let imageSource = event.target.src;
  let imageContainer = document.getElementById("history");
  imageContainer.style.backgroundImage = `url(${imageSource})`;
}

let images = document.querySelectorAll(".item img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", changeSlider);
}
