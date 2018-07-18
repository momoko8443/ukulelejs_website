var eventBus;

function EventBus(){
    this.eventsPool = {};
}
EventBus.getInstance = function(){
    if(!eventBus){
        eventBus = new EventBus();
    }
    return eventBus;
}
EventBus.prototype.addEventListener = function(eventType, handler){
    if(!this.eventsPool[eventType]){
        this.eventsPool[eventType] = [];
    }
    this.eventsPool[eventType].push(handler);
}

EventBus.prototype.removeEventListener = function(eventType, handler){
    if(this.eventsPool[eventType]){
        for(var i=this.eventsPool[eventType].length-1;i>=0;i--){
            if(this.eventsPool[eventType][i] === handler){
                this.eventsPool[eventType].splice(i,1);
                break;
            }
        }
    }
};

EventBus.prototype.hasListener = function(eventType){
    if(this.eventsPool[eventType] && this.eventsPool[eventType].length > 0){
        return true;
    }
    return false;
};
EventBus.prototype.dispatchEvent = function(event){
    if(event && event.eventType){
        var handlers = this.eventsPool[event.eventType];
        if(handlers){
            for(let i=0;i<handlers.length;i++){
                handlers[i].call(this,event);
            }
        }
    }
};

//export {EventBus};
