import{e as n}from"./app.0f26bafb.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="async-await\u7528\u6CD5\u53CA\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#async-await\u7528\u6CD5\u53CA\u539F\u7406" aria-hidden="true">#</a> async-await\u7528\u6CD5\u53CA\u539F\u7406</h1><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>async\u4FEE\u9970\u7684\u65B9\u6CD5\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u8FD4\u56DE\u503C\u662F\u4E00\u4E2Apromise\u5BF9\u8C61</p><p>await\u5FC5\u987B\u5728async\u65B9\u6CD5\u4F53\u4E2D\u4F7F\u7528\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p><p>await\u4FEE\u9970\u8BED\u53E5\u8FD4\u56DE\u7ED3\u679C\u5F88\u53EF\u80FD\u662Frejected\uFF0C\u6240\u4EE5\u6700\u540E\u5305\u62EC\u5728try catch\u8BED\u53E5\u4E2D</p><p>await\u4F1A\u963B\u585E\u4EE3\u7801\uFF0C\u6700\u540E\u540E\u9762\u8DDF\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u4F1A\u62FF\u5230promise\u8FD4\u56DE\u7684\u7ED3\u679C</p><p>\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u62FF\u5230\u7684value&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token comment">// \u6362\u6210await</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u62FF\u5230\u7684value&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="async\u548Cawait\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#async\u548Cawait\u7684\u539F\u7406" aria-hidden="true">#</a> async\u548Cawait\u7684\u539F\u7406</h2><p>async\u51FD\u6570\u5C31\u662Fgenerator\u751F\u6210\u5668\u51FD\u6570\u7684\u8BED\u6CD5\u7CD6</p><p>\u7406\u89E3async\u539F\u7406\u4E4B\u524D\u5148\u8981\u641E\u61C2\u751F\u6210\u5668\u7684\u6982\u5FF5</p><p><strong>async\u51FD\u6570\u5C31\u662F\u628A*\u66FF\u6362\u6210async\uFF0Cawait\u66FF\u6362\u6210yield</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u540C\u4E8E</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  <span class="token keyword">return</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token parameter">genF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> gen <span class="token operator">=</span> <span class="token function">genF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token parameter">nextF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> next <span class="token operator">=</span> <span class="token function">nextF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> 
      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668" aria-hidden="true">#</a> \u751F\u6210\u5668</h3><p>\u751F\u6210\u5668\u51FD\u6570\u5728\u9047\u5230 yield \u5173\u952E\u5B57\u4E4B\u524D\u4F1A\u6B63\u5E38\u6267\u884C</p><blockquote><p>* \u51FD\u6570\u540D\u79F0\u524D\u52A0\u4E00\u4E2A\u661F\u53F7\uFF08*\uFF09\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u751F\u6210\u5668</p><p>yield \u4E2D\u65AD\u751F\u6210\u5668\u51FD\u6570\u6267\u884C\u7684\u5173\u952E\u5B57</p></blockquote><p>\u8C03\u7528\u751F\u6210\u5668\u4F1A\u4EA7\u751F\u4E00\u4E2A\u751F\u6210\u5668\u5BF9\u8C61\uFF0C\u4E00\u5F00\u59CB\u5904\u4E8Esuspend\u7684\u72B6\u6001\uFF0C\u6682\u505C\u6267\u884C</p><p>\u751F\u6210\u5668\u5BF9\u8C61\u5B9E\u73B0\u4E86Iterator\u63A5\u53E3\uFF0C\u5177\u6709next\u65B9\u6CD5</p><h3 id="async\u51FD\u6570\u5BF9generator\u7684\u6539\u8FDB" tabindex="-1"><a class="header-anchor" href="#async\u51FD\u6570\u5BF9generator\u7684\u6539\u8FDB" aria-hidden="true">#</a> <strong>async\u51FD\u6570\u5BF9generator\u7684\u6539\u8FDB</strong></h3><ol><li><p>\u5185\u7F6E\u6267\u884C\u5668\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528next()\u624B\u52A8\u6267\u884C\u3002</p></li><li><p>await\u547D\u4EE4\u540E\u9762\u53EF\u4EE5\u662FPromise\u5BF9\u8C61\u6216\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0Cyield\u547D\u4EE4\u540E\u9762\u53EA\u80FD\u662FThunk\u51FD\u6570\u6216Promise\u5BF9\u8C61\u3002</p></li><li><p>\u8FD4\u56DE\u503C\u662FPromise\u3002\u8FD4\u56DE\u975EPromise\u65F6\uFF0Casync\u51FD\u6570\u4F1A\u628A\u5B83\u5305\u88C5\u6210Promise\u8FD4\u56DE\u3002(Promise.resolve(value))</p></li></ol><h3 id="\u8FED\u4EE3\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668" aria-hidden="true">#</a> \u8FED\u4EE3\u5668</h3><p>\u652F\u6301\u8FED\u4EE3\u7684\u81EA\u6211\u8BC6\u522B\u80FD\u529B\u548C\u521B\u5EFA\u5B9E\u73B0 Iterator \u63A5\u53E3\u7684\u5BF9\u8C61\u7684\u80FD\u529B\u3002\u5728 ECMAScript \u4E2D\uFF0C\u8FD9\u610F\u5473\u7740\u5FC5\u987B\u66B4\u9732\u4E00\u4E2A\u5C5E\u6027\u4F5C\u4E3A\u201C\u9ED8\u8BA4\u8FED\u4EE3\u5668\u201D\uFF0C\u800C \u4E14\u8FD9\u4E2A\u5C5E\u6027\u5FC5\u987B\u4F7F\u7528\u7279\u6B8A\u7684 Symbol.iterator \u4F5C\u4E3A\u952E\u3002</p><p>\u5B9E\u73B0\u4E86Iterator\u63A5\u53E3\u7684\u7C7B\u578B</p><ul><li>\u5B57\u7B26\u4E32</li><li>\u6570\u7EC4</li><li>\u6620\u5C04</li><li>\u96C6\u5408</li><li>arguments\u5BF9\u8C61</li><li>Node List\u7B49DOM\u96C6\u5408\u7C7B\u578B</li></ul><p>\u4E3E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> index<span class="token operator">++</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> index <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0 1 2 3 4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,26);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};