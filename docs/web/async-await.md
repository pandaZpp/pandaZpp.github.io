# async-await用法及原理

## 用法

async修饰的方法表示这是一个异步方法，方法返回值是一个promise对象

await必须在async方法体中使用，否则会报错

await修饰语句返回结果很可能是rejected，所以最后包括在try catch语句中

await会阻塞代码，最后后面跟一个promise对象，会拿到promise返回的结果

例：

```js
 function demo() {
     fetchData().then(value => {
         console.log('拿到的value', value)
     })
 }
// 换成await
async function demo() {
    const result = await fetchData()
    console.log('拿到的value', value)
}
```



## async和await的原理

async函数就是generator生成器函数的语法糖

理解async原理之前先要搞懂生成器的概念

**async函数就是把*替换成async，await替换成yield**

```js
async function fn(args){
  // ...
}

// 等同于

function fn(args){ 
  return spawn(function*() {
    // ...
  }); 
}

function spawn(genF) {
  return new Promise(function(resolve, reject) {
    var gen = genF();
    function step(nextF) {
      try {
        var next = nextF();
      } catch(e) {
        return reject(e); 
      }
      if(next.done) {
        return resolve(next.value);
      } 
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v); });      
      }, function(e) {
        step(function() { return gen.throw(e); });
      });
    }
    step(function() { return gen.next(undefined); });
  });
}
```



### 生成器

生成器函数在遇到 yield 关键字之前会正常执行

>  \*  函数名称前加一个星号（*）表示这是一个生成器
>
> yield  中断生成器函数执行的关键字

调用生成器会产生一个生成器对象，一开始处于suspend的状态，暂停执行

生成器对象实现了Iterator接口，具有next方法



### **async函数对generator的改进**

1. 内置执行器，不需要使用next()手动执行。

2. await命令后面可以是Promise对象或原始类型的值，yield命令后面只能是Thunk函数或Promise对象。

3. 返回值是Promise。返回非Promise时，async函数会把它包装成Promise返回。(Promise.resolve(value))



### 迭代器

支持迭代的自我识别能力和创建实现 Iterator 接口的对象的能力。在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而 且这个属性必须使用特殊的 Symbol.iterator 作为键。

实现了Iterator接口的类型

* 字符串
* 数组
* 映射
* 集合
* arguments对象
* Node List等DOM集合类型

举例

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

