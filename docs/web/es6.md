# ECMAScript2015+

## const let var

const和let会形成**暂时性死区**，虽然变量进行了提升，但是未声明之前不能被访问，var不会形成暂时性死区



## 解构赋值

对象解构

```js
const obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
}
const {a, b, c} = obj

```



数组解构

```js
const arr = [1, 2, [3, 4], {b: 'c'}]
const [a0, a1, a2, {b}] = arr
```



## 字符串新增方法

| api        | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| startsWith | 以某些字符串开始                                             |
| endsWith   | 以某些字符串结束                                             |
| replaceAll | 替换所有的指定字符串                                         |
| trimStart  | 起始部分去除空格                                             |
| trimEnd    | 尾部去除空格                                                 |
| repeat     | 重复一段字符串指定的次数，不会改变源字符串                   |
| padStart   | 方法用另一个字符串填充当前字符串(**如果需要的话，会重复多次**)，以便产生的字符串达到给定的长度 |
| padEnd     | 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充 |
| at(index)  | 返回参数指定位置的字符，支持负索引                           |
|            |                                                              |



promise请参考[Promise](./promise.html)

## set map weakmap weakset

set集合，存储永远不会重复的数据

map映射

weakmap 弱映射，键必须是对象类型的



## bigint Symbol

新增数据类型bigint，用以处理过大的数字

Symbol，符号，可声明一个永远不会重复的标识，可当作对象的属性，迭代器:question:

实现了Iterator接口的对象都有Symbol.Iterator属性

#### 全局共享的Symbol

Symbol.for() 设置全局symbol

Symbol.keyFor() 取得设置的symbol



## includes

判断一个数组中是否包含指定的变量，**可以判断NaN类型，利用isNaN()实现**

实现请参考[includes方法实现](./array-prototype.html#array-prototype-includes)

## 连接选择符

?.逻辑控制符 &&实现



## Proxy





## Reflect





## for-of

对于已经实现了迭代器接口的对象，可以进行for-of遍历

举例：

```js
const obj = {
  [Symbol.iterator]: function() {
    let index = 0
    return {
      next: function() {
        return {value: index++, done: index > 5}
      }
    }
  }
}

for (let item of obj) {
  console.log('item', item); // 0 1 2 3 4
}
```

