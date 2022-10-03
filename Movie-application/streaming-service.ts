import Genre from "./genre";
import Show from "./Show";

class StreamingService {
    name:string;
    shows:Array<Show>;
    viewsByShowsNames:Map<string,number>

    constructor(name:string) 
    {
      this.name=name;
      this.shows=new Array<Show>();
      this.viewsByShowsNames=new Map<string,number>();
    }

      addShow(show:Show){
          if (this.shows.some(item=>(item.name==show.name)))
          {
          console.log(`StreamingService <<${this.name}>> already contains show <<${show.name}>>`);
          }
          else {
          this.shows.push(show);
          }
    }
     
      getMostViewedShowsOfYear(year:number):Array<Show> {
          let thisYearShow = this.shows.filter(item=>item.releaseDate.getFullYear()==year);
          let sorted = thisYearShow.sort(this.compareShowByViews);
          return sorted.slice(0,10);
       


      }
      compareShowByViews(a:Show,b:Show):number{
          let showViews1=this.viewsByShowsNames.has(a.name)?this.viewsByShowsNames.get(a.name)!:0;
          let showViews2=this.viewsByShowsNames.has(b.name)?this.viewsByShowsNames.get(b.name)!:0;
        
          if(showViews1>showViews2)
          {
          return 1
          }
          else if(showViews1<showViews2)
          {
            return -1
          }  
          else  
          {
            return 0
          }
      }

      getMostViewedShowsOfGenre(genre:Genre):Array<Show> {
      let thisGenreShow = this.shows.filter(item=>item.genre==genre)
      let sorted1 = thisGenreShow.sort(this.compareShowByViews);
      return sorted1.slice(0,10)
      }
}


export default StreamingService;