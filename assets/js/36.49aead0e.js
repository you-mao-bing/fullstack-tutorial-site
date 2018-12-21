(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{264:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("这里将持续整理一些 Redis 核心笔记")]),e._v(" "),s("p",[e._v("中文社区："),s("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis.cn"),s("OutboundLink")],1)]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("单线程为什么这么快？")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("单线程Redis注意事项")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("特性")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("缓存系统")]),e._v(" "),s("p",[e._v("排行版")]),e._v(" "),s("p",[e._v("计数器")]),e._v(" "),s("p",[e._v("社交网络")]),e._v(" "),s("p",[e._v("消息队列系统")]),e._v(" "),s("p",[e._v("实时系统")]),e._v(" "),e._m(7),e._v(" "),e._m(8),s("br"),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),s("p",[e._v("书中提到一个有趣的概念，批量操作mget可以提供效率节省时间")]),e._v(" "),s("p",[e._v("逐条 get/se t的时间消耗公式：")]),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),s("p",[e._v("HSET 不支持创建一次性创建多field")]),e._v(" "),e._m(38),e._m(39),e._v(" "),e._m(40),s("p",[e._v("HGET 不支持一次获取多个field")]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._m(43),e._v(" "),e._m(44),e._m(45),e._v(" "),e._m(46),e._m(47),e._v(" "),e._m(48),e._m(49),e._v(" "),e._m(50),e._m(51),e._v(" "),e._m(52),e._m(53),e._v(" "),e._m(54),e._m(55),e._v(" "),e._m(56),e._v(" "),e._m(57),e._m(58),e._v(" "),e._m(59),e._v(" "),e._m(60),s("p",[e._v("参考资料：")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://redislabs.com/ebook/part-1-getting-started/chapter-1-getting-to-know-redis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chapter 1: Getting to know Redis | Redis Labs"),s("OutboundLink")],1)])]),e._v(" "),e._m(61),e._v(" "),e._m(62),e._v(" "),e._m(63),e._v(" "),e._m(64),e._m(65),e._v(" "),s("p",[e._v("Redis 持久化之RDB和AOF - ITDragon龙 - 博客园\nhttps://www.cnblogs.com/itdragon/p/7906481.html")]),e._v(" "),e._m(66),e._v(" "),e._m(67),e._v(" "),e._m(68),e._v(" "),e._m(69)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"一、redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、redis","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、Redis")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 简介")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("纯内存")]),this._v(" "),t("li",[this._v("非阻塞IO")]),this._v(" "),t("li",[this._v("避免线程切换和竞争消耗")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v("一次只运行一条命令")])]),this._v(" "),t("li",[t("p",[this._v("拒绝长（慢）命令，例如：keys、flushall、flushdb、slow lua script、mutil/exec、operate big value(collection)")])]),this._v(" "),t("li",[t("p",[this._v("Redis其实不是单线程，fysnc file descriptor进行持久化")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("速度快")]),e._v(" "),s("li",[e._v("持久化")]),e._v(" "),s("li",[e._v("多钟数据结构")]),e._v(" "),s("li",[e._v("支持多种编程语言")]),e._v(" "),s("li",[e._v("功能丰富")]),e._v(" "),s("li",[e._v("简单")]),e._v(" "),s("li",[e._v("主从复制")]),e._v(" "),s("li",[e._v("高可用，分布式")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_2-应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 应用场景")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_3-数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 数据类型")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"pics/redis-data-structure-types.jpeg",width:"650"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("结构类型")]),e._v(" "),s("th",[e._v("结构存储的值")]),e._v(" "),s("th",[e._v("结构的读写能力")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("STRING")]),e._v(" "),s("td",[e._v("可以是字符串、整数或者浮点数")]),e._v(" "),s("td",[e._v("对整个字符串或者字符串的其中一部分执行操作"),s("br"),e._v("对整数和浮点数执行自增或自减操作")])]),e._v(" "),s("tr",[s("td",[e._v("LIST")]),e._v(" "),s("td",[e._v("一个链表，链表上的每个节点都包含了一个字符串")]),e._v(" "),s("td",[e._v("从两端压入或者弹出元素 "),s("br"),e._v("对单个或者多个元素"),s("br"),e._v("进行修剪，只保留一个范围内的元素")])]),e._v(" "),s("tr",[s("td",[e._v("SET")]),e._v(" "),s("td",[e._v("包含字符串的无序收集器（unordered collection），并且被包含的每个字符串都是独一无二、各不相同的")]),e._v(" "),s("td",[e._v("添加、获取、移除单个元素"),s("br"),e._v("检查一个元素是否存在于集合中"),s("br"),e._v("计算交集、并集、差集"),s("br"),e._v("从集合里面随机获取元素")])]),e._v(" "),s("tr",[s("td",[e._v("HAST")]),e._v(" "),s("td",[e._v("包含键值对的无序散列表")]),e._v(" "),s("td",[e._v("添加、获取、移除单个键值对"),s("br"),e._v("获取所有键值对"),s("br"),e._v("检查某个键是否存在")])]),e._v(" "),s("tr",[s("td",[e._v("ZSET")]),e._v(" "),s("td",[e._v("字符串成员（member）与浮点数分值（score）之间的有序映射，元素的排列顺序由分值的大小决定")]),e._v(" "),s("td",[e._v("添加、获取、删除元素"),s("br"),e._v("根据分值范围或者成员来获取元素"),s("br"),e._v("计算一个键的排名")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[this._v("#")]),this._v(" STRING")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"assets/redis-string.png",width:"450"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("设置语法")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("set key value [EX seconds] [PX ms] [nx|xx]\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("key: 键名")]),e._v(" "),s("li",[e._v("value: 键值")]),e._v(" "),s("li",[e._v("ex seconds: 键秒级过期时间")]),e._v(" "),s("li",[e._v("ex ms: 键毫秒及过期时间")]),e._v(" "),s("li",[e._v("nx: 键不存在才能设置，setnx和nx选项作用一样，用于添加，分布式锁的实现")]),e._v(" "),s("li",[e._v("xx: 键存在才能设置，setxx和xx选项作用一样，用于更新")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("常用命令")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-redis extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('> set hello world\nOK\n> get hello\n"world"\n> del hello\n(integer) 1\n> get hello\n(nil)\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("n次get/set时间 = n次网络时间 + n次命令时间\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("批量get/set的时间消耗公式： "),t("code",[this._v("n次get/set时间 = 1次网络时间 + n次命令时间")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("合理的使用批量操作可以提高Redis性能，但是注意不要量太大，"),t("strong",[this._v("如果过量的话可能会导致Redis阻塞")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("时间复杂度")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("set: O(1)")]),e._v(" "),s("li",[e._v("get: O(1)")]),e._v(" "),s("li",[e._v("del: O(k)，k为键的个数")]),e._v(" "),s("li",[e._v("mget: O(k)，k为键的个数")]),e._v(" "),s("li",[e._v("mset: O(k)，k为键的个数")]),e._v(" "),s("li",[e._v("append: O(1)")]),e._v(" "),s("li",[e._v("str: O(1)")]),e._v(" "),s("li",[e._v("getrange: O(n), n为字符串的长度")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("内部编码")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("int: 8字节长整型")]),this._v(" "),t("li",[this._v("embstr: 小于39字节值")]),this._v(" "),t("li",[this._v("raw: 大于39字节的值")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("典型场景")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("缓存")]),this._v(" "),t("li",[this._v("计算器")]),this._v(" "),t("li",[this._v("分布式锁")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("场景")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("缓存")]),this._v(" "),t("li",[this._v("计算器")]),this._v(" "),t("li",[this._v("分布式锁")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list","aria-hidden":"true"}},[this._v("#")]),this._v(" LIST")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"assets/1536026733016.png",width:"450"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('> rpush list-key item\n(integer) 1\n> rpush list-key item2\n(integer) 2\n> rpush list-key item\n(integer) 3\n> lrange list-key 0 -1\n1) "item"\n2) "item2"\n3) "item"\n> lindex list-key 1\n"item2"\n> lpop list-key\n"item"\n> lrange list-key 0 -1\n1) "item2"\n2) "item"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[this._v("#")]),this._v(" SET")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"assets/1536026799672.png",width:"450"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('> sadd set-key item\n(integer) 1\n> sadd set-key item2\n(integer) 1\n> sadd set-key item3\n(integer) 1\n> sadd set-key item\n(integer) 0\n> smembers set-key\n1) "item"\n2) "item2"\n3) "item3"\n> sismember set-key item4\n(integer) 0\n> sismember set-key item\n(integer) 1\n> srem set-key item2\n(integer) 1\n> srem set-key item2\n(integer) 0\n> smembers set-key\n1) "item"\n2) "item3"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash","aria-hidden":"true"}},[this._v("#")]),this._v(" HASH")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"assets/1536026823413.png",width:"450"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("创建哈希类型的键值")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hset user name LotusChing \n(integer) 1\n127.0.0.1:6379> hset user age 21\n(integer) 1\n127.0.0.1:6379> hset user gender "Male"\n(integer) 1\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("127.0.0.1:6379> hset user name \"LotusChing\" age 21\n(error) ERR wrong number of arguments for 'hset' command\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("获取哈希键中的field值")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hget user name\n"LotusChing"\n127.0.0.1:6379> hget user age\n"21"\n127.0.0.1:6379> hget user gender\n"Male"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("获取哈希键中的fields")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hekys user\n1) "name"\n2) "age"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("获取哈希键中的所有field的value")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hvals user\n1) "LotusChing"\n2) "21"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("删除哈希键中某个field")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hdel user age\n(integer) 1\n127.0.0.1:6379> hkeys user\n1) "name"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("统计哈希中field的个数")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hkeys user\n1) "name"\n2) "age"\n3) "gender"\n127.0.0.1:6379> hlen user\n(integer) 3\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("批量设置哈希键的field")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hmset user name "LotusChing" age 21 gender "Male"\nOK\n127.0.0.1:6379> hkeys user\n1) "name"\n2) "age"\n3) "gender"\n127.0.0.1:6379> hvals user\n1) "LotusChing"\n2) "21"\n3) "Male"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("批量获取哈希键中field的value")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hmget user name age gender\n1) "LotusChing"\n2) "21"\n3) "Male"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("判断哈希键中field是否存在")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("127.0.0.1:6379> hexists user name\n(integer) 1\n127.0.0.1:6379> hexists user hobbies\n(integer) 0\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("一次性获取哈希键中所有的fields和values")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("注意：尽量避免使用"),t("code",[this._v("hgetall")]),this._v("，因为如果哈希键field过多的话，可能会导致Redis阻塞，建议使用"),t("code",[this._v("hmget")]),this._v("获取所需哈希键中的field值，或者采用"),t("code",[this._v("hscan")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('127.0.0.1:6379> hgetall user\n1) "name"\n2) "LotusChing"\n3) "age"\n4) "21"\n5) "gender"\n6) "Male"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"zset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zset","aria-hidden":"true"}},[this._v("#")]),this._v(" ZSET")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"assets/1536026839475.png",width:"450"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('> zadd zset-key 728 member1\n(integer) 1\n> zadd zset-key 982 member0\n(integer) 1\n> zadd zset-key 982 member0\n(integer) 0\n> zrange zset-key 0 -1 withscores\n1) "member1"\n2) "728"\n3) "member0"\n4) "982"\n> zrangebyscore zset-key 0 800 withscores\n1) "member1"\n2) "728"\n> zrem zset-key member1\n(integer) 1\n> zrem zset-key member1\n(integer) 0\n> zrange zset-key 0 -1 withscores\n1) "member0"\n2) "982"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_4-通用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-通用命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 通用命令")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("keys")])]),e._v(" "),s("li",[s("p",[e._v("dbsize")])]),e._v(" "),s("li",[s("p",[e._v("del")])]),e._v(" "),s("li",[s("p",[e._v("exists")])]),e._v(" "),s("li",[s("p",[e._v("expire key seconds")])]),e._v(" "),s("li",[s("p",[e._v("ttl")])]),e._v(" "),s("li",[s("p",[e._v("persist")])]),e._v(" "),s("li",[s("p",[e._v("type")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("过期时间")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('redis> SET cache_page "www.google.com"\nOK\n\nredis> EXPIRE cache_page 30  # 设置过期时间为 30 秒\n(integer) 1\n\nredis> TTL cache_page    # 查看剩余生存时间\n(integer) 23\n\nredis> EXPIRE cache_page 30000   # 更新过期时间\n(integer) 1\n\nredis> TTL cache_page\n(integer) 29996\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_6-redis持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-redis持久化","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. Redis持久化")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("[ops_book/listlie-886829.md at master · LotusChing/ops_book](ops_book/listlie-886829.md at master · LotusChing/ops_book)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"更新日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新日志","aria-hidden":"true"}},[this._v("#")]),this._v(" 更新日志")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("2018/9/4 init1.0")])])}],!1,null,null,null);n.options.__file="Redis.md";t.default=n.exports}}]);