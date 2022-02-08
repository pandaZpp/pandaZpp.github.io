# flex布局

**flex: 弹性盒子**

通过`display: flex`声明

分主轴和交叉轴，默认主轴是水平轴，交叉轴是竖直轴

使用`flex-direction`属性来切换主轴和交叉轴 默认 `row`

```css
flex-direction: row | row-reverse | column | column-reverse;
```

使用`justify-content`来设置主轴内容如何分布，默认`flex-start`

```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
```

使用`align-items`设置交叉轴分布方式，默认`stretch`

```css
align-items: stretch | center | flex-start | flex-end | baseline;
```

`align-content`与`align-items`并无区别，用来设置多行元素

`align-self`用来设置弹性子元素本身的交叉轴样式

```css
align-self: stretch | center | flex-start | flex-end | baseline;
```

`flex-flow`属性是`flex-direction`和`flex-wrap`的结合属性

`flex`属性是`flex-grow`、`flex-shrink`、和`flex-basis`

分别代表放大的比例，缩小的比例以及主轴伸缩的基准值

放大只有在**主轴空间充足**的情况下使用有效

缩小只有在**主轴空间不足**的情况下使用有效

常用如下

`flex: 1;`表示剩余空间所占的份数

`order`表示顺序，指的是已经排序的顺序，未排序的永远排在最前方