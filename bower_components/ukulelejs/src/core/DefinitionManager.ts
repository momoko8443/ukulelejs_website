import { Ajax } from "../extend/Ajax";
import { ControllerModel } from "../model/ControllerModel";
import { ComponentModel } from "../model/ComponentModel";
import { ComponentPoolItem } from "../model/ComponentPoolItem";
import { ComponentConfiguration } from "../model/ComponentConfiguration";
import { UkuleleUtil } from "../util/UkuleleUtil";
import { IUkulele } from "./IUkulele";
export class DefinitionManager {
	private uku: IUkulele;
	constructor(_uku: IUkulele) {
		this.uku = _uku;
	}
	private controllersDefinition: Object = {};
	private componentsDefinition: Object = {};
	private componentsPool: Object = {};
	private copyControllers: Object = {};
	private dependentScriptsCache: Object = {};
	private ajax: Ajax = new Ajax();

	getComponentsDefinition(): Object {
		return this.componentsDefinition;
	}

	getComponentsPool(): Object {
		return this.componentsPool;
	}

	setComponentsPool(pool): void {
		this.componentsPool = pool;
	}

	setComponentsDefinition(value: Object): void {
		this.componentsDefinition = value;
	}

	getComponentDefinition(tagName: string): ComponentModel {
		return this.componentsDefinition[tagName] as ComponentModel;
	}

	getControllerDefinition(instanceName: string): ControllerModel {
		return this.controllersDefinition[instanceName] as ControllerModel;
	}

	getControllersDefinition(): Object {
		return this.controllersDefinition;
	}

	getComponent(tagName: string) {
		return this.componentsPool[tagName];
	}

	getCopyControllers(): Object {
		return this.copyControllers;
	}

	addControllerDefinition(instanceName: string, controllerInst): void {
		let controllerModel = new ControllerModel(instanceName, controllerInst);
		controllerInst._alias = instanceName;
		this.controllersDefinition[instanceName] = controllerModel;
	}

	getControllerInstByDomId(domId: string): Object {
		for (let alias in this.controllersDefinition) {
			let controllerModel = this.controllersDefinition[alias];
			let controller = controllerModel.controllerInstance;
			if (controller._dom && controller._dom.id === domId) {
				return controller;
			}
		}
		return undefined;
	}


	addComponentDefinition(tag: string, templateUrl: string, preload: boolean): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (!preload) {
				this.componentsPool[tag] = new ComponentPoolItem(tag, templateUrl, true);
				resolve();
			} else {
				this.componentsPool[tag] = new ComponentPoolItem(tag, templateUrl, false);
				return this.ajax.get(templateUrl).then((result) => {
					let componentConfig = UkuleleUtil.getComponentConfiguration(result);
					return this.analyizeComponent(tag, componentConfig);
				});
			}
		});
	}

	addLazyComponentDefinition(tag: string, templateUrl: string): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			return this.ajax.get(templateUrl).then((result) => {
				let componentConfig = UkuleleUtil.getComponentConfiguration(result);
				return this.analyizeComponent(tag, componentConfig).then(() => {
					this.componentsPool[tag] = { 'tagName': tag, 'templateUrl': templateUrl, 'lazy': false };
					resolve();
				});
			});
		});
	}



	getBoundAttributeValue(attr: string, ...additionalArgu): any {
		let controllerModels = this.getControllerModelByName(attr);
		let controllers = [];
		controllerModels.forEach(controllerModel => {
			controllers.push(controllerModel.controllerInstance);
		});
		let parameters: Array<any> = [this.uku, controllers, attr];
		parameters = parameters.concat(additionalArgu);
		let result = UkuleleUtil.getFinalValue.apply(null, parameters);
		return result;
	};


	getControllerModelByName(expression: string): ControllerModel[] {
		let arr = [];
		let normalReg = /\$\w+\./g;
		let normals = expression.match(normalReg);
		if(normals){
			normals.forEach( matchAlias => {
				matchAlias = matchAlias.substr(0,matchAlias.length-1);
				let controllerModel: ControllerModel = this.controllersDefinition[matchAlias];
				arr.push(controllerModel);
			});
		}
		
		let ccReg = /cc\_\w*\./g;
		let ccs = expression.match(ccReg);
		if(ccs){
			ccs.forEach( ccAlias => {
				ccAlias = ccAlias.substr(0,ccAlias.length-1);
				let controllerModel: ControllerModel = this.controllersDefinition[ccAlias];
				arr.push(controllerModel);
			});
		}
		
		let repeatReg = /repeatItem\_\w*\$/g;
		let repeats = expression.match(repeatReg);
		if(repeats){
			repeats.forEach( repeatAlias => {
				//repeatAlias = repeatAlias.substr(0,repeatAlias.length-1);
				let controllerModel: ControllerModel = this.controllersDefinition[repeatAlias];
				arr.push(controllerModel);
			});
		}
		return arr;
	};


	getFinalValueByExpression(expression: string): any {
		let controllerModels = this.getControllerModelByName(expression);
		let controllers = [];
		controllerModels.forEach(controllerModel => {
			controllers.push(controllerModel.controllerInstance);
		});

		return UkuleleUtil.getFinalValue(controllers, expression);
	};

	private async analyizeComponent(tag: string, config: ComponentConfiguration): Promise<void> {
		let deps: Array<string> = config.dependentScripts;
		let self: DefinitionManager = this;
		if (deps && deps.length > 0) {
			let tmpAMD;
			if (typeof window['define'] === 'function' && window['define'].amd) {
				tmpAMD = window['define'];
				window['define'] = undefined;
			}
			if (!config.componentControllerScript) {
				let ccsExternal = deps[deps.length - 1];
				config.componentControllerScript = await this.ajax.get(ccsExternal);
				deps.pop();
			}
			for (let i = 0; i < deps.length; i++) {
				let dep = deps[i];
				await loadDependentScript(dep);
			}
			if (tmpAMD) {
				window['define'] = tmpAMD;
			}
			this.buildeComponentModel(tag, config.template, config.componentControllerScript, config.stylesheet);
			return;
		} else {
			this.buildeComponentModel(tag, config.template, config.componentControllerScript, config.stylesheet);
			return;
		}

		function loadDependentScript(src: string): Promise<void> {
			return new Promise<void>((resolve, reject) => {
				if (!self.dependentScriptsCache[src]) {
					let head = document.getElementsByTagName('HEAD')[0];
					let script = document.createElement('script');
					script.type = 'text/javascript';
					script.charset = 'utf-8';
					script.async = true;
					script.src = src;
					script.onload = (e) => {
						self.dependentScriptsCache[e.target['src']] = true;
						resolve();
					};
					head.appendChild(script);
				} else {
					resolve();
				}
			});
		}
	}

	private buildeComponentModel(tag: string, template: string, script: string, style: string): void {
		let debugComment = "//# sourceURL=" + tag + ".js";
		try {
			let controllerClazz
			if (script) {
				script = UkuleleUtil.wrapScriptInComponent(script);
				script += debugComment;
				controllerClazz = eval(script);
			}
			let newComp = new ComponentModel(tag, template, controllerClazz);
			this.componentsDefinition[tag] = newComp;
			if (style) {
				dealWithShadowStyle(tag, style);
			}
		} catch (e) {
			console.error(e);
		}

		function dealWithShadowStyle(tagName: string, stylesheet: string): void {
			let head = document.getElementsByTagName('HEAD')[0];
			let style = document.createElement('style');
			style.type = 'text/css';
			var styleArray = stylesheet.split("}");
			var newArray = [];
			styleArray.forEach((value: string, index: number) => {
				var newValue = value.replace(/^\s*/, "");
				if (newValue) {
					newArray.push(newValue);
				}
			});
			stylesheet = newArray.join("}\n" + "." + tagName + " ");
			stylesheet = "." + tagName + " " + stylesheet + "}";
			style.innerHTML = stylesheet;
			head.appendChild(style);
		}
	}
}
