const { path } = require('@vuepress/utils')

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '我准备起飞',
  description: '起飞！唉~飞',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  clientAppEnhanceFiles: path.resolve(
    __dirname,
    './clientAppEnhance.js'
  ),
  themeConfig: {
    navbar: [
      {
        text: '欢迎来到我的博客',
        link: '/',
      },
      {
        text: 'HTML5、CSS3基础',
        link: '/basic/html5',
      },
      {
        text: 'JS高级',
        link: '/javascript/array-prototype',
      },
      {
        text: '计算机网络',
        link: '/network/http'
      }
    ],
    darkMode: true, // 是否展示切换夜间模式按钮
    repo: 'https://github.com/jiqiangzhu/jiqiangzhu.github.io',
    repoLabel: 'Github Repo',
    sidebarDepth: 1,
    sidebar: {
      '/': [
        {
          text: 'index',
          collapsable: true,
          children: ['README.md']
        }
      ],
      '/basic/': [
        {
          text: 'HTML5、CSS3',
          children: ['html5.md', 'css3.md']
        }
      ],
      '/javascript/': [
        {
          text: 'JS高级',
          children: ['array-prototype.md', 'es6.md', 'my-promise.md']
        }
      ],
      '/network/': [
        {
          text: '计算机网络',
          children: ['http.md']
        }
      ]
    }
  },
}