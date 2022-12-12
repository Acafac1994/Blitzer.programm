// If Stetements

function main () {


var inputSpeed = document.getElementById("speed");
var inputRichtung = document.getElementById("richtung");
var inputMaxSpeed = document.getElementById("maxSpeed");

var maxSpeed = parseInt (inputMaxSpeed.value);
var speed = parseInt (inputSpeed.value); 
var richtung = inputRichtung.checked;  

var maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10);

console.log(maxSpeedWithOffset);

if (speed > maxSpeedWithOffset && richtung == true) {
    alert("Du wurdest geblitzt");
} else {
    alert("Du bist guter jumge");
}

}