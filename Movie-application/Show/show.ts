import Genre from   '../Genre/genre';

abstract class Show {
    name:string;
    genre:Genre;
    releaseDate:Date;

    constructor(name:string, genre:Genre, releaseDate:Date) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
    }

    abstract getDuration ():string;
}

class Movie extends Show {
    constructor(name:string, genre:Genre, releaseDate:Date){
    super(name,genre,releaseDate);
    
    }

    getDuration(): string{
         return ('one hour')
    };
}

class Episode extends Show {
    constructor(name:string, genre:Genre, releaseDate:Date){
        super(name,genre,releaseDate);
    }

    getDuration(): string{
         return ('two hour')
    }
}

class Series extends Show {
    episodes:Array<string>;
   
    constructor(name:string, genre:Genre, releaseDate:Date){
        super(name,genre,releaseDate);
        this.episodes=new Array<string>();
    }

    getDuration(): string{
        return ('three hour')
    }
}


export default Show;
export{Movie,Episode,Series};