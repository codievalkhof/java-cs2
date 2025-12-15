const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

function RandomColor(){
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}
// =======================
// KERSTBOOM
// =======================

// Boom (driehoek)
g.beginPath();
g.moveTo(400, 100);
g.lineTo(300, 300);
g.lineTo(500, 300);
g.closePath();
g.fillStyle = "green";
g.fill();

// Stam (vierkant)
g.beginPath();
g.rect(370, 300, 60, 80);
g.fillStyle = "brown";
g.fill();

// Kerstballen (8 cirkels)
g.beginPath();
g.arc(400, 170, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor()

g.beginPath();
g.arc(360, 220, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(440, 220, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(330, 260, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(370, 260, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(410, 260, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(450, 260, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(400, 240, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(400, 200, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(435, 200, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();

g.beginPath();
g.arc(400, 180, 8, 0, Math.PI * 2);
g.fillStyle = RandomColor();
g.fill();
// Piek (driehoek)
g.beginPath();
g.moveTo(400, 70);
g.lineTo(390, 100);
g.lineTo(410, 100);
g.closePath();
g.fillStyle = "yellow";
g.fill();


// =======================
// 4 KERSTHUISJES
// =======================

// Huis 1
g.beginPath();
g.rect(100, 400, 80, 60);
g.fillStyle = "lightblue";
g.fill();

g.beginPath();
g.moveTo(100, 400);
g.lineTo(140, 360);
g.lineTo(180, 400);
g.closePath();
g.fillStyle = "red";
g.fill();

// Huis 2
g.beginPath();
g.rect(220, 400, 80, 60);
g.fillStyle = "lightblue";
g.fill();

g.beginPath();
g.moveTo(220, 400);
g.lineTo(260, 360);
g.lineTo(300, 400);
g.closePath();
g.fillStyle = "red";
g.fill();

// Huis 3
g.beginPath();
g.rect(520, 400, 80, 60);
g.fillStyle = "lightblue";
g.fill();

g.beginPath();
g.moveTo(520, 400);
g.lineTo(560, 360);
g.lineTo(600, 400);
g.closePath();
g.fillStyle = "red";
g.fill();

// Huis 4
g.beginPath();
g.rect(640, 400, 80, 60);
g.fillStyle = "lightblue";
g.fill();

g.beginPath();
g.moveTo(640, 400);
g.lineTo(680, 360);
g.lineTo(720, 400);
g.closePath();
g.fillStyle = "red";
g.fill();


// =======================
// TEKST
// =======================
g.fillStyle = "black";
g.font = "40px Arial";
g.fillText("Merry Christmas", 250, 550);
