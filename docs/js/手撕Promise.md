# :fire:`TypeScript`实现`Promise`

完整版代码 [点我](https://github.com/jiqiangzhu/learn-ts/blob/master/src/ts-promise.ts)

本文会根据通过查看原生`Promise`的输出结果来逐步实现自定义`myPromise`，使用`class`

**为避免出现`this`指向问题，使用箭头函数**

>  `then、catch、Promise.resolve、Promise.reject、all、race、finally`

## :star:`Promise.prototype.then`方法实现

**:smile:then方法是Promise最重要的一个方法,后面的所有方法都要调用此方法**

先查看一下原生`Promise`

```typescript
const promise = new Promise((resolve, reject) => {
  resolve(111)
})
console.log(promise) // PromiseResult 111 PromiseState fullfilled
```

由此可知需要传递给`Promise`构造函数一个函数，并有两个回调函数参数`resolve, reject`，这里称此函数之为:imp:`executor`，两个回调函数分别为成功的回调和失败的回调，`Promise`有三种状态`PromiseState: pending|fulfilled|rejected`(并且状态一旦改变不允许再次更改)和一个返回结果`PromiseResult`可以为任意类型

`myPromise`

```typescript
class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  PromiseState: string = myPromise.PENDING
  PromiseResult: any = ''
  resolve = (result: unknown) => {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.FULFILLED
    this.PromiseResult = result
  }
  reject = (reason: unknown) => {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.REJECTED
    this.PromiseResult = reason
  }
  constructor(executor: Function) {
    executor(this.resolve, this.reject)
  }
}
```

原生

```typescript
const resPromise = promise.then(value => {
  console.log(value); // 输出 111
  return value
}, (reason => {
  console.log(reason);
}))
console.log('resPromise', resPromise);
// console Promise {<pending>}
//[[Prototype]]: Promise
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: 111
```

可以看到`then`方法的返回值也是一个`Promise`，并且`Promise.then`里的回调时异步执行的，这里分别给then方法的两个回调函数默认值

```typescript
class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  PromiseState: string = myPromise.PENDING
  PromiseResult: any = ''
  static defaultOnResolve: Function = (value: unknown) => value
  static defaultOnReject: Function = (reason: any) => {
    throw reason
  }
  resolve = (result: unknown) => {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.FULFILLED
    this.PromiseResult = result
  }
  reject = (reason: unknown) => {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.REJECTED
    this.PromiseResult = reason
  }
  constructor(executor: Function) {
    executor(this.resolve, this.reject)
  }
  then = (onResolve = myPromise.defaultOnResolve, onReject = myPromise.defaultOnReject): myPromise => {
    return new myPromise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        if (this.PromiseState === myPromise.FULFILLED) {
          resolve(onResolve(this.PromiseResult))
        } else if (this.PromiseState === myPromise.REJECTED) {
          reject(onReject(this.PromiseResult))
        }
      })
    })
  }
}
```

#### :question:`Promise`的`executor`里的代码是异步时该如何处理？

```typescript
const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 1500)
})
promise.then(value => {
  console.log(value); // 永远不会输出
  return value
}, (reason => {
  console.log(reason);
}))
```

以上代码`console.log(value); `永远不会输出

为何？这个时候需要仔细看一下整个执行过程，执行`then`方法时，因为有定时的缘故，所以`Promise`的状态还是`pending`，但是目前还未对`pending`状态进行处理

必须当`Promise`的状态确定了之后才能执行对应的回调，所以当`pending`时，把回调进行存储，当执行`resolve/reject`时，再把存储的回调函数做遍历执行即可

代码：

```typescript
class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  PromiseState: string = myPromise.PENDING
  PromiseResult: any = ''
  callbacks: Array<{ onResolve: Function, onReject: Function }> = []
  static defaultOnResolve: Function = (value: unknown) => value
  static defaultOnReject: Function = (reason: any) => {
    throw reason
  }
  resolve = (result: unknown) => {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.FULFILLED
    this.PromiseResult = result
    // 遍历回调
    this.callbacks.forEach(item => {
      item.onResolve(this.PromiseResult)
    })
  }
  reject = (reason: unknown) => {
    if (this.PromiseState !== myPromise.PENDING) return;
    this.PromiseState = myPromise.REJECTED
    this.PromiseResult = reason
    // 遍历回调
    this.callbacks.forEach(item => {
      item.onReject(this.PromiseResult)
    })
  }
  constructor(executor: Function) {
    executor(this.resolve, this.reject)
  }
  then = (onResolve = myPromise.defaultOnResolve, onReject = myPromise.defaultOnReject): myPromise => {
    return new myPromise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        if (this.PromiseState === myPromise.FULFILLED) {
          resolve(onResolve(this.PromiseResult))
        } else if (this.PromiseState === myPromise.REJECTED) {
          reject(onReject(this.PromiseResult))
        } else if (this.PromiseState === myPromise.PENDING) {
          //存储回调
          this.callbacks.push({
            onResolve: () => {
              resolve(onResolve(this.PromiseResult))
            },
            onReject: () => {
              reject(onReject(this.PromiseResult))
            }
          })
        }
      })
    })
  }
}
```

#### :question:当`then`方法中返回的是一个`Promise`对象，能否在后面的`then`中拿到上面的值呢？

```typescript
promise.then((value:unknown) => {
  return new myPromise((resolve: Function) => {
    resolve(22222)
  })
}).then((value: unknown) => {
  console.log('value', value) // 能否输出 22222 ?
})
```

答案是不能，这里拿到的是一个`Promise`对象，如何拿到预期的值呢？需要在`then`方法中进行判断，**如果值为`Promise`对象，那么就使用递归再次调用`then`**

完整`then`

```typescript
then = (onResolve = myPromise.defaultOnResolve, onReject = myPromise.defaultOnReject): myPromise => {
    return new myPromise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        if (this.PromiseState === myPromise.FULFILLED) {
          try {
            const res = onResolve(this.PromiseResult)
            if (res instanceof myPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } catch (e) {
            reject(e)
          }
        } else if (this.PromiseState === myPromise.REJECTED) {
          try {
            const res = onReject(this.PromiseResult)
            if (res instanceof myPromise) {
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } catch (e) {
            reject(e)
          }
        } else if (this.PromiseState === myPromise.PENDING) {
          this.callbacks.push({
            onResolve: () => {
              try {
                const res = onResolve(this.PromiseResult)
                if (res instanceof myPromise) {
                  res.then(resolve, reject)
                } else {
                  resolve(res)
                }
              } catch (e) {
                reject(e)
              }
            },
            onReject: () => {
              try {
                const res = onReject(this.PromiseResult)
                if (res instanceof myPromise) {
                  res.then(resolve, reject)
                } else {
                  resolve(res)
                }
              } catch (e) {
                reject(e)
              }
            }
          })
        }
      })
    })
  }
```

## `Promise.prototype.catch`方法实现

由于`then`方法已经给了默认值，`catch`方法直接调用`then`方法即可，成功的回调函数设置成`undefined`即可

```typescript
catch = (onReject = myPromise.defaultOnReject) => {
    return this.then(undefined, onReject)
}
```

## `Promise.resolve`方法实现

**此方法属于Promise类的方法，通过类直接调用的，可以将Promise的状态直接设置为成功状态**

调用then方法，方法体内直接执行resolve回调即可

```typescript
static resolve = (value: unknown) => {
    return new myPromise((resolve: Function) => {
        resolve(value)
    })
}
```

## `Promise.reject`方法实现

同`Promise.resolve`

```typescript
static reject = (reason: any) => {
    return new myPromise((resolve: Function, reject: Function) => {
        reject(reason)
    })
}
```

## `Promise.all`方法实现

简介：此方法接收一个`Promise`对象数组，当所有`Promise`的结果都为成功时，此方法才返回成功，否则返回失败

数组中`Promise`是并发执行(可以自己进行验证)，但是`PromiseResult`的结果确是按顺序返回的！

```typescript
static all(promiseArr: Array<myPromise>): myPromise {
    return new myPromise((resolve: Function, reject: Function) => {
        let PromiseResult: Array<unknown> = []
        promiseArr.forEach((item, index) => {
            item.then((value: unknown) => {
                PromiseResult[index] = value //对应promise对象索引
                if (PromiseResult.length === promiseArr.length) { // 所有都成功了
                    resolve(PromiseResult)
                }
            }, (reason: any) => {
                reject(reason)
            })
        })
    })
}
```

## `Promise.race`方法实现

与`Promise.all`方法相反，`race`方法会把最先返回的结果当作返回值

```typescript
static race(promiseArr: Array<myPromise>): myPromise {
    return new myPromise((resolve: Function, reject: Function) => {
        promiseArr.forEach((item, index) => {
            item.then((value: unknown) => {
                resolve(value)
            }, (reason: any) => {
                reject(reason)
            })
        })
    })
}
```

## `Promise.prototype.finally`方法实现

此方法会在`then/catch`后面执行，:gift_heart:`ES2018`新增，在此之前，有些代码在`then和catch`中可能要重复书写，`finally`出现之后就很好的解决了这个问题

```typescript
finally = (executor = new Function) => {
    return this.then((value: unknown) => { 
        return myPromise.resolve(executor()).then(() => value) // 为了将值继续传递供链式调用
    }, (reason: any) => {
        return myPromise.resolve(executor()).then(() => { //为了将值继续传递供链式调用
            throw reason
        })
    })
}
```

:star:`Promise.any`方法实现(:new:`ES2021新增`)

此方法与`race`方法十分相似，不同的是，`race`只要有一个`reject`，就直接返回`reject`了，但是`any`是所有的都`reject`了才`reject`

```typescript
static all(promiseArr: Array<myPromise>): myPromise {
    return new myPromise((resolve: Function, reject: Function) => {
        let PromiseResult: Array<unknown> = []
        promiseArr.forEach((item, index) => {
            item.then((value: unknown) => {
                PromiseResult[index] = value
                if (PromiseResult.length === promiseArr.length) {
                    resolve(PromiseResult)
                }
            }, (reason: any) => {
                reject(reason)
            })
        })
    })
}
```