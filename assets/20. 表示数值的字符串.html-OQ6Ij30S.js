import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as l,a as n,b as s,d as o,e as c}from"./app-iw62lmBx.js";const d={},r=n("h1",{id:"_20-表示数值的字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-表示数值的字符串","aria-hidden":"true"},"#"),s(" 20. 表示数值的字符串")],-1),u={href:"https://www.nowcoder.com/practice/e69148f8528c4039ad89bb2546fd4ff8?tpId=13&tqId=11206&tab=answerKey&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},p=c(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>true

&quot;+100&quot;
&quot;5e2&quot;
&quot;-123&quot;
&quot;3.1416&quot;
&quot;-1E-16&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>false

&quot;12e&quot;
&quot;1a3.14&quot;
&quot;1.2.3&quot;
&quot;+-5&quot;
&quot;12e+4.3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用正则表达式进行匹配。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>[]  ： 字符集合
()  ： 分组
?   ： 重复 0 ~ 1 次
+   ： 重复 1 ~ n 次
*   ： 重复 0 ~ n 次
.   ： 任意字符
\\\\. ： 转义后的 .
\\\\d ： 数字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> isNumeric <span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token string">&quot;[+-]?\\\\d*(\\\\.\\\\d+)?([eE][+-]?\\\\d+)?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,b){const a=t("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[n("a",u,[s("牛客网"),o(a)])]),p])}const _=e(d,[["render",v],["__file","20. 表示数值的字符串.html.vue"]]);export{_ as default};
