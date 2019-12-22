//let itemsElement = $('app');
function renderingObjects(objectArray,itemsElement, type){
    let divCardTop = $('<div class=" text-center"></div>');
    //loop through the items 
    let divCardParent1 = $('<div class="card-columns text-center"></div>'); //parent card element 1
    let divCardParent2 = $('<div class=" text-center" id="Parent"></div>'); //parent card element 1
    let divCardParent2Title = $('<h2 class="fontusetitle cardTitle" >Favourites</h3>');
    //make a card place for favourites
    let divCardRow = $('<div class="row pl-0 pr-0"></div>');
    let divCardCol1 = $('<div class="col-sm-9"></div>');
    let divCardCol2 = $('<div class="col-sm-3" id="Col2"></div>');
    let cardBody = $(itemsElement.html(divCardTop));
    divCardTop.append(divCardRow);
    //append the cols
    divCardRow.append(divCardCol1);
    divCardRow.append(divCardCol2);
    divCardCol1.append(divCardParent1);
    divCardParent2.append(divCardParent2Title);
    divCardCol2.append(divCardParent2);

    //make some decorations in divCardCol2

    let index = 0; //index for use
    objectArray.forEach(element => {

        let cardElement= $('<div id="cardElement_'+ index + '"class="card"></div>'); //child card element
        divCardParent1.append(cardElement);
        
        //make a  bookmark at the top right corner
        //let cardElementBookmark = $('<div class="bookmarkRibbon" id="bookmark_"'+index+'"><span style="color:white;position: relative;top: -9px;text-align: center;right: -10px;">⭐</span></div>');
        let cardElementBookmark = $(' <div class="ribbon" id="ribbon_'+index+'"></div>');
        //add attributes
        cardElementBookmark.attr('elementid', 'book_'+index);
        cardElement.append(cardElementBookmark);
        //add click to an element
        
        $('#ribbon_'+index).click(AddtoFavorites);
         

        let cardTitle =null;
        let cardCover=null;
        let cardTitleFav = null;
        let cardCoverFav=null;
        switch (type) {
            case 'musicArtist':
                cardTitle = $('<h3 class="fontusetitle cardTitle pb-2 pt-2">'+element.firstName+'</h3>');
                cardTitleFav = $('<h3 class="fontusetitle cardTitle" id="Name_'+index+'">'+element.firstName+'</h3>'); //store the favourite variableS
                cardTitleFav.css("display", "none");
                break;
        
            default:
                cardTitle = $('<h3 class="fontusetitle cardTitle pb-2 pt-2">'+element.artistName+'</h3>'); //add name on the top
                cardTitleFav = $('<h3 class="fontusetitle cardTitle" id="Name_'+index+'">'+element.artistName+'</h3>'); //store the favourite variable
                cardTitleFav.css("display", "none");
                cardCover = $('<img src="'+element.cover+'" class="img-fluid card-img-top thumbImage" alt="image"></img>'); //add cover pic if exists
                cardCoverFav = $('<img src="'+element.cover+'" class="img-fluid card-img-top thumbImage" alt="image" id="Cover_'+index+'"></img>');//add favourite cpver pic
                cardCoverFav.css("display", "none");
                break;
        }

        cardElement.append(cardTitle);
        cardElement.append(cardTitleFav); //store the favourite variable
        if (cardCoverFav){
            cardElement.append(cardCoverFav); //store the favourite variable
        }
        if(cardCover){      //add the cover pic if there:
            cardElement.append(cardCover);
        }
        //add the song name
        if(element.nameOfSong){
            let cardElementSong =  $('<p class="pt-2 fontuse">'+element.nameOfSong+'</p>');
            cardElement.append(cardElementSong);
        }
        
       
        //add the song type by creating a new div element 
        let cardElementGenre = $('<div class="container-fluid pt-2"></div>');
        let cardElementGenreTopRow = $('<div class="row"></div>');
        let cardElementGenreTopCol =  $('<div class="col-sm-6 bordertest"></div>');
        let cardElementGenreBotRow = $('<div class="row"></div>');
        let cardElementCol1 = $('<div class="col-sm-2 pt-2 ml-6 text-right"></div>');
        let cardElementCol2 = $('<div class="col-sm-8"></div>');
        let cardElementGenreName = $('<p class="pt-2 fontusepara text-left">'+element.musicGenre+'</p>');
        let cardELementGenreLogo= $('<p>🎵</p>');
        cardElementCol1.append(cardELementGenreLogo); 
        cardElementCol2.append(cardElementGenreName);
        cardElementGenreBotRow.append(cardElementCol1);
        cardElementGenreBotRow.append(cardElementCol2);
        cardElementGenreTopCol.append(cardElementGenreBotRow);
        cardElementGenreTopRow.append(cardElementGenreTopCol);
        cardElementGenre.append(cardElementGenreTopRow);

        cardElement.append(cardElementGenre);

        //add album  Name
        if(element.albumName){
            let cardElementAlbum =  $('<p class="pt-2 fontuse1">'+element.albumName+'</p>');
            cardElement.append(cardElementAlbum);
        }
        //show  further details like price, length of song, links and release Date ( 4 items)

        let cardElementDetails= $('<div class="container-fluid Details"></div>');
        cardElementDetails.attr('id','Details_'+index);
        let cardElementLink="";
        let cardElementPrice="";
        let cardElementDate="";
        let cardElementLength="";
        let cardElementDetailsRowParent = $('<div class="row pl-0 pr-0"></div>');
        let cardElementDetailColParent1 = $('<div class="col-sm-5"></div>');
        let cardElementDetailColParent2 = $('<div class="col-sm-7"></div>');
        let cardElementDetailsRowChild1 = $('<div class="row pl-5 pr-0"></div>');
        let cardElementDetailsRowChild2 = $('<div class="row pl-5 pr-0"></div>');
        let cardElementDetailsRowChild3 = $('<div class="row pl-5 pr-0"></div>');
        let cardElementDetailsRowChild4 = $('<div class="row pl-5 pr-0"></div>');
        let cardElementDetailColChild1 = $('<div class="col"></div>');
        let cardElementDetailColChild2 = $('<div class="col"></div>');
        let cardElementDetailColChild3 = $('<div class="col"></div>');
        let cardElementDetailColChild4 = $('<div class="col"></div>');
        let controlAV = "";
        switch (type) {
            case 'musicArtist':
                cardElementLink = $('<p class="fontusepara text-left"><a href="'+element.link+'" target="_blank" >Show more</a></p>');
                break;
            case 'album':
                cardElementPrice= $('<p class="fontusepara text-left">Buy: $' + element.albumPrice +'</p>');
                cardElementDate= $('<p class="fontusepara text-left">Release Date: ' + element.releaseDate.slice(0,10) +'</p>');
                cardElementLength = $('<p class="fontusepara text-left">Songs: ' + element.numberofSongs +'</p>');
                break;
            case 'song':
                cardElementLink = $('<p class="fontusepara text-left"><a href="'+element.songLink+'" target="_blank" >Show more</a></p>');
                cardElementPrice= $('<p class="fontusepara text-left">Buy: $' + element.songPrice +'</p>');
                cardElementDate= $('<p class="fontusepara text-left">Release Date: ' + element.releaseDate.slice(0,10) +'</p>');
                cardElementLength = $('<p class="fontusepara text-left">Length: ' + convertLength(element.songLength) +'</p>');
                //add audio/video controls
                controlAV = $('<audio type="audio/m4a" id="$itemSong_'+index+'" src="'+element.audioSample+'" controls></audio>');
                break;
            default:
                cardElementLink = $('<p class="fontusepara text-left"><a href="'+element.linkVideo+'" target="_blank" >Show more</a></p>');
                cardElementPrice= $('<p class="fontusepara text-left">Buy: $' + element.songPrice +'</p>');
                cardElementDate= $('<p class="fontusepara text-left">Release Date: ' + element.releaseDate.slice(0,10) +'</p>');
                cardElementLength = $('<p class="fontusepara text-left">Length: ' + convertLength(element.songLength) +'</p>');
                controlAV = $('<iframe id="video_'+index+'" alow="accelerometer; autoplay; encrypted-media;gyroscope; picture-in-picture" src="'+element.videoSample+'"></iframe>');
                //video control
                break;
        }

        //Append the cardElements for the detail tag
        cardElementDetailColChild1.append(cardElementLink);
        cardElementDetailsRowChild1.append(cardElementDetailColChild1); //add links
        cardElementDetailColParent1.append(cardElementDetailsRowChild1);
        cardElementDetailsRowParent.append(cardElementDetailColParent1);
        cardElementDetails.append(cardElementDetailsRowParent);
        cardElement.append(cardElementDetails);
        // add price
        cardElementDetailColChild2.append(cardElementPrice);
        cardElementDetailsRowChild2.append(cardElementDetailColChild2);
        cardElementDetailColParent1.append(cardElementDetailsRowChild2);
        cardElementDetailsRowParent.append(cardElementDetailColParent1);
        cardElementDetails.append(cardElementDetailsRowParent);
        cardElement.append(cardElementDetails);
        //add release date
        cardElementDetailColChild3.append(cardElementDate);
        cardElementDetailsRowChild3.append(cardElementDetailColChild3);
        cardElementDetailColParent2.append(cardElementDetailsRowChild3);
        cardElementDetailsRowParent.append(cardElementDetailColParent2);
        cardElementDetails.append(cardElementDetailsRowParent);
        cardElement.append(cardElementDetails);
        //add song length
        cardElementDetailColChild4.append(cardElementLength);
        cardElementDetailsRowChild4.append(cardElementDetailColChild4);
        cardElementDetailColParent2.append(cardElementDetailsRowChild4);
        cardElementDetailsRowParent.append(cardElementDetailColParent2);
        cardElementDetails.append(cardElementDetailsRowParent);

        //add controls
        cardElement.append(controlAV);

        index++; //increment the index
    });
}
//converting 
function convertLength(param){
    var seconds = param/1000;
    var minutes = Math.floor(seconds/60);
    var secondsLeft = Math.floor(seconds%60).pad();
    return ( minutes.toString() + ':' + secondsLeft.toString() );
}
Number.prototype.pad = function(size) {  //padding  the seconds in case of single digits
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
};

function AddtoFavorites() {
    var attrofBookmark = $(this).attr('elementid');
    
    // console.log(attrofBookmark);
    if (window.localStorage.getItem('element_id_'+ attrofBookmark.slice(attrofBookmark.indexOf("_")+1,attrofBookmark.length))!== null){
        //otherwise delete it
        
        window.localStorage.removeItem('element_id_'+attrofBookmark.slice(attrofBookmark.indexOf("_")+1,attrofBookmark.length));
        deleteFavourites(attrofBookmark.slice(attrofBookmark.indexOf("_")+1,attrofBookmark.length));
    }else
    {      
        //if the favourite does not exist add to favourites
        window.localStorage.setItem('element_id_'+attrofBookmark.slice(attrofBookmark.indexOf("_")+1,attrofBookmark.length), attrofBookmark);
        renderFavourites(attrofBookmark.slice(attrofBookmark.indexOf("_")+1,attrofBookmark.length));
        
    }
    
    
}
function renderFavourites(index){
    let divCardColFav= $('#Parent');
    let cardElementFav= $('<div class="cardFav text-center" id="cardFav_'+index+'"></div>'); //child card element
    console.log('1');
    divCardColFav.append(cardElementFav);

    let cardTitleFav = $('#Name_'+index);
    cardTitleFav.css("display", "block");
    let cardCoverFav=$('#Cover_'+index);
    cardCoverFav.css("display", "block");
    cardCoverFav.addClass('text-center');
    cardElementFav.append(cardTitleFav);
    cardElementFav.append(cardCoverFav);
}
function deleteFavourites(index){
    let divCardColFav= $('#cardFav_'+index);
    divCardColFav.css("display","none");
    let divCardCoverFav =  $('#Cover_'+index);
    divCardCoverFav.css("display","none");
}
export {renderingObjects};