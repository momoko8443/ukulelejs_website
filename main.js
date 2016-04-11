require.config({
    paths: {
        "jquery": 'bower_components/jquery/dist/jquery.min',
        "jquery.bootstrap": 'bower_components/bootstrap/dist/js/bootstrap.min',
        "Ukulele": 'bower_components/ukulelejs/dist/ukulele',
        "highlight": 'bower_components/highlightjs/highlight.pack',
        "locale": 'resources/locale/example_properties',
        "routejs": 'bower_components/uku-routejs/build/js/uku-route',
        "domReady": 'bower_components/domReady/domReady',
        "Chart": 'bower_components/Chart.js/Chart.min',
        "Example01Ctrl": 'resources/js/example01',
        "Example02Ctrl": 'resources/js/example02',
        "Example03Ctrl": 'resources/js/example03',
        "Example04Ctrl": 'resources/js/example04',
        "Example05Ctrl": 'resources/js/example05',
        "Example06Ctrl": 'resources/js/example06',
        "Example09Ctrl": 'resources/js/example09',
        "Example10Ctrl": 'resources/js/example10',
        "Example11Ctrl": 'resources/js/example11',
        "Example12Ctrl": 'resources/js/example12',
        "Example13Ctrl": 'resources/js/example13',
        "Example15Ctrl": 'resources/js/example15',
        "PerformanceCtrl": 'resources/js/performance'
    },
    shim: {
        "routejs": {
            exports: "Route"
        },
        "jquery.bootstrap": {
            deps: ["jquery"]
        },
        "Chart": {
            exports: "Chart"
        }
    }
});

require(["domReady", "routejs", "Ukulele", "RootCtrl", "GuideCtrl","OtherCtrl",
"Example01Ctrl", "Example02Ctrl", "Example03Ctrl", "Example04Ctrl", "Example05Ctrl", "Example06Ctrl",
"Example09Ctrl", "Example10Ctrl", "Example11Ctrl", "Example12Ctrl", "Example13Ctrl", "Example15Ctrl",
"PerformanceCtrl", "Chart", "jquery", "jquery.bootstrap", "highlight", "locale"],
function (domReady, Route, Ukulele, RootCtrl, GuideCtrl,OtherCtrl,
            Example01Ctrl, Example02Ctrl, Example03Ctrl, Example04Ctrl, Example05Ctrl, Example06Ctrl,
            Example09Ctrl, Example10Ctrl, Example11Ctrl, Example12Ctrl, Example13Ctrl, Example15Ctrl, PerformanceCtrl) {

    var uku;
    var route;
    var initRoutePool = {};
    var perforCtrl;
    domReady(function () {
        uku = new Ukulele();
        uku.registerController("root", new RootCtrl(uku));
        uku.registerController("guideCtrl", new GuideCtrl(uku));
        uku.registerController("otherCtrl", new OtherCtrl());
        uku.registerController("ex01Ctrl", new Example01Ctrl());
        uku.registerController("ex02Ctrl", new Example02Ctrl());
        uku.registerController("ex03Ctrl", new Example03Ctrl());
        uku.registerController("ex04Ctrl", new Example04Ctrl());
        uku.registerController("ex05Ctrl", new Example05Ctrl());
        uku.registerController("ex06Ctrl", new Example06Ctrl());

        uku.registerController("ex09Ctrl", new Example09Ctrl(uku));
        uku.registerController("ex10Ctrl", new Example10Ctrl(uku));
        uku.registerController("ex11Ctrl", new Example11Ctrl());
        uku.registerController("ex12Ctrl", new Example12Ctrl());
        uku.registerController("ex13Ctrl", new Example13Ctrl());
        uku.registerController("ex15Ctrl", new Example15Ctrl(uku));

        uku.registerComponent("tab-bar","pages/components/tabbar.html");
        uku.registerComponent("example-00","pages/example/components/example_00.html");
        uku.registerComponent("example-01","pages/example/components/example_01.html");
        uku.registerComponent("example-02","pages/example/components/example_02.html");
        uku.registerComponent("example-03","pages/example/components/example_03.html");
        uku.registerComponent("example-04","pages/example/components/example_04.html");
        uku.registerComponent("example-05","pages/example/components/example_05.html");
        uku.registerComponent("example-06","pages/example/components/example_06.html");
        uku.registerComponent("example-07","pages/example/components/example_07.html");
        uku.registerComponent("example-08","pages/example/components/example_08.html");
        uku.registerComponent("example-09","pages/example/components/example_09.html");
        uku.registerComponent("example-10","pages/example/components/example_10.html");
        uku.registerComponent("example-11","pages/example/components/example_11.html");
        uku.registerComponent("example-12","pages/example/components/example_12.html");
        uku.registerComponent("example-13","pages/example/components/example_13.html");
        uku.registerComponent("example-14","pages/example/components/example_14.html");
        uku.registerComponent("example-15","pages/example/components/example_15.html");
        uku.registerComponent("example-16","pages/example/components/example_16.html");
        uku.registerComponent("datetiem-picker","pages/example/components/datetimepicker.html");
        uku.registerComponent("user-list", "pages/example/components/user_list.html");

        uku.registerComponent("guide-install", "pages/guide/prepare/install.html");
        uku.registerComponent("guide-config", "pages/guide/prepare/config.html");
        uku.registerComponent("guide-native", "pages/guide/prepare/native.html");
        uku.registerComponent("guide-amd", "pages/guide/prepare/amd.html");
        uku.registerComponent("guide-cmd", "pages/guide/prepare/cmd.html");
        uku.registerComponent("guide-webpack", "pages/guide/prepare/webpack.html");
        uku.registerComponent("guide-bind-text", "pages/guide/binding/bind-text.html");
        uku.registerComponent("guide-bind-attr", "pages/guide/binding/bind-attr.html");
        uku.registerComponent("guide-bind-input", "pages/guide/binding/bind-input.html");
        uku.registerComponent("guide-bind-event", "pages/guide/binding/bind-event.html");
        uku.registerComponent("guide-bind-style", "pages/guide/binding/bind-style.html");
        uku.registerComponent("guide-bind-function", "pages/guide/binding/bind-function.html");
        uku.registerComponent("guide-building", "pages/guide/building.html");
        uku.registerComponent("guide-uku-text", "pages/guide/directive/uku-text.html");
        uku.registerComponent("guide-uku-repeat", "pages/guide/directive/uku-repeat.html");
        uku.registerComponent("guide-uku-selected", "pages/guide/directive/uku-selected.html");
        uku.registerComponent("guide-uku-selected2", "pages/guide/directive/uku-selected2.html");
        uku.registerComponent("guide-register-controller", "pages/guide/api/register-controller.html");
        uku.registerComponent("guide-register-component", "pages/guide/api/register-component.html");
        uku.registerComponent("guide-init", "pages/guide/api/init.html");
        uku.registerComponent("guide-refresh", "pages/guide/api/refresh.html");
        uku.registerComponent("guide-add-listener", "pages/guide/api/add-listener.html");
        uku.registerComponent("guide-deal-with-element", "pages/guide/api/deal-with-element.html");
        perforCtrl = new PerformanceCtrl();
        uku.registerController("perforCtrl", perforCtrl);
        uku.registerController("res", new ResourceManager());
		route = new RouteController("viewContainer");
		route.default("#home", "pages/home.html")
        .when("#guide", "pages/guide.html")
				.when("#example", "pages/example.html")
				.when("#performance", "pages/performance.html")
				.when("#api", "pages/api.html")
				.when("#about", "pages/about.html")
				.otherwise("pages/home.html")
				.addAnchor("repeat");
        uku.addListener(Ukulele.INITIALIZED,function(e){
            var element = e.element;
            route.work();
            var elementId = element.getAttribute("id");
            if (!initRoutePool[elementId]) {
                var codeDoms = element.querySelectorAll('pre code');
                for (var i = 0; i < codeDoms.length; i++) {
                    hljs.highlightBlock(codeDoms[i]);
                }
                initRoutePool[elementId] = true;
            }


			route.onRouteChange = function (page) {
				if (page && page.page && !page.cache) {
					//document.getElementById("mainView").classList.add('blur');
					//document.getElementById("loadingBar").style.display = "block";
                    uku.addListener(Ukulele.HANDLE_ELEMENT_COMPLETED,function(e){
                        if(e.element){
                            var codeDoms = e.element.querySelectorAll('pre code');
                            for (var i = 0; i < codeDoms.length; i++) {
                                hljs.highlightBlock(codeDoms[i]);
                            }
                        }
                    });
					uku.handleElement(page.page);
					if (page.key === "#performance" || page.key === "#about" || page.key === "#api" || page.key === "#guide") {
						setTimeout(function () {
							//document.getElementById("mainView").classList.remove('blur');
							//document.getElementById("loadingBar").style.display = "none";
						}, 1000);
					}
				}
				if (page.key === "#performance") {
					perforCtrl.init();
				}
			};
        });
        uku.init();
    });

    function ResourceManager() {
        this.changeLocale = function (language) {
            this.selectedLanguage = language;
        };
        this.languages = [{
            "name": "中文",
            "value": "zh_CN"
        }];
        // , {
        //     "name": "English",
        //     "value": "en_US"
        // }
        this.selectedLanguage = this.languages[0];
        this.getResource = function (key) {
            var currentLocale = this.selectedLanguage.value;
            var str = locale[currentLocale][key];
            return str;
        };
    }
});

define("RootCtrl", function () {
    return function (uku) {
        this.loadSuccessHandler = function () {
            document.getElementById("mainView").classList.remove('blur');
            document.getElementById("loadingBar").style.display = "none";
        }
    };

});

define("GuideCtrl", function(){
    return function(uku){
        var currentMenuItem;
        this.guideMenuItemClickHandler = function(e){
            if(e.target.nodeName === "BUTTON"){
                var menuItem = e.target.dataset.menuItem;
                if(currentMenuItem !== menuItem){
                    var componentTag = "guide-"+menuItem;
                    var comp = uku.getComponentsDefinition()[componentTag];
                    var guideItem;
                    if(comp){
                        guideItem = document.createElement(componentTag);
                    }else{
                        guideItem = document.createElement("guide-building");
                    }
                    var guideContentPanel = document.getElementById("guideContentPanel");
                    guideContentPanel.removeChild(guideContentPanel.children[0]);
                    guideContentPanel.appendChild(guideItem);
                    uku.dealWithElement(guideItem);
                    currentMenuItem = menuItem;
                }
            }
        };
    };
});

define("OtherCtrl", function () {
    return function (uku) {
        this.myName = "name from OtherCtrl";
    };
});
