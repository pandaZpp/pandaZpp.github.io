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
    console.log('scriptGitalk', scriptGitalk);
    if (scriptGitalk.onload) {
      console.log('is onload');
      loadGitalk(to);
    } else {
      console.log('onload');
      scriptGitalk.onload = () => {
        loadGitalk(to);
      }
    }
  });

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container');
    console.log('commentsContainer', commentsContainer);
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
      clientID: 'bce9659cd5d31d2e40c1',
      clientSecret: 'b9c9be97500d406a62a99dc0161fb0f72477ba5d', // come from github development
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
