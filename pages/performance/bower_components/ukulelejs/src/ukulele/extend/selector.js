function Selector(){
    
}
Selector.fuzzyFind = function (element,text) {
    if (element && element.attributes) {
        for (var i = 0; i < element.attributes.length; i++) {
            var attr = element.attributes[i];
            if (attr.nodeName.search(text) > -1) {
                return element;
            }
        }
    }
    return null;
};

Selector.directText = function (element,text) {
    var o = "";
    var nodes = element.childNodes;
    for (var i = 0; i <= nodes.length - 1; i++) {
        var node = nodes[i];
        if (node.nodeType === 3) {

            if (text || text ==="" || text === 0 || text === false) {
                node.nodeValue = text;
                return;
            } else {
                o += node.nodeValue;
            }
        }
    }
    return o.trim();
};

/*Selector.val = function(element,value){
    if(value){
        if(element.hasAttributes("value")){
            element.value = value;
        }
        return;
    }else{
        if(element.tagName === "INPUT"){
            
        }
    }
};*/

Selector.parents = function(element){
    var parents = [];
    while(element.parentNode && element.parentNode.tagName !== 'BODY'){
        parents.push(element.parentNode);
        element = element.parentNode;
    }
    return parents;
};