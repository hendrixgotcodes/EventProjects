const balloon = document.getElementById("ex1");

const mouseTrail = document.getElementById("ex2");

const tabs = document.getElementById("ex3");

balloon.addEventListener("click", () => {
  window.open("./html/balloon.html", "_self");
});

mouseTrail.addEventListener("click", () => {
  window.open("./html/mouseTrail.html", "_self");
});

tabs.addEventListener("click", () => {
  window.open("./html/tabs.html", "_self");
});
