//function fetchDogImage() {
//    var XhrRequest = new XMLHttpRequest();
//    
//    XhrRequest.onload = function() {
//        console.log(XhrRequest.response);
//        
//        var responseJson = JSON.parse(XhrRequest.response);
//        var imageUrl = responseJson.message;
//        $('#image').attr('src',imageUrl);
//    }
//    
//    XhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
//    XhrRequest.send();
//}




function fetchDogImage() {
    
//    1st method using jQuery
    
//    $.ajax({
//        url: 'https://dog.ceo/api/breeds/image/random',
//        method: 'GET',
//        success: function (data) {
//            var imageUrl = data.message;
//            $('#image').attr('src', imageUrl);
//        }
//    });
//    
    
//    2nd method using jQuery
    
    $.get('https://dog.ceo/api/breeds/image/random', function(data){
        var imageUrl = data.message;
        $('#image').attr('src', imageUrl);
    })
    
}

$('#fetch-btn').click(fetchDogImage);
