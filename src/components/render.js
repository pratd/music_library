//let itemsElement = $('app');

function renderingObjects(objectArray,itemsElement, type){
    //loop through the items 
    let divCardParent = $('<div class="card-columns text-center"></div>'); //parent card element
    let index = 0; //index for use
    objectArray.forEach(element => {
        
        let cardBody = $(itemsElement.html(divCardParent));

        let cardElement= $('<div id="cardElement_'+ index + '"class="card"></div>'); //child card element
        divCardParent.append(cardElement);
        
        let cardTitle = "";
        let cardCover=null;
        switch (type) {
            case 'musicArtist':
                cardTitle = $('<h3 class="fontusetitle cardTitle pb-2 pt-2">'+element.firstName+'</h3>');
                
                break;
        
            default:
                cardTitle = $('<h3 class="fontusetitle cardTitle pb-2 pt-2">'+element.artistName+'</h3>'); //add name on the top
                cardCover = $('<img src="'+element.cover+'" class="img-fluid card-img-top thumbImage" alt="image"></img>'); //add cover pic if exists
                break;
        }

        cardElement.append(cardTitle);
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
        index++; //increment the index
    });
}

export {renderingObjects};