# VUE常见面试题

#### Vue的data为什么是函数而非对象

是对象的话，多个地方使用到，改一个地方会影响到多个地方

#### computed和watch的区别

**computed** 有缓存，不支持异步，声明的变量无需在data中声明，多个值的改变影响一个值

**watch** handler/deep/immediate 支持异步操作，变量需存在vm实例中，一个值的改变影响多个值

#### v-for key

diff算法

#### v-for v-if



#### 组件通信方式

- props $emit
- provide/inject
- $attrs
- eventbus
- ref/refs

#### vuex







#### Vue的基本原理

Vue实例创建时，Vue会遍历data中的属性，用Object.defineProperty将他们转为getter/setter，在内部追踪相关依赖，属性被访问和修改时通知变化，每个组件实例都有相应的watcher程序实例，会在组件渲染的过程中把属性记录为依赖，当依赖项的setter被调用时，会通知watcher重新计算，从而使它关联的组件得以更新



#### 双向数据绑定原理:question:

**Vue采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调**

1. 需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
2. compile解析横板令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个令对象的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
3. Watcher订阅者是observer和Compile之间通信的桥梁，主要做的事情是
   1. 在自身实例化时往属性订阅器(dep)里面添加自己
   2. 自身必须有一个update方法
   3. 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中定的回调
4. MVVM作为数据绑定的入口，合observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化->视图更新：视图交互变化（input）-> 数据mode变更的双向绑定效果

#### 简易版双向绑定实现

```js
// 数据劫持+发布订阅模式

// 遍历使用Object.defineProperty给对象每个属性添加getter和setter
function observe(data) {
  typeof data === "object" &&
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key]);
    });
}

function defineReactive(data, key, value) {
  // 若value仍是对象，也需要添加getter和setter
  observe(value);
  const dep = new Dep();
  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: true,
    get() {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set(newValue) {
      value = newValue;
      console.log(`属性${key}被监听了，当前值为：${value}`);
      dep.notify();
    },
  });
}

class Dep {
  constructor() {
    this.subs = [];
  }
  // 添加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }
  // 通知订阅者
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
  // 用来缓存观察者
  static target = null;
}

class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
  }
  get() {
    // 添加观察者
    Dep.target = this;
    const value = this.vm.data[this.exp];
    Dep.target = null;
    return value
  }
  update() {
    const value = this.vm.data[this.exp]
    const oldValue = this.value
    if (value !== oldValue) {
      this.value = value
      this.cb.call(this.vm, value, oldValue)
    }
  }
}

function SelfVue(data, el, exp) {
  this.data = data;
  observe(this.data)
  const element = document.querySelector(el);
  element.innerHTML = this.data[exp]
  new Watcher(this, exp, (value, oldValue) => {
    element.innerHTML = value
  })
}

const selfVue = new SelfVue({
  name: 'hello, world'
}, '#app', 'name')

setTimeout(()=>{
  selfVue.data.name = 'two seconds later....'
}, 2000)

```



##### ts版本

```tsx
// 双向绑定原理
function observe(data: any) {
  typeof data === 'object' && Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key])
  })
}

function defineReactive(data, key, value) {
  typeof value === 'object' && observe(value);
  const dep = new Dep()
  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: true,
    get() {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set(newValue) {
      value = newValue;
      dep.notify();
    }
  })
}

class Dep {
  subs: Array<any>;

  constructor() {
    this.subs = [];
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  static target: any = null
}

class Watcher {
  value: any = ''

  constructor(public vm: any, public exp: string, public cb: Function) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get()
  }

  get() {
    Dep.target = this;
    const value = this.vm.data[this.exp]
    Dep.target = null;
    return value;
  }

  update() {
    const value = this.vm.data[this.exp];
    const oldValue = this.value;
    if (value !== oldValue) {
      this.value = value;
      this.cb(this.vm, value, oldValue)
    }
  }
}

class SelfVue {
  constructor(public data: any, public el: string, public exp: string) {
    this.data = data;
    observe(this.data);
    const element = document.querySelector(el)!;
    element.innerHTML = this.data[this.exp];
    new Watcher(this, exp, (vm, value, oldValue) => {
      element.innerHTML = value;
      console.log('oldValue', oldValue)
      console.log('vm', vm)
      console.log('value', value)
    })
  }
}
```



#### Object.defineProperty数据劫持的缺点

对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，都不能触发组件的重新渲染，对于数组而言，大部分操作都无法拦截，只是Vue内部对此进行重写了

Vue3.x使用Proxy对对象进行代理，可以完美监听到任何方式的数据改变，缺点时兼容性问题，Proxy属性ES6



#### Computed和watch区别

Computed

* 支持缓存，只有依赖的数据发生了变化才重新计算
* 不支持异步，若有异步操作，无法监听数据变化
* computed的值默认走缓存，计算属性是基于响应式依赖进行缓存的，也就是基于data声明过，或者父组件传递过来的props中的数据进行计算的
* 如果一个属性是由其他属性计算而来，这个属性依赖其他属性，会使用computed
* 如果computed属性的属性值是函数，那么默认使用get方法，函数返回值就是属性的属性值，在computed中，属性有一个get和set方法，数据发生变化时，会调用set方法

Watch

* 不支持缓存，数据变化就会触发相应操作
* 支持异步监听
* 监听函数接受两个参数，一个是最新的值，第二个是变化之前的值
* 当一个属性发生变化时，需要执行相应的操作
* 监听数据必须是data中声明的或者父组件传递过来的props中的数据，发生变化时，会触发其他操作，函数有两个参数
  * immediate: 组件加载立即触发回调函数
  * deep 深度监听，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化，deep无法监听到数组和对象内部的变化

当想要执行异步或者昂贵的操作以响应不断的变化时，就需要使用watch

总结：

* computed计算属性：依赖其他属性值，并且computed的值有缓存，只有它依赖的属性值发生改变，下一次获取computed的值才会重新计算computed的值
* watch侦听器：更多的时观察的作用，无缓存行，类似于某些数据的监听回调，每当监听的数据变化都会执行回调

#### data为什么是一个函数而非对象

JS中对象时引用类型的数据，当多个实例引用同一个对象，只要一个实例对这个对象进行操作，其他实例中的数据也会发生变化

Vue中更多的是复用组件，每个组件都要用自己单独的数据



#### keep-alive实现

> * include 字符串或者正则表达式，只有名称匹配的组件会被匹配
> * exclude 字符串或者正则表达式，匹配的组件不会被缓存
> * max 数字，最多可以缓存多少组件实例

1. 获取keep-alive下第一个子组件的实例对象，通过它去获取这个组件的组件名
2. 通过当前组件名去匹配原来的include和exclude，判断当前组件是否需要缓存，不需要缓存，直接返回当前组件的实例vNode
3. 需要缓存，判断他当前是否在缓存数组里面
   1. 存在，将原来位置上的key移除，同时将这个组件的key放到数组最后
   2. 不存在，将组件key放入数组，然后判断key数组是否超过max所设置的范围，超过，那么削减未使用时间最长的一个组件的key
4. 最后将这个组件的keep-alive设置为true

#### nextTick原理

Vue的nextTick其本质是对Javascript执行原理EventLoop的一种应用

nextTick核心是利用了如Promise、MutationObserver、setImmediate、setTimeout的原生JS方法来模拟对象的微/宏任务的实现，本质是为了利用JS的这些异步回调任务队列来实现Vue框架中自己的异步回调队列



#### Vue中给data中的对象属性添加一个新属性会发生什么

属性会添加，但是视图并未刷新，因为Vue实例创建时，新属性没有声明，故该属性不是响应式的属性，所以不会触发视图更新，可以使用Vue全局Api`$set()`

`this.$set(obj, key, value)`

#### Vue封装的数组方法

响应式处理利用的是`Object.defineProperty`对数据进行拦截，这个方法不能监听到数组内部变化，数组长度变化，数组截取变化，所以需要对这些操作进行hack，让Vue能监听到其中的变化

> * push()
> * pop()
> * shift()
> * unshift()
> * splice()
> * sort()
> * reverse()

简单来说，重写了数组中的那些原生方法，首先获取到这个数组的__ob__，也就是他的Observer对象，如果有新的值，就调用observerArray继续对新的值观察变化`target.\__proto__ == arrayMethods`改变数组实例的原型，手动调用notify，通知渲染watcher，执行update

```js
// 缓存数组原型
const arrayProto = Array.prototype;
// 实现 arrayMethods.__proto__ === Array.prototype
export const arrayMethods = Object.create(arrayProto);
// 需要进行功能拓展的方法
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function(method) {
  // 缓存原生数组方法
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    // 执行并缓存原生数组功能
    const result = original.apply(this, args);
    // 响应式处理
    const ob = this.__ob__;
    let inserted;
    switch (method) {
    // push、unshift会新增索引，所以要手动observer
      case "push":
      case "unshift":
        inserted = args;
        break;
      // splice方法，如果传入了第三个参数，也会有索引加入，也要手动observer。
      case "splice":
        inserted = args.slice(2);
        break;
    }
    // 
    if (inserted) ob.observeArray(inserted);// 获取插入的值，并设置响应式监听
    // notify change
    ob.dep.notify();// 通知依赖更新
    // 返回原生数组方法的执行结果
    return result;
  });
});
```



#### assets和static的区别

相同点：两者都是存放静态资源文件，项目中所需要的资源文件，图片，字体图标，样式文件都可以放在这两个文件下

不同点：assets打包时会进行压缩体积，代码格式化，static不会

所以assets可以存放项目中需要的样式js文件，而第三方资源文件，比如iconfont可以存放在static中，因为这些都已经经过处理，不再需要处理，可以直接上传



#### delete和Vue.delete删除数组的区别

delete删除的元素变成了empty/undefined，其他元素键值不变

Vue.delete直接删除了数组，改变了数组的键值

#### SSR

就是服务端渲染，在客户端把标签渲染成HTML的工作放在服务端完成，再把html直接返回给客户端

优势：

* 更好的SEO
* 首屏加载速度更快

缺点：

* 只支持beforeCreate和created两个钩子
* 更多的服务端负载
* 需要一些外部扩展库时需要特殊处理

#### mixin和mixins

前者全局混入，影响每个组件实例

后者对单独组件生效



#### 组件通信

1. props/$emit

   父组件通过props向子组件传递数据，子组件通过$emit和父组件通信

   * 父组件向子组件传值
   * 子组件向父组件传值

2. eventBus事件总线

   事件总线适用于父子组件、非父子组件等之间的通信

   * 创建事件中心管理组件之间的通信
   * 发送事件
   * 事件总线相当于一个桥梁，不同组件之间通过它通信

3. 依赖注入provide/inject

   1. provice 用来发送数据或方法
   2. 用来接受数据或方法

4. ref/$refs

   * ref这个属性用在子组件上，引用指向了子组件的实例，可以通过实例来访问组件的数据和方法

5. parent/$children

   1. $parent可以让组件访问父组件的实例（访问的时上一级父组件的属性和方法）
   2. $children可以让组件访问子组件的实例，但是$children并不能保证顺序，访问的数据也不是响应式的

6. $attrs/$listeners

   组件之间的跨代通信

   inheritAttrs默认true，继承所有父组件属性除props之外的所有属性，inheritAttrs：false，只继承class属性

   * $attrs: 继承所有父组件属性，除了prop传递的属性、class和style，一般用在子组件的子元素上
   * $listeners: 该属性是一个对象，里面包含了作用在这个组件上的所有监听器，可以配合v-on='$listeners'，将所有的监听器指向这个组件的某个特定的子元素



#### 首屏加载时间





### 十个请求，放入请求池，请求池一次性只能放入三个

```ts

interface taskType {
  task: Function,
  run: Boolean
}

class Queue {
  allTask: Array<Function> = [];
  runTask: Array<taskType> = []

  constructor(...rest: Array<Function>) {
    //初始化所有任务
    this.allTask = rest;
    // 放入请求池的三个初始任务
    const initTask = this.allTask.splice(0, 3);
    //添加run标识
    this.runTask = initTask.map(task => {
      return {
        task,
        run: false
      }
    })
    //执行
    this.run();
  }

  run() {
    this.allTask.length > 0 && this.runTask.forEach((item, index) => {
      // 已经执行过的task不再执行
      if (item.run) return;
      item.run = true;
      item.task().then((value: unknown) => {
        console.log('value', value)
        delete this.runTask[index]
        this.runTask[index] = {
          task: this.allTask.shift()!,
          run: false
        }
        this.run()
      })
    })
  }
}

//以下是测试代码
function fun1() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun1.name)
    }, 1000)
  })
}
function fun2() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun2.name)
    }, 2000)
  })
}
function fun3() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun3.name)
    }, 300)
  })
}

function fun4() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun4.name)
    }, 1000)
  })
}
function fun5() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun5.name)
    }, 1000)
  })
}
function fun6() {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(fun6.name)
    }, 300)
  })
}

new Queue(fun1, fun2, fun3, fun4, fun5, fun6)

```

### promise async await面试题

```tsx

// 说出以前代码输出顺序
async function async1() {
  console.log('A');
  // await后面的代码实际上相当于.then(() => {...})
  await async2();
  console.log('B');
  //相当于以下代码
  // (async2 as any).then(() => {
  //   console.log('B')
  // })
}

async function async2() {
  console.log('C');
}

setTimeout(() => {
  console.log('D')
})

console.log('E');

async1()

new Promise((resolve) => {
  console.log('F')
  resolve(1)
}).then(() => {
  console.log('G')
})
```

### 实现一个EventBus

```tsx
// 实现一个EventBus
class EventBus {
  cbs: any = {}

  on(type: string, cb: Function) {
    this.cbs[type] = this.cbs[type] || [];
    this.cbs.push({cb, once: false})
  }

  emit(name: string, ...rest: any) {
    Array.isArray(this.cbs[name]) && this.cbs[name].forEach((item, index) => {
      item.cb && item.cb()
      if (item.once) {
        delete item.cb
      }
    })
  }

  once(type: string, cb: Function) {
    this.cbs[type] = this.cbs[type] || [];
    this.cbs.push({cb, once: true})
  }

  clear() {
    this.cbs.splice(0, this.cbs.length)
  }
}
```



### 递归过滤器

```ts
function filter(array: Array<any>, target: string): Array<any> {
  const result: Array<any> = []
  for (let i = 0; i < array.length; i++) {
    // name直接等于target，直接返回当前项
    if (array[i].name === target) {
      result.push(array[i]);
      // name不等于target，children length大于0
    } else if (array[i].children && array[i].children.length > 0) {
      // 递归，查询children中是否含有目标值
      const res = filter(array[i].children, target);
      //含有目标值，要剔除非目标值的项
      if (res.length > 0) {
        result.push({
          name: array[i].name,
          children: res
        })
      }
    }
  }
  return result;
}
```



