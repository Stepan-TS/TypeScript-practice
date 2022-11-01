import Genre from "../Genre/genre"
import StreamingService from "../StreamingService/streaming-service"
import {Movie} from "../Show/show"    
import User from "../User/user"   

const newMovie = new Movie("Пропала грамота",Genre.Comedy,new Date());
const stremingService = new StreamingService("megogo");
stremingService.addShow(newMovie);

const user = new User();
let subscription = user.subscribe(stremingService);
subscription.watch(newMovie);

