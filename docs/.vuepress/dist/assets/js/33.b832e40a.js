(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{194:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"核心概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),n("p",[t._v("在使用 Goldfish 编码时，有三个核心概念："),n("strong",[t._v("setup 函数")]),t._v("、"),n("strong",[t._v("use 函数")]),t._v("、"),n("strong",[t._v("插件")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"setup-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-函数"}},[t._v("#")]),t._v(" setup 函数")]),t._v(" "),n("p",[n("strong",[t._v("setup 函数")]),t._v("提供 "),n("strong",[t._v("use 函数")]),t._v("的同步执行环境，同时返回小程序 App、Page、Component 的配置对象。")]),t._v(" "),n("p",[t._v("有三个 "),n("strong",[t._v("setup 函数")]),t._v("：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("setupApp")]),t._v(" 构造"),n("a",{attrs:{href:"https://docs.alipay.com/mini/framework/app-detail",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序 App 配置对象"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("setupPage")]),t._v(" 构造"),n("a",{attrs:{href:"https://docs.alipay.com/mini/framework/page-detail",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序 Page 配置对象"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("setupComponent")]),t._v(" 构造"),n("a",{attrs:{href:"https://docs.alipay.com/mini/framework/component_object",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序 Component 配置对象"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("code",[t._v("setupApp()")]),t._v(" 的返回值会被转换为小程序全局数据。"),n("code",[t._v("setupPage()")]),t._v(" 和 "),n("code",[t._v("setupComponent()")]),t._v(" 可以同时返回数据属性和方法属性，数据属性可以直接在对应模板中访问到，方法属性在模板中可作为事件回调方法使用。")]),t._v(" "),n("h2",{attrs:{id:"use-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-函数"}},[t._v("#")]),t._v(" use 函数")]),t._v(" "),n("p",[n("strong",[t._v("use 函数")]),t._v("只能同步地在 "),n("strong",[t._v("setup 函数")]),t._v("中执行，分为两大类："),n("strong",[t._v("基础 use 函数")]),t._v("和"),n("strong",[t._v("扩展 use 函数")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("基础 use 函数")]),t._v("是最底层、最原始的 "),n("strong",[t._v("use 函数")]),t._v("，比如 "),n("code",[t._v("useState()")]),t._v("、"),n("code",[t._v("useComputed()")]),t._v("、"),n("code",[t._v("usePageLifeCycle()")]),t._v(" 等都是属于"),n("strong",[t._v("基础 use 函数")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("扩展 use 函数")]),t._v("是在"),n("strong",[t._v("基础 use 函数")]),t._v("之上扩展出来的 "),n("strong",[t._v("use 函数")]),t._v("，比如 "),n("code",[t._v("useDevice()")]),t._v(" 等。")]),t._v(" "),n("p",[n("strong",[t._v("use 函数")]),t._v("就像一个个小的功能模块，它们在 "),n("strong",[t._v("setup 函数")]),t._v("中通过相互组合实现最终的业务功能。")]),t._v(" "),n("p",[t._v("有的 "),n("strong",[t._v("use 函数")]),t._v("会对 "),n("strong",[t._v("setup 函数")]),t._v("环境有要求，比如 "),n("code",[t._v("usePageLifeCycle()")]),t._v(" 不能在 "),n("code",[t._v("setupApp()")]),t._v(" 中使用，如果不小心使用了，Goldfish 会直接抛出异常。")]),t._v(" "),n("h2",{attrs:{id:"插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),n("p",[t._v("Goldfish 的插件主要是“非常独立的功能模块”或者“容器兼容相关的模块”或者“接入第三方平台”，比如 JSBridge、数据请求、业务埋点等等。")]),t._v(" "),n("p",[t._v("Goldfish 已经内置了六个插件：")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/api/plugins.html#jsbridge-插件"}},[t._v("JSBridge 插件")]),t._v("；")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/api/plugins.html#feedback-交互反馈插件"}},[t._v("交互反馈插件")]),t._v("；")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/api/plugins.html#log-日志插件"}},[t._v("日志插件")]),t._v("；")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/api/plugins.html#requester-数据请求插件"}},[t._v("数据请求插件")]),t._v("；")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/api/plugins.html#route-应用内路由插件"}},[t._v("应用内路由插件")]),t._v("；")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/api/plugins.html#trace-业务埋点插件"}},[t._v("业务埋点插件")]),t._v("。")],1)]),t._v(" "),n("p",[t._v("当然，也可以扩展自己需要的插件。自定义插件必须要继承自内置插件或者"),n("router-link",{attrs:{to:"/api/plugins.html#插件基类-plugin"}},[t._v("插件基类 Plugin")]),t._v("，然后传入 "),n("code",[t._v("setupApp()")]),t._v("：")],1),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setupApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyCustomPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);