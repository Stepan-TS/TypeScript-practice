import Genre from "../Genre/genre";
import RandomShows from "../RandomShows/randomShows";
import Show from "../Show/show";
import StreamingService from "../StreamingService/streaming-service";

class Subscription {
    streamingService:StreamingService;
    randomShows:RandomShows;
    
    constructor(streamingService:StreamingService) {
        this.streamingService=streamingService;
        this.randomShows=this.randomShows;
    }
    
    watch(show: Show) {
        if (!this.streamingService.shows.some(item=>item.name==show.name)) {
            console.log(`StreamingService <<${this.streamingService.name}>> doesn't have show <<${show.name}>>`);
        }
        else {
            console.log(`You are watching <<${show.name}>> on <<${this.streamingService.name}>>`);
            let showViews = this.streamingService.viewsByShowsNames.has(show.name) 
                                ? this.streamingService.viewsByShowsNames.get(show.name)! : 0;
            
            this.streamingService.viewsByShowsNames.set(show.name, showViews + 1);
        }
    }
    
        getRecommendationTrending():Show {
           let trendingShows = this.streamingService.getMostViewedShowsOfYear(new Date().getFullYear());
           return this.randomShows.getRandomValue(trendingShows);
            
        }

        getRecommendationByGenre(genre:Genre):Show {
            let showByGenre = this.streamingService.getMostViewedShowsOfGenre(genre);
            return this.randomShows.getRandomValue(showByGenre);
        }

    }

export default Subscription