// Function to increase the size of the balloon font
let balloon = document.getElementById("balloon");

function inflate() {
  // let balloon = document.getElementById("balloon");

  //   balloon.style.fontSize += 10;
  let fontSize = parseFloat(
    window.getComputedStyle(balloon, null).getPropertyValue("font-size")
  );
  if (fontSize < 320) {
    balloon.style.fontSize = fontSize + fontSize * 0.1 + "px";
    console.log(
      window.getComputedStyle(balloon, null).getPropertyValue("font-size")
    );
  } else {
    balloon.innerText = "💥";
  }
}

// console.log(
//   window.getComputedStyle(balloon, null).getPropertyValue("font-size")
// );

// Function to decrease the size of the balloon font
function deflate() {
  //   balloon.style.fontSize += 10;

  let fontSize = parseFloat(
    window.getComputedStyle(balloon, null).getPropertyValue("font-size")
  );
  if (fontSize > 15) {
    balloon.style.fontSize = fontSize - fontSize * 0.1 + "px";
  }

  if (fontSize > 320) {
    balloon.innerHTML = "🎈";
  }
}

// Adding event handlers to the browser
window.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    inflate();
    //   } else {
    //     console.log("fail");
    //     console.log(e.keyCode);
  }
});

// Event handler to catch mouse scroll actions
let scale = 1;

window.addEventListener("wheel", e => {
  e.preventDefault();

  let fontSize = parseFloat(
    window.getComputedStyle(balloon, null).getPropertyValue("font-size")
  );
  scale += e.deltaY * 0.1;

  console.log(fontSize);

  if (fontSize < 320) {
    balloon.style.fontSize = scale + "px";
  }
  if (fontSize > 320) {
    balloon.innerHTML = "🎈";
    scale -= e.deltaY * 0.1;
  }
});

window.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    deflate();
  } else {
    console.log(e.key);
  }
});
