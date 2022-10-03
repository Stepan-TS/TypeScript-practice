import Genre from "./genre"
import StreamingService from "./streaming-service"
import {Movie} from "./show"    
import User from "./user"   

const newMovie = new Movie("Пропала грамота",Genre.Comedy,new Date());
const stremingService = new StreamingService("megogo");
stremingService.addShow(newMovie);

const user = new User();
let subscription = user.subscribe(stremingService);
subscription.watch(newMovie);

