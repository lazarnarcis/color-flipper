function generateColor() {
    let text = document.getElementById("text");
    let x = Math.floor((Math.random() * 256) + 1);
    let y = Math.floor((Math.random() * 256) + 1);
    let z = Math.floor((Math.random() * 256) + 1);
    document.body.style.backgroundColor = "rgb(" + x + ", " + y + ", " + z + ")";
    text.innerHTML = "Background generated: rgb(" + x + ", " + y + ", " + z + ")";
}
generateColor();
let button = document.getElementById("button");
button.addEventListener("click", function() {
    generateColor();
});