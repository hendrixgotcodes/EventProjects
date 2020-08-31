// let trails = document.getElementsByClassName("trails");
let trail = document.getElementById("one");
window.addEventListener("mousemove", e => {
  //   for (trail in Array.from(trails)) {
  //     trail.style.left = e.screenX;
  //     trail.style.top = e.screenY;
  //   }

  trail.offsetLeft = e.offsetX;
  trail.offsetTop = e.offsetY;

  console.log(`mouse left: ${e.offsetX} \t mouse top: ${e.offsetY}`);
  console.log(`element left: ${trail.offsetLeft} \t element top: ${trail.offsetTop}`);
});
