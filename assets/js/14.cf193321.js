(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{448:function(s,t,a){s.exports=a.p+"assets/img/configfile1.0a1c301e.png"},500:function(s,t,a){"use strict";a.r(t);var e=a(35),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),e("h2",{attrs:{id:"格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[s._v("#")]),s._v(" 格式")]),s._v(" "),e("p",[s._v("Clash 配置文件格式为"),e("a",{attrs:{href:""}},[s._v("YAML")]),s._v("，具体写法参考：https://github.com/Dreamacro/clash/wiki/configuration")]),s._v(" "),e("p",[s._v("CFW 启动的过程会使用到两个配置文件，分别是：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Home Directory/config.yaml")])]),s._v(" "),e("li",[e("code",[s._v("Home Directory/profiles/xxxx.yaml")])])]),s._v(" "),e("h3",{attrs:{id:"config-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-yaml"}},[s._v("#")]),s._v(" config.yaml")]),s._v(" "),e("p",[s._v("这是 Clash 的启动文件，位于"),e("code",[s._v("Home Directory")]),s._v("中，如果此文件有错，则 Clash 核心将无法启动，一般会出现如下界面：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(448),alt:""}})]),s._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[s._v("DANGER")]),s._v(" "),e("p",[s._v("此文件关乎 Clash 核心是否能正常启动，如非必要，请勿更改")])]),s._v(" "),e("h3",{attrs:{id:"profiles-xxxx-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#profiles-xxxx-yaml"}},[s._v("#")]),s._v(" Profiles/xxxx.yaml")]),s._v(" "),e("p",[s._v("Profiles 文件夹下文件均由用户导入，CFW 统一生成的，一般命名为时间戳")]),s._v(" "),e("p",[s._v("这些文件可以不完整，通常只需要有："),e("code",[s._v("proxies/proxy-groups/rules")]),s._v("三个字段组成即可：")]),s._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("proxies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Shadowsocks\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" socks5\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("proxy-groups")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Proxy\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" select\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("proxies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Shadowsocks\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MATCH,DIRECT"')]),s._v("\n")])])]),e("p",[s._v("除此外，还可以添加"),e("code",[s._v("dns/hosts")]),s._v("字段，但在使用 CFW 时不建议添加")]),s._v(" "),e("h2",{attrs:{id:"加载过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载过程"}},[s._v("#")]),s._v(" 加载过程")]),s._v(" "),e("p",[s._v("CFW 启动流程如下：")]),s._v(" "),e("ol",[e("li",[s._v("使用基础配置文件 config.yaml 启动 Clash 核心")]),s._v(" "),e("li",[s._v("根据用户上次使用的配置文件（Profiles/xxxxx.yml）进行恢复")]),s._v(" "),e("li",[s._v("恢复用户上次操作的策略情况")])]),s._v(" "),e("h3",{attrs:{id:"解读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解读"}},[s._v("#")]),s._v(" 解读")]),s._v(" "),e("p",[s._v("步骤 1 完成后，Clash 会按照 config.yaml 设置启动")]),s._v(" "),e("p",[s._v("步骤 2 完成后，用户配置文件里的"),e("code",[s._v("proxies/proxy-providers/proxy-groups/rule-providers/rules/dns")]),s._v("这几个字段的内容会被替换到 Clash 里面，除了上面值几个字段，其他的内容均不会替换（这就是 Profiles 里配置文件可以不完整的原因）")]),s._v(" "),e("h3",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),e("p",[e("strong",[s._v("之所以不进行全替换，是因为每一个配置文件所设定的端口号可能是不一样的，这样每次切换配置文件后，需要重新设置系统代理以及其他软件的代理端口，这显然太麻烦")])]),s._v(" "),e("p",[s._v("所以采用上面的方案，使得用户配置文件以 Plugin 的方式加载\n如果需要修改端口号，只需要在 General 界面点击 Port 右侧的端口号即可更改")])])}),[],!1,null,null,null);t.default=r.exports}}]);