import pathToRegexp from 'path-to-regexp';
import '../css/effect.css';

export function UkuRouter(container){
   
    var pageStack = {};
    var currentPage;
    var defaultPage;
    var otherwisePage;
    var self = this;
    var containerDOM;
    var anchors = {};
    var pageCache = {};

    var registerRoute = function (key, path, handler, isDefault, isOtherwise) {
        //var hash = window.location.hash;
        var regExp;
        if(key !== 'otherwise'){
            var re = pathToRegexp(key);
            regExp = re.source;
        }
        
        var page = {
            "key": key,
            "path": path,
            "re": regExp,
            "handler": handler
        };
        if (isDefault) {
            defaultPage = page;
        }
        if (isOtherwise) {
            otherwisePage = page;
        }
        pageStack[key] = page;
    };

    var dispatchOnRouteChange = function (page,params) {
        //document.location.hash = page.key;
        window.history.pushState(null, null, page.key);
        if (self.onRouteChange && typeof (self.onRouteChange) === "function") {
            self.onRouteChange.call(self, page,params);
        }
        if(page.handler && typeof page.handler === "function"){
            page.handler(page,params);
        }
    };
    
    var dealWithAnchor = function (element) {
        var anchorsDom = element.querySelectorAll("a[name]");
        for (var i = 0; i < anchorsDom.length; i++) {
            var anchor = anchorsDom[i].getAttribute("name");
            anchors["#" + anchor] = anchor;
        }    
    };

    var generateDivId = function () {
        return new Date().getTime() + "_" + Math.floor(Math.random() * 100000).toString();
    };

    var matchPath = function(url) {
        if(url === 'otherwise'){
            return pageStack[url];
        }
        for(var key in pageStack){
            var re = pageStack[key].re;
            if(new RegExp(re).test(url)){
                return pageStack[key];
            }
        }
        return null;
    };

    var analyzePath = function(url){
        if(url === 'otherwise'){
            return [];
        }
        for(var key in pageStack){
            var re = pageStack[key].re;
            var result = new RegExp(re).exec(url);
            if(result && result.length > 0){
                result.shift();
                delete result['index'];
                delete result['input'];
                delete result['groups'];
                return result;
            }
        }
        return [];
    }


    this.default = function (key, path, handler) {
        registerRoute(key, path, handler, true);
        return this;
    };
    this.when = function (key, path, handler) {
        registerRoute(key, path, handler, false);
        return this;
    };
    this.otherwise = function (path, handler) {
        registerRoute("otherwise", path, handler, false, true);
        return this;
    };
    
    this.addAnchor = function(anchor){
        if(anchor.charAt(0) !== "#"){
            anchor = "#"+anchor;
        }
        anchors[anchor] = anchor;
        return this;
    }
    
    this.goto = function (key) {
        var page = matchPath(key);
        if (page) {
            if (page !== currentPage) {
                var currentPageKey = page.re;
                if (pageCache[currentPageKey]) {
                    var oldPageKey = currentPage.re;
                    if (pageCache[oldPageKey]) {
                        pageCache[oldPageKey].style.display = "none";
                    } else {
                        cacheOldPage();
                    }
                    pageCache[currentPageKey].style.display = "block";
                    pageCache[currentPageKey].classList.add("showEffect");
                    currentPage = page;
                    var p = {
                        "key": key,
                        "page": pageCache[currentPageKey],
                        "cache": true,
                        "handler":page.handler
                    };
                    var params = analyzePath(key);
                    dispatchOnRouteChange(p,params);
                } else {
                    cacheOldPage();
                    var ajax = new XMLHttpRequest();
                    ajax.onreadystatechange = function () {
                        if (ajax.readyState == 4) {
                            if (ajax.status == 200) {
                                var htmlText = ajax.responseText;
                                containerDOM.insertAdjacentHTML('afterBegin', '<div>' + htmlText + '</div>');
                                var html = containerDOM.children[0];
                                html.classList.add("showEffect");
                                html.setAttribute("id", generateDivId());
                                dealWithAnchor(html);
                                currentPage = page;
                                var p = {
                                    "key":key,
                                    "page": html,
                                    "cache": false,
                                    "handler": page.handler
                                };
                                var params = analyzePath(key);
                                dispatchOnRouteChange(p, params);
                            } else {
                                alert("Can't load the route " + page.key + "page from " + page.path);
                            }
                        }
                    };
                    ajax.open("GET", page.path, true);
                    ajax.send(null);
                }
            }
        } else if (anchors[key] === undefined) {
            this.goto("otherwise");
        }

        function cacheOldPage() {
            for (var i = 0; i < containerDOM.children.length; i++) {
                var childDOM = containerDOM.children[i];
                if (childDOM.style.display !== "none") {
                    childDOM.style.display = "none";
                    var oldPageKey = currentPage.re;
                    pageCache[oldPageKey] = childDOM;
                    return false;
                }
            }
        }
    };
    this.work = function () {
        containerDOM = document.getElementById(container);
        var hash = window.location.hash;
        dealWithAnchor(document);
        var self = this;
        window.onhashchange = function (e) {
            hash = window.location.hash;
            self.goto(hash);
        };
        if (hash) {
            this.goto(hash);
        } else if (defaultPage) {
            this.goto(defaultPage.key);
        }
    };
    this.onRouteChange = undefined;
}

