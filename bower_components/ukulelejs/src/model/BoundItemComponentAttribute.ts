import {BoundItemBase} from "./BoundItemBase";
import {UkuleleUtil} from "../util/UkuleleUtil";
import {IUkulele} from "../core/IUkulele";
export class BoundItemComponentAttribute extends BoundItemBase{
    ukuTag:string;
    componentController:any;
    constructor(attrName:string, ukuTag:string, cc:any, uku:IUkulele){
        super(attrName,null,uku);
        this.ukuTag = ukuTag;
        this.componentController = cc;
    }
    render(controller) :void{
        let finalValue = UkuleleUtil.getFinalValue(this.uku,controller,this.attributeName);
        this.componentController[this.ukuTag] = finalValue;
        this.uku.refresh(this.componentController._alias);
    }
}
