# 经典面试题目

## 观察者模式:fire:

请补全JavaScript代码，完成"Observer"、"Observerd"类实现观察者模式。要求如下：

1. 被观察者构造函数需要包含"name"属性和"state"属性且"state"初始值为"走路"

2. 被观察者创建"setObserver"函数用于保存观察者们
3. 被观察者创建"setState"函数用于设置该观察者"state"并且通知所有观察者
4. 观察者创建"update"函数用于被观察者进行消息通知，该函数需要打印（console.log）数据，数据格式为：小明正在走路。其中"小明"为被观察者的"name"属性，"走路"为被观察者的"state"属性
5. "Observer"为观察者，"Observerd"为被观察者

```js
class Observerd {
  constructor(name) {
    this.name = name
    this.state = '走路'
  }
  observeArr = []
  setObserver(observe) {
    this.observeArr.push(observe)
  }
  setState(state = '走路') {
    this.observeArr.forEach(item => {
      item.update(this.name, state)
    })
  }
}
class Observer {
  update(name, state) {
    console.log(`${name}正在${state}`)
  }
}
```

## 发布订阅模式:star:
请补全JavaScript代码，完成"EventEmitter"类实现发布订阅模式。
注意：

1. 同一名称事件可能有多个不同的执行函数

2. 通过"on"函数添加事件

3. 通过"emit"函数触发事件

```js
class EventEmitter {
  cb = {}
  on(name, fn) {
    if (!Array.isArray(this.cb[name])) {
      this.cb[name] = []
    }
    this.cb[name].push(fn)
  }
  emit(name, ...rest) {
    this.cb[name] && this.cb[name].forEach(item => {
      item(...rest)
    })
  }
}
```

## 深拷贝:star:

正则表达式后缀

* /i (忽略大小写)
* /g (全文查找出现的所有匹配字符)
* /m (多行查找)
* /gi(全文查找、忽略大小写)
* /ig(全文查找、忽略大小写)

```js
function deepClone(target, weakMap = new WeakMap()) {
  if (typeof target !== 'object') {
    return target
  } else {
    const Cons = target.constructor
    if (/^(Function|Map|Set|RegExp|Date)$/i.test(Cons.name)) return new Cons(target)
    if (weakMap.get(target)) return weakMap.get(target)
    const desc = Object.getOwnPropertyDescriptors(target)
    const result = Object.create(target, desc)
    weakMap.set(target, result)
    for (let prop in result) {
      if (target.hasOwnProperty(prop)) {
        result[prop] = deepClone(target[prop], weakMap)
      }
    }
    return result;
  }
}
```



## 防抖与节流:star:

参考[防抖](https://github.com/mqyqingfeng/Blog/issues/22)

防抖: 一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，**那我就以新的事件的时间为准**，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行

**js在某个数据类型前使用‘+’，这个操作目的是为了将该数据类型转换为Number类型**

```js
function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
    return result;
  };
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
```

参考[节流](https://github.com/mqyqingfeng/Blog/issues/26)

节流: 如果你持续触发事件，每隔一段时间，只执行一次事件。

```js
// 时间戳
function throttle1(fn, timestamp) {
  // 当前时间
  let previous = new Date();
  return function () {
    const args = arguments;
    const _this = this;
    const now = new Date();
    if (now - previous > timestamp) {
      fn.apply(_this, args);
      previous = now;
    }
  };
}

// 定时器
function throttle2(fn, delay) {
  let timeout;
  return function () {
    const args = arguments;
    const _this = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(_this, args);
        timeout = null;
      }, delay);
    }
  };
}
```

优化版

```js
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}
```



## Object.freeze

freeze冻结

`Object.seal`密封一个对象，不能新增，不能修改现有属性，浅密封

对象属性不可修改，Object本身的freeze方法只实现了浅冻结，深度冻结如下

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
  Object.seal(object)
}
   ```



## 实现new操作符

1. 堆内存中创建新对象
2. 新对象内部的`__proto__`属性被赋值为构造函数的prototype属性
3. 构造函数内部this指向新建的空对象，执行构造函数代码
4. 如果构造函数返回非空对象，则返回该对象，否则返回刚创建的新对象

```js
const _new = function(fn, ...args) {
  const result = {}
  result.__proto__ = fn.prototype
  const res = fn.apply(result, ...args)
  return typeof res === 'object' ? res : result
}
```



## 实现call,bind

```js
// call
Function.prototype.call = function(thisArgs=window, ...args) {
    thisArgs.fn = this; //这里的this就是调用fn的函数
    return thisArgs.fn(...args) // 这时函数fn的this指向的就是thisArgs了
}
// bind
Function.prototype.bind = function(thisArgs=window) {
    thisArgs.fn = this;
    return function (...args) {
        return thisArgs.fn(...args)
    }
}
```

