import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "规则指南",
    icon: "creative",
    link: "/guide/",
  },
  { text: "示例规则", icon: "discover", link: "/demo/" },
  {
    text: "官方网站",
    icon: "home",
    link: "https://yangyxd.github.io/eso_doc/website/",
    // link: "http://yangyxd.gitee.io/eso/",
  },
]);
