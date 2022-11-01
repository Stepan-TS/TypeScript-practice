import StreamingService from "../StreamingService/streaming-service";
import Subscription from "../Subscription/subscription";

class User {
    subscriptions: Array<Subscription>;

    constructor(){
        this.subscriptions = new Array<Subscription>();
    }

    subscribe(streamingService: StreamingService) : Subscription {
        if (this.subscriptions.some(item => item.streamingService.name == streamingService.name)) {
             console.log(`You are already subscribed to <<${streamingService.name}>>`);
             return this.subscriptions.find(item => item.streamingService.name == streamingService.name)!;
        }
        else {
            console.log(`You have subscribed on <<${streamingService.name}>>`);
            let newSubscription = new Subscription(streamingService);
            this.subscriptions.push(newSubscription);
            return newSubscription;
        }
    }
}
export default User;