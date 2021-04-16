var toggled = false;


$('#toggle').click(function () {
    if (!toggled) {

        $('body').css('backgroundColor', 'black');
        $('h1').css('color', 'white');
        $('#circle').css('marginLeft', '120px');
        toggled = true;

    } else {
        $('body').css('backgroundColor', 'white');
        $('h1').css('color', 'black');
        $('#circle').css('marginLeft','1px');

        toggled = false;
    }
})