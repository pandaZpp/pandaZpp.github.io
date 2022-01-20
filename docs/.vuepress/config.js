module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '我准备起飞',
  description: '起飞！唉~飞',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar: [
      {
        text: 'H5 C3基础',
        link: '/',
      },
      {
        text: 'JS高级',
        link: '/js/',
      },
      {
        text: '计算机网络',
        link: '/network/'
      }
    ],
    darkMode: true, // 是否展示切换夜间模式按钮
    repo: 'https://github.com/jiqiangzhu/Blog',
    repoLabel: 'Github Repo',
    sidebarDepth: 3,
    sidebar: {
      '/': [
        {
          text: 'H5、C3',
          children: ['README.md']
        }
      ],
      '/js/': [
        {
          text: 'JS高级',
          children: ['README.md', 'ES6.md', '手撕Promise.md']
        }
      ],
      '/network/': [
        {
          text: '计算机网络',
          children: ['README.md']
        }
      ]
    }
  },
}