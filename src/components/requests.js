let parentUrl = 'https://itunes.apple.com/search?';
function getRequests(parentUrl, terms, country){
    var request = $.ajax({
        cache:false,
        url: parentUrl,
        dataType:"jsonp",
        type:"GET",
        data:{term: terms, country: nameofCountry, media: typeofMedia, limit: limit, explicit: explicit },
        success: function(){
            res= createData();
        }
     }).fail(function(error){
         console.log(error);
         alert("error sending requests");
     });
}
