import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "MercurySQL",
  description: "MercurySQL Users' Documents (MUD)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '基础介绍', link: '/basic/introduction' },
      { text: '快速开始', link: '/basic/fast-start' },
      { text: '详细文档', link: '/docs' },
    ],

    sidebar: [
      {
        text: '基础 Basic',
        items: [
          { text: '介绍', link: '/basic/introduction' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})