const n=JSON.parse(`{"key":"v-16635356","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/jzoffer/17.%20%E6%89%93%E5%8D%B0%E4%BB%8E%201%20%E5%88%B0%E6%9C%80%E5%A4%A7%E7%9A%84%20n%20%E4%BD%8D%E6%95%B0.html","title":"17. 打印从 1 到最大的 n 位数","lang":"zh-CN","frontmatter":{"description":"17. 打印从 1 到最大的 n 位数 题目描述 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数即 999。 解题思路 由于 n 可能会非常大，因此不能直接用 int 表示数字，而是用 char 数组进行存储。 使用回溯法得到所有的数。 public void print1ToMaxOfNDigits(int n) { if (n &lt;= 0) return; char[] number = new char[n]; print1ToMaxOfNDigits(number, 0); } private void print1ToMaxOfNDigits(char[] number, int digit) { if (digit == number.length) { printNumber(number); return; } for (int i = 0; i &lt; 10; i++) { number[digit] = (char) (i + '0'); print1ToMaxOfNDigits(number, digit + 1); } } private void printNumber(char[] number) { int index = 0; while (index &lt; number.length &amp;&amp; number[index] == '0') index++; while (index &lt; number.length) System.out.print(number[index++]); System.out.println(); }","head":[["meta",{"property":"og:url","content":"https://notes-page-mu.vercel.app/%E7%AE%97%E6%B3%95%E9%A2%98/jzoffer/17.%20%E6%89%93%E5%8D%B0%E4%BB%8E%201%20%E5%88%B0%E6%9C%80%E5%A4%A7%E7%9A%84%20n%20%E4%BD%8D%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"我的笔记"}],["meta",{"property":"og:title","content":"17. 打印从 1 到最大的 n 位数"}],["meta",{"property":"og:description","content":"17. 打印从 1 到最大的 n 位数 题目描述 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数即 999。 解题思路 由于 n 可能会非常大，因此不能直接用 int 表示数字，而是用 char 数组进行存储。 使用回溯法得到所有的数。 public void print1ToMaxOfNDigits(int n) { if (n &lt;= 0) return; char[] number = new char[n]; print1ToMaxOfNDigits(number, 0); } private void print1ToMaxOfNDigits(char[] number, int digit) { if (digit == number.length) { printNumber(number); return; } for (int i = 0; i &lt; 10; i++) { number[digit] = (char) (i + '0'); print1ToMaxOfNDigits(number, digit + 1); } } private void printNumber(char[] number) { int index = 0; while (index &lt; number.length &amp;&amp; number[index] == '0') index++; while (index &lt; number.length) System.out.print(number[index++]); System.out.println(); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T10:17:22.000Z"}],["meta",{"property":"article:author","content":"zihan"}],["meta",{"property":"article:modified_time","content":"2024-02-14T10:17:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17. 打印从 1 到最大的 n 位数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-14T10:17:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zihan\\",\\"url\\":\\"https://github.com/zilan920/notes\\"}]}"]]},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"解题思路","slug":"解题思路","link":"#解题思路","children":[]}],"git":{"createdTime":1707905842000,"updatedTime":1707905842000,"contributors":[{"name":"zihan.fang","email":"zihan.fang@bitdeer.com","commits":1}]},"readingTime":{"minutes":0.59,"words":177},"filePathRelative":"算法题/jzoffer/17. 打印从 1 到最大的 n 位数.md","localizedDate":"2024年2月14日","excerpt":"<h1> 17. 打印从 1 到最大的 n 位数</h1>\\n<h2> 题目描述</h2>\\n<p>输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数即 999。</p>\\n<h2> 解题思路</h2>\\n<p>由于 n 可能会非常大，因此不能直接用 int 表示数字，而是用 char 数组进行存储。</p>\\n<p>使用回溯法得到所有的数。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">print1ToMaxOfNDigits</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> n<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> number <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">[</span>n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">print1ToMaxOfNDigits</span><span class=\\"token punctuation\\">(</span>number<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">print1ToMaxOfNDigits</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> number<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> digit<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>digit <span class=\\"token operator\\">==</span> number<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">printNumber</span><span class=\\"token punctuation\\">(</span>number<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        number<span class=\\"token punctuation\\">[</span>digit<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">+</span> <span class=\\"token char\\">'0'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token function\\">print1ToMaxOfNDigits</span><span class=\\"token punctuation\\">(</span>number<span class=\\"token punctuation\\">,</span> digit <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">printNumber</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> number<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> index <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>index <span class=\\"token operator\\">&lt;</span> number<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&amp;&amp;</span> number<span class=\\"token punctuation\\">[</span>index<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">==</span> <span class=\\"token char\\">'0'</span><span class=\\"token punctuation\\">)</span>\\n        index<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>index <span class=\\"token operator\\">&lt;</span> number<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span>number<span class=\\"token punctuation\\">[</span>index<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
