---
article: false
title: go语言学习笔记
icon: read
---

## go数据结构

#### 切片和数组

slice的底层是数组，是对数组的封装，可以用于描述数组的一个片段，两者都可以用于描述。
数组是定长的，而切片则可以动态的扩容。
在存储上，数组是一片连续的内存，而slice实质上是一个结构体。他的结构如下：
```golang
// runtime/slice.go
type slice struct {
	array unsafe.Pointer // 元素指针
	len   int // 长度 
	cap   int // 容量
}
```
- 切片的扩容
当我们向slice中追加了元素后，如果空间不足时就会引起扩容。
按照以往常见的说法，在golang1.18版本更新之前网上大多数的文章都是这样描述slice的扩容策略的：

> 当原 slice 容量小于 1024 的时候，新 slice 容量变成原来的 2 倍；原 slice 容量超过 1024，新 slice 容量变成原来的1.25倍。

在1.18版本更新之后，slice的扩容策略变为了：

> 当原slice容量(oldcap)小于256的时候，新slice(newcap)容量为原来的2倍；原slice容量超过256，新slice容量newcap = oldcap+(oldcap+3*256)/4

可以看到这是会按照版本动态变化的，扩容的实际实现位于src/runtime/slice.go中的growslice 。

- 1.18 版本的实现可以通过这里查看：https://github.com/golang/go/blob/dev.boringcrypto.go1.18/src/runtime/slice.go#L166
- master分支的实现在这里：https://github.com/golang/go/blob/master/src/runtime/slice.go#L157
按照饶大给出的分析，除了在按照规律扩容以外，还会进行内存对齐。

- 切片作为函数参考

> go中的所有函数传值，都是值传递，没有引用传递。即便是传递了参数指针时，也只是基于内存地址对原有的变量进行操作。

slice作为函数参数传递时，都会是按照值传递复制这个数据。但由于slice本身会携带一个底层数组的指针，在直接操作slice中的变量，例如`slice[i] = 1`时，则会直接改变到原有的数组的值。

而如果我们对复制的值进行其他操作，如`append`时，则会生成一个新的slice，此时原有的数组则不会受到影响。

> 推测：当我们对一个slice操作时，如果没有涉及到原有slice的扩容，是否也会影响到？


#### map

-  map的实现
go中map的底层是一个hmap 
```golang
// A header for a Go map.
type hmap struct {
    // 元素个数，调用 len(map) 时，直接返回此值
	count     int
	flags     uint8
	// buckets 的对数 log_2
	B         uint8
	// overflow 的 bucket 近似数
	noverflow uint16
	// 计算 key 的哈希的时候会传入哈希函数
	hash0     uint32
    // 指向 buckets 数组，大小为 2^B
    // 如果元素个数为0，就为 nil
	buckets    unsafe.Pointer
	// 等量扩容的时候，buckets 长度和 oldbuckets 相等
	// 双倍扩容的时候，buckets 长度会是 oldbuckets 的两倍
	oldbuckets unsafe.Pointer
	// 指示扩容进度，小于此地址的 buckets 迁移完成
	nevacuate  uintptr
	extra *mapextra // optional fields
}
```
![image](/images/map.png)

map的哈希函数：在程序启动时，会检测 cpu 是否支持 aes，如果支持，则使用 aes hash，否则使用 memhash。
map使用链地址法处理哈希冲突，因此当哈希碰撞发生时，map会最终退化成一个链表。

- map的遍历
map会在遍历开始时，生成随机树种子，随机的访问其中的一个bucket，另外由于map会有扩容搬迁过程，导致map的遍历是**一定**会无序的

- map的赋值

- map的扩容

- map的key可以有哪些

Go 语言中只要是可比较的类型都可以作为 key。除开 slice，map，functions 这几种类型，其他类型都是 OK 的。具体包括：布尔值、数字、字符串、指针、通道、接口类型、结构体、只包含上述类型的数组。
任何类型都可以作为 value，包括 map 类型。

- map的线程安全
map不是一个线程安全的结构，同时读写时会直接panic。
但如果在同一个协程内进行同时读写，不会被编译器检测到，但这是危险的操作。一般可以通过`sync.RWMutex`解决
`sync.Map`是线程安全的map，可以用来使用，但`sync.Map`没有`len`方法，需要自己遍历实现。

- map 深度相等的条件：

1. 都为 nil
2. 非空、长度相等，指向同一个 map 实体对象
3. 相应的 key 指向的 value “深度”相等


## 接口Interface
- 接口

接口支持鸭子类型`Duck Typing`。也就是编译器可以通过判断一个类型是否显式的实现了某一个接口。如果有，那么即便没有声明，也会被认为实现了该接口。

- 接口的值接受者和指针接受者

直接说结果：值接受者和指针接受者可以直接混用，这是编译器做了一些隐式转换。

| -      | 值接收者	 | 指针接收者 |
|---|----|----|
| 值类型调用者| 方法会使用调用者的一个副本，类似于“传值”	| 使用值的引用来调用方法  |
| 指针类型调用者| 指针被解引用为值 |实际上也是“传值”，方法里的操作会影响到调用者，类似于指针传参，拷贝了一份指针      |


使用指针作为方法的接收者的理由：

- 方法能够修改接收者指向的值。
- 避免在每次调用方法时复制该值，在值的类型为大型结构体时，这样做会更加高效。






## Channel

## go标准库

## 调度器

- 调度器
go程序的执行由两部分组成，go Program 和 Runtime， 他们通过函数调用来实现内存灌流吗，channel通信，goroutines创建等。用户程序进行的系统调用都会被拦截，以此来帮助它进行调度和GC。

调度器有3个最基础的部分，g, m, p。 

- `g`表示一个goroutine，他表示goroutine栈的一些字段，指示当前运行的状态

- `m`表示内核线程，包含正在运行的goroutine等字段

- `p`表示一个虚拟的Processor，它维护一个处于runnalbe的g队列，m需要获得p才能运行。

当然还有一个核心结构体`sched`，它纵览全局。

需要注意的是，有的文章会提到go是协作式调度，但现在go会同时有 `同步协作式调度`和`异步抢占式调度` 。  [细节与原因](https://golang.design/under-the-hood/zh-cn/part2runtime/ch06sched/preemption/)

调度器的运行比较复杂，我们从我们需要知道的部分入手即可。
![image](/images/gmp-flow.png)

- goroutine
一个goroutine会有以下几种状态（简化）
  - Waiting, 等待
  - Runnable, 就绪，只要M给命令就可以运行
  - Executing, 运行，在M上执行命令

runtime程序在程序启动时，会创建M个线程，之后会有N个goroutine，这就是M:N模型。

- 工作窃取
当一个P发现自己的工作队列LRQ没有G时，会从其他P中“偷”一些G来运行，就是 `work stealing`。

> go的调度还有很多可以深挖，值得不断学习

## GC
- 三色标记法

go使用三色标记法来进行GC，用不同的颜色标记可能需要回收的对象

- 白色对象（可能死亡）：未被回收器访问到的对象。在回收开始阶段，所有对象均为白色，当回收结束后，白色对象均不可达。
- 灰色对象（波面）：已被回收器访问到的对象，但回收器需要对其中的一个或多个指针进行扫描，因为他们可能还指向白色对象。
- 黑色对象（确定存活）：已被回收器访问到的对象，其中所有字段都已被扫描，黑色对象中任何一个指针都不可能直接指向白色对象。

- STW

STW就是 `Stop the world`，在GC时，会进入短暂的暂停所有的运行，拖慢程序。进过不断优化，现在的GC仅需要几毫秒。

## 编译与运行

#### go程序的运行过程

参考文献里的一篇文章【探索 golang 程序启动过程】研究得比较深入，总结下：
1. 检查运行平台的CPU，设置好程序运行需要相关标志。
TLS的初始化。
2. runtime.args、runtime.osinit、runtime.schedinit 三个方法做好程序运行需要的各种变量与调度器。
3. runtime.newproc创建新的goroutine用于绑定用户写的main方法。
4. runtime.mstart开始goroutine的调度。
![image](/images/go_start.png)

#### 编译时的逃逸分析

简单地讲，逃逸分析就是分析程序中的内存是否会被分配到堆上去，而如果编译器判断变量会被分配到堆上，但变量在函数返回后不会被再次引用，这个变量还是会被分配到栈上。

go语音的分析原则是：如果一个函数返回对一个变量的引用，那么它就会发生逃逸。

逃逸的处理方法是
- 如果函数外部没有引用，则优先放到栈中
- 如果函数外部存在引用，则必定放到堆中


### 阅读
- [Go 程序员面试笔试宝典](https://golang.design/go-questions/)

- [Go 语言设计与实现](https://draveness.me/golang/)

- [Go语言原本](https://golang.design/under-the-hood/)
