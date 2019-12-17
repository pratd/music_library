class album {
    constructor(cover, albumName, name, price, number, date, genre ){
        this.cover = cover;
        this.albumName = albumName;
        this.artistName = name;
        this.albumPrice = price;
        this.numberofSongs=number;
        this.releaseDate = date;
        this.musicGenre = genre;
    }
}

export default album;