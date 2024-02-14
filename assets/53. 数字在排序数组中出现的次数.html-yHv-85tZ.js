import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as t,c as o,a as n,b as s,d as c,e as l}from"./app-t8hEWciX.js";const i={},u=n("h1",{id:"_53-数字在排序数组中出现的次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_53-数字在排序数组中出现的次数","aria-hidden":"true"},"#"),s(" 53. 数字在排序数组中出现的次数")],-1),r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2?tpId=13&tqId=11190&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Input:
nums = 1, 2, 3, 3, 3, 3, 4, 6
K = 3

Output:
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>只要能找出给定的数字 k 在有序数组第一个位置和最后一个位置，就能知道该数字出现的次数。</p><p>先考虑如何实现寻找数字在有序数组的第一个位置。正常的二分查找如下，在查找到给定元素 k 之后，立即返回当前索引下标。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> h <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>h <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> m<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            h <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            l <span class="token operator">=</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在查找第一个位置时，找到元素之后应该继续往前找。也就是当 nums[m]&gt;=k 时，在左区间继续查找，左区间应该包含 m 位置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> h <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>h <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token class-name">K</span><span class="token punctuation">)</span>
            h <span class="token operator">=</span> m<span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            l <span class="token operator">=</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> l<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找最后一个位置可以转换成寻找 k+1 的第一个位置，并再往前移动一个位置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">GetNumberOfK</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> first <span class="token operator">=</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token class-name">K</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> last <span class="token operator">=</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token class-name">K</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> nums<span class="token punctuation">.</span>length <span class="token operator">||</span> nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> last <span class="token operator">-</span> first<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意以上实现的查找第一个位置的 binarySearch 方法，h 的初始值为 nums.length，而不是 nums.length - 1。先看以下示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums = [2,2], k = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果 h 的取值为 nums.length - 1，那么在查找最后一个位置时，binarySearch(nums, k + 1) - 1 = 1 - 1 = 0。这是因为 binarySearch 只会返回 [0, nums.length - 1] 范围的值，对于 binarySearch([2,2], 3) ，我们希望返回 3 插入 nums 中的位置，也就是数组最后一个位置再往后一个位置，即 nums.length。所以我们需要将 h 取值为 nums.length，从而使得 binarySearch 返回的区间更大，能够覆盖 k 大于 nums 最后一个元素的情况。</p>`,13);function m(v,b){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,r,n("p",null,[n("a",k,[s("牛客网"),c(a)])]),d])}const y=e(i,[["render",m],["__file","53. 数字在排序数组中出现的次数.html.vue"]]);export{y as default};
