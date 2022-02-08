# 原型、继承与Class

#### 工厂模式

​	按照特定接口创建对象的方式

#### 构造函数模式

​	按照惯例，构造函数首字母大写

> * 在内存中创建一个新对象。
>
> * 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性
>
> * 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）
>
> * 执行构造函数内部的代码（给新对象添加属性）
>
> * 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

#### 原型模式

只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向 原型对象）。默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数。对前面的例子而言，Person.prototype.constructor 指向 Person

每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构 造函数的原型对象。脚本中没有访问这个[[Prototype]]特性的标准方式，但 Firefox、Safari 和 Chrome 会在每个对象上暴露\__proto__属性，通过这个属性可以访问对象的原型



## 几种继承方式

### 原型链继承

每个构造函数都有一个原型对象，原型有 一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例呢？那就意味 着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函 数。这样就在实例和原型之间构造了一条原型链。

所有引用类型都继承自Object，也是通过原型链实现的

原型与实例的关系可以使用instanceof操作符来判断，也可以使用isPrototypeOf()方法

#### 存在的问题

原型中包含引用值得时候，会在所有实例间共享

### 盗用构造函数

为解决原型包含引用值导致得继承问题，盗用构造函数的技术出现了。基本思路很简单：在子类 构造函数中调用父类构造函数，父类构造函数执行时，this指向的是子类的实例



### 组合继承

综合原型链和盗用构造函数。基 本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性

```js
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name);
  this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
```



### 原型式继承





### 寄生式继承





### 寄生式组合继承





## Class

