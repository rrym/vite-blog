interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
}

/**
 * TODO: 缺项处理
 * 在此处填写你的项目介绍
 */
export const projectsInfo: Project[] = [
  {
    banner: "/project-img/Soybean.png",
    title: "SoybeanAdmin",
    description:"SoybeanAdmin清新优雅的中后台模版基于 Vue3,Vite5,TypeScript 和 UnoCSS",
    link: "https://docs.soybeanjs.cn/zh/",
    tag: "Vue",
  },
  {
    banner: "/project-img/cloudMusic.png",
    title: "CloudMusic",
    description: "对移动端网易云音乐的模仿与复现，实现了虚拟列表与无限滚动...",
    link: "https://github.com/ZbWeR/NeteaseCloudMusic",
    tag: "Vue",
  },
  {
    banner: "/project-img/NaiveUI.png",
    title: "Naive UI",
    description:
      "一个 Vue 3 组件库比较完整，主题可调，使用 TypeScript，快有点意思",
    link: "https://www.naiveui.com/zh-CN/os-theme",
    tag: "组件库",
  },
  {
    banner: "/project-img/dora-bot.png",
    title: "Dora-bot",
    description:
      "基于 go-cqhttp 框架开发的QQ聊天机器人，接入 mongodb 存储消息记录以实现虚假的学习功能.",
    link: "https://github.com/ZbWeR/qqbot-Dora",
    tag: "Python",
  },
  {
    banner: "/project-img/ruleMining.png",
    title: "Rule Mining",
    description:
      "采用 Apriori / Fpgrowth / Eclat 算法对超市商品数据集进行关联规则的挖掘.",
    link: "https://github.com/ZbWeR/Association-rule-mining",
    tag: "Python",
  },
  {
    banner: "/project-img/dinosaur.png",
    title: "Dinosaur-Game",
    description: "基于 EasyX 开发的一款游戏内容更加丰富的谷歌断网小恐龙游戏.",
    link: "https://github.com/ZbWeR/Dinosaur-Game",
    tag: "C++",
  },
];
