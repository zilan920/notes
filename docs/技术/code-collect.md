# code collection

- min heap

```golang
import (
    "container/heap"
    "fmt"
)

// An IntHeap is a min-heap of ints.
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
    // Push and Pop use pointer receivers because they modify the slice's length,
    // not just its contents.
    *h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

// This example inserts several ints into an IntHeap, checks the minimum,
// and removes them in order of priority.
func main() {
    h := &IntHeap{2, 1, 5}
    heap.Init(h)
    heap.Push(h, 3)
    fmt.Printf("minimum: %d\n", (*h)[0]) // minimum: 1
    for h.Len() > 0 {
        fmt.Printf("%d ", heap.Pop(h)) // 1 2 3 5
    }
}
```

- priority queue

```golang
type Item struct {
    word  string
    count int
}

type ItemHeap []Item

func (h ItemHeap) Len() int { return len(h) }

func (h ItemHeap) Less(i, j int) bool {
    if h[i].count != h[j].count {
        return h[i].count < h[j].count
    } else {
        return h[i].word > h[j].word
    }
}

func (h ItemHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

func (h *ItemHeap) Push(val interface{}) {
    *h = append(*h, val.(Item))
}

func (h *ItemHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

func topKFrequent(words []string, k int) []string {
    countMap := make(map[string]int)
    for _, word := range words {
        countMap[word]++
    }

    h := &ItemHeap{}
    for w, v := range countMap {
        heap.Push(h, Item{
            word:  w,
            count: v,
        })

        if h.Len() > k {
            heap.Pop(h)
        }
    }

    res := make([]string, h.Len())
    for i := h.Len() - 1; i >= 0; i-- {
        item := heap.Pop(h).(Item)
        res[i] = item.word
    }
    return res
}
```
