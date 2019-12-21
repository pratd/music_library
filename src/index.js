
import './assets/scss/app.scss';
import $ from 'jquery';
//import boostrap from 'bootstrap';
//import plugin from 'jquery-plugin';

import {getCountrycode, getRequests} from './components/requests.js';
import {autocomplete, countries} from './components/autocomplete.js';
import {find} from './components/find.js';
import {inputData} from './components/inputData.js';
//for rendering objects
import {renderingObjects} from './components/render.js';
// ready the get function once the user has submitted
const outputData = function() {
    //get the input search object
    let inputSearch = find();//finds all the key values pressed or changed
    let options = {
        term: inputSearch.term,
        country: inputSearch.country,
        type: inputSearch.type,
        limit: inputSearch.limit,
        content: inputSearch.content
    };
    //change the parameter type for the search term based on what is allowed in the API
    switch (options.type) {
        case 'artists':
            options.type='musicArtist';
            break;
        case 'songs':
            options.type='song';
            break;
        case 'albums':
            options.type='album';
            break;
        default:
            options.type='musicVideo';
    }
   
    //callback the search function based on the search required
    if( inputSearch.country && inputSearch.country !=''){
        getCountrycode(inputSearch.country, (err,results)=>{
            if(err){console.log('error in getting country requests');}
            options.country=results; //store in the options object for use later
             //call back function is executed and run here, giving the value of the results
        });
    }else{
        alert('Enter Region of search, REQUIRED!');
    }
    if (inputSearch.term && inputSearch.term !=''){
        getRequests(options.term, options.country, options.type, options.limit, options.content, (error, response)=>{
            if(error){console.log("error getting song requests");}
            let responseValue = response.results;
            let objectArray= inputData(responseValue, options.type);
            //console.log(objectArray); 
            //rendering objects
            
            let ItemSelector = $('.app');
            renderingObjects(objectArray,ItemSelector,options.type);
        });
        //get the response
       }
    else {
        alert('Please enter a valid search term');
    }
   
};

//ready the document and run the functions when ready
$(document).ready(function(){
    /*clear windows local storage when the webpage is instantiated*/
    window.localStorage.clear();
    /*initiate the autocomplete function on the element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById("country"), countries);
    
    //get all the elements from various checkboxes and store in the search item
    $('#submitterm').click(function(){
        outputData();
    });
   
});


