import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,e as d}from"./app.ee4a5059.js";const n={},l=d(`<p>这是一个算法题学习笔记，个人的学习记录整理。</p><h2 id="核心思路" tabindex="-1"><a class="header-anchor" href="#核心思路" aria-hidden="true">#</a> 核心思路</h2><h3 id="基础数据结构" tabindex="-1"><a class="header-anchor" href="#基础数据结构" aria-hidden="true">#</a> 基础数据结构</h3><h4 id="数组-链表" tabindex="-1"><a class="header-anchor" href="#数组-链表" aria-hidden="true">#</a> 数组/链表</h4><ul><li><p>数组思路：前缀和</p><p>将数组转换为前缀和，可以方便的计算某一段的和，也可以用于二维数组，计算范围的和</p></li><li><p>数组思路：差分数组</p><p>差分数组是前缀和的逆运算，可以用于区间加法，航班预订等问题。 差分数组的特点是，可以方便的一个数组批量的进行操作，当我们为一个数组区间进行增加或减小时，可以为仅操作差分数组区间的第一个与最后一个。再恢复为原有的数组。</p></li><li><p>滑动窗口法</p><p>滑动窗口是一种非常常用的算法思路，可以用来解决子串等问题。 与滑动窗口类似的还有快慢指针，左右指针，都是通过两个指针对链表进行操作。 一个简单的滑动窗口算法可以是这样</p></li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/*滑动窗口算法框架*/
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>有序数组二分搜索</li><li>原地修改数组</li><li>单链表 <ul><li>链表合并，链表分割</li><li>链表倒数第k个节点</li><li>链表中点，是否有环</li><li>两个链表是否相交</li></ul></li><li>递归操作链表</li></ul><h4 id="队列-栈" tabindex="-1"><a class="header-anchor" href="#队列-栈" aria-hidden="true">#</a> 队列/栈</h4><ul><li>队列和栈相互实现</li><li>括号匹配问题</li></ul><h4 id="数据结构设计" tabindex="-1"><a class="header-anchor" href="#数据结构设计" aria-hidden="true">#</a> 数据结构设计</h4><ul><li>LRU算法</li><li>LFU算法</li><li>查找/删除数组中任意元素</li></ul><h3 id="进阶数据结构" tabindex="-1"><a class="header-anchor" href="#进阶数据结构" aria-hidden="true">#</a> 进阶数据结构</h3><h4 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h4><h4 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h4><h4 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h4><h3 id="暴力算法" tabindex="-1"><a class="header-anchor" href="#暴力算法" aria-hidden="true">#</a> 暴力算法</h3><ul><li>DFS/回溯算法</li><li>BFS算法</li></ul><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h3><h4 id="经典动态规划" tabindex="-1"><a class="header-anchor" href="#经典动态规划" aria-hidden="true">#</a> 经典动态规划</h4><h4 id="背包问题" tabindex="-1"><a class="header-anchor" href="#背包问题" aria-hidden="true">#</a> 背包问题</h4>`,20),r=[l];function h(s,c){return e(),a("div",null,r)}const v=i(n,[["render",h],["__file","Algorithum.html.vue"]]);export{v as default};
