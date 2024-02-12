export class ComicModel{
    public title: string;
    public synopsis : string;
    public author : string;
    public rating : number;

    constructor(title:string,synopsis:string,author:string,rating:number){
        this.title = title;
        this.synopsis = synopsis;
        this.author = author;
        this.rating = rating;
    }
}