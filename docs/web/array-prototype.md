# 手撕数组原型方法



### `Array.prototype.reduce`:fire:

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

### `Array.prototype.flat`
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

### `Array.prototype.map`:star:
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

### `Array.prototype.fill`  

```js
Array.prototype.my_fill = function (value, start=0, end = this.length) {
	for (let i = start; i < end; i++) {
    this[i] = value
  }
}
```

### `Array.prototype.includes`:new:

```js
Array.prototype.my_includes = function (item) {
	for (let i = 0; i < this.length; i++) {
    if (this[i] === item || (isNaN(item) && isNaN(this[i]))) {
      return true
    }
  }
  return false
}
```

### `Array.prototype.push`

```js
Array.prototype.my_push = function (...rest) {
	const len = this.length;
  for (let i = 0; i < rest.length; i++) {
    this[i+len] = rest[i]
  }
  return this.length;
}
```

### `Array.prototype.pop`

```js
Array.prototype.my_pop = function () {
	const res = this[this.length - 1]
  this.length --
  return res
}
```

### `Array.prototype.shift`

```js
Array.prototype.my_shift = function () {
	const res = this[0]
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i+1]
  }
  this.length --
  return res
}
```



### `Array.prototype.unshift`

```js
Array.prototype.my_unshift = function (...rest) {
	const arrayLen = this.length;
  const restLen = rest.length;
  for (let i = arrayLen + restLen - 1; i >= 0; i--) {
    if (i >= restLen) {
      this[i] = this[i - restLen]
    } else {
      this[i] = rest[i]
    }
  }
  return this.length;
}
```



### `Array.prototype.sort`

```js
Array.prototype.my_sort = function (fn) {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      let val = fn(this[j], this[j + 1]);
      if (val > 0) {
        this[j] = this[j] + this[j + 1]
        this[j + 1] = this[j] - this[j + 1]
        this[j] = this[j] - this[j + 1]
      }
    }
  }
}
```





