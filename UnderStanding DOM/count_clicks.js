var clickCount = document.getElementById("count-click");
var box = document.getElementById("outer");
var revert = document.getElementById("revert");
count = 0;

box.addEventListener('click', function() {
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
})
