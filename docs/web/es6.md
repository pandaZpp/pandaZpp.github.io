# ECMAScript2015+

## const let var

const和let会形成**暂时性死区**，虽然变量进行了提升，但是未声明之前不能被访问，var不会形成暂时性死区



## 解构赋值

对象解构

数组解构

## 字符串新增方法

startsWith

endsWith

replaceAll

trimStart 

trimEnd

repeat

padStart

padEnd

at(index) 返回参数指定位置的字符，支持负索引

promise请参考[Promise](./promise.html)

## set map weakmap weakset



## bigint Symbol

新增数据类型bigint，用以处理过大的数字

Symbol，符号，可声明一个永远不会重复的标识，可当作对象的属性，迭代器:question:



## includes

判断一个数组中是否包含指定的变量，可以判断NaN类型，利用isNaN()实现



## 连接选择符

?.逻辑控制符 &&实现



## Proxy





## Reflect





## for-of

对于已经实现了迭代器接口的对象，可以进行for-of遍历
