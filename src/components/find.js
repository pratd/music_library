import {searchbox} from './search.js';
//initiate the submit click button and get the values from the search boxes;
function find() {

    let searchName = $('#searchItems').val();  //getting search values, default value as starting value
    let countryName = ""; //using default country values
    let explicitContent = ""; //explicit content value default
    let limits = ""; //limit of songs default
    let songType=$('#songType').val(); //the type of song looking for default value as starting value

    //instantiate a new search box 
    let inputSearch = new searchbox(); //

    //checking if the checkboxes are checked or not
    var x = document.getElementById('countryCheck').checked;
    var y = document.getElementById('explicitCheck').checked;
    var z = document.getElementById('limitCheck').checked;

    if(x){
        countryName = $('#country').val();   
    }
    if(y){
        explicitContent = $('#explicitContent').val();   
    }
    if(z){
        limits = $(songlimit).val(); 
    }
    //put the values of search items in the seachbox object
    inputSearch.country=countryName; //adding the country name to searhc object
    inputSearch.content= explicitContent;//adding explicit content
    inputSearch.limit = limits;//adding limits
    inputSearch.term= searchName;//adding search term
    inputSearch.type= songType;//adding the songtype

    return inputSearch;
}

export {find};