# Html

### 简介

(HyperText Markup Language) 超文本标记语言，是web前端的结构部分，由一系列元素标签组成

\<!DOCTYPE> 是文档声明

H5不基于SGML，故不需要引用DTD

按照排列方式，HTML元素可分为块级元素和行内元素

​	块级元素独占一行，不能与其他任何元素并列，可设置宽高，默认是父级宽度，常见块元素： `div h li p` CSS属性: `display: block;`

​	行内元素与其他行内元素并排，不能设置宽高，默认是文字宽度：` span a u em` CSS属性：`display: inline`

### 常用标签

table，表格，在使用HTML打印时，thead、tfoot标签可以在页面头部，尾部添加指定内容

iframe，用于嵌入其他HTML页面，src属性指定的url就是要嵌入的页面链接

> src 嵌入页面的URL
>
> width 嵌入页面的宽度
>
> height 嵌入页面的高度

iframe元素挂载完成后通过`postMessage`与嵌入的页面进行通信



### HTML5

* 新增用于绘画的canvas元素
* 用于媒体播放的video和audio元素
* 新增localStorage和sessionStorage支持存储
* 新增语义化标签`article、footer、header、nav、section`

