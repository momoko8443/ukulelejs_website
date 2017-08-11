//import jquery from './bower_components/jquery/dist/jquery.min';
//import jquery_bootstrap from './bower_components/bootstrap/dist/js/bootstrap.min';
import * as Ukulele from './bower_components/ukulelejs/dist/uku';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import locale from './resources/locale/example_properties';
import Example01Ctrl from './resources/js/example01';
import Example02Ctrl from './resources/js/example02';
import Example03Ctrl from './resources/js/example03';
import Example04Ctrl from './resources/js/example04';
import Example05Ctrl from './resources/js/example05';
import Example06Ctrl from './resources/js/example06';
import Example09Ctrl from './resources/js/example09';
import Example10Ctrl from './resources/js/example10';
import Example11Ctrl from './resources/js/example11';
import Example12Ctrl from './resources/js/example12';
import Example13Ctrl from './resources/js/example13';
import Example15Ctrl from './resources/js/example15';
import PerformanceCtrl from './resources/js/performance';
import RootCtrl from './resources/js/rootCtrl';
import GuideCtrl from './resources/js/guideCtrl';
import OtherCtrl from './resources/js/otherCtrl';
import './bower_components/bootstrap/dist/js/bootstrap.min';
function main() {

    var uku;
    var route;
    var initRoutePool = {};
    var perforCtrl;
    hljs.registerLanguage('javascript', javascript);
    function init() {
        var Ukulelejs = Ukulele.Ukulele;
        uku = new Ukulelejs();
        console.log(new Example05Ctrl().child.say());
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
        uku.registerComponent("guide-handle-element", "pages/guide/api/handle-element.html");
        uku.registerComponent("guide-custom-comp", "pages/guide/comp/custom_comp.html");
        uku.registerComponent("guide-nest-comp", "pages/guide/comp/nest_comp.html");
        uku.registerComponent("guide-communicate-comp", "pages/guide/comp/communicate_comp.html");
        uku.registerComponent("guide-3rd-part-comp", "pages/guide/comp/3rd_part_comp.html");
        uku.registerComponent("guide-dynamic-comp", "pages/guide/comp/dynamic_comp.html");

        uku.registerComponent("me","pages/guide/comp/communication/me.html");
        uku.registerComponent("father","pages/guide/comp/communication/father.html");
        uku.registerComponent("grand-father","pages/guide/comp/communication/grand_father.html");
        uku.registerComponent("brother","pages/guide/comp/communication/brother.html");
        uku.registerComponent("uncle","pages/guide/comp/communication/uncle.html");
        uku.registerComponent("brother-in-law","pages/guide/comp/communication/brother_in_law.html");
        perforCtrl = new PerformanceCtrl();
        uku.registerController("perforCtrl", perforCtrl);
        uku.registerController("res", new ResourceManager());
		route = new RouteController("viewContainer");
		route.default("#home", "pages/home.html")
        .when("#guide", "pages/guide.html")
				.when("#example", "pages/example.html")
				.when("#performance", "pages/performance.html")
				.when("#api", "pages/api.html")
                .when("#showcase", "pages/showcase.html")
				.when("#about", "pages/about.html")
				.otherwise("pages/home.html")
				.addAnchor("repeat");
        uku.addListener(Ukulelejs.INITIALIZED,function(e){
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
					document.getElementById("mainView").classList.add('blur');
					document.getElementById("loadingBar").style.display = "block";
                    uku.addListener(Ukulelejs.HANDLE_ELEMENT_COMPLETED,function(e){
                        if(e.element){
                            var codeDoms = e.element.querySelectorAll('pre code');
                            for (var i = 0; i < codeDoms.length; i++) {
                                hljs.highlightBlock(codeDoms[i]);
                            }
                        }
                    });
                    uku.addListener(Ukulelejs.HANDLE_ELEMENT_COMPLETED,function(e){
                        document.getElementById("mainView").classList.remove('blur');
                        document.getElementById("loadingBar").style.display = "none";
                    });
					uku.handleElement(page.page);
				}
				if (page.key === "#performance") {
					perforCtrl.init();
				}
			};
        });
        uku.init();
    };

    init();

    function ResourceManager() {
        this.changeLocale = function (language) {
            this.selectedLanguage = language;
        };
        this.languages = [{
            "name": "中文",
            "value": "zh_CN"
        },{
             "name": "English",
             "value": "en_US"
         }];
        var lang = navigator.language || navigator.userLanguage;
        if(lang === "zh-CN"){
            this.selectedLanguage = this.languages[0];
        }else{
            this.selectedLanguage = this.languages[1];
        }
        this.getResource = function (key) {
            var currentLocale = this.selectedLanguage.value;
            var str = locale[currentLocale][key];
            return str;
        };
    }
}

main();