"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscription {
    constructor(streamingService) {
        this.streamingService = streamingService;
        this.randomShows = this.randomShows;
    }
    watch(show) {
        if (!this.streamingService.shows.some(item => item.name == show.name)) {
            console.log(`StreamingService <<${this.streamingService.name}>> doesn't have show <<${show.name}>>`);
        }
        else {
            console.log(`You are watching <<${show.name}>> on <<${this.streamingService.name}>>`);
            let showViews = this.streamingService.viewsByShowsNames.has(show.name)
                ? this.streamingService.viewsByShowsNames.get(show.name) : 0;
            this.streamingService.viewsByShowsNames.set(show.name, showViews + 1);
        }
    }
    getRecommendationTrending() {
        let trendingShows = this.streamingService.getMostViewedShowsOfYear(new Date().getFullYear());
        return this.randomShows.getRandomValue(trendingShows);
    }
    getRecommendationByGenre(genre) {
        let showByGenre = this.streamingService.getMostViewedShowsOfGenre(genre);
        return this.randomShows.getRandomValue(showByGenre);
    }
}
exports.default = Subscription;
//# sourceMappingURL=subscription.js.map