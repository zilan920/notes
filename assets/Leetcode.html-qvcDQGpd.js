import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-cEsSLNcl.js";const i={},l=e(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>双指针与链表 <ul><li><p>合并有序链表</p><ul><li>拉链法</li><li>多个链表合并：优先队列</li></ul></li><li><p>拆分链表</p><pre><code>直接使用两个节点遍历，按条件分别生成两个链表，最后合并起来，注意中途要拆分原有的关联
</code></pre></li><li><p>合并k个有序链表</p><pre><code>类似合并2个有序链表，但这里使用到了优先级队列，快速找到最小的节点。优先级队列属于单独的数据结构，需要了解
</code></pre></li><li><p>单链表的倒数第 k 个节点</p><pre><code>两个指针，第一个先走k步，再将两个指针一起走，最后第一个指针到达尾部时，第二个刚好走了n-k步
类似的还有删除倒数第k个节点
</code></pre></li><li><p>链表中点</p><pre><code>直接使用快慢指针
</code></pre></li><li><p>判断是否包含环</p><pre><code>使用快慢指针，如果两个指针相交则表示包含环，相交后任意一个节点回到头，然后相同速度往前走，再次相交则为相交的起点。
</code></pre></li><li><p>两个链表是否相交</p><pre><code>两个指针分别依次走两个链表，最后看是否相交。
类似的，也可以将两个链表首位相连，判断是否存在环
</code></pre></li><li><p>递归反转</p></li></ul></li></ul><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>func reverse(ListNode head) ListNode {
    if (head.next == null) return head;
    ListNode last = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>双指针与数组</p></li><li><p>有序数组二分搜索</p></li><li><p>二分搜索重在细节，特别是左右边界的判断，以及判断之后mid的变化</p></li><li><p>二分不仅仅用于显然的搜索场景，也可以用于一些特殊的搜索场景（如求极值）</p><pre><code>  在这类场景下，搜索目标往往不是一个清晰的数组，有时会是一个线性函数，需要结合具体例子来判断能够使用二分搜索。
</code></pre></li><li><p>田忌赛马</p><pre><code>  思路：比得过就比，比不过就用最差的来应对
</code></pre></li><li><p>快慢指针</p><ul><li><p>原地修改数组</p><pre><code>    删除排序数组中的重复元素等，直接使用快慢指针，发现一个与慢指针不同的时，将慢指针设置为新值，这样从0到慢指针就都为不同的元素了。
</code></pre></li></ul></li><li><p>左右指针</p><ul><li><p>二分查找</p><pre><code>    二分查找是一种左右指针的应用
</code></pre></li><li><p>两数之和，但是是有序数组</p><pre><code>    一左一右指针，相加和，如果结果大了则右边往左，结果小了则左边往右，如果指针相遇则没有结果
</code></pre></li><li><p>翻转数组</p><pre><code>    一左一右互换即可
</code></pre></li><li><p>判断回文</p><pre><code>    一左一右判断是否相等，一直持续到指针相遇。
    判断最长回文子串，也就是从中间开始向两边试图查找回文串，注意中心可能是当前字符，也可能是当前和接下来的字符
</code></pre></li></ul></li><li><p>动态规划法</p><p>核心思想在于找到分解问题，将问题降级再重新组装<br> 斐波那契数列：分解为前面2个数之和<br> 最长递增自学：当前序列是否为递增，新增下一个值是否依然为递增</p></li><li><p>回溯法</p><p>代码框架</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>回溯法本身不难，关键还是要多写
</code></pre><ul><li>BFS</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">// 计算从起点 start 到终点 target 的最近距离</span>
<span class="token keyword">int</span> <span class="token function">BFS</span><span class="token punctuation">(</span><span class="token class-name">Node</span> start<span class="token punctuation">,</span> <span class="token class-name">Node</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> q<span class="token punctuation">;</span> <span class="token comment">// 核心数据结构</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> visited<span class="token punctuation">;</span> <span class="token comment">// 避免走回头路</span>
    
    q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将起点加入队列</span>
    visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>q not empty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sz <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 将当前队列中的所有节点向四周扩散 */</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sz<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> cur <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/* 划重点：这里判断是否到达终点 */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur is target<span class="token punctuation">)</span>
                <span class="token keyword">return</span> step<span class="token punctuation">;</span>
            <span class="token comment">/* 将 cur 的相邻节点加入队列 */</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> x <span class="token operator">:</span> cur<span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>x not in visited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果走到这里，说明在图中没有找到目标节点</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>多写
</code></pre><ul><li><p>二分搜索</p><p>最重要还是细节</p></li><li><p>滑动窗口算法</p></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int left = 0, right = 0;

while (left &lt; right &amp;&amp; right &lt; s.size()) {
    // 增大窗口
    window.add(s[right]);
    right++;
    
    while (window needs shrink) {
        // 缩小窗口
        window.remove(s[left]);
        left++;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>n数之和</p><p>依然是将数组排序，左右指针互博。如果要获取大于2的结果，例如3数之和，则将一个数取出，计算剩下数组的n-k结果。</p></li></ul><h2 id="核心思路" tabindex="-1"><a class="header-anchor" href="#核心思路" aria-hidden="true">#</a> 核心思路</h2><h3 id="基础数据结构" tabindex="-1"><a class="header-anchor" href="#基础数据结构" aria-hidden="true">#</a> 基础数据结构</h3><h4 id="数组-链表" tabindex="-1"><a class="header-anchor" href="#数组-链表" aria-hidden="true">#</a> 数组/链表</h4><ul><li><p>数组思路：前缀和</p><p>将数组转换为前缀和，可以方便的计算某一段的和，也可以用于二维数组，计算范围的和</p></li><li><p>数组思路：差分数组</p><p>差分数组是前缀和的逆运算，可以用于区间加法，航班预订等问题。<br> 差分数组的特点是，可以方便的一个数组批量的进行操作，当我们为一个数组区间进行增加或减小时，可以为仅操作差分数组区间的第一个与最后一个。再恢复为原有的数组。</p></li><li><p>滑动窗口法</p><p>滑动窗口是一种非常常用的算法思路，可以用来解决子串等问题。<br> 与滑动窗口类似的还有快慢指针，左右指针，都是通过两个指针对链表进行操作。<br> 一个简单的滑动窗口算法可以是这样</p></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/*滑动窗口算法框架*/
void slidingWindow(string s, string t) { 
    unordered_map&lt;char, int&gt; need, window;
    for (char c : t) need[c]++;
    int left = 0, right = 0;
    int valid = 0;
    while (right &lt; s.size()) {
        char c = s[right]; // c是将移入窗口的字符
        // right++; 右移窗口
        //  进行窗口内数据的更新
        // ...
        printf(&quot;window: [%d, %d)\\n&quot;, left, right); /*** debug ***/
        while (window needs shrink) { //判断左侧窗口是否要收缩
            char d = s[left]; // d是将移出窗口的字符
            // left++; 左移窗口
            //...进行窗口内数据的更新
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>有序数组二分搜索</li><li>原地修改数组</li><li>单链表</li><li>链表合并，链表分割</li><li>链表倒数第k个节点</li><li>链表中点，是否有环</li><li>两个链表是否相交</li><li>递归操作链表</li></ul><h4 id="队列-栈" tabindex="-1"><a class="header-anchor" href="#队列-栈" aria-hidden="true">#</a> 队列/栈</h4><ul><li>队列和栈相互实现</li><li>括号匹配问题</li></ul><h4 id="数据结构设计" tabindex="-1"><a class="header-anchor" href="#数据结构设计" aria-hidden="true">#</a> 数据结构设计</h4><ul><li>LRU算法</li><li>LFU算法</li><li>查找/删除数组中任意元素</li></ul><h3 id="进阶数据结构" tabindex="-1"><a class="header-anchor" href="#进阶数据结构" aria-hidden="true">#</a> 进阶数据结构</h3><h4 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h4><h4 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h4><h4 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h4><h3 id="暴力算法" tabindex="-1"><a class="header-anchor" href="#暴力算法" aria-hidden="true">#</a> 暴力算法</h3><ul><li>DFS/回溯算法</li><li>BFS算法</li></ul><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h3><h4 id="经典动态规划" tabindex="-1"><a class="header-anchor" href="#经典动态规划" aria-hidden="true">#</a> 经典动态规划</h4><h4 id="背包问题" tabindex="-1"><a class="header-anchor" href="#背包问题" aria-hidden="true">#</a> 背包问题</h4>`,31),t=[l];function p(c,d){return s(),a("div",null,t)}const u=n(i,[["render",p],["__file","Leetcode.html.vue"]]);export{u as default};
