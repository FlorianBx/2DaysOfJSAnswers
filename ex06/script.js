const BigRedButton = document.getElementById("myButton");
const arrayOfColors = ['blue', 'green', 'red', 'yellow'];

function randomColor() {
  document.body.style.backgroundColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
}

BigRedButton.addEventListener("click", function () {
  randomColor();
});
