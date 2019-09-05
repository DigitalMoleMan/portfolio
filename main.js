const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

r = () => Math.random();
var y = r();
var x = r();
var z = r();
loop = () => {
    ctx.fillStyle = "rgb(" + x % 255 + "," + y % 255 + "," + z % 255 + ")";
    ctx.fillRect(((x * 5) + canvas.width / 2) % canvas.width, ((y * 5) + canvas.height / 2) % canvas.height, x, y);
x += Math.tan(z);
y += Math.sin(x);
z += Math.cos(y);
}

setInterval(() => loop(), 1000 / 180);