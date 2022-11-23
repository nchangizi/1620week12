// import log from '../test'
// log();
const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton);

function clickHandler() {
  alert("You clicked me!");
  // clickMeButton.removeEventListener("click", clickHandler)
}

clickMeButton.addEventListener("click", clickHandler, { once: true });

function changeBGPink() {
  // document.body.style.backgroundColor = "pink";

  document.body.classList.add("pink-bg");
}
clickMeButton.addEventListener("click", changeBGPink);

function changeText() {
  if (clickMeButton.textContent === "Click Me!") {
    clickMeButton.textContent = "clicked";
  } else if (clickMeButton.textContent === "clicked") {
    clickMeButton.textContent = "Click Me!";
  }
}
clickMeButton.addEventListener("click", changeText);

function updateImage(event) {
  // console.log(event.target.textContent);
  const image = document.querySelector("#shoppingCart");
  // console.log(image);
  image.src = "images/263142.png";
  image.width = 100;
  image.height = 100;
  image.alt = "shopping cart icon";
}
clickMeButton.addEventListener("click", updateImage);

const buttonContainer = document.querySelector(".button-container");

function changeBGGreen(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.style.backgroundColor = "green";
    // e.target.classList.add("greenBG");
  }
}
buttonContainer.addEventListener("mouseover", changeBGGreen);

function changeTextColor(e) {
    // console.log(e.target.textContent)
  e.target.style.color = e.target.textContent;
//   e.target.classList.add(e.target.textContent);
}
buttonContainer.addEventListener("click", changeTextColor);
