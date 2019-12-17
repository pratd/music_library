
import './assets/scss/app.scss';
import $ from 'jquery';
//import boostrap from 'bootstrap';
//import plugin from 'jquery-plugin';

import {getCountrycode, getRequests} from './components/requests.js';
import {autocomplete, countries} from './components/autocomplete.js';
import {searchbox} from './components/search.js';
import {artistClass} from './components/artist.js';
import {musicVideo} from './components/music_video.js';
import {songs} from './components/songs.js';
import {album} from './components/album.js';
//initiate the submit click button and get the values from the search boxes;
//check if the submit options have been checked or not
const checkedOrNot = function(){
    var x = document.getElementById('countryCheck').checked;
    var y = document.getElementById('explicitCheck').checked;
    var z = document.getElementById('limitCheck').checked;
    return [x,y,z];
};
// ready the get function once the user has submitted
const inputData = function() {
    let searchName = $('#searchItems').val();  
    let countryName = "";
    let explicitContent = "";
    let limits = "";
    let songType=$('#songType').val();
    let inputSearch = new searchbox();
    
    
    //checking if the checkboxes are checked or not
    let checksResult = checkedOrNot();
    if(checksResult[0]){
        countryName = $('#country').val();   
    }
    if(checksResult[1]){
        explicitContent = $('#explicitContent').val();   
    }
    if(checksResult[2]){
        limits = $(songlimit).val(); 
    }
    //put the values of search items in the seachbox object
    inputSearch.country=countryName; //adding the country name to searhc object
    inputSearch.content= explicitContent;//adding explicit content
    inputSearch.limit = limits;//adding limits
    inputSearch.term= searchName;//adding search term
    inputSearch.type= songType;
    console.log(inputSearch);
    // if( countryName && countryName !=''){
    //     //getCountrycode('spain');
        
    // }else{
    //     alert('Enter Region of search, REQUIRED!');
    // }
    // if (searchName && searchName !=''){
    //     searchName = searchName.trim();
    //     //
    //    }
    // else {
    //     alert('Please enter a valid search term');
    // }
   
};

$(document).ready(function(){
    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById("country"), countries);
    //get all the elements from various checkboxes and store in the search item
    $('#submitterm').click(function(){
        inputData();
    });
   
});


