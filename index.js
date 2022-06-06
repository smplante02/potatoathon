var potatoWeight = document.getElementById('weightPotato');
var numPotatoes = document.getElementById('numPotatoes'); 
var finalMin = document.getElementById('finalMin');
var finalSec = document.getElementById('finalSec');

potatoWeight.addEventListener('input', getTime);
numPotatoes.addEventListener('input', getTime);

function getTime() {
    var w = parseFloat(potatoWeight.value) || 0;
    var n = parseFloat(numPotatoes.value) || 0;
    calculation = (w*n*1.333).toFixed(1)
    finalMin.innerText = calculation
    finalSec.innerText = (calculation*60).toFixed(0)
}