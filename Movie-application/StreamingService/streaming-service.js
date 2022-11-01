"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamingService {
    constructor(name) {
        this.name = name;
        this.shows = new Array();
        this.viewsByShowsNames = new Map();
    }
    addShow(show) {
        if (this.shows.some(item => (item.name == show.name))) {
            console.log(`StreamingService <<${this.name}>> already contains show <<${show.name}>>`);
        }
        else {
            this.shows.push(show);
        }
    }
    getMostViewedShowsOfYear(year) {
        let thisYearShow = this.shows.filter(item => item.releaseDate.getFullYear() == year);
        let sorted = thisYearShow.sort(this.compareShowByViews);
        return sorted.slice(0, 10);
    }
    compareShowByViews(a, b) {
        let showViews1 = this.viewsByShowsNames.has(a.name) ? this.viewsByShowsNames.get(a.name) : 0;
        let showViews2 = this.viewsByShowsNames.has(b.name) ? this.viewsByShowsNames.get(b.name) : 0;
        if (showViews1 > showViews2) {
            return 1;
        }
        else if (showViews1 < showViews2) {
            return -1;
        }
        else {
            return 0;
        }
    }
    getMostViewedShowsOfGenre(genre) {
        let thisGenreShow = this.shows.filter(item => item.genre == genre);
        let sorted1 = thisGenreShow.sort(this.compareShowByViews);
        return sorted1.slice(0, 10);
    }
}
exports.default = StreamingService;
//# sourceMappingURL=streaming-service.js.map