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
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})