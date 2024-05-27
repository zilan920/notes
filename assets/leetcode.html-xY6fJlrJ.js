const n=JSON.parse('{"key":"v-62dbca93","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/leetcode.html","title":"Leetcode","lang":"zh-CN","frontmatter":{"article":true,"title":"Leetcode","icon":"read","description":"数据结构 数组 移除元素 func removeElement(nums []int, val int) int { slow, fast := 0, 0 for fast &lt; len(nums) { if nums[fast] != val { nums[slow] = nums[fast] slow ++ } fast ++ } return slow }","head":[["meta",{"property":"og:url","content":"https://notes-page-mu.vercel.app/%E7%AE%97%E6%B3%95%E9%A2%98/leetcode.html"}],["meta",{"property":"og:site_name","content":"我的笔记"}],["meta",{"property":"og:title","content":"Leetcode"}],["meta",{"property":"og:description","content":"数据结构 数组 移除元素 func removeElement(nums []int, val int) int { slow, fast := 0, 0 for fast &lt; len(nums) { if nums[fast] != val { nums[slow] = nums[fast] slow ++ } fast ++ } return slow }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T14:49:56.000Z"}],["meta",{"property":"article:author","content":"zihan"}],["meta",{"property":"article:modified_time","content":"2024-05-27T14:49:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Leetcode\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T14:49:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zihan\\",\\"url\\":\\"https://github.com/zilan920/notes\\"}]}"]]},"headers":[{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"链表","slug":"链表","link":"#链表","children":[]},{"level":3,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]},{"level":3,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[]},{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"栈，堆与队列","slug":"栈-堆与队列","link":"#栈-堆与队列","children":[]},{"level":3,"title":"数据结构设计","slug":"数据结构设计","link":"#数据结构设计","children":[]}]},{"level":2,"title":"算法","slug":"算法","link":"#算法","children":[{"level":3,"title":"贪心法","slug":"贪心法","link":"#贪心法","children":[]},{"level":3,"title":"回溯法","slug":"回溯法","link":"#回溯法","children":[]},{"level":3,"title":"DFS","slug":"dfs","link":"#dfs","children":[]},{"level":3,"title":"BFS","slug":"bfs","link":"#bfs","children":[]},{"level":3,"title":"动态规划法","slug":"动态规划法","link":"#动态规划法","children":[]},{"level":3,"title":"二分搜索","slug":"二分搜索","link":"#二分搜索","children":[]},{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[]}]},{"level":2,"title":"算法技巧","slug":"算法技巧","link":"#算法技巧","children":[{"level":3,"title":"双指针","slug":"双指针","link":"#双指针","children":[]},{"level":3,"title":"滑动窗口","slug":"滑动窗口","link":"#滑动窗口","children":[]},{"level":3,"title":"前缀和与差分数组","slug":"前缀和与差分数组","link":"#前缀和与差分数组","children":[]}]}],"git":{"createdTime":1707905842000,"updatedTime":1716821396000,"contributors":[{"name":"zihan.fang","email":"zihan.fang@bitdeer.com","commits":1},{"name":"zilan920","email":"zilan920@126.com","commits":1}]},"readingTime":{"minutes":4.35,"words":1306},"filePathRelative":"算法题/leetcode.md","localizedDate":"2024年2月14日","excerpt":"<h2> 数据结构</h2>\\n<h3> 数组</h3>\\n<ul>\\n<li><a href=\\"https://leetcode.cn/problems/remove-element/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">移除元素</a></li>\\n</ul>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">removeElement</span><span class=\\"token punctuation\\">(</span>nums <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">,</span> val <span class=\\"token builtin\\">int</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n    slow<span class=\\"token punctuation\\">,</span> fast <span class=\\"token operator\\">:=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span>\\n    <span class=\\"token keyword\\">for</span> fast <span class=\\"token operator\\">&lt;</span> <span class=\\"token function\\">len</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> nums<span class=\\"token punctuation\\">[</span>fast<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">!=</span> val <span class=\\"token punctuation\\">{</span>\\n            nums<span class=\\"token punctuation\\">[</span>slow<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">[</span>fast<span class=\\"token punctuation\\">]</span>\\n            slow <span class=\\"token operator\\">++</span>\\n        <span class=\\"token punctuation\\">}</span>\\n         fast <span class=\\"token operator\\">++</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> slow\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
