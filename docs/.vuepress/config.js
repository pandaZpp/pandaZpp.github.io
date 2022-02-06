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
    editLink: false,
    navbar: [
      {
        text: 'HTML5、CSS3基础',
        link: '/basic/',
      },
      {
        text: 'JS高级',
        link: '/javascript/',
      },
      {
        text: '计算机网络',
        link: '/network/'
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
          children: ['html5.md', 'css3.md', 'flex.md']
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
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
        hotKeys: [], //空数组禁用快捷键
      },
    ],
  ],
}