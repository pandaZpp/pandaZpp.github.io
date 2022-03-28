import{r as e,o,c as p,a as n,b as r,F as c,e as t,d as a}from"./app.0f26bafb.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";var l="/assets/canvas-clock.162185a5.png";const i={},u=t('<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> Html</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>(HyperText Markup Language) \u8D85\u6587\u672C\u6807\u8BB0\u8BED\u8A00\uFF0C\u662Fweb\u524D\u7AEF\u7684\u7ED3\u6784\u90E8\u5206\uFF0C\u7531\u4E00\u7CFB\u5217\u5143\u7D20\u6807\u7B7E\u7EC4\u6210</p><p>&lt;!DOCTYPE&gt; \u662F\u6587\u6863\u58F0\u660E</p><p>H5\u4E0D\u57FA\u4E8ESGML\uFF0C\u6545\u4E0D\u9700\u8981\u5F15\u7528DTD</p><p>\u6309\u7167\u6392\u5217\u65B9\u5F0F\uFF0CHTML\u5143\u7D20\u53EF\u5206\u4E3A\u5757\u7EA7\u5143\u7D20\u548C\u884C\u5185\u5143\u7D20</p><p>\u200B \u5757\u7EA7\u5143\u7D20\u72EC\u5360\u4E00\u884C\uFF0C\u4E0D\u80FD\u4E0E\u5176\u4ED6\u4EFB\u4F55\u5143\u7D20\u5E76\u5217\uFF0C\u53EF\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u9ED8\u8BA4\u662F\u7236\u7EA7\u5BBD\u5EA6\uFF0C\u5E38\u89C1\u5757\u5143\u7D20\uFF1A <code>div h li p</code> CSS\u5C5E\u6027: <code>display: block;</code></p><p>\u200B \u884C\u5185\u5143\u7D20\u4E0E\u5176\u4ED6\u884C\u5185\u5143\u7D20\u5E76\u6392\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u9ED8\u8BA4\u662F\u6587\u5B57\u5BBD\u5EA6\uFF1A<code> span a u em</code> CSS\u5C5E\u6027\uFF1A<code>display: inline</code></p><h2 id="\u5E38\u7528\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u6807\u7B7E" aria-hidden="true">#</a> \u5E38\u7528\u6807\u7B7E</h2><p>table\uFF0C\u8868\u683C\uFF0C\u5728\u4F7F\u7528HTML\u6253\u5370\u65F6\uFF0Cthead\u3001tfoot\u6807\u7B7E\u53EF\u4EE5\u5728\u9875\u9762\u5934\u90E8\uFF0C\u5C3E\u90E8\u6DFB\u52A0\u6307\u5B9A\u5185\u5BB9</p><p>iframe\uFF0C\u7528\u4E8E\u5D4C\u5165\u5176\u4ED6HTML\u9875\u9762\uFF0Csrc\u5C5E\u6027\u6307\u5B9A\u7684url\u5C31\u662F\u8981\u5D4C\u5165\u7684\u9875\u9762\u94FE\u63A5</p><blockquote><p>src \u5D4C\u5165\u9875\u9762\u7684URL</p><p>width \u5D4C\u5165\u9875\u9762\u7684\u5BBD\u5EA6</p><p>height \u5D4C\u5165\u9875\u9762\u7684\u9AD8\u5EA6</p></blockquote><p>iframe\u5143\u7D20\u6302\u8F7D\u5B8C\u6210\u540E\u901A\u8FC7<code>postMessage</code>\u4E0E\u5D4C\u5165\u7684\u9875\u9762\u8FDB\u884C\u901A\u4FE1</p><h2 id="html5" tabindex="-1"><a class="header-anchor" href="#html5" aria-hidden="true">#</a> HTML5</h2><ul><li>\u65B0\u589E\u7528\u4E8E\u7ED8\u753B\u7684canvas\u5143\u7D20</li><li>\u7528\u4E8E\u5A92\u4F53\u64AD\u653E\u7684video\u548Caudio\u5143\u7D20</li><li>\u65B0\u589ElocalStorage\u548CsessionStorage\u652F\u6301\u5B58\u50A8</li><li>\u65B0\u589E\u8BED\u4E49\u5316\u6807\u7B7E<code>article\u3001footer\u3001header\u3001nav\u3001section</code></li></ul><h3 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h3><p>\u5E38\u7528api</p><table><thead><tr><th>api</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>clearRect(x, y, width, height)</td><td>x\u5750\u6807\uFF0Cy\u5750\u6807\uFF0C\u5BBD\u5EA6\uFF0C\u9AD8\u5EA6</td><td>\u6E05\u9664\u6307\u5B9A\u7684\u533A\u57DF</td></tr><tr><td>save()</td><td></td><td>\u4FDD\u5B58\uFF0C\u5165\u6808</td></tr><tr><td>translate(x, y)</td><td>x\u5750\u6807\uFF0Cy\u5750\u6807</td><td>\u79FB\u52A8\u539F\u70B9\u4F4D\u7F6E\u5230\u6307\u5B9A\u5750\u6807\uFF0C\u79FB\u52A8\u540E\u539F\u70B9\u5750\u6807\u4F1A\u53D1\u751F\u53D8\u5316</td></tr><tr><td>beginPath</td><td></td><td>\u5F00\u59CB\u63CF\u7ED8\u65B0\u7684\u8DEF\u5F84\uFF0C\u5426\u5219\u65E7\u7684\u8DEF\u5F84\u4E5F\u4F1A\u4E00\u8D77\u63CF\u7ED8</td></tr><tr><td>strokeStyle</td><td></td><td>\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u6E10\u53D8\u5BF9\u8C61\u6216\u56FE\u6848\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u503C\u4E3A&quot;#000000&quot;</td></tr><tr><td>arc(x,y,radius,startAngle,endAngle,wise)</td><td>x\u5750\u6807\uFF0Cy\u5750\u6807\uFF0C\u534A\u5F84\uFF0C\u5F00\u59CB\u89D2\u5EA6\uFF0C\u7ED3\u675F\u89D2\u5EA6\uFF0C\u662F\u5426\u9006\u65F6\u9488(\u9ED8\u8BA4\u987A\u65F6\u9488)</td><td>xy\u5750\u6807\u4E3A\u4E2D\u5FC3\uFF0Cradius\u4E3A\u534A\u5F84\uFF0C\u7ED8\u5236\u5F27\u7EBF\uFF0C\u8D77\u59CB\u89D2\u5EA6start\uFF0C\u7ED3\u675F\u89D2\u5EA6end</td></tr><tr><td>stroke</td><td></td><td>\u7ED8\u5236\u8DEF\u5F84</td></tr><tr><td>rotate(deg)</td><td></td><td>\u56F4\u7ED5\u539F\u70B9\u65CB\u8F6C\u5F27\u5EA6</td></tr><tr><td>moveTo(x, y)</td><td>xy\u5750\u6807</td><td>\u5C06\u7ED8\u5236\u5149\u6807\u79FB\u52A8\u5230\u6307\u5B9A\u5750\u6807</td></tr><tr><td>lineTo(x, y)</td><td>xy\u5750\u6807</td><td>\u7ED8\u5236\u4E00\u6761\u4ECE\u4E0A\u4E00\u70B9\u5230xy\u5750\u6807\u7684\u7EBF</td></tr><tr><td>textAlign</td><td>&quot;start&quot;\u3001&quot;end&quot;\u3001<br>&quot;left&quot;\u3001&quot;right&quot;\u3001&quot;center&quot;</td><td>\u8BBE\u7F6E\u6C34\u5E73\u6587\u5B57\u6392\u5217\u65B9\u5F0F</td></tr><tr><td>textBaseline</td><td>&quot;top&quot; \u3001 &quot;hanging&quot; \u3001 &quot;middle&quot; \u3001&quot;alphabetic&quot;\u3001&quot;ideographic<br>\u3001&quot;bottom&quot;</td><td>\u8BBE\u7F6E\u5782\u76F4\u65B9\u5411\u6587\u5B57\u6392\u5217\u65B9\u5F0F</td></tr><tr><td>font</td><td>\u5B57\u4F53\u6837\u5F0F</td><td>CSS \u8BED\u6CD5\u6307\u5B9A\u7684\u5B57\u4F53\u6837\u5F0F\u3001\u5927\u5C0F\u3001\u5B57\u4F53\u65CF</td></tr><tr><td>fillStyle</td><td>\u586B\u5145\u533A\u57DF\u7684\u6837\u5F0F</td><td>\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u6E10\u53D8\u5BF9\u8C61\u6216\u56FE\u6848\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u503C\u4E3A&quot;#000000&quot;</td></tr><tr><td>fill</td><td>\u586B\u5145</td><td></td></tr><tr><td>fillText(str, x, y)</td><td>\u8981\u7ED8\u5236\u7684\u5B57\u7B26\u4E32\u3001x \u5750\u6807\u3001y \u5750\u6807</td><td></td></tr><tr><td>restore</td><td></td><td>\u51FA\u6808</td></tr><tr><td></td><td></td><td></td></tr></tbody></table>',18),k=a("\u5C0Fdemo"),h={href:"http://blairq.gitee.io/canvas-clock",target:"_blank",rel:"noopener noreferrer"},b=a("\u5728\u7EBF\u9884\u89C8"),m=t('<p><img src="'+l+`" alt="\u949F\u8868"></p><p>\u96BE\u70B9\uFF1A</p><blockquote><p>\u5341\u4E8C\u4E2A\u6570\u5B57\u6446\u653E\u4F4D\u7F6E\uFF08\u8FD0\u7528\u4E09\u89D2\u51FD\u6570<code>Math.cos\u548CMath.sin</code>\uFF09</p><p>\u51FA\u5165\u6808\uFF08save\u548Crestore\u7684\u4F7F\u7528\uFF09</p><p>\u79D2\u9488\u6700\u540E\u7ED8\u5236\u907F\u514D\u88AB\u8986\u76D6</p></blockquote><h3 id="web-worker" tabindex="-1"><a class="header-anchor" href="#web-worker" aria-hidden="true">#</a> Web Worker</h3><p>Javascript\u662F\u5355\u7EBF\u7A0B\u6A21\u578B\uFF0CWebWorker\u5C31\u662F\u4E3AJavascript\u521B\u5EFA\u591A\u7EBF\u7A0B\u73AF\u5883\uFF0C\u5141\u8BB8\u591A\u7EBF\u7A0B\u521B\u5EFAWorker\u7EBF\u7A0B\uFF0C\u5C06\u4E00\u4E9B\u4EFB\u52A1\u5206\u914D\u7ED9\u540E\u8005\u8FD0\u884C\uFF0C\u5728\u4E3B\u7EBF\u7A0B\u8FD0\u884C\u7684\u540C\u65F6\uFF0CWorker\u7EBF\u7A0B\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u4E24\u8005\u4E92\u8865\u5E72\u6270\uFF0C\u7B49\u5230Worker\u7EBF\u7A0B\u5B8C\u6210\u8BA1\u7B97\u4EFB\u52A1\uFF0C\u518D\u628A\u7ED3\u679C\u8FD4\u56DE\u7ED9\u4E3B\u7EBF\u7A0B</p><p>\u6CE8\u610F\u70B9:</p><ol><li>\u540C\u6E90\u7B56\u7565</li><li>DOM\u9650\u5236\uFF0C\u65E0\u6CD5\u8BFB\u53D6DOM\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528navigator\u5BF9\u8C61\u548Clocation\u5BF9\u8C61</li><li>\u901A\u4FE1\u8054\u7CFB Worker\u7EBF\u7A0B\u4E0E\u4E3B\u7EBF\u7A0B\u4E0D\u5728\u540C\u4E00\u4E2A\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0C\u4E0D\u80FD\u76F4\u63A5\u901A\u4FE1\uFF0C\u5FC5\u987B\u901A\u8FC7\u6D88\u606F\u5B8C\u6210</li><li>\u811A\u672C\u9650\u5236 \u4E0D\u80FD\u6267\u884Calert confirm\u65B9\u6CD5\uFF0C\u4F46\u662F\u53EF\u4EE5\u53D1\u9001Ajax\u8BF7\u6C42</li><li>\u6587\u4EF6\u9650\u5236 \u4E0D\u80FD\u6253\u5F00\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF</li></ol><h4 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h4><p>\u4F7F\u7528new\u547D\u4EE4\uFF0C\u8C03\u7528Worker\u6784\u9020\u51FD\u6570\uFF0C\u65B0\u5EFAWorker\u7EBF\u7A0B</p><p>\u53C2\u6570\u662F\u4E00\u4E2A\u811A\u672C\u6587\u4EF6\uFF0C\u4E0D\u80FD\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u6240\u4EE5\u811A\u672C\u5FC5\u987B\u6765\u81EA\u7F51\u7EDC</p><p>\u4E3B\u7EBF\u7A0B\u901A\u8FC7postMessage\u5411Worker\u53D1\u6D88\u606F\uFF0C\u901A\u8FC7onmessage\u6307\u5B9A\u76D1\u542C\u51FD\u6570\uFF0C\u63A5\u53D7\u5B50\u7EBF\u7A0B\u53D1\u56DE\u6765\u7684\u6D88\u606F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> worder <span class="token operator">=</span> <span class="token function">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;work.js&#39;</span><span class="token punctuation">)</span>
worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u53EF\u4EE5\u662F\u5404\u79CD\u6570\u636E\u7C7B\u578B</span>
<span class="token comment">// \u6536\u6D88\u606F</span>
worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u5173\u95ED</span>
worker<span class="token punctuation">.</span><span class="token function">terminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Worker\u7EBF\u7A0B</p><p>\u5185\u90E8\u6709\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\uFF0C\u76D1\u542Cmessage\u4E8B\u4EF6\uFF0Cself\u6307\u7684\u662Fworker\u7EBF\u7A0B\u81EA\u8EAB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  self<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// \u5173\u95ED\u5B50\u7EBF\u7A0B</span>
self<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>worker\u52A0\u8F7D\u811A\u672C\u4F7F\u7528importScripts()\uFF0C\u53EF\u540C\u65F6\u52A0\u8F7D\u591A\u4E2A\u811A\u672C</p><p><strong>\u9519\u8BEF\u5904\u7406</strong></p><p>\u4E3B\u7EBF\u7A0B\u4E2D\u53EF\u4EE5\u76D1\u542CWorker\u662F\u5426\u53D1\u751F\u9519\u8BEF\uFF0C\u82E5\u53D1\u751F\u9519\u8BEF\uFF0C\u4F1A\u89E6\u53D1error\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>worker<span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,19);function g(f,v){const s=e("ExternalLinkIcon");return o(),p(c,null,[u,n("p",null,[k,n("a",h,[b,r(s)])]),m],64)}var y=d(i,[["render",g]]);export{y as default};
