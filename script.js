// PASS SCRIPT //

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let NewPassword = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

// Password Generation //

function generatePassword(){

  let pass = '';
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  
  console.log(pass)
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  NewPassword = pass;
}

// Pass Copy //

let tooltipElement = document.querySelector(".tooltip")

let comecoCopy = "Click here to copy ⤴"
let finalCopy = "Copied Password"

function copyPassword(){  
    setTimeout(function() {
        tooltipElement.innerHTML = comecoCopy
    }, 1000)

    tooltipElement.innerHTML = finalCopy
    navigator.clipboard.writeText(NewPassword)
}

// ANIMATION BACKGROUND //

var maxx = document.body.clientWidth;
var maxy = document.body.clientHeight;
var halfx = maxx / 2;
var halfy = maxy / 2;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = maxx;
canvas.height = maxy;
var context = canvas.getContext("2d");
var dotCount = 200;
var dots = [];

// Create Dots

for (var i = 0; i < dotCount; i++) {
  dots.push(new dot());
}

// Dots Animation

function render() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, maxx, maxy);
  for (var i = 0; i < dotCount; i++) {
    dots[i].draw();
    dots[i].move();
  }
  requestAnimationFrame(render);
}

// Dots Class
// @constructor

function dot() {
  
  this.rad_x = 2 * Math.random() * halfx + 1;
  this.rad_y = 1.2 * Math.random() * halfy + 1;
  this.alpha = Math.random() * 360 + 1;
  this.speed = Math.random() * 100 < 50 ? 1 : -1;
  this.speed *= 0.1;
  this.size = Math.random() * 5 + 1;
  this.color = Math.floor(Math.random() * 256);
  
}

// Drawing Dot

dot.prototype.draw = function() {
  
  // Calc "Porlar Cord" to "Decart"
  var dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
  var dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);

  // Set Color
  context.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")";

  // Draw Dot
  context.fillRect(dx, dy, this.size, this.size);
  
};

// Calc new position in "Porlar Cord"

dot.prototype.move = function() {
  
  this.alpha += this.speed;

  // Change Color
  
  if (Math.random() * 100 < 50) {
    this.color += 1;
  } else {
    this.color -= 1;
  }
  
};

// Start Animation

render();