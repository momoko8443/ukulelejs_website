var locale = {
    "en_US" :{
        "TAB_HOME":"HOME",
        "TAB_EXAMPLE":"Example",
        "TAB_PERFORMANCE":"Performance",
        "TAB_API":"API(EN)",
        "TAB_ABOUT":"About me(CN)",
        "TAB_NATIVE":"Native Way",
        "TAB_AMD":"Using AMD",
        "TAB_CMD":"Using CMD",
        "TITLE_UKULELEJS":"The two way data binding tool",
        "TOOL_TIPS_UKU_TEXT":"uku-text is a special attribute of ukujs, it can replace with {{xxx}} function to bind text with dom, using uku-text can avoid the flash problem when initialization.",
        "TOOL_TIPS_UKU_REPEAT":"uku-text is a special attribute of ukujs, it can render a collection, if you want to invoke parent controller from repeat item, please use parent.ctrlAlias.xxx",
        "TOOL_TIPS_UKU_REFRESH":"You can use uku.refresh() function to synchronize view and model by force. refresh('ctrlAlias') to sync single controller, refresh(['ctrlAliasA','ctrlAliasB'] to sync multiple controllers, refresh() to sync all controllers)",
        "TOOL_TIPS_UKU_INCLUDE":"You can use class='uku-include' to import a template, set template path with src(relative to index.html), replace is a flag to set whether keep container or not, replace-controller is a temporary function to replace other controller.",
        "TOOL_TIPS_UKU_SELECTED":"uku-selected='ex10Ctrl.selectedOption|value' set the default selected item of SELECT control, rigth of | is the key of selected item to position the special OPTION, uku-data-item set the binding object of OPTION.",
        "TOOL_TIPS_UKU_SELECTED_2":"You can use uku-selected='some value' to set which radio button will be selected.",
        "LABEL_DEMO":"Be quite, look at the Demo first",
        "LABEL_INSTALL_UKUJS":"Install UkuleleJs",
        "LABEL_GETTING_START":"Getting Start",
        "LABEL_IMPORT_UKUJS":"Import ukuleleJs library",
        "LABEL_REQUIREJS_CONFIG":"RequireJs's configuration",
        "LABEL_SEAJS_CONFIG":"SeaJs's configuration",
        "LABEL_ADD_UKU_APP":"Add 'uku-application' as an attribute to any html tags, then ukulelejs will control whole this tag",
        "LABEL_INITIALIZE_UKUJS":"Initialize ukulelejs and register Controller",
        "LABEL_BIND_ATTR":"Bind any html attribute to your model, just add 'uku-' + attribute's name, using {{}} to show model's value",
        "LABEL_PREPARATION":"Preparation",
        "LABEL_EXAMPLE_01":"example 01:Two way binding between html tag's attributte and JS Object's attribute",
        "LABEL_EXAMPLE_02":"example 02:Data binding between html tag's Text and JS Object's attribute",
        "LABEL_EXAMPLE_03":"example 03:Event binding between html tag and JS function",
        "LABEL_EXAMPLE_04":"example 04:Usage of Repeat renderer",
        "LABEL_EXAMPLE_05":"example 05:Deep binding",
        "LABEL_EXAMPLE_06":"example 06:Binding function with arguments",
        "LABEL_EXAMPLE_07":"example 07:Usage of Include",
        "LABEL_EXAMPLE_08":"example 08:Usage of Repeat renderer with uku-include",
        "LABEL_EXAMPLE_09":"example 09:Works with Sync request",
        "LABEL_EXAMPLE_10":"example 10:Usage of SELECT/OPTION ,uku-selected and uku-data-item",
        "LABEL_EXAMPLE_11":"example 11:Usage of Checkbox/Radio Button",
        "LABEL_EXAMPLE_12":"example 12:How to deal with CSS",
        "LABEL_EXAMPLE_13":"example 13:How to draw a table",
        "LABEL_EXAMPLE_14":"example 14:How to work with third-party plugins",
        "LABEL_EXAMPLE_14_DESCRIPTION":"Generally, 3rd-party plugin will create and operate dom with container's id or class, but the container hasn't been append to document tree when we used uku-include function. We should use 'uku-onload' to call back a handler to initialize the plugin when container is ready. The second point is...I don't recommend you to use 'uku-' on 3rd party plugins, they maybe not work at some suitation, a good way is using dom method to operate them and sync the view with uku.refresh()."
    },
    "zh_CN":{
        "TAB_HOME":"主页",
        "TAB_EXAMPLE":"示例",
        "TAB_PERFORMANCE":"性能",
        "TAB_API":"API(英文)",
        "TAB_ABOUT":"关于作者(中文)",
         "TAB_NATIVE":"原生方式",
        "TAB_AMD":"AMD方式",
        "TAB_CMD":"CMD方式",
        "TITLE_UKULELEJS":"一个双向数据绑定JS工具",
        "TOOL_TIPS_UKU_TEXT":"uku-text是ukujs中特有的属性，它用来代替{{xxx}}的写法，引入uku-text功能是为了方式初始化时花括号的闪现带来的不佳用户体验体验",
        "TOOL_TIPS_UKU_REPEAT":"uku-repeat是ukujs中特有的属性，它用来遍历渲染一组集合数据，如果在子dom中想调用外围controller的资源，请使用parent.ctrlAlias.xxx的方式",
        "TOOL_TIPS_UKU_REFRESH":"你可以使用 uku.refresh()，方法来强制同步视图和与之绑定的模型，refresh('ctrlAlias')同步指定的controller， refresh(['ctrlAliasA','ctrlAliasB'])同步多个controller，refresh()同步所有controller",
        "TOOL_TIPS_UKU_INCLUDE":"设置class='uku-include'来使用ukujs的模板功能，src指定模板路径（路径相对于index.html），replace来指定是否被替换，默认为false，外部容器保留，replace-controller='oldCtrl|newCtrl'用以模板复用（临时解决方案）",
        "TOOL_TIPS_UKU_SELECTED":"uku-selected='ex10Ctrl.selectedOption|value' 设置SELECT控件的默认选中项目|右边为使用对象中那个字段作为value来定位具体OPTION，uku-data-item 用来设置与OPTION绑定的对象",
        "TOOL_TIPS_UKU_SELECTED_2":"radio button中可以设置uku-selected='some value'来决定某个button的选中",
        "LABEL_DEMO":"撒都鳖所了,先戳Demo",
        "LABEL_INSTALL_UKUJS":"UkuleleJs的安装",
        "LABEL_GETTING_START":"让我们操练起来",
        "LABEL_IMPORT_UKUJS":"导入UkuleleJs的库",
        "LABEL_REQUIREJS_CONFIG":"RequireJs的配置",
        "LABEL_SEAJS_CONFIG":"SeaJs的配置",
        "LABEL_ADD_UKU_APP":"在需要ukuleleJs托管的html标签上写上自定义属性'uku-application'",
        "LABEL_INITIALIZE_UKUJS":"初始化UkuleleJs对象，注册Controller",
        "LABEL_BIND_ATTR":"你的数据模型可以和任意的html属性进行双向绑定，你要做的仅仅是在那些属性前加上'uku-'， 使用{{}}来显示模型上的值进行单向绑定",
        "LABEL_PREPARATION":"前戏",
        "LABEL_EXAMPLE_01":"例1:将html标签的属性与数据模型'捆绑'起来(羞)",
        "LABEL_EXAMPLE_02":"例2:将数据模型上的值显示在html标签的text中",
        "LABEL_EXAMPLE_03":"例3:事件的绑定",
        "LABEL_EXAMPLE_04":"例4:关于uku-repeat的使用",
        "LABEL_EXAMPLE_05":"例5:深度属性绑定",
        "LABEL_EXAMPLE_06":"例6:带参数function的绑定",
        "LABEL_EXAMPLE_07":"例7:关于uku-include的使用",
        "LABEL_EXAMPLE_08":"例8:关于uku-include作为渲染器在uku-repeat中的使用",
        "LABEL_EXAMPLE_09":"例9:如何处理异步请求",
        "LABEL_EXAMPLE_10":"例10:关于SELECT/OPTION以及uku-data-item和uku-selected的使用",
        "LABEL_EXAMPLE_11":"例11:关于Checkbox/Radio Button的使用",
        "LABEL_EXAMPLE_12":"例12:如何处理CSS",
        "LABEL_EXAMPLE_13":"例13:如何绘制表格",
        "LABEL_EXAMPLE_14":"例14:如何与第三方插件协同工作",
        "LABEL_EXAMPLE_14_DESCRIPTION":"一般情况下，第三方插件库都会通过调用插件容器id或者class来创建并操作dom，但是当你使用uku-include功能的时候，插件容器还并没有添加到document tree上（我们是获取不到这些id的），所以我们需要设一个回调函数，当代码片段加载成功已经ready的时候执行uku-onload回调方法，在这个回调方法中去初始化第三方插件。另外，在插件上使用uku-标签可能会失效，建议此处使用dom操作来管理插件，然后使用uku.refresh()来同步model和视图"
    }
};

