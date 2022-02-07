# 经典面试题目



#### 观察者模式:fire:

该方法接受两个参数，第一个是回调函数(该函数接受四个参数[累加器，当前值，当前索引(可选)，`reduce`的数组(可选)])，第二个是初始值
```js
Array.prototype.my_reduce = function (callback, ...rest) {
    let start = 0,  result;
    if (rest.length) {
        result = rest[0]
    } else {
        result = this[0]
        start ++
    }
    for (let i = start; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}
```

#### 发布订阅模式:star:
该方法接受一个参数`depth`深度，该方法用来降低数组维度，该方法并不会改变原数组

```js
Array.prototype.my_flat = function (depth) {
  const result = []
  for (let i = 0; i < this.length; i ++) {
    if (Array.isArray(this[i]) && depth !== 0) {
      result.push(...this[i].my_flat(--depth))
    } else {
      result.push(this[i])
    }
  }
  return result
}
```

#### 深拷贝:star:
   该方法接受两个参数`callback`&`thisArgs`，由于箭头函数没有`this`，所以若要想让第二个参数生效，不能使用箭头函数

**箭头函数没有自己的this指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定this---译者注），他们的第一个参数会被忽略。（这种现象对于bind方法同样成立---译者注）**

```js
Array.prototype.my_map = function (callback, thisArgs) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    if (thisArgs === undefined) {
      result.push(callback(this[i], i))
      continue
    }
    result.push(callback.call(thisArgs, this[i], i))
  }
  return result
}
```

其余方法的实现也类似以上三种，这里不再赘述，多谢您的浏览，谢谢！

#### 防抖与节流:star:

 





#### Object.freeze

   ```js
const objectFreeze = object => {
  const keys = Object.getOwnPropertyNames(object);
  keys.forEach(key => {
    if (typeof object[key] === 'object') {
      objectFreeze(object[key])
    } else {
      Object.defineProperty(object, key, {
        writable: false,
        configurable: false
      })
    }
  })
}
   ```



