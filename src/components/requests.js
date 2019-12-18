let countryUrl = 'https://api-2445580194301.production.gw.apicast.io/1.0/region/country/code.php?';
let countryKey = '';
let parentUrl = 'https://itunes.apple.com/search?';
let apiId = '';
//urls needed for the requests
function getCountrycode(countryName, countryCallback){
    var requests= $.ajax({
        cache:false,
        url: countryUrl + "value="+countryName+"&app_id="+apiId+"&app_key="+countryKey,
        dataType:"json",
        type:"GET",
        success: function(result){
            let outputCode= countryCallback(null, result["ISO ALPHA-2"]);
            return outputCode;
        }
    }).fail(function(error){
        console.log(error);
        alert("error sending country requests");
        let outputCode= countryCallback("error sending country requests", null);
        return outputCode;
    });
}
//the above is the country id request needed for the itunes API. The following is the itunes API
function getRequests(terms, nameofCountry, typeofMedia, limit, explicit, requestCallback){
    var request = $.ajax({
        cache:false,
        url: parentUrl + "term=" + terms + "&country=" + nameofCountry + "&media=music" + "&entity=" + typeofMedia + "&limit=" + 
        limit + "&explicit=" + explicit ,
        dataType:"jsonp",
        type:"GET",
        success: function(result){
            let outputValue = requestCallback(null,result);
            return outputValue;
        }
    }).fail(function(error){
        console.log(error);
        alert("error sending requests");
        let outputValue= requestCallback("error sending song requests", null);
        return outputValue;
    });
}


export {getCountrycode,getRequests};

