import { defineClientAppEnhance } from '@vuepress/client'

function integrateGitalk(router) {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://unpkg.com/gitalk/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://unpkg.com/gitalk/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);
  router.afterEach((to) => {
    if (scriptGitalk.onload) {
      loadGitalk(to);
    } else {
      scriptGitalk.onload = () => {
        loadGitalk(to);
      }
    }
  });

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container');
    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList.add('content');
    }
    const $page = document.querySelector('.page');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.fullPath);
      }
    }
  }
  function renderGitalk(fullPath) {
    const gitalk = new Gitalk({
      clientID: 'e3b7d6ff4ec271505fca',
      clientSecret: 'fd60b763b43092a2a135137bea33a7496f8b77be', // come from github development
      repo: 'jiqiangzhu.github.io',
      owner: 'jiqiangzhu',
      admin: ['jiqiangzhu'],
      id: 'comment',
      distractionFreeMode: false,
      language: 'zh-CN',
    });
    gitalk.render('gitalk-container');
  }
}

export default defineClientAppEnhance(({ app, router, siteData }) => {
  try {
    document && integrateGitalk(router)
  } catch (e) {
    console.error('e', e.message)
  }
})
