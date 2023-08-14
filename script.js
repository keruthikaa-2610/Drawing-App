const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let painting = false;

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

ctx.strokeStyle = "#000";
ctx.lineWidth = 5;

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mousemove", draw);

function startPainting(e) {
  painting = true;
  draw(e);
}

function stopPainting() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener("mouseleave", stopPainting);
