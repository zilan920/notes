import { path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";

export default hopeTheme({
  // 主题选项：https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html
  hostname: "https://notes-page-mu.vercel.app/",

  author: {
    name: "zihan",
    url: "https://github.com/zilan920/notes",
  },

  iconAssets: "iconfont",
  logo: "/logo.svg",

  // 是否全局启用路径导航
  breadcrumb: false,

  // 页面元数据：贡献者，最后修改时间，编辑链接
  contributors: false,
  lastUpdated: true,
  editLink: true,

  // 深色模式配置
  // darkmode: "disable",
  // themeColor: {
  //   blue: "#2196f3",
  //   red: "#f26d6d",
  //   green: "#3eaf7c",
  //   orange: "#fb9b5f",
  // },
  fullscreen: true,

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "zilan920/notes",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  // 文档存放路径
  docsDir: "docs",

  // navbar
  navbar: navbar,
  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Outlook", "Search"],
  },
  // 是否在向下滚动时自动隐藏导航栏
  // navbarAutoHide: "always",

  // sidebar
  sidebar: "structure",
  // 侧边栏排序规则
  // sidebarSorter: ['readme', 'order', 'title'],

  // footer: "默认页脚",
  // displayFooter: true,

  // 页面布局 Frontmatter 配置：https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/layout.html#pageinfo
  pageInfo: ["Category", "Tag", "Word", "ReadingTime", "PageView"],

  // 主题功能选项：https://vuepress-theme-hope.github.io/v2/zh/config/theme/feature.html
  blog: {
  },
  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  hotReload: true,
  plugins: {
    blog: {
      // 自动摘要
      excerpt: true,
    },

    // 组件库
    components: {components: ["Badge", "BiliBili", "VideoPlayer", "YouTube"]},

    // 禁用不需要的配置
    mdEnhance: {
      align: true,
      attrs: true, // 使用特殊标记为 Markdown 元素添加属性
      // chart: true,
      // codetabs: true, // 代码块分组
      container: true,
      // demo: true, //代码演示
      // echarts: true,
      // flowchart: true,
      gfm: true,
      imgLazyload: true,
      // imageMark: true,
      imgSize: true,
      include: true, //导入文件
      // katex: true,
      mark: true,
      // mermaid: true,
      footnote: true,
      tasklist: true,
      sub: true, // 上下角标
      sup: true,
      // tabs: true, // 选项卡
      // vpre: true,
      // vuePlayground: true, // Vue 交互演示
    },

    // rss 属性
    feed: {
      rss: true,
      count: 10,
    },
  },
});
