//generating the searchbox
export class searchbox{
    constructor(countryType, name, searchType, explicitContent, limit){
        this.term = name;
        this.country= countryType;
        this.type = searchType;
        this.content= explicitContent;
        this.limit= limit;
    }
}
