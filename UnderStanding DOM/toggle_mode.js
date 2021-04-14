var toggled = false;

var toggle = document.getElementById("toggle");
var circle = document.getElementById("circle");
var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];

toggle.addEventListener('click', function() {
    if(!toggled) {
        
        bodyTag.style.backgroundColor = "black";
        hTag.style.color = "white";
        circle.style.marginLeft = "120px";
    
        toggled = true;
        
    }else {
        bodyTag.style.backgroundColor = "white";
        hTag.style.color = "black";
        circle.style.marginLeft = "1px";
    
        toggled = false;
    }
})