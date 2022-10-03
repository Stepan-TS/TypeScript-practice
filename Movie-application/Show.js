"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = exports.Episode = exports.Movie = void 0;
class Show {
    constructor(name, genre, releaseDate) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
    }
}
class Movie extends Show {
    constructor(name, genre, releaseDate) {
        super(name, genre, releaseDate);
    }
    getDuration() {
        return ('one hour');
    }
    ;
}
exports.Movie = Movie;
class Episode extends Show {
    constructor(name, genre, releaseDate) {
        super(name, genre, releaseDate);
    }
    getDuration() {
        return ('two hour');
    }
}
exports.Episode = Episode;
class Series extends Show {
    constructor(name, genre, releaseDate) {
        super(name, genre, releaseDate);
        this.episodes = new Array();
    }
    getDuration() {
        return ('three hour');
    }
}
exports.Series = Series;
exports.default = Show;
//# sourceMappingURL=Show.js.map