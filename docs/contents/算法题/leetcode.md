---
article: true
title: Leetcode
icon: read
---

## 数据结构

### 数组

- [移除元素](https://leetcode.cn/problems/remove-element/description/)

```go
func removeElement(nums []int, val int) int {
    slow, fast := 0, 0
    for fast < len(nums) {
        if nums[fast] != val {
            nums[slow] = nums[fast]
            slow ++
        }
         fast ++
    }
    return slow
}
```

- [移动零](https://leetcode.cn/problems/move-zeroes/description)

```go
func moveZeroes(nums []int)  {
    slow, fast := 0, 0
    for fast < len(nums) {
        if nums[fast] != 0 {
            nums[slow] = nums[fast]
            slow ++
        } 
        fast++
    }
    for slow < len(nums) {
        nums[slow] = 0
        slow ++ 
    }
}
```

- [合并区间](https://leetcode.cn/problems/merge-intervals/description)

### 链表

- [反转链表](https://leetcode.cn/problems/reverse-linked-list/description)

```go
func reverseList(head *ListNode) *ListNode {
    var pre *ListNode
    cur := head
    for cur != nil {
        next := cur.Next
        // point to pre
        cur.Next = pre
        // pre&cur to next
        pre = cur
        cur = next
    }
    return pre
}
```

- [合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/description)

```go
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    head := &ListNode{
        Val:  -1,
        Next: nil,
    }
    p := head
    for list1 != nil || list2 != nil {
        if list1 == nil || list2 == nil {
            if list1 == nil {
                p.Next = list2
                p = list2
                list2 = list2.Next
            } else if list2 == nil {
                p.Next = list1
                p = list1
                list1 = list1.Next
            }
        } else if list1.Val > list2.Val {
            p.Next = list2
            p = list2
            list2 = list2.Next
        } else if list1.Val <= list2.Val {
            p.Next = list1
            p = list1
            list1 = list1.Next
        }
    }
    return head.Next
}
```

- [合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/description)

- [两数相加](https://leetcode.cn/problems/add-two-numbers/description)

### 哈希表

### 二叉树

- [翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/description)

- [二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/description)

- [二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/description)

- [验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/description)

- [二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description)

### 字符串

### 栈，堆与队列

- [有效的括号](https://leetcode.cn/problems/valid-parentheses/description)

- [最小栈](https://leetcode.cn/problems/min-stack/description)

```go
type Node struct {
        Min int
        Val int
    }

type MinStack struct {
	Stack []Node
}

func Constructor() MinStack {
	stack := make([]Node, 0)
	return MinStack{
		Stack: stack,
	}
}

func (this *MinStack) Push(val int) {
	m := val
	if len(this.Stack) > 0 {
		m = min(this.Stack[len(this.Stack)-1].Min, val)
	}
	this.Stack = append(this.Stack, Node{
		Min: m,
		Val: val,
	})
}

func (this *MinStack) Pop() {
	this.Stack = this.Stack[:len(this.Stack)-1]
}

func (this *MinStack) Top() int {
	if len(this.Stack) == 0 {
		return 0
	}
	return this.Stack[len(this.Stack)-1].Val
}

func (this *MinStack) GetMin() int {
	if len(this.Stack) == 0 {
		return 0
	}
	return this.Stack[len(this.Stack)-1].Min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
```

- [数组中第k大个元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/description)

### 数据结构设计

- LRU

## 算法

### 贪心法

### 回溯法

- [全排列](https://leetcode.cn/problems/permutations/description)

```go
var res [][]int
func permute(nums []int) [][]int {
    res = make([][]int, 0)
    list := make([]int, 0)
    findPermute(list, nums, len(nums))
    return res
}

func findPermute(list []int, nums []int, length int) {
    if len(list) == length {
        res = append(res, append([]int{}, list...))
        return
    }
    for k, num := range nums {
        resNums := append([]int{},  nums[0:k]... )
        resNums = append(resNums, nums[k+1:]...)
        findPermute(append(list, num), resNums, length)
    }
}
```

- [目标和](https://leetcode.cn/problems/target-sum/description/) (回溯法)

```go
func findTargetSumWays(nums []int, target int) (count int) {
    var backtrack func(int, int)
    backtrack = func(index, sum int) {
        if index == len(nums) {
            if sum == target {
                count++
            }
            return
        }
        backtrack(index+1, sum+nums[index])
        backtrack(index+1, sum-nums[index])
    }
    backtrack(0, 0)
    return
}
```

### DFS

### BFS

### 动态规划法

- [最大子数组和](https://leetcode.cn/problems/maximum-subarray/description)

```go
func maxSubArray(nums []int) int {
	preSum := make([]int, len(nums))
	preSum[0] = nums[0]
	for i := 1; i < len(nums); i++ {
		preSum[i] = preSum[i-1] + nums[i]
	}

	var ans = nums[0]
	for i := 0; i < len(nums); i++ {
		for j := 0; j < i; j++ {
			ans = max(ans, preSum[i]-preSum[j] + nums[j])
		}
	}
	return ans

}
```

- [爬楼梯](https://leetcode.cn/problems/climbing-stairs/description)

- [换零钱](https://leetcode.cn/problems/coin-change/description)

- [最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/description)

```go
func lengthOfLIS(nums []int) int {
    dp := make([]int, len(nums))
    dp[0] = 1
    lis := 1
    for i := 1; i< len(nums); i++ {
        dp[i] = 1
        for j:= 0 ; j < i; j ++ {
            if nums[j] < nums[i] {
                dp[i] = max(dp[j] + 1, dp[i])
            }
        }
        lis = max(lis, dp[i])
    }
    return lis
}
```

- [目标和](https://leetcode.cn/problems/target-sum/description/) (转化为动态规划法：0-1背包问题)

0-1背包：有n个物品，每个物品的体积为W[i]，价值为v[i]，每个物品最多选一个，求体积不超过capacity时的最大价值和

回溯三问：

- 当前操作：枚举第i个物品时选或者不选
  - 选：剩余容量减少w[i]
  - 不选：剩余容量不变

- 子问题：在剩余容量为c时，从前i个物品中得到的最大价值和

- 下一个子问题：
  - 不选： 在剩余容量为c时，从前i-1个物品中得到的最大价值和
  - 选：从剩余容量为c-w[i]时，从前i-1个物品中得到的最大价值和

```dfs(i, c) = max(dfs(i-1, c), dfs(i-1, c-w[i]) + v[i])```

常见变形

- 至多装capacity，求方案数/最大价值和
- 恰好装capacity，求方案数/最大/最小价值和
- 至少装capacity，求方案数/最小价值和

- [零钱兑换](https://leetcode.cn/problems/coin-change/)


### 二分搜索

### 排序

- 快速排序

```go
func quickSort(arr []int, low, high int) {
	if low < high {
		pivotIndex := partition(arr, low, high)

		quickSort(arr, low, pivotIndex-1)
		quickSort(arr, pivotIndex+1, high)
	}
}

func partition(arr []int, low, high int) int {
	pivot := arr[high]
	i := low - 1

	for j := low; j < high; j++ {
		if arr[j] <= pivot {
			i++
			arr[i], arr[j] = arr[j], arr[i]
		}
	}

	arr[i+1], arr[high] = arr[high], arr[i+1]
	return i + 1
}
```

## 算法技巧

### 双指针

- [盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/description)

### 滑动窗口

- [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description)

```go
func lengthOfLongestSubstring(s string) int {
    record := make(map[byte]int)
    left, right := 0, 0
    res := 0
    for right < len(s) {
        c := s[right]
        if _, ok := record[c]; ok {
            record[c]++
        } else {
            record[c] = 1
        }
        right ++
        for left < right && record[c] > 1 {
            record[s[left]]--
            left ++ 
        }
        res = max(res, right - left)
    }
    return res
}
```

### 前缀和与差分数组

- [和为 K 的子数组](https://leetcode.cn/problems/subarray-sum-equals-k/description)
