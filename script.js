var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "./assets/animations/gezondheidszorg.json",
});

const animationcontainer = document.querySelector(".animation_1");

animationcontainer.addEventListener("mouseenter", () => {
  animation.goToAndPlay(0, true);
});
animationcontainer.addEventListener("mouseleave", () => {
  animation.pause();
});

//animation2
var animation2 = bodymovin.loadAnimation({
  container: document.getElementById("anim_2"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "./assets/Comp1.json",
});

const animationcontainer2 = document.querySelector(".animation_2");

animationcontainer2.addEventListener("mouseenter", () => {
  animation2.goToAndPlay(0, true);
});
animationcontainer2.addEventListener("mouseleave", () => {
  animation2.pause();
});

//animation3
var animation3 = bodymovin.loadAnimation({
  container: document.getElementById("anim_3"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "./assets/animations/goederen.json",
});

const animationcontainer3 = document.querySelector(".animation_3");

animationcontainer3.addEventListener("mouseenter", () => {
  animation3.goToAndPlay(0, true);
});
animationcontainer3.addEventListener("mouseleave", () => {
  animation3.pause();
});

//animation4
var animation4 = bodymovin.loadAnimation({
  container: document.getElementById("anim_4"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "./assets/animations/technologie.json",
});

const animationcontainer4 = document.querySelector(".animation_4");

animationcontainer4.addEventListener("mouseenter", () => {
  animation4.goToAndPlay(0, true);
});
animationcontainer4.addEventListener("mouseleave", () => {
  animation4.pause();
});
