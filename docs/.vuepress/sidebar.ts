import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  {
    text: "探索",
    icon: "icon-back-stage",
    prefix: "",
    link: "/contents/bookmark/Guide.md",
  },
  {
    text: "学习记录",
    icon: "icon-back-stage",
    prefix: "/contents/learning/",
    link: "Readme.md",
    children: [
      {
        text: "刷题笔记",
        icon: "emmet",
        prefix: "algorithum/",
        children: "structure"
      },
      {
        text: "Go学习笔记",
        icon: "app",
        collapsible: true,
        link: "golang.md",
      },
    ],
  },
  {
    text: "阅读",
    icon: "icon-back-stage",
    prefix: "",
    link: "/contents/Books.md",
  },
]);
