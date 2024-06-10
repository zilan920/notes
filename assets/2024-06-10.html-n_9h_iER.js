import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,e as s}from"./app-Tv3ccu14.js";const d={},l=s(`<p>2024年2月，我参加了tiktok Senior Backend engineer的面试，当天面试基本比较顺利，常见八股文都回答出来了，项目上的问题也都能应对，但是当天的笔试题却没有完整的做出来，最后陷入了奇怪的地方。一开始我只是以为自己思路有问题，直到后来仔细思考比对原题后才发现做题过程中的问题。</p><p>当天的面试，面试官出了一道“找到二叉树中序遍历的下一个节点”，题目的介绍是英文，并且操作界面类似codeforce，没有任何的代码上下文或者数据结构定义，按照界面说明需要自行完成输入与输出。在与面试官沟通后，面试官表示可以注重于面试题的回答，先不关心输入输出的给定。没想到这却成为了陷入题目误区的原因。</p><p>坦率的说这个面试题并不难，这甚至是剑指offer上的原题，按照题目设计者的思路，找到中序遍历的下一个节点只需要根据节点的状态进行分析：如果当前节点有右子树不为空，那就找到右子树的最左节点，否则就需要一路向上找到父节点中，第一个左节点是遍历节点的目标。而这里的关键点在于：剑指offer的原题中，给出的二叉树定义是有一个指向父节点的指针，因此可以方便的向上找到父节点。像这样</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Val <span class="token builtin">int</span>
  Left <span class="token operator">*</span>TreeNode
  Right <span class="token operator">*</span>TreeNode
  Next <span class="token operator">*</span>TreeNode <span class="token comment">// 指向父节点</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于这样的数据结构，我们可以很方便的写出答案：</p><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>func NextNode(node *TreeNode) *TreeNode {
  if node.Right != nil {
    p := node.Right
    for p.Left != nil { //一路找到右子树的最左节点
      p = p.Left
    }
    return p
  } else {
    for node.Next != nil {  // 向上查找
      parent := node.Next
      if parent.Left == node {  // 找到左节点是遍历节点的父节点
        return parent
      }
      node = node.Next
    }
  }
  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但当天的面试并非直接做题这么顺利：面试官首先没有给出二叉树包含父节点的重要条件，在做这个题之前，我并没有牢记下每一道剑指offer题目要求，并能从其中的条件判断是否有未给出的信息。除此以外，在我和面试官再三确认之后，面试官给出了程序入口函数也是错的在与面试官确认后，函数入口被误解成了<code>func NextNode(root *TreeNode, target *TreeNode)</code>，基于这样的条件，我势必需要分析根节点给出信息的必要性，尝试从根节点入手找到结果。</p><p>事实上，如果仅仅是上面这些情况下没做出来，这也并不是面试官的问题。在没有父节点指针的条件下，依然可以通过迭代的形式找到目标节点，这实际上是一个考察非递归形式的中序遍历，我们可以写出这样的代码：</p><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>func NextNode(root, node *TreeNode) *TreeNode {
  stack := make([]*TreeNode{}, 0)
  var inorder fale //  标记是否找到目标元素

  p := root
  for len(stack) &gt; 0 || p != nil {
      for p != nil {  // 循环将节点压入栈中
          stack = append(stack, p)  
          p = p.Left
      }
      p = stack[len(stack)-1] // 取出栈顶元素
      stack = stack[:len(stack)-1]
      if inorder {    // inorder 一开始为nil ,直到发现为目标node才更新
          return p
      }
      if p == node {  // 找到node了，更新inorder，此时继续循环，栈里下一个元素即为需要元素
        inorder = true
      }
      p = p.Right
  }
  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果面试能写出这样的代码，那也是可以正常通过的。我在面试中一开始想到了前面第一种方法中的查找方式。我想到了如果节点是当前节点的情况下如何向右查找，但由于不方便找到父节点而不能继续写下去。我没有背过剑指offer原题，也没有想到这里会有额外的节点可以使用。<br> 我开始与面试官沟通，在和面试官介绍了我的想法后，面试官肯定了我的一半思路，并表示就按照目前的想法往下写，我在这样的引导下只能强行思考如何向上找到想要的答案，面试官也没有给出更进一步的指引。最终时间耗尽，面试结束。</p><p>总结起来这道面试题的经历就是：面试官在遗漏重要信息，给出误导信息，并在沟通中给出了错误引导。面试总是具有随机与偶然性，一次面试也并不能代表整体水平，但在这次面试后，后续所有投递向tiktok的岗位全都被拒，这只能理解为这次面试的负面评价所致。这使得这次面试更具其意义。</p><p>记录下这次面试经历，希望提醒自己在后续的面试中能有更多对出题者的思考，而不是总被牵着脖子走。</p>`,12),a=[l];function r(c,o){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","2024-06-10.html.vue"]]);export{u as default};
