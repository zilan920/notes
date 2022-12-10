---
article: false
title: leetcode刷题笔记
icon: read
---

这是一个算法题学习笔记，个人的学习记录整理。

```
在 leetcode 中，考察数据结构的easy和medium难度常见例题有哪些，请回复每个例题中文名称，难度，出现频率，链接，将链接中的"leetcode.com"替换为"leetcode.cn"，不需要题目的详细描述，按他们的出现频率排序从高到低，请为每种数据结构举3个到7个示例，
```

在 leetcode 中，考察数据结构的 easy 和 medium 难度常见例题包括：

- 数组：
  - 反转数组（easy，高频，https://leetcode.cn/problems/reverse-array/）
  - 数组中出现次数超过一半的数字（medium，中频，https://leetcode.cn/problems/majority-element/）
  - 在排序数组中查找数字（easy，高频，https://leetcode.cn/problems/search-in-rotated-sorted-array/）
  - 寻找数组的中心索引（easy，中频，https://leetcode.cn/problems/find-pivot-index/）
  - 和为定值的两个数（easy，中频，https://leetcode.cn/problems/two-sum/）
- 链表：
  - 反转链表（easy，高频，https://leetcode.cn/problems/reverse-linked-list/）
  - 合并两个有序链表（easy，高频，https://leetcode.cn/problems/merge-two-sorted-lists/）
  - 回文链表（easy，中频，https://leetcode.cn/problems/palindrome-linked-list/）

- 栈：
  - 有效的括号（easy，高频，https://leetcode.cn/problems/valid-parentheses/）
  - 实现进制转换（medium，中频，https://leetcode.cn/problems/convert-base-10-to-base-2/）
  - 求最小元素（easy，中频，https://leetcode.cn/problems/min-stack/）
  - 用栈操作构建数组（medium，中频，https://leetcode.cn/problems/build-an-array-with-stack-operations/）


- 队列：
  - 用队列实现栈（easy，中频，https://leetcode.cn/problems/implement-queue-using-stacks/）
  - 用栈实现队列（easy，中频，https://leetcode.cn/problems/implement-queue-using-stacks/）
  - 最大值减去最小值小于或等于 num 的子数组数量（medium，中频，https://leetcode.cn/problems/number-of-subarrays-with-bounded-maximum/）

- 哈希表：
  - 两数之和（easy，高频，https://leetcode.cn/problems/two-sum/）
  - 存在重复元素（easy，中频，https://leetcode.cn/problems/contains-duplicate/）
  - 存在重复元素 III（medium，中频，https://leetcode.cn/problems/contains-duplicate-iii/）

- 二叉树：
  - 二叉树的最大深度（easy，高频，https://leetcode.cn/problems/maximum-depth-of-binary-tree/）
  - 二叉树的最小深度（easy，中频，https://leetcode.cn/problems/minimum-depth-of-binary-tree/）
  - 对称二叉树（easy，中频，https://leetcode.cn/problems/symmetric-tree/）

```
在 leetcode 中，考察算法的easy和medium难度常见例题有哪些，如搜索，动态规划法等，请回复每个例题中文名称，难度，出现频率，链接，将链接中的"leetcode.com"替换为"leetcode.cn"，不需要题目的详细描述，按他们的出现频率排序从高到低，请为每种算法举3个到7个示例，请将搜索下中的DFS和BFS等分开回答
```

- 深度优先搜索（DFS）：
  - 被围绕的区域（medium，高频，https://leetcode.cn/problems/surrounded-regions/）
  - 岛屿的周长（easy，高频，https://leetcode.cn/problems/island-perimeter/）
  - 岛屿的个数（medium，高频，https://leetcode.cn/problems/number-of-islands/）
  - 序列重构（medium，中频，https://leetcode.cn/problems/sequence-reconstruction/）

- 广度优先搜索（BFS）：
  - 岛屿的个数（medium，高频，https://leetcode.cn/problems/number-of-islands/）
  - 单词搜索（medium，高频，https://leetcode.cn/problems/word-search/）
  - 删除游戏（medium，中频，https://leetcode.cn/problems/delete-operation-for-two-strings/）

- 动态规划：
  - 买卖股票的最佳时机（easy，高频，https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/）
  - 打家劫舍（easy，高频，https://leetcode.cn/problems/house-robber/）
  - 最大子序和（easy，高频，https://leetcode.cn/problems/maximum-subarray/）
  - 最小路径和（medium，高频，https://leetcode.cn/problems/minimum-path-sum/）
  - 单词搜索 II（medium，中频，https://leetcode.cn/problems/word-search-ii/）
  - 不同路径 II（medium，中频，https://leetcode.cn/problems/unique-paths-ii/）


```
以下是原有的记录
```


## 核心思路

### 数据结构
#### 二叉树
- 遍历
    - 前序遍历
    - 中序遍历 
    - 后序遍历
    - 层序遍历
- 搜索
    - BST
    - AVL

### 数据结构
#### 链表
- 反转链表，递归法
- 回文链表
    回文，找中点，往两边扩散

#### 数组
- 前缀和数组
- 差分数组
- 滑动窗口法
- 二分搜索
- 常数时间操作

### 算法
#### 搜索
- 二分搜索
- DFS
    核心，做出选择，递归，撤回选择
- BFS

#### 动态规划法
- 明确base case
- 确定状态转移方程
- 带备忘录的动态规划法



### 思路
#### 双指针法
- 链表
    - 链表合并，链表分割
    - 链表倒数第k个节点
    - 链表中点，是否有环
    - 两个链表是否相交
- 数组
    - 原地修改数组，去除重复或反转
    - 二分查找
    - 两数之和，原地法
    - 寻找回文，从中间扩散法

#### 滑动窗口
- 字符串是否包含