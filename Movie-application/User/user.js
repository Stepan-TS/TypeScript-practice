"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscription_1 = require("./subscription");
class User {
    constructor() {
        this.subscriptions = new Array();
    }
    subscribe(streamingService) {
        if (this.subscriptions.some(item => item.streamingService.name == streamingService.name)) {
            console.log(`You are already subscribed to <<${streamingService.name}>>`);
        }
        else {
            console.log(`You have subscribed on <<${streamingService.name}>>`);
            let newSubscription = new subscription_1.default(streamingService);
            this.subscriptions.push(newSubscription);
            return newSubscription;
        }
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map