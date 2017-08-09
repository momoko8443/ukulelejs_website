import {IEventEmitter} from "./IEventEmitter";
import {Event} from "./Event";
export class EventEmitter implements IEventEmitter{
    private eventsPool:Object;
    
    constructor(){
        this.eventsPool = {};
    }
    
    getEventsPool():Object{
        return this.eventsPool;
    }
    addListener(eventType:string, handler:Function):void{
        if(!this.eventsPool[eventType]){
            this.eventsPool[eventType] = [];
        }
        this.eventsPool[eventType].push(handler);
    }
    removeListener(eventType:string, handler:Function):void{
        if(this.eventsPool[eventType]){
            for(let i=this.eventsPool[eventType].length-1;i>=0;i--){
                if(this.eventsPool[eventType][i] === handler){
                    this.eventsPool[eventType].splice(i,1);
                    break;
                }
            }
        }
    }
    hasListener(eventType:string):boolean{
        if(this.eventsPool[eventType] && this.eventsPool[eventType].length > 0){
            return true;
        }
        return false;
    }
    dispatchEvent(event:Event):void{
        if(event && event.eventType){
            let handlers:Array<Function> = this.eventsPool[event.eventType];
            if(handlers){
                for(let i=0;i<handlers.length;i++){
                    handlers[i].call(this,event);
                }
            }
        }
    }
}
