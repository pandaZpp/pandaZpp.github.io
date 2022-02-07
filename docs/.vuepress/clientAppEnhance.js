import {defineClientAppEnhance} from '@vuepress/client'

function integrateGitalk(router) {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://unpkg.com/gitalk/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://unpkg.com/gitalk/dist/gitalk.min.js';
  document.head.appendChild(linkGitalk);
  document.head.appendChild(scriptGitalk)

  router.afterEach((to, from) => {
    if (to.path === from.path) return
    if (scriptGitalk.onload) {
      setTimeout(() => {
        createGitalk(to.path)
      }, 500)
    } else {
      scriptGitalk.onload = () => {
        createGitalk(to.path)
      }
    }
  })
}

function createGitalk(path) {
  const $page = document.querySelector('.page')
  // gitalk容器
  let container = document.getElementById('gitalk-container');
  //container存在删除
  if (container) {
    container.parentNode.removeChild(container)
  }
  container = document.createElement('div')
  container.id = 'gitalk-container'
  container.classList.add('content')
  $page && $page.appendChild(container)
  renderGitalk(path)
}

function renderGitalk(fullPath) {
  const gitalk = new Gitalk({
    clientID: 'a0cfa040589bb2597f5e',
    clientSecret: 'b4e44029b47731e76105405c98711b09be6a1ac5', // come from github development
    repo: 'jiqiangzhu.github.io',
    owner: 'jiqiangzhu',
    admin: ['jiqiangzhu'],
    id: fullPath.slice(1, -5),
    distractionFreeMode: false,
    language: 'zh-CN',
  });
  gitalk.render('gitalk-container');
}

export default defineClientAppEnhance(({app, router, siteData}) => {
  try {
    document && integrateGitalk(router)
  } catch (e) {
    console.error('e', e.message)
  }
})
