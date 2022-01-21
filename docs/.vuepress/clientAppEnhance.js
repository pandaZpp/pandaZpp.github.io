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
      clientID: 'a0cfa040589bb2597f5e',
      clientSecret: 'b4e44029b47731e76105405c98711b09be6a1ac5', // come from github development
      repo: 'jiqiangzhu.github.io',
      owner: 'jiqiangzhu',
      admin: ['jiqiangzhu', 'blairq-coding'],
      // id: 'comment',
      id: fullPath.slice(1, 50),
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
