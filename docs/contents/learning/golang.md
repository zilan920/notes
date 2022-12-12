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
1.18 版本的实现可以通过这里查看：https://github.com/golang/go/blob/dev.boringcrypto.go1.18/src/runtime/slice.go#L166
master分支的实现在这里：https://github.com/golang/go/blob/master/src/runtime/slice.go#L157
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
![image](https://golang.design/go-questions/map/assets/0.png)

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


### map
### 

## 接口Interface

## Channel

## go标准库

## 调度器

## GC

## 编译与运行

#### go程序的运行过程
#### 编译时的逃逸分析



### 阅读
- [Go 程序员面试笔试宝典](https://golang.design/go-questions/)

- [Go 语言设计与实现](https://draveness.me/golang/)

