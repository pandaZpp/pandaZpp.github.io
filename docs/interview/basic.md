# Web基础部分:fire:

## CSS篇

### 介绍一下flex布局

弹性布局，主要分为主轴和交叉轴，

常用的属性主轴有`justify-content`，设置主轴上的排列方式，取值有`flex-start|flex-end|center|space-around|space-evenly|space-between`

`flex-direction`用于切换主轴交叉轴方向，取值有`row|column|row-reverse|column-reverse`

`flex-wrap`设置是否换行，默认不换行，取值有`wrap|no-wrap`

`flex-flow`是`flex-direction和flex-wrap`的组合写法

交叉轴上常用的属性`align-items&align-content&align-self`

`align-items`设置交叉轴子元素的排列方式，默认`stretch`，可取值`flex-start|flex-end|center`，`align-center`与`align-items`的区别主要在于`align-content`是用于修饰多行的，后者是单行

`align-self`是修饰子元素的，设置元素本身的排列方式

`flex`属性是`flex-grow|flex-shrink|flex-basis`三个属性组成的，分别表示放大的比例，缩小的比例和基数，`flex: 1;`**展开是`flex: 1 1 auto;`或者`flex: 1 1 0%;`**

`order`属性用来改变子元素的排列顺序，**无序的优先排列**

### `BFC`

全程是`Block formating Context`，块级格式化上下文，`BFC`是一个独立的布局环境，可以理解为一个容器，这个容器内的排列不会影响其它环境，如果一个元素符合触发`BFC`的条件，则`BFC`中的元素布局不受外部影响

可以解决`margin重叠，margin塌陷问题`，`BFC`的高度包括浮动元素的高度

设置成`bfc`容器的条件

> overflow: hidden|auto|scroll;
>
> float: left|right;
>
> position: absolute|fixed;
>
> display: flex|inline-block;

### 清除浮动的几种方式



### 重绘和回流

回流，元素规模尺寸，布局，隐藏新增等改变会导致回流，浏览器会使重新渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流，会重新绘制受影响的部分到屏幕中，完成回流后，重绘受影响部分

重绘，一些元素的更新只影响元素的外观，风格，不会影响布局

浏览器维护了一个队列，会把所有引起回流、重绘的操作放入这个队列，队列中任务到了一定数量或者到了一定时间间隔，浏览器就会清空队列，进行批处理，这样会将多次重绘回流变成一此重绘回流

### 盒模型

主要分为两种，标准盒模型和IE怪异盒模型

#### 标准盒模型

总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距

![标准盒模型](../web/assets/img/标准盒模型.png)

#### (IE)怪异盒模型

总元素的宽度=宽度+左边距+右边距

![标准盒模型](../web/assets/img/IE盒模型.png)

### 选择器

| 选择器         | 格式          | 权重 |
| -------------- | ------------- | ---- |
| ID选择器       | #id           | 100  |
| 类选择器       | .class        | 10   |
| 属性选择器     | a[ref='xxx']  | 10   |
| 伪类选择器     | li:last-child | 10   |
| 标签选择器     | div           | 1    |
| 伪元素选择器   | li:after      | 1    |
| 相邻兄弟选择器 | h1 + p        | 0    |
| 子选择器       | ul > li       | 0    |
| 后代选择器     | li a          | 0    |
| 通配符选择器   | *             | 0    |

#### 深度选择器

选择器名会进行哈希，必须通过深度选择器才可以正确选择中对应的元素

CSS中使用 `>>>`

less及sass等预编译语言中使用/deep/

### 不可以被继承的CSS属性

1. display
2. 文本属性
   1. vertical-align
   2. text-decoration
   3. text-shadow
   4. white-space
   5. unicode-bidi
3. 盒子模型属性：width、height、margin、border、padding
4. 背景属性：background、background-color、background-image、background-repeat、background-positon、background-attachment
5. 定位属性：float、clear、position、top、right、bottom、left、min-width、max-width、max-heigth、overflow、clip、z-index
6. **生成内容属性**：content、counter-reset、counter-increment
7. **轮廓样式属性**：outline-style、outline-width、outline-color、outline
8. **页面样式属性**：size、page-break-before、page-break-after
9. **声音样式属性**：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during



### 可以被继承的css属性

1. 字体系列属性
   1. font-family
   2. font-weight
   3. font-size
   4. font-style
2. 文本系列
   1. text-indent
   2. text-ailgn
   3. line-height
   4. word-spacing
   5. letter-spacing
   6. text-transform
   7. color
3. 元素可见性
   1. visibility
4. 列表布局
   1. list-style
5. 光标
   1. cursor

### 定位

`position: absolute|fixed|sticky|relative|static;`

### 垂直居中的多种方式

```css
.flex {
    display: flex;
    justify-content: center;
    align-items: center
}
.flex1 {
    display: flex;
}
.flex1 > .box {
    margin: auto;
}
.posi {
    position: relative;
}
.posi > .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```



### css3的transform会引起重绘还是回流

GPU加速，不会引起重绘回流

## JS篇

### 介绍一下eventloop

### 原型和原型链

### 闭包原理及其用途

### 迭代器与生成器

### promise

### async和await

### JavaScript的几种继承模式

### const和let

### bigint symbol

### 常见的类数组有哪些？如何转为数组

### 扩展运算符

### new的时候发生了什么

### 扩展运算符

### 介绍一下浅拷贝和深拷贝

### 如何实现一个深拷贝

### 介绍一下call/apply/bind

### 介绍一下浏览器的垃圾回收机制

### 导致内存泄漏的情况有哪些
