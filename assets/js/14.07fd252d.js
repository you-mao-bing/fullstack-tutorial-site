(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{234:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"java序列化机制serialize接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java序列化机制serialize接口","aria-hidden":"true"}},[a._v("#")]),a._v(" java序列化机制Serialize接口")]),a._v(" "),r("h2",{attrs:{id:"java本身的序列化机制存在的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java本身的序列化机制存在的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" java本身的序列化机制存在的问题")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("序列化数据结果比较大、传输效率比较低")])]),a._v(" "),r("li",[r("p",[a._v("不能跨语言对接")])])]),a._v(" "),r("p",[a._v("以至于在后来的很长一段时间，基于XML格式编码的对象序列化机制成为了主流，一方面解决了多语言兼容问题，另一方面比二进制的序列化方式更容易理解。以至于基于XML的SOAP协议及对应的WebService框架在很长一段时间内成为各个主流开发语言的必备的技术。")]),a._v(" "),r("p",[a._v("再到后来，基于JSON的简单文本格式编码的HTTP REST接口又基本上取代了复杂的Web Service接口，成为分布式架构中远程通信的首要选择。但是JSON序列化存储占用的空间大、性能低等问题，同时移动客户端应用需要更高效的传输数据来提升用户体验。在这种情况下与语言无关并且搞笑的二进制编码协议就成为了大家追求的热点技术之一。首先诞生的一个开源的二进制序列化框架-MessagePack。它比google的Protocol Buffers出现得还要早")]),a._v(" "),r("p",[a._v("恰当的序列化协议不仅可以提高系统的通用性、强壮型、安全性、优化性能。同时还能让系统更加易于调试和扩展")]),a._v(" "),r("h2",{attrs:{id:"序列化和反序列化的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#序列化和反序列化的概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 序列化和反序列化的概念")]),a._v(" "),r("p",[a._v("把对象转化为字节序列的过程称之为对象的序列化")]),a._v(" "),r("p",[a._v("反之，称之为反序列化")]),a._v(" "),r("h1",{attrs:{id:"怎么去实现一个序列化操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么去实现一个序列化操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 怎么去实现一个序列化操作")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("实现Serializable接口")])]),a._v(" "),r("li",[r("p",[a._v("ObjectInputStream  : 表示读取指定的字节数据转换成对象")])]),a._v(" "),r("li",[r("p",[a._v("ObjectOutputStream ：")])])]),a._v(" "),r("h1",{attrs:{id:"科普小知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#科普小知识","aria-hidden":"true"}},[a._v("#")]),a._v(" 科普小知识")]),a._v(" "),r("h2",{attrs:{id:"serialversionuid的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serialversionuid的作用","aria-hidden":"true"}},[a._v("#")]),a._v(" serialVersionUID的作用")]),a._v(" "),r("p",[a._v("文件流中的class和classpath中的class，也就是修改过后的class，不兼容了，处于安全机制考虑，程序抛出了错误，并且拒绝载入。从错误结果来看，如果没有为指定的class配置serialVersionUID，那么java编译器会自动给这个class进行一个摘要算法，类似于指纹算法，只要这个文件有任何改动，得到的UID就会截然不同的，可以保证在这么多类中，这个编号是唯一的。所以，由于没有显指定 serialVersionUID，编译器又为我们生成了一个UID，当然和前面保存在文件中的那个不会一样了，于是就出现了2个序列化版本号不一致的错误。因此，只要我们自己指定了serialVersionUID，就可以在序列化后，去添加一个字段，或者方法，而不会影响到后期的还原，还原后的对象照样可以使用，而且还多了方法或者属性可以用。")]),a._v(" "),r("h2",{attrs:{id:"静态变量的序列化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#静态变量的序列化","aria-hidden":"true"}},[a._v("#")]),a._v(" 静态变量的序列化")]),a._v(" "),r("p",[a._v("序列化并不保存静态变量的状态（例如序列号之前修改了静态变量，则会被序列化）。")]),a._v(" "),r("h2",{attrs:{id:"transient关键字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transient关键字","aria-hidden":"true"}},[a._v("#")]),a._v(" Transient关键字")]),a._v(" "),r("p",[a._v("transient关键字表示指定属性不参与序列化")]),a._v(" "),r("h2",{attrs:{id:"父子类问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#父子类问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 父子类问题")]),a._v(" "),r("p",[a._v("如果父类没有实现序列化，而子类实现列序列化。那么父类中的成员没办法做序列化操作")]),a._v(" "),r("h2",{attrs:{id:"序列化的存储规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#序列化的存储规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 序列化的存储规则")]),a._v(" "),r("p",[a._v("对同一个对象进行多次写入，打印出的第一次存储结果和第二次存储结果，只多了5个字节的引用关系。")]),a._v(" "),r("p",[a._v("并不会导致文件累加")]),a._v(" "),r("h1",{attrs:{id:"序列化实现深度克隆"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#序列化实现深度克隆","aria-hidden":"true"}},[a._v("#")]),a._v(" 序列化实现深度克隆")]),a._v(" "),r("p",[r("strong",[a._v("浅拷贝（浅复制、浅克隆）")]),a._v("：被复制对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用仍然指向原来的对象。换言之，浅拷贝仅仅复制所拷贝的对象，而不复制它所引用的对象。")]),a._v(" "),r("p",[r("strong",[a._v("深拷贝（深复制、深克隆）")]),a._v("：被复制对象的所有变量都含有与原来的对象相同的值，除去那些引用其他对象的变量。")]),a._v(" "),r("p",[a._v("那些引用其他对象的变量将指向被复制过的新对象，而不再是原有的那些被引用的对象。")]),a._v(" "),r("p",[a._v("换言之，深拷贝把要复制的对象所引用的对象都复制了一遍")]),a._v(" "),r("h1",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("在java中，只要一个类实现了java.io.Serializable接口，那么它就可以被序列化")])]),a._v(" "),r("li",[r("p",[a._v("通过ObjectOutputStream和ObjectInputStream对对象进行序列化合反序列化操作")])]),a._v(" "),r("li",[r("p",[a._v("对象是否允许被反序列化，不仅仅是取决于对象的代码是否一致，同时还有一个重要的因素（UID）")])]),a._v(" "),r("li",[r("p",[a._v("序列化不保存静态变量")])]),a._v(" "),r("li",[r("p",[a._v("要想父类对象也参与序列化操作，那么必须要让父类也实现Serializable接口")])]),a._v(" "),r("li",[r("p",[a._v("Transient关键字，主要是控制变量是否能够被序列化。如果没有被序列化的成员变量反序列化后，会被设置成初始值，比如String -> null")])]),a._v(" "),r("li",[r("p",[a._v("通过序列化操作实现深度克隆")])])]),a._v(" "),r("h1",{attrs:{id:"主流的序列化技术有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主流的序列化技术有哪些","aria-hidden":"true"}},[a._v("#")]),a._v(" 主流的序列化技术有哪些")]),a._v(" "),r("p",[a._v("JSON/Hessian(2) /xml/protobuf/kryo/MsgPack/FST/thrift/protostuff/Avro")])])}],!1,null,null,null);s.options.__file="03 分布式通信-序列化.md";t.default=s.exports}}]);