

var calculate = document.getElementById('calcBtn');


document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   var calculated = function(event) {
     var uno = Number(document.getElementById('num_one').value);
     var dos = Number(document.getElementById('num_two').value);
     var answer = uno + dos;
     document.getElementById('answer').innerHTML = answer;
   };
   calculate.addEventListener('click', calculated);
 });
