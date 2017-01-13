function EventBus() {
    this.eventsMap = {};
    this.addEventListener = function (eventType, eventHandler) {
        if (!this.eventsMap[eventType]) {
            this.eventsMap[eventType] = [];
        }
        this.eventsMap[eventType].push(eventHandler);
    };
    this.removeEventListener = function (eventType, eventHandler) {
        var handlers = this.eventsMap[eventType];
        if (handlers) {
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i] === eventHandler) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        }
    };
    this.removeAllEventListener = function (eventType) {
        var handlers = this.eventsMap[eventType];
        if (handlers) {
            delete this.eventsMap[eventType];
        }
    };
    this.clearEventsMap = function () {
        this.eventsMap = {};
    };
    this.dispatchEvent = function (event) {
        var eventType = event.type;
        var transferData = event.data;
        var handlers = this.eventsMap[eventType];
        if (handlers) {
            for (var i = 0; i < handlers.length; i++) {
                handlers[i].call(null, transferData);
            }
        }
    };
};