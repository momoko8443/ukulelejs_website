require.config({
    paths: {
        "jquery": 'bower_components/jquery/dist/jquery.min',
        "jquery.bootstrap": 'bower_components/bootstrap/dist/js/bootstrap.min',
        "Ukulele": 'bower_components/ukulelejs/dist/ukulele',
        "highlight": 'bower_components/highlightjs/highlight.pack',
        "locale": 'resources/locale/example_properties',
        "routejs": 'bower_components/uku-routejs/build/js/uku-route',
        "domReady": 'bower_components/domReady/domReady',
        "datetimepicker": 'resources/plugin/bootstrap_datetimepicker/js/bootstrap-datetimepicker',
        "moment": 'bower_components/moment/min/moment.min',
        "Chart": 'bower_components/Chart.js/Chart.min',
        "Example01Ctrl": 'resources/js/example01',
        "Example02Ctrl": 'resources/js/example02',
        "Example03Ctrl": 'resources/js/example03',
        "Example04Ctrl": 'resources/js/example04',
        "Example05Ctrl": 'resources/js/example05',
        "Example06Ctrl": 'resources/js/example06',
        "Example07Ctrl": 'resources/js/example07',
        "Example08Ctrl": 'resources/js/example08',
        "Example09Ctrl": 'resources/js/example09',
        "Example10Ctrl": 'resources/js/example10',
        "Example11Ctrl": 'resources/js/example11',
        "Example12Ctrl": 'resources/js/example12',
        "Example13Ctrl": 'resources/js/example13',
        "Example14Ctrl": 'resources/js/example14',
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
        "datetimepicker": {
            deps: ["jquery", "jquery.bootstrap"]
        },
        "moment": {
            exports: "moment"
        },
        "Chart": {
            exports: "Chart"
        }
    }
});

require(["domReady", "routejs", "Ukulele", "RootCtrl", "OtherCtrl",
"Example01Ctrl", "Example02Ctrl", "Example03Ctrl", "Example04Ctrl", "Example05Ctrl", "Example06Ctrl", "Example07Ctrl",
"Example08Ctrl", "Example09Ctrl", "Example10Ctrl", "Example11Ctrl", "Example12Ctrl", "Example13Ctrl", "Example14Ctrl", "Example15Ctrl",
"PerformanceCtrl", "Chart", "jquery", "jquery.bootstrap", "highlight", "locale", "datetimepicker"],
function (domReady, Route, Ukulele, RootCtrl, OtherCtrl,
            Example01Ctrl, Example02Ctrl, Example03Ctrl, Example04Ctrl, Example05Ctrl, Example06Ctrl, Example07Ctrl,
            Example08Ctrl, Example09Ctrl, Example10Ctrl, Example11Ctrl, Example12Ctrl, Example13Ctrl, Example14Ctrl, Example15Ctrl, PerformanceCtrl) {

    var uku;
    var route;
    var initRoutePool = {};
    var perforCtrl;
    domReady(function () {
        uku = new Ukulele();
        uku.registerController("root", new RootCtrl(uku));
        uku.registerController("otherCtrl", new OtherCtrl());
        uku.registerController("ex01Ctrl", new Example01Ctrl());
        uku.registerController("ex02Ctrl", new Example02Ctrl());
        uku.registerController("ex03Ctrl", new Example03Ctrl());
        uku.registerController("ex04Ctrl", new Example04Ctrl());
        uku.registerController("ex05Ctrl", new Example05Ctrl());
        uku.registerController("ex06Ctrl", new Example06Ctrl());
        uku.registerController("ex07Ctrl", new Example07Ctrl());
        uku.registerController("ex08Ctrl", new Example08Ctrl());
        uku.registerController("ex09Ctrl", new Example09Ctrl(uku));
        uku.registerController("ex10Ctrl", new Example10Ctrl(uku));
        uku.registerController("ex11Ctrl", new Example11Ctrl());
        uku.registerController("ex12Ctrl", new Example12Ctrl());
        uku.registerController("ex13Ctrl", new Example13Ctrl());
        uku.registerController("ex14Ctrl", new Example14Ctrl(uku));
        uku.registerController("ex15Ctrl", new Example15Ctrl(uku));
        uku.registerComponent("user-list", "pages/example/components/user_list.html");
        perforCtrl = new PerformanceCtrl();
        uku.registerController("perforCtrl", perforCtrl);
        uku.registerController("res", new ResourceManager());
		route = new RouteController("viewContainer");
		route.default("#home", "pages/home.html")
				.when("#example", "pages/example.html")
				.when("#performance", "pages/performance.html")
				.when("#api", "pages/api.html")
				.when("#about", "pages/about.html")
				.otherwise("pages/home.html")
				.addAnchor("repeat")
				.work();
        uku.init();
		
        uku.initHandler = function (element) {
            var elementId = element.getAttribute("id");
            if (!initRoutePool[elementId]) {
                var codeDoms = document.querySelectorAll('pre code');
                for (var i = 0; i < codeDoms.length; i++) {
                    hljs.highlightBlock(codeDoms[i]);
                }
                initRoutePool[elementId] = true;
            }
			
			
			route.onRouteChange = function (page) {
				if (page && page.page && !page.cache) {
					document.getElementById("mainView").classList.add('blur');
					document.getElementById("loadingBar").style.display = "block";
					uku.dealWithElement(page.page);
					if (page.key === "#performance" || page.key === "#about" || page.key === "#api") {
						setTimeout(function () {
							document.getElementById("mainView").classList.remove('blur');
							document.getElementById("loadingBar").style.display = "none";
						}, 1000);
					}
				}
				if (page.key === "#performance") {
					perforCtrl.init();
				}

			};
			
        };
    });
	
    function ResourceManager() {
        this.changeLocale = function (language) {
            this.selectedLanguage = language;
        };
        this.languages = [{
            "name": "中文",
            "value": "zh_CN"
        }, {
            "name": "English",
            "value": "en_US"
        }];
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

define("OtherCtrl", function () {
    return function (uku) {
        this.myName = "name from OtherCtrl";
    };
});
