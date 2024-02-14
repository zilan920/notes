import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as n,b as s,d as c,e as i}from"./app-t8hEWciX.js";const l={},r=n("h1",{id:"_45-把数组排成最小的数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_45-把数组排成最小的数","aria-hidden":"true"},"#"),s(" 45. 把数组排成最小的数")],-1),u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993?tpId=13&tqId=11185&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},d=i(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组 {3，32，321}，则打印出这三个数字能排成的最小数字为 321323。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以看成是一个排序问题，在比较两个字符串 S1 和 S2 的大小时，应该比较的是 S1+S2 和 S2+S1 的大小，如果 S1+S2 &lt; S2+S1，那么应该把 S1 排在前面，否则应该把 S2 排在前面。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token class-name">PrintMinNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> numbers<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>s2 <span class="token operator">+</span> s1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> str <span class="token operator">:</span> nums<span class="token punctuation">)</span>
        ret <span class="token operator">+=</span> str<span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(v,_){const a=e("ExternalLinkIcon");return p(),o("div",null,[r,u,n("p",null,[n("a",k,[s("牛客网"),c(a)])]),d])}const f=t(l,[["render",m],["__file","45. 把数组排成最小的数.html.vue"]]);export{f as default};
