import {BoundItemBase} from "./BoundItemBase";
import {UkuleleUtil} from "../util/UkuleleUtil";
//import {SelectedDecorator} from "./decorator/SelectedDecorator";
export class BoundItemAttribute extends BoundItemBase{
    ukuTag:string;
    constructor(attrName:string, ukuTag:string, element:HTMLElement, uku:any){
        super(attrName,element,uku);
        this.ukuTag = ukuTag;
    }
    
    render(controllers):void{
        let attr:string = this.attributeName;
        let finalValue = UkuleleUtil.getFinalValue(controllers,attr);
        if(typeof finalValue === 'boolean'){
            if(finalValue === true){
                this.element.setAttribute(this.ukuTag, this.ukuTag);
            }else{
                this.element.removeAttribute(this.ukuTag);
            }          
        }else{
            this.element.setAttribute(this.ukuTag, finalValue);
        }
        
    }
}
