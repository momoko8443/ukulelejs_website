import { EventEmitter } from "./EventEmitter";
import { UkuleleUtil } from "../util/UkuleleUtil";
import { BoundItemAttributeFactory } from './BoundItemAttributeFactory';
import { BoundItemExpression } from '../model/BoundItemExpression';
import { BoundItemInnerText } from '../model/BoundItemInnerText';
import { BoundItemRepeat } from '../model/BoundItemRepeat';
import { BoundItemComponentAttribute } from "../model/BoundItemComponentAttribute";
import { elementChangedBinder } from "./ElementActionBinder";
import { IUkulele } from "./IUkulele";
import { EventListener } from "../extend/EventListener";
import { Selector } from "../extend/Selector";
import { Event as UkuEvent } from "./Event";
export class Analyzer extends EventEmitter {
    private uku: IUkulele;
    private defMgr;
    static ANALYIZE_COMPLETED: string = 'analyizeCompleted';
    constructor(_uku: IUkulele) {
        super();
        this.uku = _uku;
        this.defMgr = this.uku._internal_getDefinitionManager();
    }

    public analyizeElement(ele): void {
        this.searchComponent(ele).then((element) => {
            this.searchExpression(element);
            this.searchUkuAttribute(element);
            //this.defMgr.copyAllController();
            if (this.hasListener(Analyzer.ANALYIZE_COMPLETED)) {
                this.dispatchEvent(new UkuEvent(Analyzer.ANALYIZE_COMPLETED, element));
            }
        });
    }

    private sortAttributes(subElement): Array<any> {
        let orderAttrs = [];
        let listenerAttrs = [];
        for (let i = 0; i < subElement.attributes.length; i++) {
            let attribute = subElement.attributes[i];
            if (attribute.nodeName.search("uku-on") !== -1) {
                //orderAttrs.push(attribute);
                listenerAttrs.push(attribute);
            } else {
                orderAttrs.push(attribute);
            }
        }
        orderAttrs = orderAttrs.concat(listenerAttrs);
        return orderAttrs;
    }

    private searchUkuAttribute(element): void {
        let subElements = [];
        //scan element which has uku-* tag
        let isSelfHasUkuTag = Selector.fuzzyFind(element, 'uku-');
        if (isSelfHasUkuTag) {
            subElements.push(isSelfHasUkuTag);
        }
        let allChildren = Selector.querySelectorAll(element, "*");
        for (let i = 0; i < allChildren.length; i++) {
            let child: HTMLElement = allChildren[i] as HTMLElement;
            let matchElement = Selector.fuzzyFind(child, 'uku-');
            if (matchElement && !UkuleleUtil.isInRepeat(matchElement)) {
                subElements.push(matchElement);
            }
        }
        //解析绑定 attribute，注册event
        for (let n = 0; n < subElements.length; n++) {
            let subElement = subElements[n];
            let orderAttrs = this.sortAttributes(subElement);
            for (let j = 0; j < orderAttrs.length; j++) {
                let attribute = orderAttrs[j];
                if (UkuleleUtil.searchUkuAttrTag(attribute.nodeName) > -1) {
                    let tempArr = attribute.nodeName.split('-');
                    tempArr.shift();
                    let attrName = tempArr.join('-');
                    if (attrName !== "application") {
                        if (attrName.search('on') === 0) {
                            //is an event
                            if (!UkuleleUtil.isRepeat(subElement) && !UkuleleUtil.isInRepeat(subElement)) {
                                this.dealWithEvent(subElement, attrName);
                            }
                        } else if (attrName.search('repeat') !== -1) {
                            //is an repeat
                            this.dealWithRepeat(subElement);
                        } else {
                            //is an attribute
                            if (!UkuleleUtil.isRepeat(subElement) && !UkuleleUtil.isInRepeat(subElement)) {
                                if (attrName !== "text") {
                                    this.dealWithAttribute(subElement, attrName);
                                } else {
                                    this.dealWithInnerText(subElement);
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    private async searchComponent(element): Promise<any> {
        let comp = this.defMgr.getComponent(element.localName);
        if (comp) {
            if (!comp.lazy) {
                let attrs = element.attributes;
                let compDef = this.defMgr.getComponentsDefinition()[comp.tagName];
                if (!UkuleleUtil.isRepeat(element) && !UkuleleUtil.isInRepeat(element)) {
                    return this.dealWithComponent(element, compDef.template, compDef.controllerClazz, attrs);
                } else {
                    return element;
                }
            } else {
                await this.defMgr.addLazyComponentDefinition(comp.tagName, comp.templateUrl);
                let attrs = element.attributes;
                let compDef = this.defMgr.getComponentsDefinition()[comp.tagName];
                if (!UkuleleUtil.isRepeat(element) && !UkuleleUtil.isInRepeat(element)) {
                    return this.dealWithComponent(element, compDef.template, compDef.controllerClazz, attrs);
                } else {
                    return element;
                }
            }
        } else {
            if (element.children && element.children.length > 0) {
                for (let i = 0; i < element.children.length; i++) {
                    let child = element.children[i];
                    await this.searchComponent(child);
                }
                return element;
            } else {
                return element;
            }
        }
    }

    private async dealWithComponent(tag, template, Clazz, attrs): Promise<any> {
        let time = new Date().getTime();
        let randomAlias = 'cc_' + Math.floor(time * Math.random()).toString();
        //should consider white space between characters
        template = template.replace(new RegExp("\'cc\\.", 'gm'), "'" + randomAlias + '.');
        template = template.replace(new RegExp('"cc\\.', 'gm'), '"' + randomAlias + '.');
        template = template.replace(new RegExp('\{\{cc\\.', 'gm'), "{{" + randomAlias + '.');
        template = template.replace(new RegExp(' cc\\.', 'gm'), ' ' + randomAlias + '.');
        template = template.replace(new RegExp('\\(cc\\.', 'gm'), '(' + randomAlias + '.');
        template = template.replace(new RegExp('\\,cc\\.', 'gm'), ',' + randomAlias + '.');
        template = template.replace(new RegExp('\\.cc\\.', 'gm'), '.' + randomAlias + '.');
        template = template.replace(new RegExp('\\!cc\\.', 'gm'), '!' + randomAlias + '.');
        let tempFragment = document.createElement('div');
        tempFragment.insertAdjacentHTML('afterBegin' as InsertPosition, template);
        if (tempFragment.children.length > 1) {
            template = tempFragment.outerHTML;
        }
        tag.insertAdjacentHTML('beforeBegin', template);
        let htmlDom = tag.previousElementSibling;
        htmlDom.classList.add(tag.localName);
        let cc;
        if (Clazz) {
            cc = new Clazz(this.uku);
            cc._dom = htmlDom;
            cc.fire = (eventType: string, data: any, bubbles: boolean = false, cancelable: boolean = true) => {
                let event = new CustomEvent(eventType.toLowerCase(), { "bubbles": bubbles, "cancelable": cancelable });
                event['data'] = data;
                cc._dom.dispatchEvent(event);
            };
            this.uku.registerController(randomAlias, cc);
            for (let i = 0; i < attrs.length; i++) {
                let attr = attrs[i];
                //todo need Refactor
                if (UkuleleUtil.searchUkuAttrTag(attr.nodeName) !== 0
                    || attr.nodeName.search("uku-on") !== -1
                    || attr.nodeName === "uku-render"
                    || attr.nodeName === "uku-visible") {
                    htmlDom.setAttribute(attr.nodeName, attr.nodeValue);
                } else {
                    let tagName = UkuleleUtil.getAttrFromUkuTag(attr.nodeName, true);
                    let controllerModels = this.defMgr.getControllerModelByName(attr.nodeValue);
                    if (controllerModels && controllerModels.length > 0) {
                        let boundItem = new BoundItemComponentAttribute(attr.nodeValue, tagName, cc, this.uku);
                        let controllers = [];
                        controllerModels.forEach(controllerModel => {
                            controllerModel.addBoundItem(boundItem);
                            controllers.push(controllerModel.controllerInstance);
                        });
                        
                        boundItem.render(controllers);
                    }else{
                        //native value, not expression
                        let boundItem = new BoundItemComponentAttribute(attr.nodeValue, tagName, cc, this.uku);
                        boundItem.render([]);
                    }
                }
            }
        } else {
            for (let i = 0; i < attrs.length; i++) {
                let attr = attrs[i];
                //todo:need Refactor
                if (UkuleleUtil.searchUkuAttrTag(attr.nodeName) !== 0
                    || attr.nodeName.search("uku-on") !== -1
                    || attr.nodeName === "uku-render"
                    || attr.nodeName === "uku-visible") {
                    htmlDom.setAttribute(attr.nodeName, attr.nodeValue);
                }
            }
        }

        tag.parentNode.removeChild(tag);
        if (htmlDom.children && htmlDom.children.length > 0) {
            for (let j = 0; j < htmlDom.children.length; j++) {
                let child = htmlDom.children[j];
                await this.searchComponent(child);
            }
            if (cc && cc._initialized && typeof (cc._initialized) === 'function') {
                cc._initialized(randomAlias,cc._dom);
            }
            return htmlDom;
        } else {
            if (cc && cc._initialized && typeof (cc._initialized) === 'function') {
                cc._initialized(randomAlias,cc._dom);
            }
            return htmlDom;
        }
    }
    //todo: 处理 tag之间使用{{}}括起的表达式，用以显示文字
    private searchExpression(element: HTMLElement): void {
        if (UkuleleUtil.searchUkuExpTag(Selector.directText(element)) !== -1) {
            if (!UkuleleUtil.isRepeat(element) && !UkuleleUtil.isInRepeat(element)) {
                //normal expression
                this.dealWithExpression(element);
            }
        }
        for (let i = 0; i < element.children.length; i++) {
            this.searchExpression(element.children[i] as HTMLElement);
        }


    }

    private dealWithExpression(element) {
        //通常的花括号声明方式
        let expression = Selector.directText(element);
        if (UkuleleUtil.searchUkuExpTag(expression) !== -1) {
            let attr = expression.slice(2, -2);
            let controllerModels = this.defMgr.getControllerModelByName(attr);
            if (controllerModels && controllerModels.length > 0) {
                let boundItem = new BoundItemExpression(attr, expression, element, this.uku);
                let controllers = [];
                controllerModels.forEach(controllerModel => {
                    controllerModel.addBoundItem(boundItem);
                    controllers.push(controllerModel.controllerInstance);
                });       
                boundItem.render(controllers);
            }
        }
    }

    //处理绑定的attribute
    private dealWithAttribute: Function = function (element, tagName) {
        let attr = element.getAttribute("uku-" + tagName);
        //let elementName = element.tagName;
        let controllerModels = this.defMgr.getControllerModelByName(attr);
        if (controllerModels && controllerModels.length > 0) {
            let boundItem = BoundItemAttributeFactory.getInstance().generateInstance(attr, tagName, element, this.uku);
            let controllers = [];
            controllerModels.forEach(controllerModel => {
                controllerModel.addBoundItem(boundItem);
                elementChangedBinder(element, tagName, controllerModel, this.uku.refresh, this.uku);
                controllers.push(controllerModel.controllerInstance)
            });           
            boundItem.render(controllers);
            
        }
    }

    //处理 uku-text
    private dealWithInnerText(element) {
        let attr = element.getAttribute("uku-text");
        if (attr) {
            let controllerModels = this.defMgr.getControllerModelByName(attr);
            if (controllerModels && controllerModels.length > 0) {
                let boundItem = new BoundItemInnerText(attr, element, this.uku);
                let controllers = [];
                controllerModels.forEach(controllerModel => {
                    controllerModel.addBoundItem(boundItem);
                    controllers.push(controllerModel.controllerInstance);
                });
                boundItem.render(controllers);
            }
        }
    }


    //处理 事件 event
    private dealWithEvent(element, eventName) {
        let expression = element.getAttribute("uku-" + eventName);
        let eventNameInListener = eventName.substring(2);
        eventNameInListener = eventNameInListener.toLowerCase();
        let controllerModels = this.defMgr.getControllerModelByName(expression);
        if(!controllerModels || controllerModels.length === 0){
            controllerModels = [];
        }    
        EventListener.addEventListener(element, eventNameInListener, (event) => {
            let alias_list = [];
            controllerModels.forEach(controllerModel => {
                //this.defMgr.copyControllerInstance(controllerModel.controllerInstance, controllerModels.alias);
                alias_list.push(controllerModel.alias);
            });
            
            let index = UkuleleUtil.searchUkuFuncArg(expression);
            if(index === -1){
                // is an expression, not a function
                let handler = new Function("event","return " + expression);
                console.log(handler.toString());
                handler(event);
            }else{
                // is a function
                let i = expression.search(/\(/);
                let arg = 'event';
                if(expression[i+1] !== ')'){
                    // has argument
                    arg = 'event,'
                }
                let arr = expression.split('(');
                arr[1] = arg + arr[1];
                let new_expression = arr.join("(");
                (function(e){
                    let tempScope = {};
                    tempScope['event'] = e;
                    eval(new_expression);
                    tempScope = null;
                })(event);
            }
            this.uku.refresh(alias_list, element);
        });
    }
    //处理 repeat
    private dealWithRepeat(element) {
        let repeatExpression = element.getAttribute("uku-repeat");
        let tempArr = repeatExpression.split(' in ');
        let itemName = tempArr[0];
        let attr = tempArr[1];
        let controllerModels = this.defMgr.getControllerModelByName(attr);
        if (controllerModels && controllerModels.length > 0) {
            let controllers = [];
            //let controllerInst = controllerModel.controllerInstance;
            let boundItem = new BoundItemRepeat(attr, itemName, element, this.uku);
            controllerModels.forEach(controllerModel => {
                controllerModel.addBoundItem(boundItem);
                controllers.push(controllerModel.controllerInstance);
            });          
            boundItem.render(controllers);
        }
    }
}
