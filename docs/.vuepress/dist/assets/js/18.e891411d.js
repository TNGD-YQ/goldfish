(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{205:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"全局插件管理模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局插件管理模块"}},[s._v("#")]),s._v(" 全局插件管理模块")]),s._v(" "),a("p",[s._v("单独的全局插件管理模块。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[a("strong",[s._v("注意：")])]),s._v(" "),a("p",[s._v("主要用于已存项目，新项目不要使用。")])]),s._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[s._v("#")]),s._v(" init()")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("说明：")])]),s._v(" "),a("p",[s._v("生命周期方法，初始化全局插件管理模块。")])])]),s._v(" "),a("h2",{attrs:{id:"destroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}},[s._v("#")]),s._v(" destroy()")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("说明：")])]),s._v(" "),a("p",[s._v("生命周期方法，销毁全局插件管理模块。")])])]),s._v(" "),a("h2",{attrs:{id:"register-pluginclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-pluginclass"}},[s._v("#")]),s._v(" register(PluginClass)")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("{constructor} PluginClass")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("返回值：")]),a("code",[s._v("{Promise<void>}")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("说明：")])]),s._v(" "),a("p",[s._v("注册插件，当返回的 Promise 对象 resolved 之后，则说明插件已被成功注册。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("示例：")])]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" JSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pluginHub "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@alipay/goldfish'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\npluginHub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"get-pluginclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-pluginclass"}},[s._v("#")]),s._v(" get(PluginClass)")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("{constructor} PluginClass")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("返回值：")]),a("code",[s._v("{Promise<Plugin>}")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("说明：")])]),s._v(" "),a("p",[s._v("获取已注册的插件。如果没找到指定插件，该方法会抛出异常。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("示例：")])]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" pluginHub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" JSBridge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@alipay/goldfish'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\npluginHub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("bridgePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do something.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);