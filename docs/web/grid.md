# Grid布局

宫格布局

grid-area从多少行开始，多少列开始，多少行结束，多少列结束

grid-template-rows grid-template-columns行列模板

```css
`grid-area`: grid-row-start / grid-column-start | grid-row-end | grid-column-end;
`order` ： 可以为负数
`grid-template-columns`: 20% / / / / /
`grid-template-rows`
`grid-template-columns`: repeat(8, 12.5%)
px em 百分 fr单位 1fr的1不可省略
grid-template是grid-template-rows和grid-template-columns的缩写形式
```

单位fr，剩余空间分布

| 值                                                      | 描述                                                         |
| :------------------------------------------------------ | :----------------------------------------------------------- |
| none                                                    | 默认值。不定义行或列的尺寸。                                 |
| *grid-template-rows / grid-template-columns*            | 设置列和行的尺寸。                                           |
| *grid-template-areas*                                   | 指定网格布局使用的网格项名称                                 |
| *grid-template-rows / grid-auto-columns*                | 指定行的尺寸（高度），以及列的自动尺寸。                     |
| *grid-auto-rows / grid-template-columns*                | 指定行的自动尺寸，并设置 grid-template-columns 属性。        |
| *grid-template-rows / grid-auto-flow grid-auto-columns* | 指定行的尺寸（高度），以及自动布局算法怎样运作，和列的自动尺寸。 |
| *grid-auto-flow grid-auto-rows / grid-template-columns* | 指定自动布局算法怎样运作，和行的自动尺寸，以及设置 grid-template-columns 属性。 |
