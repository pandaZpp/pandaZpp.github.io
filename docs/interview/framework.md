# 框架

### 介绍一下Vue和React的区别



### webpack热更新原理

webpack-devserver

`Hot Module Replacement`

* 一种是页面刷新，不保留页面状态，直接window.location.reload()
* 另一种是基于WDS(webpack-dev-server)的模块热替换，只需要局部刷新页面上发生变化的模块，同时可以保留当前的页面状态

`HMR`作为`Webpack`内置的功能，可以通过`HotModuleReplacementPlugin`或`--hot`开启

**构建过程**

项目启动，构建打包生成一个hash值，然后在每次修改代码保存后，控制台都会出现compiling，触发新编译，hash值代表每一次编译的标识。

**实现原理**

* 启动`webpack`，生成`compliler`实例，`compiler`上有很多方法，比如可以启动`webpack`所有编译工作，以及监听本地文件的变化
* 启动本地`server`，让浏览器可以请求本地的静态资源
* 本地`server`启动之后，再去启动`websocket`服务，通过`websocket`可以建立本地服务与浏览器的双向通信

4. 常用的CSS伪类和伪元素
   1. 伪类 **用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的**
      1. focus
      2. hover
      3. link
      4. active
   2. 伪元素，**用于创建一些不在DOM树中的元素，并为其添加样式。例如，我们可以通过:before来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见这些文本，但是它实际上并不在DOM文档中**
      1. :after
      2. before

### 介绍一下Vue双向绑定原理





### v-for key的用途



### 介绍一下vue的生命周期 vue2 vue3



### keep-alive





### nextTick



### vue的data为什么是函数而非对象呢





介绍一下watch和computed





### vue的递归组件





### vue组件之间的通信方式有哪些





### 如何在组件中实现v-model







