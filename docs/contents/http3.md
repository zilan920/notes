---
article: true
title: HTTP3 and RTT
icon: read
---

`几年前做了关于HTTP3的分享，为了避免遗忘，将内容整理出来并完善`



##### 什么是RTT
RTT是Round Trip Time的缩写，通俗地说，就是通信一来一回的时间。

##### 一次HTTP循环的时间

那么一次TCP建立连接时的握手，一共需要 1.5RTT
![TCP](./http3/d.png)

而对于一个HTTP请求&响应，加上HTTP Request&Response，算作一个1RTT。

那么基于TCP的的HTTP的消耗时间总和，就是 1.5RTT + 1RTT = 2.5RTT

##### 关于TLS下的RTT影响
在TLS下，一个HTTP循环需要多少RTT？

- TLS1.2
  - clientHello
  - ServerHello, Ask for certificate
  - 验证后发送Client Key Exchange, Change Cipher Spec
  - 服务端Change Cipher Spec

因此TLS1.2 握手： 2RTT

对于非首次连接，可以选择启用会话重用(Session Resumption)，可以缩小时间到1RTT

因而对于采用tls1.2的HTTP连接，需要 1.5 RTT (TCP)+ 1 RTT (HTTP Request & Response) + 2RTT(TLS) = 4.5RTT 时间

- TLS1.3

TLS1.3 引入了TLS1.2 会话重用机制的升级：密钥协商机制 - PSK (pre shared key)，使得消耗时间变为1 RTT

同样，对于非首次握手，可以支持 增加Early Data ，直接在握手阶段发送数据，相当于0-RTT （发送数据不需要额外RTT，即为0RTT）

因而一个HTTP通讯，需要 1.5 RTT(TCP)+ 1 RTT(HTTP Request & Response) + 1RTT(TLS) = 3.5RTT 时间

![TLS](./http3/tls.png)

##### 关于HTTP的影响

- HTTP1.x支持长连接 keep-live， pipeline

在HTTP1.x中，每个连接相互独立，因而每一个HTTP请求都需要3.5RTT。最终结果视请求量正比增长。

长连接带来的问题：在同一个 TCP 连接里面，所有的数据通信是按次序进行的。服务器只有处理完一个回应，才会进行下一个回应。要是前面的回应特别慢，后面就会有许多请求排队等着。这称为"队头堵塞"（Head-of-line blocking）。

这也带来pipeline技术，在相应到达之前，可以将多条请求放入队列，当第一条请求发往服务器的时候，第二第三条请求也可以开始发送了。
![keep-live-and-pipieline](./http3/keep-live-and-pipeline.png)

- HTTP/2 多路复用，头信息压缩

多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。即连接共享，即每一个 request 都是是用作连接共享机制的。一个 request 对应一个 id，这样一个连接上可以有多个 request，每个连接的 request 可以随机的混杂在一起，接收方可以根据 request 的 id 将 request 再归属到各自不同的服务端请求里面

复用TLS连接，第一个之后的每一个HTTP可以减少1.5RTT + 2RTT = 3.5 RTT时间
![multiplexing](./http3/multiplexing.png)

`问题： 头部阻塞`
TTP1.x 的 header 带有大量信息，而且每次都要重复发送，HTTP/2 使用 encoder 来减少需要传输的 header 大小，通讯双方各自cache 一份 header fields 表，既避免了重复 header 的传输，又减小了需要传输的大小。
![encoder](./http3/encoder.png)

##### QUIC !!

- 强大优势
    - 链接耗时更短，非首次连接支持0RTT
    - 拥塞控制更出色
    - 更好的多路复用
    - 前向纠错特性
    - 链接迁移特性
![quic](./http3/quic.png)

- 华丽转身

2018年 HTTP Over QUIC 更名 HTTP/3
![http1-3](./http3/http1-3.png)

##### 对比


|      | HTTP  | HTTPS 1.2 首次连接  | HTTPS 1.2 连接复用  |HTTPS 1.3 首次连接  | HTTPS 1.3 连接复用  |HTTP over QUIC首次连接  |HTTP over QUIC  连接复用|
|  ----  | ---- |----  |----  |----  |----  |----  |----  |
| TCP握手  | 1.5RTT |1.5RTT |0 RTT |1.5RTT |0 RTT | - | - |
| TLS握手  | - |2RTT |1RTT |1RTT |0RTT |- | -|
| QUIC握手  | - |  - | - | - | - | 1RTT | 0RTT |
| HTTP请求&响应  | 1RTT | 1RTT | 1RTT | 1RTT | 1RTT | 1RTT | 1RTT |
| 合计  | 2.5RTT |4.5RTT |2RTT |3.5RTT |1RTT |2RTT |1RTT|