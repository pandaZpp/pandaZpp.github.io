# EventLoop事件循环

JavaScript是一门单线程语言(JavaScript主要用途是与用户互动，以及操作DOM，因此决定了这只能是单线程)

## 任务队列

任务可以分为两种，同步任务(synchronous)和异步任务(asynchronous)

同步任务：只有前一个任务执行完毕，才能执行下一个任务

异步任务：不进入主线程，进入任务队列(task queue)，只有任务队列通知主线程，异步任务可以执行了，该任务才会进入主线程执行

**执行栈(execution context stack)**

1. 所有同步任务都在主线程执行，形成一个执行栈

2. 主线程之外，存在一个任务队列，只要异步任务有了运行结果，就在任务队列放置一个事件

3. 一旦执行栈中所有同步任务执行完毕，系统就会读取任务队列，异步任务进入执行栈，执行

主线程不断重复这三个步骤





## Event Loop

主线程从任务队列中读取事件，这个过程是循环不断的，所以这种运行机制又称为Event Loop（事件循环）

![Event Loop](./assets/img/event-loop.png)



requestAnimationFrame

setTimeout

