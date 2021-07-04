function generateColor() {
    let text = document.getElementById("text");
    let x = Math.floor((Math.random() * 256) + 1);
    let y = Math.floor((Math.random() * 256) + 1);
    let z = Math.floor((Math.random() * 256) + 1);
    let r = toHex(x);
    let g = toHex(y);
    let b = toHex(z);
    document.body.style.backgroundColor = "rgb(" + x + ", " + y + ", " + z + ")";
    text.innerHTML = "Background generated: rgb(" + x + ", " + y + ", " + z + ")<br/>Hex: #" + r + g + b;
}
generateColor();
let button = document.getElementById("button");
button.addEventListener("click", function() {
    generateColor();
});
function toHex(n) {
  var hex = n.toString(16);
  while (hex.length < 2) { hex = "0" + hex; }
  return hex;
}