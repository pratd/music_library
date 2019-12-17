let countryUrl = 'https://api-2445580194301.production.gw.apicast.io/1.0/region/country/code.php?';
let countryKey = '';
let parentUrl = 'https://itunes.apple.com/search?';
let apiId = '';
//urls needed for the requests
export function getCountrycode(countryName){
    var countryRequest = $.ajax({
        cache:false,
        url: countryUrl + "value="+countryName+"&app_id="+apiId+"&app_key="+countryKey,
        dataType:"json",
        type:"GET",
        success: function(result){
            var responseOutput = reuslt["ISO ALPHA-2"];
        }
    }).fail(function(error){
        console.log(error);
        alert("error sending country requests");
    });
}
//the above is the country id request needed for the itunes API
export default function getRequests(parentUrl, terms, nameofCountry, typeofMedia, limit, explicit){
    var request = $.ajax({
        cache:false,
        url: parentUrl,
        dataType:"jsonp",
        type:"GET",
        data:{term: terms, country: nameofCountry, media: typeofMedia, limit: limit, explicit: explicit },
        success: function(result){
           // res= createData(result);
        }
     }).fail(function(error){
         console.log(error);
         alert("error sending requests");
     });
}

