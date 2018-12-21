(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{265:function(t,s,e){"use strict";e.r(s);var r=e(0),n=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("在这部分将整理 SQL 语句的使用")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("SQL 中的连接查询有四种方式，它们之间其实并没有太大区别，仅仅是查询出来的结果有所不同。")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("例如我们有两张表：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("我们使用 inner join 对两张表进行连接查询，sql如下：")]),t._v(" "),t._m(7),e("p",[t._v("查询结果集：")]),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("此种连接方式 Orders 表中 Id_P 字段在 Persons 表中找不到匹配的，则不会列出来。")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("我们使用 left join 对两张表进行连接查询，sql如下：")]),t._v(" "),t._m(10),e("p",[t._v("查询结果如下：")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("可以看到，左表（Persons表）中 LastName 为 Bush 的行的 Id_P 字段在右表（Orders表）中没有匹配，但查询结果仍然保留该行。")]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("我们使用right join对两张表进行连接查询，sql如下：")]),t._v(" "),t._m(13),e("p",[t._v("查询结果如下：")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("Orders 表中最后一条记录 Id_P 字段值为 65，在左表中没有记录与之匹配，但依然保留。")]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("我们使用 full join 对两张表进行连接查询，sql如下：")]),t._v(" "),t._m(16),e("p",[t._v("查询结果如下：")]),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("查询结果是 left join 和 right join 的并集。")]),t._v(" "),e("p",[t._v("这些连接查询的区别也仅此而已。")]),t._v(" "),e("p",[t._v("参考来源：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/yanglang/p/8780722.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL中INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN区别 - 杨浪 - 博客园"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sql基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql基础","aria-hidden":"true"}},[this._v("#")]),this._v(" SQL基础")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-inner-join、left-join、right-join、full-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-inner-join、left-join、right-join、full-join","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("inner join（内连接）")]),this._v(" "),s("li",[this._v("left join（左连接）")]),this._v(" "),s("li",[this._v("right join（右连接）")]),this._v(" "),s("li",[this._v("full join（全连接）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"assets/20150603222647340-2.png",alt:"20150603222647340"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Orders")]),this._v(" 表通过外键 "),s("strong",[this._v("Id_P")]),this._v(" 和 "),s("strong",[this._v("Persons")]),this._v(" 表进行关联。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-inner-join，在两张表进行连接查询时，只保留两张表中完全匹配的结果集。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-inner-join，在两张表进行连接查询时，只保留两张表中完全匹配的结果集。","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. inner join，在两张表进行连接查询时，只保留两张表中完全匹配的结果集。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo\nFROM Persons\nINNER JOIN Orders\nON Persons.Id_P=Orders.Id_P\nORDER BY Persons.LastName\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"assets/20150603222827804.png",alt:"20150603222827804"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-left-join，在两张表进行连接查询时，会返回左表所有的行，即使在右表中没有匹配的记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-left-join，在两张表进行连接查询时，会返回左表所有的行，即使在右表中没有匹配的记录","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. left join，在两张表进行连接查询时，会返回左表所有的行，即使在右表中没有匹配的记录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo\nFROM Persons\nLEFT JOIN Orders\nON Persons.Id_P=Orders.Id_P\nORDER BY Persons.LastName\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"assets/20150603223638605.png",alt:"20150603223638605"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-right-join，在两张表进行连接查询时，会返回右表所有的行，即使在左表中没有匹配的记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-right-join，在两张表进行连接查询时，会返回右表所有的行，即使在左表中没有匹配的记录","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. right join，在两张表进行连接查询时，会返回右表所有的行，即使在左表中没有匹配的记录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo\nFROM Persons\nRIGHT JOIN Orders\nON Persons.Id_P=Orders.Id_P\nORDER BY Persons.LastName\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"assets/20150603224352995.png",alt:"20150603224352995"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-full-join，在两张表进行连接查询时，返回左表和右表中所有没有匹配的行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-full-join，在两张表进行连接查询时，返回左表和右表中所有没有匹配的行","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. full join，在两张表进行连接查询时，返回左表和右表中所有没有匹配的行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo\nFROM Persons\nFULL JOIN Orders\nON Persons.Id_P=Orders.Id_P\nORDER BY Persons.LastName\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"assets/20150603224604636.png",alt:"20150603224604636"}})])}],!1,null,null,null);n.options.__file="SQL.md";s.default=n.exports}}]);