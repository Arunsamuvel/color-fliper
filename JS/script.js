const color = document.getElementById("color");
const arr = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "white",
  "orange",
  "gray",
  "brown",
];
function change() {
  const result = Math.floor(Math.random() * 10);
  if (result >= 0) {
    color.style.background = arr[result];
  }
  console.log(result);
}
