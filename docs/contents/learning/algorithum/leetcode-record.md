---
article: false
title: leetcode刷题笔记
icon: read
---

这是一个算法题学习笔记，个人的学习记录整理。


## 核心思路
### 基础数据结构
#### 数组/链表
-   数组思路：前缀和
    
    将数组转换为前缀和，可以方便的计算某一段的和，也可以用于二维数组，计算范围的和
-   数组思路：差分数组
    
    差分数组是前缀和的逆运算，可以用于区间加法，航班预订等问题。
    差分数组的特点是，可以方便的一个数组批量的进行操作，当我们为一个数组区间进行增加或减小时，可以为仅操作差分数组区间的第一个与最后一个。再恢复为原有的数组。
-   滑动窗口法

    滑动窗口是一种非常常用的算法思路，可以用来解决子串等问题。
    与滑动窗口类似的还有快慢指针，左右指针，都是通过两个指针对链表进行操作。
    一个简单的滑动窗口算法可以是这样

```c++
/*滑动窗口算法框架*/
void slidingWindow(string s, string t) { 
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;
    int left = 0, right = 0;
    int valid = 0;
    while (right < s.size()) {
        char c = s[right]; // c是将移入窗口的字符
        // right++; 右移窗口
        //  进行窗口内数据的更新
        // ...
        printf("window: [%d, %d)\n", left, right); /*** debug ***/
        while (window needs shrink) { //判断左侧窗口是否要收缩
            char d = s[left]; // d是将移出窗口的字符
            // left++; 左移窗口
            //...进行窗口内数据的更新
        }
    }
}
```

-   有序数组二分搜索
-   原地修改数组
-   单链表
    - 链表合并，链表分割
    - 链表倒数第k个节点
    - 链表中点，是否有环
    - 两个链表是否相交
-   递归操作链表
#### 队列/栈
-   队列和栈相互实现
-   括号匹配问题

#### 数据结构设计
-   LRU算法
-   LFU算法
-   查找/删除数组中任意元素

### 进阶数据结构
#### 二叉树
#### 二叉搜索树
#### 图
### 暴力算法
-   DFS/回溯算法
-   BFS算法
### 动态规划
#### 经典动态规划
#### 背包问题