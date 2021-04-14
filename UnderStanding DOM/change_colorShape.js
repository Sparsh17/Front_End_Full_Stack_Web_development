var color = ["red", "orange", "green", "violet","purple"];

var cur = "square";

var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down"];

var div1 = document.getElementById("div1");
var curShape = document.getElementById(cur);


var changeColor = document.getElementById("change-color");
var changeShape = document.getElementById("change-shape");

changeColor.addEventListener('click', function() {
    
    var randColor = color[Math.floor(Math.random() * color.length)];
    div1.style.backgroundColor = randColor;
})

document.getElementById("change-shape").onclick = function () {
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}