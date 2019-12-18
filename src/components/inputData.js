//this function is to deal with the response list from the APIs

import {artistClass} from './artist.js';
import {musicVideo} from './music_video.js';
import {song} from './songs.js';
import {album} from './album.js';
//the function to get different cover pics according to availability
function coverPic (coversize){
    if (coversize.artworkUrl100){
        let coverSizeAll = coversize.artworkUrl100;
        return coverSizeAll;
    }else if(coversize.artworkUrl60){
        let coverSizeAll = coversize.artworkUrl60;
        return coverSizeAll;
    }else{
        let coverSizeAll = coversize.artworkUrl30;
        return coverSizeAll;
    }
}
//function to store data in objects
export function inputData(result, type) {
    let array=[];
    let elementCover="";
    result.forEach(element => {
        switch (type){
            case 'musicArtist':
                array.push(new artistClass(element.artistName, element.primaryGenreName, element.artistLinkUrl));
                break;
            case 'album':
                elementCover = coverPic(element);
                array.push(new album(elementCover, element.collectionName, element.artistName, element.collectionPrice,
                        element.trackCount, element.releaseDate,element.primaryGenreName));
                break;
            
            case 'song':
                elementCover = coverPic(element);
                array.push(new song(elementCover, element.trackName,element.artistName,
                    element.collectionName,element.trackPrice,
                    element.releaseDate, element.trackTimeMillis, element.primaryGenreName, 
                    element.previewUrl,element.trackViewUrl));
               break;
            
            default:
                elementCover = coverPic(element);
                array.push(new musicVideo(elementCover, element.trackName, element.artistName, element.trackPrice,
                    element.releaseDate, element.trackTimeMillis, element.primaryGenreName, element.previewUrl,element.trackViewUrl));
                break;
        }
    });
    return array;
    
}

