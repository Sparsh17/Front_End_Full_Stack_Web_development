var colors = ['red', 'blue', 'yellow', 'lightgrey', 'black', 'orange', 'deeppink', 'green', 'purple', 'deepskyblue','firebrick', 'crimson'];


$('button').click(function() {
    $('#box').append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random()*12)] + '" </div>')
})