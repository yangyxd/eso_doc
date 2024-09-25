import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,f as o,a as e,b as s,e as c}from"./app.918ef0ee.js";const r={},i=e("p",null,[s("可以使用 "),e("code",null,"@server:"),s(" 开启一个 HTTP 服务，将上一个规则返回的数据作为输入，转化为一个URL。访问这个URL，会返回上一个规则的结果数据。")],-1),l=c(`<h2 id="http服务-server-规则" tabindex="-1"><a class="header-anchor" href="#http服务-server-规则" aria-hidden="true">#</a> HTTP服务 <code>@server:</code> 规则</h2><p>比如，某个网站返回的视频我们只能得到 m3u8 文件内容，而非一个URL，这时候我们可以开启一个HTTP服务。此规则一般只在获取正文内容是使用。</p><p><strong>例子：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 正则匹配上一个规则返回的结果是否包含“#EXTM3U&quot;</span>
<span class="token comment">// 如果匹配成功，则开启HTTP服务，返回 {&quot;url&quot;: &quot;http://xxxx/xxxx.m3u8&quot;}</span>
<span class="token comment">// 如果匹配失败，则直接返回输入内容  {&quot;url&quot;: 输入内容 }</span>

@server<span class="token operator">:</span>#<span class="token constant">EXTM3U</span>@@m3u8

<span class="token comment">// 使用 JSON 获取 url</span>
@json<span class="token operator">:</span>$<span class="token punctuation">.</span><span class="token punctuation">.</span>url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在播放已下载的 m3u8 视频时，会自动启动一个 HTTP 服务。 HTTP 服务在不使用时，会自动关闭，释放资源。</p></div>`,5);function d(p,u){return a(),t("div",null,[i,o(" more "),l])}const _=n(r,[["render",d],["__file","005.html.vue"]]);export{_ as default};
