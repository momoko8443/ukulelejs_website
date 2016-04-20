var locale = {
    "zh_CN":{
        "TAB_HOME":"主页",
        "TAB_GUIDE":"教学",
        "TAB_EXAMPLE":"示例",
        "TAB_PERFORMANCE":"性能",
        "TAB_API":"API(英文)",
        "TAB_ABOUT":"关于作者(中文)",
        "TITLE_UKULELEJS":"一个双向数据绑定工具",
        "TITLE_REASON":"选择Ukujs的理由",
        "PROS_1":"体积小 gizp≈7k，min≈23k，dev≈60k",
        "PROS_2":"兼容AMD/CMD",
        "PROS_3":"性能还算不错",
        "PROS_4":"学习成本非常低",
        "TOOL_TIPS_UKU_TEXT":"uku-text是ukujs中特有的属性，它用来代替{{xxx}}的写法，引入uku-text功能是为了方式初始化时花括号的闪现带来的不佳用户体验体验",
        "TOOL_TIPS_UKU_REPEAT":"uku-repeat是ukujs中特有的属性，它用来遍历渲染一组集合数据，如果在子dom中想调用外围controller的资源，请使用parent.ctrlAlias.xxx的方式",
        "TOOL_TIPS_UKU_REFRESH":"你可以使用 uku.refresh()，方法来强制同步视图和与之绑定的模型，refresh('ctrlAlias')同步指定的controller， refresh(['ctrlAliasA','ctrlAliasB'])同步多个controller，refresh()同步所有controller",
        "TOOL_TIPS_UKU_SELECTED":"uku-selected='ex10Ctrl.selectedOption|value' 设置SELECT控件的默认选中项目|右边为使用对象中那个字段作为value来定位具体OPTION，uku-data-item 用来设置与OPTION绑定的对象",
        "TOOL_TIPS_UKU_SELECTED_2":"radio button中可以设置uku-selected='some value'来决定某个button的选中",

        "LABEL_WHAT_IS_UKUJS":"什么是Ukulelejs(以下简称Ukujs)",
        "TEXT_WHAT_IS_UKUJS":"Ukulelejs是一个轻量级的双向绑定工具(注意它不是一个框架)，你可以把它暂时理解为超易学的精简版的Angular",
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
        "GUIDE_TEXT_BIND_TEXT":"一种是使用“{{ }}”双层花括号将需要显示的模型属性括起来，比如{{myCtrl.user.username}}",
        "GUIDE_TEXT_BIND_TEXT2":"注意，目前Ukujs不支持 hello, {{myCtrl.username}}这种动静混排的写法，同时也不支持{{myCtrl.firstName + myCtrl.lastName}}的表达式写法<br/>理由有2点:<br/>1,容易把业务相关的逻辑散落到view的各个角落，不利于日后的维护和排错，不利于单元测试<br/>2,作者很懒<br/>因此建议把页面上要显示的文本都使用模型来维护，即使里面会有一些静态的值。不要为了贪图一时爽快，最终有些债以后还是要还的。切记切记（市面上其它主流mvvm框架即使提供了类似偷懒功能我也不推荐你去使用它）",
        "GUIDE_LABEL_BIND_ATTR2":"绑定属性",
        "GUIDE_TEXT_BIND_ATTR":"绑定属性可以说是ukujs最重要的功能之一，你只要记住一条规则 “uku-”这个前缀加上任意的html标签上的属性即可生成属性的绑定。例如 uku-src='myCtrl.imageUrl' 即可将img标签的src属性与模型上的 imageUrl变量进行绑定",
        "GUIDE_TEXT_BIND_ATTR2":"你还可以尝试uku-value , uku-style, uku-class... <span style='color:red'>uku-+任何原生的属性，uku-+任何原生的属性，uku-+任何原生的属性</span>（重说三）。在接下去的几个关于双向绑定的小节其实都是围绕这条规则展开的。",
        "GUIDE_LABEL_BIND_INPUT":"绑定输入控件",
        "GUIDE_TEXT_BIND_INPUT":"绑定输入控件input，其实是对上个小节，绑定属性的一种实现，我们使用 uku-value来实现这个功能，从而完成",
        "GUIDE_LI_BIND_INPUT1":"model->view: 模型在视图上显示",
        "GUIDE_LI_BIND_INPUT2":"user behaviour->view: 用户的行为影响了视图改变",
        "GUIDE_LI_BIND_INPUT3":"view -> model: 视图改变后更新了与之绑定的模型",
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
        "GUIDE_TEXT_DIRECTIVE_UKU_REPEAT":"使用过Angular的朋友因该对ng-repeat不会陌生，不错uku-repeat就是借（chao）鉴（xi）了ng-repeat的用法，uku-repeat的作用将模型中一个集合类型属性进行循环渲染。无需躲言，光看示例就知道怎么用了",
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

    }
};
