import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "规则指南",
      // icon: "note",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      // icon: "discover",
      text: "示例规则",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      // icon: "discover",
      text: "参考资料",
      prefix: "reference/",
      children: [
        "regex",
        "css",
        "xpath",
        "jsonpath",
      ],
    },
  ],
});
