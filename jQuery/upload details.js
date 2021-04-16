$('body').height(window.innerHeight-10);
var items = $('#items');

$('form button').click(function(event) {
    let roll = $('#roll_no');
    let name = $('#name');
    let marks = $('#marks');
    
    let rollValue = roll.val();
    let nameValue = name.val();
    let marksValue = marks.val();
    
    event.preventDefault();
    
    if (rollValue === "" || nameValue === "" || marksValue === "") {
        alert("Please fill all the fields");
    }
    
    else {
        let item = '<div class="items"> Roll No - <span class="highlight">' + rollValue + '</span> , <span class="highlight">' + nameValue + '</span> has scored <span class="highlight">' + marksValue + '</span> marks </div>'
        
        items.append(item);
        
        roll.val("");
        name.val("");
        marks.val("");
    }
})