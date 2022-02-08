# async-await用法及原理

### 用法

async修饰的方法表示这是一个异步方法，方法返回值是一个promise对象

await必须在async方法体中使用，否则会报错

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



### async和await的原理

async函数就是generator生成器函数的语法糖，await就是yield的改进版

理解async原理之前先要搞懂生成器的概念

>  \*  
>
> yield 



**async函数对generator的改进**

1. 内置执行器，不需要使用next()手动执行。

2. await命令后面可以是Promise对象或原始类型的值，yield命令后面只能是Thunk函数或Promise对象。

3. 返回值是Promise。返回非Promise时，async函数会把它包装成Promise返回。(Promise.resolve(value))





