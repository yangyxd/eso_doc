import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // base: "/eso/wiki/",
  base: "/eso_doc/website/wiki/",
  lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "亦搜大白版 - 使用指南",
      description: "eso wiki,亦搜,大白版,使用指南,eso帮助,eso文档",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Also search (eso) big white version of the user's guide",
    //   description: "eso wiki",
    // },
  },

  theme,

  shouldPrefetch: false,
});
