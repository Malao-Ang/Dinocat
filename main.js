const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

var charactor = document.getElementById("dino");
var obsctracle = document.getElementById("obstrucle");
// var canvas = document.getElementById("canvas");
var point = document.getElementById("point");
var template = document.getElementById("startGame");
var titleStrat = document.getElementById('Title-Strat');
var start = false;
var count = 0;



app.get('/', function (req, res) {
  res.sendFile(__dirname+'index.html')
})
app.listen(port,()=>{
    console.log('lisning at port 3000,')
})

function CheckStrat() {
  start = true;
  var countPoint = setInterval(() => {
    count += 1;
    point.innerHTML = "Point :0" + count;
  }, 100);
}
function jump() {
  if (charactor.classList != "animate") {
    charactor.classList.add("animate");
    console.log("jump!!");
  }
  setTimeout(() => {
    charactor.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(() => {
  if (start === false) {
    obsctracle.style.animation = "none";
    template.classList.add("NotStart");
  } else {
    template.classList.remove("NotStart");
    obsctracle.style.animation = "runIn 1s infinite linear";
    titleStrat.style.opacity=0;

  }

  var charactorTop = parseInt(
    window.getComputedStyle(charactor).getPropertyValue("top")
  );
  var ObstrLeft = parseInt(
    window.getComputedStyle(obsctracle).getPropertyValue("left")
  );
 
  if (ObstrLeft < 20 && ObstrLeft >= 0 && charactorTop >= 125 && start === true) {
   
    obsctracle.style.animation = "none";
    charactor.style.animation = "none";
    alert("♟You point =  "+count);
    window.location.reload()

    
  }
}, 10);
