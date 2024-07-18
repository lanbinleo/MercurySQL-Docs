---
layout: home

title: MercurySQL
titleTemplate: 用更 Pythonic 的方式操作数据库

hero:
  name: MercurySQL
  text: 用更 Pythonic 的方式操作数据库
  tagline: 无需一行SQL编写，会Python就会数据库
  actions:
    - theme: brand
      text: 什么是 MercurySQL?
      link: /basic/introduction
    - theme: alt
      text: 快速开始
      link: /basic/fast-start
    - theme: alt
      text: GitHub
      link: https://github.com/BernieHuang2008/MercurySQL
  image:
      src: /mercury-logo-thin.png
      alt: MercuryLogo

features:
  - icon: 📝
    title: 专注Python
    details: 无需一行SQL编写，用Python操作数据库。
  - icon: <svg t="1721296186574" class="icon" viewBox="0 0 1024 1024" width="30" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1566" width="800" height="800"><path d="M512 384c-229.8 0-416-57.3-416-128v256c0 70.7 186.2 128 416 128s416-57.3 416-128V256c0 70.7-186.2 128-416 128z" fill="#caedde" p-id="1567"></path><path d="M512 704c-229.8 0-416-57.3-416-128v256c0 70.7 186.2 128 416 128s416-57.3 416-128V576c0 70.7-186.2 128-416 128zM512 320c229.8 0 416-57.3 416-128S741.8 64 512 64 96 121.3 96 192s186.2 128 416 128z" fill="#caedde" p-id="1568"></path></svg>
    title: 驱动 扩展
    details: 只需少许实现即可适配不同数据库，无需考虑数据库SQL差异，实现一码多用。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 6.554 6.555" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="2.983" y1=".53" x2="2.983" y2="4.744" id="A" gradientUnits="userSpaceOnUse"><stop stop-color="#97d9f6" offset="0%"/><stop stop-color="#0f80cc" offset="92.024%"/><stop stop-color="#0f80cc" offset="100%"/></linearGradient></defs><path d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z" fill="#0f80cc"/><path d="M4.81.437H.847c-.196 0-.355.16-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z" fill="url(#A)"/><path d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022c-.038-.087-.14-.272-.187-.352a8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002" fill="#003b57"/></svg>
    title: 原生支持 Sqlite
    details: 内置编写好的 Sqlite 驱动，轻量快速，迅速编写和测试后端。
  - icon: 🚀
    title: 快速 安全
    details: 原生 Python 驱动，安全生成SQL语句，减少SQL注入漏洞，保证安全性。
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>