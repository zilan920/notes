import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,e as l}from"./app-cEsSLNcl.js";const s={},d=l(`<h1 id="code-collection" tabindex="-1"><a class="header-anchor" href="#code-collection" aria-hidden="true">#</a> code collection</h1><ul><li>min heap</li></ul><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>import (
    &quot;container/heap&quot;
    &quot;fmt&quot;
)

// An IntHeap is a min-heap of ints.
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] &lt; h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
    // Push and Pop use pointer receivers because they modify the slice&#39;s length,
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
    h := &amp;IntHeap{2, 1, 5}
    heap.Init(h)
    heap.Push(h, 3)
    fmt.Printf(&quot;minimum: %d\\n&quot;, (*h)[0]) // minimum: 1
    for h.Len() &gt; 0 {
        fmt.Printf(&quot;%d &quot;, heap.Pop(h)) // 1 2 3 5
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>priority queue</li></ul><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>type Item struct {
    word  string
    count int
}

type ItemHeap []Item

func (h ItemHeap) Len() int { return len(h) }

func (h ItemHeap) Less(i, j int) bool {
    if h[i].count != h[j].count {
        return h[i].count &lt; h[j].count
    } else {
        return h[i].word &gt; h[j].word
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

    h := &amp;ItemHeap{}
    for w, v := range countMap {
        heap.Push(h, Item{
            word:  w,
            count: v,
        })

        if h.Len() &gt; k {
            heap.Pop(h)
        }
    }

    res := make([]string, h.Len())
    for i := h.Len() - 1; i &gt;= 0; i-- {
        item := heap.Pop(h).(Item)
        res[i] = item.word
    }
    return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[d];function a(r,c){return i(),e("div",null,v)}const t=n(s,[["render",a],["__file","code-collect.html.vue"]]);export{t as default};
