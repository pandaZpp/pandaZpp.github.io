# Promise的用法

中文翻译为期约，约定，承诺，是前端异步编程的一种新型方式，解决了传统回调函数回调地狱问题，支持链式调用

promise三个状态pending、fulfilled和rejected，且一旦更改不可逆

使用Promise构造函数返回一个promise对象，构造函数决定了promise对象的状态



### then方法

两个回调函数，分别表示fulfilled的回调和rejected的回调，返回值也是一个promise对象，所以才能支持链式调用

```js
const p = new Promise((res, rej) => {
    res(111)
})
p.then(val => {
    throw 111
}, reason => {
    console.warn(reason)
})
```

当确切知道promise对象的状态时，可以只写一个回调函数，如只写成功，不写失败的，或者只写失败的，成功的置为undefined

```js
const p = new Promise((res, rej) => {
    res(111)
})
p.then(val => {
    throw 111
}).then(undefined, reason => {
    console.warn(reason)
})
```



### catch方法

catch方法一般放在最后用以捕获错误

```js
const p = new Promise((res, rej) => {
    res(111)
})
p.then(val => {
    throw 111
}).catch(e => {
    console.log('捕获到错误', e)
})
```



### finally方法

所有promise回调函数执行完毕之后的回调函数，如关闭某些资源等等

```js
const p = new Promsie((res) => {
    res('111')
})
p.then(val => {
    throw val
}).catch(reason => {
    console.warn(reason)
}).finally(() => {
    console.log('do something')
})
```



### all方法

是Promise构造函数自身的方法，接受一个promise 对象数组，当所有promise对象全部都执行成功，all方法才算成功，有一个失败，all方法就失败

```js
const p1 = new Promise((res) => {
    res(111)
})
const p2 = new Promise((res) => {
    res(222)
})
const p3 = new Promise((res) => {
    res(333)
})
const p4 = new Promise((res, rej) => {
    rej(444)
})
const all1 = Promise.all([p1, p2, p3]) //resolve
const all2 = Promise.all([p1, p2, p3, p4]) // reject
```



### race方法

Promise构造函数自身方法，接受一个promise对象数组，第一个返回结果的promise对象就是race方法的返回值

```js
const p1 = new Promise((res) => {
    setTimeout(() => {
	    res(111)  
    })
})
const p2 = new Promise((res) => {
    res(222)
})
const p3 = new Promise((res) => {
    res(333)
})
const race = Promise.race([p1, p2, p3]) // 222
```



### any方法:new:ES2021新增

Promise自身的方法，接受一个promise对象数组，第一个返回成功的promise对象就是any方法的返回值，如果所有的promise对象都返回失败，那any就返回失败

```js
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
	    res(111)  
    }, 2000)
})
const p2 = new Promise((res, rej) => {
    res(222)
})
const p3 = new Promise((res, rej) => {
    res(333)
})
const any = Promise.any([p1, p2, p3]) // 两秒后any返回111
```

