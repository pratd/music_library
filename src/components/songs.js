class songs{
    constructor(cover, songName, name, albumName, price, date, length, genre, sample, link){
        this.cover = cover;
        this.nameOfSong= songName;
        this.artistName = name;
        this.albumName = albumName;
        this.songPrice = price;
        this.releaseDate = date;
        this.songLength = length;
        this.musicGenre = genre;
        this.audioSample = sample;
        this.songLink = link;
    }
}

export default songs;