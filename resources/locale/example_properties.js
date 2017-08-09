var locale = {
    "zh_CN":{
        "TAB_HOME":"主页",
        "TAB_GUIDE":"教学",
        "TAB_EXAMPLE":"示例",
        "TAB_PERFORMANCE":"性能",
        "TAB_SHOWCASE":"应用展示",
        "TAB_ABOUT":"关于作者",
        "TITLE_UKULELEJS":"一个双向数据绑定&组件化工具",
        "TITLE_REASON":"选择Ukujs的理由",
        "PROS_1":"体积小 gizp≈9k，min≈40k，dev≈200k",
        "PROS_2":"兼容AMD/CMD",
        "PROS_3":"性能还算不错",
        "PROS_4":"学习成本非常低",
        "TOOL_TIPS_UKU_TEXT":"uku-text是ukujs中特有的属性，它用来代替{{xxx}}的写法，引入uku-text功能是为了方式初始化时花括号的闪现带来的不佳用户体验体验",
        "TOOL_TIPS_UKU_REPEAT":"uku-repeat是ukujs中特有的属性，它用来遍历渲染一组集合数据，如果在子dom中想调用外围controller的资源，请使用parent.ctrlAlias.xxx的方式",
        "TOOL_TIPS_UKU_REFRESH":"你可以使用 uku.refresh()，方法来强制同步视图和与之绑定的模型，refresh('ctrlAlias')同步指定的controller， refresh(['ctrlAliasA','ctrlAliasB'])同步多个controller，refresh()同步所有controller",
        "TOOL_TIPS_UKU_SELECTED":"uku-selected='ex10Ctrl.selectedOption|value' 设置SELECT控件的默认选中项目|右边为使用对象中那个字段作为value来定位具体OPTION，uku-data-item 用来设置与OPTION绑定的对象",
        "TOOL_TIPS_UKU_SELECTED_2":"radio button中可以设置uku-selected='some value'来决定某个button的选中",

        "LABEL_WHAT_IS_UKUJS":"什么是Ukulelejs(以下简称Ukujs)",
        "TEXT_WHAT_IS_UKUJS":"Ukulelejs是一个提供了双向绑定工具以及组件化功能的轻量工具，你可以把它暂时理解为超易学的精简版的Angular&Polymer的合体",
        "LABEL_SIMPLE_DEMO":"来看一个简单的双向绑定例子",


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
        "LABEL_EXAMPLE_14":"例14:如何使用uku-include与第三方插件协同工作",
		"LABEL_EXAMPLE_15":"例15:新功能！web component的支持",
        "LABEL_EXAMPLE_16":"例16:新功能！如何使用web component与第三方插件协同工作",

        "GUIDE_MENU_ITEM_PREPARE":"准备工作",
        "GUIDE_MENU_ITEM_INSTALL":"安装",
        "GUIDE_MENU_ITEM_CONFIGURATION":"配置",
        "GUIDE_MENU_ITEM_NATIVE_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;Native方式",
        "GUIDE_MENU_ITEM_AMD_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;AMD方式",
        "GUIDE_MENU_ITEM_CMD_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;CMD方式",
        "GUIDE_MENU_ITEM_WEBPACK_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;Webpack方式",

        "GUIDE_MENU_ITEM_TWO_WAY_BINDING":"双向绑定",
        "GUIDE_MENU_ITEM_BIND_TEXT":"绑定文本",
        "GUIDE_MENU_ITEM_BIND_ATTRIBUTE":"绑定属性",
        "GUIDE_MENU_ITEM_TWO_BIND_INPUT":"绑定输入控件",
        "GUIDE_MENU_ITEM_TWO_BIND_EVENT":"绑定事件",
        "GUIDE_MENU_ITEM_TWO_BIND_STYLE":"绑定样式",
        "GUIDE_MENU_ITEM_TWO_BIND_FUNCTION":"函数绑定",

        "GUIDE_MENU_ITEM_DIRECTIVE":"特殊属性",
        "GUIDE_MENU_ITEM_UKU_TEXT":"uku-text",
        "GUIDE_MENU_ITEM_UKU_REPEAT":"uku-repeat",
        "GUIDE_MENU_ITEM_UKU_INCLUDE":"uku-include",
        "GUIDE_MENU_ITEM_UKU_SELECTED":"uku-selected(1)",
        "GUIDE_MENU_ITEM_UKU_SELECTED2":"uku-selected(2)",

        "GUIDE_MENU_ITEM_API":"常用API",
        "GUIDE_MENU_ITEM_API_REG_CTRL":"uku.registerController()",
        "GUIDE_MENU_ITEM_API_REG_COMP":"uku.registerComponent()",
        "GUIDE_MENU_ITEM_API_INIT":"uku.init()",
        "GUIDE_MENU_ITEM_API_REFRSH":"uku.refresh()",
        "GUIDE_MENU_ITEM_API_ADD_LISTENER":"uku.addListener()",
        "GUIDE_MENU_ITEM_API_DEAL_ELEMENT":"uku.handleElement()",

        "GUIDE_MENU_ITEM_COMP":"组件化",
        "GUIDE_MENU_ITEM_CUSTOM_COMP":"自定义组件",
        "GUIDE_MENU_ITEM_NEST_COMP":"组件的嵌套",
        "GUIDE_MENU_ITEM__COMMUNICAT_COMP":"组件之间通讯",
        "GUIDE_MENU_ITEM__THIRD_PART_COMP":"组件中使用第三方库",
        "GUIDE_MENU_ITEM_DYNAMIC_LOAD_COMP":"动态加载组件",

        "GUIDE_LABEL_INSTALL_UKUJS":"Ukujs的安装",
        "GUIDE_TEXT_INSTALL_UKUJS":"你可以使用2种方式安装Ukujs的库，推荐使用npm方式",
        "GUIDE_LABEL_INSTALL_BOWER":"bower 安装",
        "GUIDE_LABEL_INSTALL_NPM":"npm 安装",

        "GUIDE_LABEL_CONFIGURATION":"Ukujs的配置",
        "GUIDE_TEXT_CONFIGURATION":"你可以使用多种方式将Ukujs的库引入你的项目中，Ukujs目前支持AMD和CMD规范，当然你也可以将它当成全局对象引入你的工程",
        "GUIDE_LABEL_IMPORT_UKUJS":"导入Ukujs的库",
        "GUIDE_LABEL_ADD_UKU_APP":"在需要委托的DOM节点上设置uku-application属性",
        "GUIDE_LABEL_INIT_UKUJS":"初始化Ukujs，注册Controller（ViewModel）",
        "GUIDE_LABEL_BIND_ATTR":"将View和ViewModel绑定起来",

        "GUIDE_LABEL_AMD_CONFIG":"在require.config中配置Ukujs",
        "GUIDE_LABEL_CMD_CONFIG":"在seajs.config中配置Ukujs",

        "GUIDE_LABEL_BIND_TEXT":"绑定文本",
        "GUIDE_TEXT_BIND_TEXT":"一种是使用“{{ }}”双层花括号将需要显示的模型属性括起来，比如{{myCtrl.user.username}}, {{myCtrl.a + myCtrl.b + yourCtrl.c}}, {{!myCtrl.isHide}}",
        "GUIDE_TEXT_BIND_TEXT2":"注意，目前Ukujs不支持 hello, {{myCtrl.username}}这种动静混排的写法，同时也不支持{{myCtrl.firstName + myCtrl.lastName}}的表达式写法<br/>理由有2点:<br/>1,容易把业务相关的逻辑散落到view的各个角落，不利于日后的维护和排错，不利于单元测试<br/>2,作者很懒<br/>因此建议把页面上要显示的文本都使用模型来维护，即使里面会有一些静态的值。不要为了贪图一时爽快，最终有些债以后还是要还的。切记切记（市面上其它主流mvvm框架即使提供了类似偷懒功能我也不推荐你去使用它）",
        "GUIDE_TEXT_BIND_TEXT3":"Ukujs自1.3.0版开始支持复杂的逻辑，运算表达式 (打脸)",
        "GUIDE_LABEL_BIND_ATTR2":"绑定属性",
        "GUIDE_TEXT_BIND_ATTR":"绑定属性可以说是ukujs最重要的功能之一，你只要记住一条规则 “uku-”这个前缀加上任意的html标签上的属性即可生成属性的绑定。例如 uku-src='myCtrl.imageUrl' 即可将img标签的src属性与模型上的 imageUrl变量进行绑定",
        "GUIDE_TEXT_BIND_ATTR2":"你还可以尝试uku-value , uku-style, uku-class... <span style='color:red'>uku-+任何原生的属性，uku-+任何原生的属性，uku-+任何原生的属性</span>（重说三）。在接下去的几个关于双向绑定的小节其实都是围绕这条规则展开的。",
        "GUIDE_LABEL_BIND_INPUT":"绑定输入控件",
        "GUIDE_TEXT_BIND_INPUT":"绑定输入控件input，其实是对上个小节，绑定属性的一种实现，我们使用 uku-value来实现这个功能，从而完成",
        "GUIDE_LI_BIND_INPUT1":"view-model->view: 模型在视图上显示",
        "GUIDE_LI_BIND_INPUT2":"user behaviour->view: 用户的行为影响了视图改变",
        "GUIDE_LI_BIND_INPUT3":"view -> view-model: 视图改变后更新了与之绑定的模型",
        "GUIDE_TEXT_BIND_INPUT2":"这一双向绑定的完整过程",
        "GUIDE_TEXT_BIND_INPUT3":"input中的checkbox, radio等比较特殊，Ukujs对其进行了一定的扩展，你可以在进阶章节或示例板块中学习具体的用法",

        "GUIDE_LABEL_BIND_EVENT":"绑定事件",
        "GUIDE_TEXT_BIND_EVENT":"绑定事件其实也是对上个小节，绑定属性的一种实现，我们使用 uku-onEventType来实现这个功能，例如原生事件使用onclick来设置点击事件的回调函数，那么在Ukujs中，你使用uku-onclick 即可，无需额外的记忆",
        "GUIDE_LABEL_BIND_EVENT2":"关于Handler的参数",
        "GUIDE_TEXT_BIND_EVENT2":"buttonClickHandler函数中的最后一个参数默认为事件的event,event不需要你显示地去传递(Ukujs会自动添加在最后),你只需要专注于自己想传递的参数，例如",

        "GUIDE_LABLE_BIND_STYLE":"绑定样式",
        "GUIDE_TEXT_BIND_STYLE":"绑定样式其实也是对绑定属性的一种实现，我们使用 uku-style和 uku-class来实现这个功能",
        "GUIDE_LABLE_BIND_STYLE2":"uku-style的实现",
        "GUIDE_TEXT_BIND_STYLE2":"注意这里我们使用json格式来定义style对象, 在css中的某些带-的写法需要改成驼峰式的写法，如上例中的font-style需要写成fontStyle",
        "GUIDE_LABLE_BIND_STYLE3":"uku-class的实现",
        "GUIDE_TEXT_BIND_STYLE3":"uku-class的使用方式和原生的class无异，你只要绑定一个以空格分割的callNames的字符串即可。uku-style和uku-class可以方便的帮助我们在程序中控制view的样式，包括dom的show/hide等效果。（Ukujs中为了api的简洁，没有实现诸如Angular中ng-show这样的指令，请使用uku-style来实现）",
        "GUIDE_LABEL_BIND_FUNCTION":"函数绑定",
        "GUIDE_TEXT_BIND_FUNCTION":"上面小节中的绝大多数例子都是 “模型的属性” 与 “标签的属性”进行绑定，Ukujs中也提供了“模型的函数” 与 “标签的属性”进行绑定的功能,如 uku-src = 'myCtrl.func()'表示，img的src属性是由模型中的函数func的返回值来决定具体的图片路径。又如 {{myCtrl.func()}}则表示用文本显示函数func的返回值",
        "GUIDE_TEXT_BIND_FUNCTION2":"我们可以给函数设置参数，参数目前只支持String类型，如果你想传递其它类型的参数，请将其定义在模型中，使用 ctrlAlias.attr的方式传递如上例中的 uku-value='myCtrl.func(myCtrl.arg)'，当然这也就意味着你可以传递变量了。（咳咳，将会在后续版本中改进参数这方面的体验）",

        "GUIDE_LABEL_DIRECTIVE_UKU_TEXT":"特殊属性（指令） —— uku-text",
        "GUIDE_TEXT_DIRECTIVE_UKU_TEXT":"uku-text是妥协的产物，它的出现是为了解决{{xxx}}在html加载时还没有获得模型数值时闪现的问题，为了提高用户体验作者不得不作出了妥协，增加了这个特殊的指令。（作者为了降低学习曲线希望把特殊属性的数量控制在最低）",
        "GUIDE_TEXT_DIRECTIVE_UKU_TEXT2":"uku-text可以取代{{}}的功能",

        "GUIDE_LABEL_DIRECTIVE_UKU_REPEAT":"特殊属性（指令） —— uku-repeat",
        "GUIDE_TEXT_DIRECTIVE_UKU_REPEAT":"使用过Angular的朋友因该对ng-repeat不会陌生，不错uku-repeat就是借（chao）鉴（xi）了ng-repeat的用法，uku-repeat的作用将模型中一个集合类型属性进行循环渲染。无需多言，光看示例就知道怎么用了",
        "GUIDE_TEXT_DIRECTIVE_UKU_REPEAT2":"uku-repeat支持树形结构的多层嵌套，更多用法请参考“示例”",

        "GUIDE_LABEL_DIRECTIVE_UKU_SELECT":"特殊属性（指令） —— uku-selected（1）",
        "GUIDE_TEXT_DIRECTIVE_UKU_SELECT":"uku-selected使用于select（下拉菜单控件），它需要和uku-data-item一同服用。下面的例子中uku-selected来指定被选中的模型"
                                            +"而<span style='color:red;font-weight:bold;'> | </span>符号来标示使用哪个字段作为key来指定唯一选中的item。例如uku-selected='myCtrl.selectedItem|value'"
                                            +"则表示使用'value'这个item中的field来唯一标注某个选项（不过前提是也需要你把这个value设置成为option的value，"
                                            +"这里我们用uku-value='item.value'来标识），uku-data-item(只有在option控件上才会使用)表示每个option所具体代表的是什么东西，它可以是整个item对象，也可以是item中的某个字段，"
                                            +"比如，uku-data-item='item.name'那么选中的selectedItem就是item的name而非item对象本身。",
        "GUIDE_TEXT_DIRECTIVE_UKU_SELECT2":"uku-selected也被使用在radio控件中，下一节中 会有介绍",

        "GUIDE_LABEL2_DIRECTIVE_UKU_SELECT":"特殊属性（指令） —— uku-selected（2）",
        "GUIDE_TEXT2_DIRECTIVE_UKU_SELECT":"uku-selected除了使用于select控件，也使用与radio单选框控件中，如果多个radio都使用uku-selected绑定了同一个model，那么被选中的radio的value就会被赋给与之绑定的模型，反之亦然",

        "GUIDE_LABEL_API_FUNCTION":"方法:",
        "GUIDE_LABEL_API_ARGUMENT":"参数:",

        "GUIDE_TEXT_API_REG_CTRL":"registerController方法用来注册“视图模型”（视图模型——在ukujs中为了使ng粉丝们可以路转粉，故沿用了Controller这个名词）",
        "GUIDE_TEXT_API_REG_CTRL2":"我们将MyController的实例new MyController()以及它的别名myCtrl注册成一个Controller（'视图模型'），这样你就可以在html中使用myCtrl.message来引用模型上的变量，从而与视图进行绑定了(如下例)",

        "GUIDE_TEXT_API_REG_COMP":"registerComponent方法用来注册“Web Component”，这样你就可以在任意地方使用标签引入你的自定义组件了",
        "GUIDE_TEXT_API_REG_COMP2":"此处注册mydiv为组件的tagName，那么在下例的html中就可以使用<mydiv></mydiv>来引入组件了",
        "GUIDE_TEXT_API_REG_COMP3":"Web Component的定义会在组件化章节中做具体的介绍",

        "GUIDE_TEXT_API_INIT":"init()方法用来初始化Ukujs，使整个库开始运作。建议在dom载入完毕后执行该方法，如<script></script>标签写于<body></body>之后，或者使用requirejs的domReady的回调中执行init()方法",
        "GUIDE_TEXT_API_INIT2":"注意,请务必让init()方法在最后被执行，以确保controller和component都已被register过",

        "GUIDE_TEXT_API_REFRESH":"controllerAlias为你想要刷新（执行脏检查）的Controller别名"
                                +"controllerAlias可以是一个String,如uku.refresh('myCtrl')"
                                +"也可以是一个Array,如uku.refresh(['myCtrl','myCtrl2'])"
                                +"如果不填则会刷新所有的Controller,如uku.refresh()(注意刷新所有可能带来额外的开销，请慎用)",
        "GUIDE_TEXT_API_REFRESH2":"uku.refresh()使用的场景：当视图模型发生变化时，没有被ukujs所监控到，"
                                +"比如ajax请求过后改变了模型的值，"
                                +"比如使用setInterval后改变了模型的值，"
                                +"比如，你发现双向绑定没有如你预计生效的时候，"
                                +"你都可以调用uku.refresh()来手动执行刷新以同步视图和视图模型",
        "GUIDE_TEXT_API_ADD_LISTENER":"目前Ukujs内置的事件有 Ukulele.INITIALIZED, Ukulele.HANDLE_ELEMENT_COMPLETED 和 Ukulele.REFRESH 3种，分别在每次初始化完成时，handleElement()执行完，和脏检测完成时触发",

        "GUIDE_TEXT_API_DEAL_WITH_ELE":"由于Ukujs是使用标签形式声明的双向绑定，因此如果有新的dom节点被添加到主程序中时，需要调用handelElement方法来对新加入的dom进行一系列的扫描，解析，绑定动作"
                                +"<br/>执行handleElement()方法会触发Ukulele.HANDLE_ELEMENT_COMPLETED事件",
    },
    "en_US" :{
        "TAB_HOME":"HOME",
        "TAB_GUIDE":"TUTORIAL",
        "TAB_EXAMPLE":"EXAMPLES",
        "TAB_PERFORMANCE":"PERFORMANCE",
        "TAB_SHOWCASE":"SHOWCASE",
        "TAB_ABOUT":"ABOUT ME(CN)",
        "TITLE_UKULELEJS":"A light Two Way Binding & Component Tool",
        "TITLE_REASON":"Why choose Ukujs?",
        "PROS_1":"Small size gizp≈9k，min≈40k，dev≈200k",
        "PROS_2":"Compatible with AMD/CMD",
        "PROS_3":"Performance is good",
        "PROS_4":"Very easy to learn",
        "TOOL_TIPS_UKU_TEXT":"uku-text is a specifical attribute in ukujs, it equals with {{xxx}}, uku-text will not be flash in page's loading phase",
        "TOOL_TIPS_UKU_REPEAT":"uku-repeat is a specifical attribute in ukujs, using it to render a collection data, if you want to access parent controller from inner renderer, please use ctrlAlias.xxx",
        "TOOL_TIPS_UKU_REFRESH":"You can use uku.refresh() to sync view and view-model manually, use refresh('ctrlAlias') to sync specifical controller, use refresh(['ctrlAliasA','ctrlAliasB']) to sync multipart controllers, use refresh() to sync all controllers",
        "TOOL_TIPS_UKU_SELECTED":"uku-selected='ex10Ctrl.selectedOption|value' to set the default selected item of SELECT by right key of | symbol, set uku-data-item as the binding object of OPTION",
        "TOOL_TIPS_UKU_SELECTED_2":"You can set uku-selected='some value' in the radio button to set default selected item",

        "LABEL_WHAT_IS_UKUJS":"What is Ukulelejs (Ukujs for short)",
        "TEXT_WHAT_IS_UKUJS":"Ukulelejs is a light tool which provides two way binding & component functions, you can consider it as a lite version of Angular&Polymer's mixture temporarily",
        "LABEL_SIMPLE_DEMO":"Let's see a quick demo",


        "LABEL_PREPARATION":"Preparation",
        "LABEL_EXAMPLE_01":"Example 1:Bind html's attribute with view-model",
        "LABEL_EXAMPLE_02":"Example 2:How to display view-model's property on the text attribute",
        "LABEL_EXAMPLE_03":"Example 3:How to bind an event",
        "LABEL_EXAMPLE_04":"Example 4:How to use uku-repeat to render a collection",
        "LABEL_EXAMPLE_05":"Example 5:Bind with nest property",
        "LABEL_EXAMPLE_06":"Example 6:Bind with a function which with arguments",
        "LABEL_EXAMPLE_07":"Example 7:How to use uku-include",
        "LABEL_EXAMPLE_08":"Example 8:How to use uku-include with uku-repeat",
        "LABEL_EXAMPLE_09":"Examlpe 9:How to work with async request",
        "LABEL_EXAMPLE_10":"Example 10:How to work with SELECT/OPTION by uku-data-item and uku-selected",
        "LABEL_EXAMPLE_11":"Exmaple 11:How to work with Checkbox/Radio Button",
        "LABEL_EXAMPLE_12":"Exmaple 12:How to deal with CSS",
        "LABEL_EXAMPLE_13":"Exmaple 13:How to draw a complicated table",
        "LABEL_EXAMPLE_14":"Exmaple 14:How does uku-include work with the 3rd part plugins",
		"LABEL_EXAMPLE_15":"Exmaple 15:New feature! web component",
        "LABEL_EXAMPLE_16":"Exmaple 16:New! How does web component work with the 3rd part plugins",

        "GUIDE_MENU_ITEM_PREPARE":"Preparation",
        "GUIDE_MENU_ITEM_INSTALL":"Installation",
        "GUIDE_MENU_ITEM_CONFIGURATION":"Configuration",
        "GUIDE_MENU_ITEM_NATIVE_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;Native",
        "GUIDE_MENU_ITEM_AMD_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;AMD",
        "GUIDE_MENU_ITEM_CMD_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;CMD",
        "GUIDE_MENU_ITEM_WEBPACK_WAY":"&nbsp;&nbsp;&nbsp;&nbsp;Webpack",

        "GUIDE_MENU_ITEM_TWO_WAY_BINDING":"Two way binding",
        "GUIDE_MENU_ITEM_BIND_TEXT":"Binding with text",
        "GUIDE_MENU_ITEM_BIND_ATTRIBUTE":"Binding with attribute",
        "GUIDE_MENU_ITEM_TWO_BIND_INPUT":"Binding with input",
        "GUIDE_MENU_ITEM_TWO_BIND_EVENT":"Binding with events",
        "GUIDE_MENU_ITEM_TWO_BIND_STYLE":"Binding with styles",
        "GUIDE_MENU_ITEM_TWO_BIND_FUNCTION":"Binding with function",

        "GUIDE_MENU_ITEM_DIRECTIVE":"directive",
        "GUIDE_MENU_ITEM_UKU_TEXT":"uku-text",
        "GUIDE_MENU_ITEM_UKU_REPEAT":"uku-repeat",
        "GUIDE_MENU_ITEM_UKU_INCLUDE":"uku-include",
        "GUIDE_MENU_ITEM_UKU_SELECTED":"uku-selected(1)",
        "GUIDE_MENU_ITEM_UKU_SELECTED2":"uku-selected(2)",

        "GUIDE_MENU_ITEM_API":"Common API",
        "GUIDE_MENU_ITEM_API_REG_CTRL":"uku.registerController()",
        "GUIDE_MENU_ITEM_API_REG_COMP":"uku.registerComponent()",
        "GUIDE_MENU_ITEM_API_INIT":"uku.init()",
        "GUIDE_MENU_ITEM_API_REFRSH":"uku.refresh()",
        "GUIDE_MENU_ITEM_API_ADD_LISTENER":"uku.addListener()",
        "GUIDE_MENU_ITEM_API_DEAL_ELEMENT":"uku.handleElement()",

        "GUIDE_MENU_ITEM_COMP":"Web component",
        "GUIDE_MENU_ITEM_CUSTOM_COMP":"Custom component",
        "GUIDE_MENU_ITEM_NEST_COMP":"Nest components",
        "GUIDE_MENU_ITEM__COMMUNICAT_COMP":"Communicate with components",
        "GUIDE_MENU_ITEM__THIRD_PART_COMP":"How to work with the 3rd part plugins",
        "GUIDE_MENU_ITEM_DYNAMIC_LOAD_COMP":"Load component dynamically",

        "GUIDE_LABEL_INSTALL_UKUJS":"Install Ukujs",
        "GUIDE_TEXT_INSTALL_UKUJS":"There are two way to install Ukujs, recommand to use npm",
        "GUIDE_LABEL_INSTALL_BOWER":"bower install",
        "GUIDE_LABEL_INSTALL_NPM":"npm instll",

        "GUIDE_LABEL_CONFIGURATION":"Configuration of Ukujs",
        "GUIDE_TEXT_CONFIGURATION":"There are three ways(AMD/CMD/Global var) to import Ukujs's library to your project",
        "GUIDE_LABEL_IMPORT_UKUJS":"Import Ukujs's library",
        "GUIDE_LABEL_ADD_UKU_APP":"Add 'uku-application' attribute to the DOM which you want to delegate to Ukujs",
        "GUIDE_LABEL_INIT_UKUJS":"Initialize Ukujs, register Controller (ViewModel)",
        "GUIDE_LABEL_BIND_ATTR":"Bind view with view-model",

        "GUIDE_LABEL_AMD_CONFIG":"Configurate Ukujs in require.config",
        "GUIDE_LABEL_CMD_CONFIG":"Configurate Ukujs in seajs.config",

        "GUIDE_LABEL_BIND_TEXT":"Bind Text",
        "GUIDE_TEXT_BIND_TEXT":"One way is using {{ }} to wrap the view-model's properties , e.g. {{myCtrl.user.username}}, {{myCtrl.a + myCtrl.b + yourCtrl.c}}, {{!myCtrl.isHide}}",
        "GUIDE_TEXT_BIND_TEXT2":"Attention, Ukujs doesn't support like hello, {{myCtrl.username}} which is mixed type, and not support like {{myCtrl.firstName + myCtrl.lastName}} which is expression type <br/>reasons:<br/>1, bussiness logices will be sperate into view-model, it's not friendly to debugger, troubleshooting and unit testing<br/>2,Author is lazy<br/>So I suggest to use view-model to describe a full text expression",
        "GUIDE_TEXT_BIND_TEXT3":"Ukujs starts to support complex expressions from version 1.3.0",
        "GUIDE_LABEL_BIND_ATTR2":"Bind Attribute",
        "GUIDE_TEXT_BIND_ATTR":"Binding attribute is one of the most important function of Ukujs, You just remember one policy 'the prefix uku- append any html native attribues' then the binding made. e.g. uku-src='myCtrl.imageUrl' makes view-model's property myCtrl.imageUrl bind with img's src attribute",
        "GUIDE_TEXT_BIND_ATTR2":"You could try uku-value , uku-style, uku-class... <span style='color:red'>uku- + any native attribues uku- + any native attribues，uku- + any native attribues</span>. then at the next sections, we will work follow this policy",
        "GUIDE_LABEL_BIND_INPUT":"Binding with input",
        "GUIDE_TEXT_BIND_INPUT":"Binding with input is an implement of binding attribute, we use uku-value to implement this function",
        "GUIDE_LI_BIND_INPUT1":"view-model->view: show view-model on the view",
        "GUIDE_LI_BIND_INPUT2":"user behaviour->view: user behaviour affects the view",
        "GUIDE_LI_BIND_INPUT3":"view -> view-model: Update view-mode which binded with view after view changing",
        "GUIDE_TEXT_BIND_INPUT2":"the whole progress of Data Binding",
        "GUIDE_TEXT_BIND_INPUT3":"It's sepcial with checkbox and radio, so Ukujs has to make some extenstion over them, you can learn more at next sections or 'Eample' page",

        "GUIDE_LABEL_BIND_EVENT":"Binding with event",
        "GUIDE_TEXT_BIND_EVENT":"Binding with event is alse an implement of binding attribute, we use uku-onEventType to implement this function, e.g. as we all know, native html using onclick to link handler function, then in Ukujs, you just use uku-onclick to work it, no more extra cost",
        "GUIDE_LABEL_BIND_EVENT2":"About Handler's arguments",
        "GUIDE_TEXT_BIND_EVENT2":"In buttonClickHandler function, the latest arguments is event'object, you needn't to transfer event by yourself (Ukujs will append it automatically), you just focus on the arguments which you transfered, e.g.",

        "GUIDE_LABLE_BIND_STYLE":"Binding with style",
        "GUIDE_TEXT_BIND_STYLE":"Binding with style is alse an implement of binding attribute, we could use uku-style and uku-class to implement it",
        "GUIDE_LABLE_BIND_STYLE2":"uku-style way",
        "GUIDE_TEXT_BIND_STYLE2":"We use json format to define style object, some keys which with '-' should be replaced with camel style, e.g. 'font-style' should change to 'fontStyle'",
        "GUIDE_LABLE_BIND_STYLE3":"uku-class way",
        "GUIDE_TEXT_BIND_STYLE3":"uku-class's usage is same as native className', you just bind a string of callNames(split with space). uku-style and uku-class could help us to control view's sytle easily, includes visible of dom.",
        "GUIDE_LABEL_BIND_FUNCTION":"Bindng with function",
        "GUIDE_TEXT_BIND_FUNCTION":"Ukujs also supports that view-model's function binds with view, e.g. uku-src = 'myCtrl.func()' means img's src attribute is provided by return value of myCtrl.func()",
        "GUIDE_TEXT_BIND_FUNCTION2":"We could set arguments with the binding function, but the type of arguments is only support with String, if you want to work with other types, please defined them in the controller, and using ctrlAlias.attr to make a workaground e.g. uku-value='myCtrl.func(myCtrl.arg)' (We will impore this part at following version)",

        "GUIDE_LABEL_DIRECTIVE_UKU_TEXT":"Specific Attribute (directive) —— uku-text",
        "GUIDE_TEXT_DIRECTIVE_UKU_TEXT":"uku-text is compromise directive, in order to resolve the flash problem when page was loaded but view-model was not ready",
        "GUIDE_TEXT_DIRECTIVE_UKU_TEXT2":"uku-text could replace {{}} function",

        "GUIDE_LABEL_DIRECTIVE_UKU_REPEAT":"Specific Attribute (directive) —— uku-repeat",
        "GUIDE_TEXT_DIRECTIVE_UKU_REPEAT":"Angular's Fans will not strange for ng-repeat, right! uku-repeat was designed reference for ng-repeat's idea, uku-repeat's function is to render a collection. Talk is cheap, show you the code",
        "GUIDE_TEXT_DIRECTIVE_UKU_REPEAT2":"uku-repeat supports nest structure like tree model. please read more at 'Example' page",

        "GUIDE_LABEL_DIRECTIVE_UKU_SELECT":"Specific Attribute (directive) —— uku-selected(1)",
        "GUIDE_TEXT_DIRECTIVE_UKU_SELECT":"uku-selected works with SELECT (dropdown list), it needs to work with uku-data-item. Following example shows how to set the selected item with uku-selected"
                                            +"<span style='color:red;font-weight:bold;'> | </span> to set the key which could unique the selected item. e.g. uku-selected='myCtrl.selectedItem|value'"
                                            +"using the field 'value' to unique the item ( but precondition is you should also set 'value' as OPTION's value"
                                            +"we use uku-value='item.value' to remark)，uku-data-item(only works with OPTION) to express each OPTION's representation, it could express the whole object of item, or one field of item"
                                            +"e.g. uku-data-item='item.name' then the selectedItem is just item'name not the whole object of item",
        "GUIDE_TEXT_DIRECTIVE_UKU_SELECT2":"uku-selected alse could be used in the RADIO button, we will introduce it at next section",

        "GUIDE_LABEL2_DIRECTIVE_UKU_SELECT":"Specific Attribute (directive) —— uku-selected(2)",
        "GUIDE_TEXT2_DIRECTIVE_UKU_SELECT":"uku-selected not only could be used with SELECT, but alse with RIADO button, if more than one radio buttons bind with same model by uku-selected, then the selected radio item will get the value of view-model, vice versa",

        "GUIDE_LABEL_API_FUNCTION":"Function:",
        "GUIDE_LABEL_API_ARGUMENT":"Arguments",

        "GUIDE_TEXT_API_REG_CTRL":"registerController() to register a view-model (in order to be friendly with Angular's fans we decide to use the word 'Controller' as a view-model)",
        "GUIDE_TEXT_API_REG_CTRL2":"We use MyController's instance new MyController() and its alias myCtrl to register a Controller(view-model), then you could using myCtrl.message to relate view which you want to bind (just like following example)",

        "GUIDE_TEXT_API_REG_COMP":"registerComponent() to register a 'Web Component', then you could involve your component everywhere with custom tags",
        "GUIDE_TEXT_API_REG_COMP2":"mydiv is component's custom tagName, then could using <mydiv></mydiv> to involve it at following example",
        "GUIDE_TEXT_API_REG_COMP3":"How to define a Web Component will be introduced at 'Web Component' section",

        "GUIDE_TEXT_API_INIT":"init() to initialzie Ukujs, bootstrap the whole application. We recommend to call init() after loading dom tree, e.g. write <script></script> after <body></body>, or using requirejs domReady's callback  to call init()",
        "GUIDE_TEXT_API_INIT2":"Carefully, make sure call init() after all controllers and components being registered",

        "GUIDE_TEXT_API_REFRESH":"controllerAlias is the alias of the Controller which you want to refresh(duty checking)"
                                +"controllerAlias could be a string, e.g. uku.refresh('myCtrl')"
                                +"alse be an Array, e.g. uku.refresh(['myCtrl','myCtrl2'])"
                                +"if not set, it will refresh all Controllers, e.g. uku.refresh() (refresh all Controllers may affect performance, please carefully)",
        "GUIDE_TEXT_API_REFRESH2":"Which scenario we need using uku.refresh(): When view-model has been changed, but not caused by Ukujs ecosyetem,"
                                +"e.g. ajax response changed view-model, "
                                +"e.g. setInterval handler changed view-model, "
                                +"e.g. view doesn't update as your expect, "
                                +"you could call uku.refresh() to sync view and view-model manually",
        "GUIDE_TEXT_API_ADD_LISTENER":"Currently, Ukujs' native events are Ukulele.INITIALIZED, Ukulele.HANDLE_ELEMENT_COMPLETED and Ukulele.REFRESH three types, they will be emitted when ukujs finished initialization, handleElement() function finished executing and after each duty checking finished",

        "GUIDE_TEXT_API_DEAL_WITH_ELE":"Ukujs is using tags to define two-way binding, so when new dom needs to be added into the document tree, we should call handelElement() to scan, analyse the document tree again and maintain the relationship of view and view-model"
                                +"<br/>call handleElement() will trigger Ukulele.HANDLE_ELEMENT_COMPLETED event",
    }
};
