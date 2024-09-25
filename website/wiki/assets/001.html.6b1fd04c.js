import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as o,f as t,a as s,e}from"./app.918ef0ee.js";const p={},c=s("p",null,"知乎日报是知乎推出的一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。",-1),l=s("p",null,"知乎日报有网页版和APP版，这里选择网站版，链接知乎日报，其规则最简单，列为实战篇其一。",-1),r=s("p",null,"需要准备的东西：网络（访问目标地址）、现代浏览器（edge、chrome、firefox）、亦搜（windows版为佳，可开启多个测试）。",-1),u=e(`<h2 id="基本规则" tabindex="-1"><a class="header-anchor" href="#基本规则" aria-hidden="true">#</a> 基本规则</h2><p>规则编辑界面有 <code>基本规则</code>、<code>发现规则</code>、<code>搜索规则</code>、<code>章节规则</code>、<code>正文规则</code> 五块板块，我们按顺序来填。</p><p>作为实战其一，这里对规则做说明，介绍基本规则，后边实战不再赘述。</p><ul><li><p><code>类型</code> 选择图文视听一种，日报文字类，选择<code>文字</code></p></li><li><p><code>名称</code> 填<code>知乎日报</code>或<code>知乎日报网页</code></p></li><li><p><code>域名</code> 用 <code>https://daily.zhihu.com</code>，注意结尾不用 <code>/</code>。</p></li><li><p><code>分组</code> 凭喜好，比如<code>资讯</code>、<code>图文</code>、<code>知乎</code>，等。相当于文章关键词。</p></li><li><p><code>作者</code> 填自己大名或艺名，在下<code>一尾虾</code>。</p></li><li><p><code>签名档</code> 随意，只有编辑时可见，无实际用处，填入<code>我是一尾自由的虾</code>。</p></li><li><p><code>用户代理字符串</code> 按需填写。默认是macos chrome 的UA。</p></li><li><p><code>加载js内容</code> 初学不必理会。它对整个规则生效，比如这里定义通用函数，方便其他规则编写。</p></li><li><p><code>登录地址</code> 字面意思，填入链接，使用者点击右上角 <code>登录</code> 按钮即可模拟用户状态和同步使用信息。</p></li><li><p><code>小饼干</code> ，<code>登录</code> 后自动生成，也可以手动编辑。所有的分享功能都不会携带个人cookies，但是备份会记录。</p></li></ul><p>以上，是基本规则。</p><h2 id="发现规则" tabindex="-1"><a class="header-anchor" href="#发现规则" aria-hidden="true">#</a> 发现规则</h2><ul><li><p>首先要打开 <code>启用</code>，发现才会生效。同样，关闭后将隐藏该规则。</p></li><li><p><code>地址</code>，直接填入 <code>/</code>，因为该站点只有一个内容，即根网页，\`/ 是一个相对路径，相对域名内容，因此要注意域名。</p></li><li><p><code>列表</code>，应填入 <code>.wrap</code> (CSS)或 <code>//*[@class=&quot;wrap&quot;]</code> (XPath)，解释如下。这是第一个需要分析的规则。如果你还不理解，根据截图（包括下面发现其他规则也根据这张截图填写），STEP-BY-STEP按顺序来：</p></li></ul><p><img src="https://camo.githubusercontent.com/67064505c19938eee193c3986c05a52cbedda7d8fe06277c5526a572fccd793b/68747470733a2f2f73312e617831782e636f6d2f323032302f30372f31382f5532614c49312e706e67" alt="" loading="lazy"></p><hr><ol><li><p>打开浏览器</p></li><li><p>键入 <code>https://daily.zhihu.com</code> 并回车访问。</p></li><li><p>按下<code>F12</code> 打开开发者工具，切换至<code>元素</code> (<code>Elements</code>)栏。</p></li><li><p>找到一排并列的元素，这里是观察有 <code>&lt;div class=&quot;wrap&quot;&gt;</code> 并列，鼠标悬浮上方，可在网页看到对应元素有一个蒙版，确实是期待的结果。</p></li><li><p>使用CSS，类名前用 <code>.</code> 做标识符，即 <code>.wrap</code>。使用XPath，使用键盘上的xpath_class模板 <code>//*[@class=&quot;&quot;]</code>，应写成 <code>//*[@class=&quot;wrap&quot;]</code>。</p></li><li><p>在 <code>元素</code> (<code>Elements</code>)栏键盘按下 <code>CTRL+F</code> 输入 <code>.wrap</code> 或 <code>//*[@class=&quot;wrap&quot;]</code> 做验证。</p></li></ol><hr><ul><li><p>完成列表规则后，可在 <code>名称</code> 写入 <code>text</code> 或 <code>@js:result</code>，右上角测试规则，验证是否没有问题。</p></li><li><p><code>名称</code> 填入 <code>text</code>，表示取文本内容，相似的还有<code>html</code>、<code>innerHtml</code>、<code>outerHtml</code>，其差别可以自行测试和体会。</p></li><li><p><code>图片</code> 填入 <code>img@src</code>。这是一个常用写法，含义为取 <code>img</code> 标签的 <code>src</code> 属性值，<code>@</code> 是APP内部标识符，将 <code>img@src</code> 分割为2部分，前面是CSS规则，后面是属性名。</p></li><li><p><code>结果</code> 填入 <code>a@href</code>。也是一个常用写法，含义为取 <code>a</code> 标签的 <code>href</code> 属性值。</p></li></ul><p>以上，是发现规则，未列出的跳过。全都根据上面给出的截图来写。</p><h2 id="章节规则" tabindex="-1"><a class="header-anchor" href="#章节规则" aria-hidden="true">#</a> 章节规则</h2><p>该实战中目录页同正文页，写法更简单，也可作为一种定式。</p><ul><li><p><code>章节列表</code> 填 <code>body</code>，这是一个CSS规则，表示取 <code>body</code> 节点，html中body只有一个，我们需要的部分一般都在body。</p></li><li><p><code>章节名称</code>填 <code>h2@text</code>，表示取 <code>h2</code> 标签文字作为显示结果。</p></li><li><p><code>结果</code> 填入 <code>@js:lastResult</code> 或 <code>@js:baseUrl</code>，表示取当前页地址，作为正文页。</p></li></ul><p>以上，是章节规则，未列出的跳过。</p><h2 id="正文规则" tabindex="-1"><a class="header-anchor" href="#正文规则" aria-hidden="true">#</a> 正文规则</h2><p><code>内容</code> 写入 <code>.question@html</code>，含义是取 <code>class</code> 为 <code>question</code> 的元素的html内容，html是APP内部一个处理图文混排的方法，懒的分析元素都可以使用该写法。</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>测试界面右上角是发现测试，点击按钮自动测试规则，如图。</p><p><img src="https://camo.githubusercontent.com/9216d415fe3da08912e325e3395599a33b52571661db3f0f99c1b1526dabba75/68747470733a2f2f73312e617831782e636f6d2f323032302f30372f31382f5532426779542e706e67" alt="" loading="lazy"></p><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p>最终结果如下 知乎日报.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;113781d0-8b65-44df-bdb6-7a437e29cf72&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1595034756401971</span><span class="token punctuation">,</span>
    <span class="token property">&quot;modifiedTime&quot;</span><span class="token operator">:</span> <span class="token number">1595035414884371</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一尾虾&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postScript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是一尾自由的虾&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;知乎日报&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://daily.zhihu.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;资讯 图文 知乎&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;contentType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useCryptoJS&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;loadJs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userAgent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enableDiscover&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.wrap&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverTags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverCover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;img@src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverAuthor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverChapter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;discoverResult&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a@href&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enableSearch&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchTags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchCover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchAuthor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchChapter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchResult&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enableMultiRoads&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterRoads&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterRoadName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;body&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;h2@text&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterCover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterLock&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;chapterResult&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@js:lastResult&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;contentUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;contentItems&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.question@html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;loginUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cookies&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;viewStyle&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function i(d,k){return a(),o("div",null,[c,l,r,t(" more "),u])}const m=n(p,[["render",i],["__file","001.html.vue"]]);export{m as default};
