"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const genre_1 = require("./Genre/genre");
const streaming_service_1 = require("../StreamingService/streaming-service");
const show_1 = require("../Show/show");
const user_1 = require("../User/user");
const newMovie = new show_1.Movie("Пропала грамота", genre_1.default.Comedy, new Date());
const stremingService = new streaming_service_1.default("megogo");

stremingService.addShow(newMovie);

const user = new user_1.default();
let subscription = user.subscribe(stremingService);

subscription.watch(newMovie);
//# sourceMappingURL=application.js.map