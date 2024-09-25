import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,f as o,a as n,b as s,d as c,w as u,e as l,r as i}from"./app.918ef0ee.js";const r={},d=n("p",null,"发现 (discoverUrl) 是特殊的地址规则。是由栏目信息和地址规则组合。",-1),k=n("h2",{id:"普通模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#普通模式","aria-hidden":"true"},"#"),s(" 普通模式")],-1),v=n("p",null,[n("em",null,"格式："),s(),n("code",null,"栏目名称"),s("::"),n("code",null,"子栏目名称"),s("::"),n("code",null,"地址规则")],-1),m=n("code",null,"地址规则",-1),b=n("strong",null,"（内容不要换行）",-1),h=l(`<p>多个栏目可以使用 <code>换行符</code>、<code>&amp;&amp;</code> 分隔。</p><p>普通模式 <strong>最多支持到二级栏目</strong>。</p><h3 id="普通写法" tabindex="-1"><a class="header-anchor" href="#普通写法" aria-hidden="true">#</a> 普通写法</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>主页::https://www.baidu.com
导航::百度::https://www.baidu.com
导航::百度::https://www.baidu.com
电影::https://www.xxx.com/vodshow/1/page/$page.html
王者荣耀::全部::{&quot;url&quot;:&quot;https://m.huya.com/cache.php?m=Game&amp;do=ajaxGetGameLive&amp;gameId=2336&amp;page=searchPage&amp;pageSize=120&quot;,&quot;headers&quot;:{&quot;referer&quot;: &quot;https://m.huya.com&quot;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本写法" tabindex="-1"><a class="header-anchor" href="#脚本写法" aria-hidden="true">#</a> 脚本写法</h3><p>使用 JS 脚本来拼接出符合 <code>格式</code> 的字符串。可以根据实际情况很灵活的实现，只要最终输出的结果符合格式就行。下面给出一个示例。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@js<span class="token operator">:</span>
<span class="token keyword">let</span> items<span class="token operator">=</span><span class="token punctuation">[</span>
<span class="token punctuation">[</span><span class="token string">&quot;电影::热播榜&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">[</span><span class="token string">&quot;电影::好评榜&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">[</span><span class="token string">&quot;电影::新上线&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
result<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
 result<span class="token operator">=</span>result<span class="token operator">+</span>e<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&#39;::https://www.xxx.com/search?channel_id=&#39;</span><span class="token operator">+</span>e<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&#39;&amp;data_type=&#39;</span><span class="token operator">+</span>e<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&#39;&amp;is_purchase=0&amp;mode=&#39;</span><span class="token operator">+</span>e<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&#39;&amp;page_id=$page&amp;ret_num=48\\n&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="筛选模式" tabindex="-1"><a class="header-anchor" href="#筛选模式" aria-hidden="true">#</a> 筛选模式</h2><p>筛选模式需要在发现地址中返回符合格式的对象。可以实现类似网站中的多类型条件筛选的效果。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>此模式从 <code>大白版 V3.4.0</code> 开始支持。</p></div><p><strong>效果图</strong>：</p><p><img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/03d5dfdcdaf6b55751f1a3cf9742df9725cc699fdd2544ab73548e894e42017bce1fee85ee60bc9c36582075060451d4?pictype=scale&amp;from=30113&amp;version=3.3.3.3&amp;fname=QQ截图20221019164049.png&amp;size=750" alt="筛选模式" loading="lazy"></p><h3 id="写法-1" tabindex="-1"><a class="header-anchor" href="#写法-1" aria-hidden="true">#</a> 写法 1</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token comment">// 可选，默认的 url，使用 \`{筛选类型关键字}\` 来表示动态的筛选状态值，执行是会替换成筛选类型对应的值</span>
	url<span class="token operator">:</span>  &#39;$host/show/<span class="token punctuation">{</span>kind<span class="token punctuation">}</span>-<span class="token punctuation">{</span>area<span class="token punctuation">}</span>-<span class="token punctuation">{</span>by<span class="token punctuation">}</span>-<span class="token punctuation">{</span>class<span class="token punctuation">}</span>-----$page---<span class="token punctuation">{</span>year<span class="token punctuation">}</span>.html&#39;<span class="token punctuation">,</span>
	value<span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token comment">// 栏目数组</span>
		<span class="token punctuation">{</span>
			name<span class="token operator">:</span> &#39;名称&#39;<span class="token punctuation">,</span> <span class="token comment">// 栏目名称</span>
			kind<span class="token operator">:</span> &#39;<span class="token number">1</span>&#39;<span class="token punctuation">,</span> <span class="token comment">// 栏目类别ID</span>
			url<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">,</span> <span class="token comment">// 可选，栏目的 url （不指定会使用默认的 url）</span>
			data<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 可选，附加的数据, 取列表时会传入 lastResult 中</span>
			value<span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token comment">// 筛选类型数组</span>
				<span class="token punctuation">{</span>
					key<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">,</span> <span class="token comment">// 筛选类型关键字</span>
					name<span class="token operator">:</span> &#39;名称&#39;<span class="token punctuation">,</span> <span class="token comment">//  筛选类型名称</span>
					value<span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token comment">// 筛选项数组</span>
						<span class="token punctuation">{</span>name<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">,</span> value<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">}</span><span class="token punctuation">,</span>
						...
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				...
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写法-2" tabindex="-1"><a class="header-anchor" href="#写法-2" aria-hidden="true">#</a> 写法 2</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	url<span class="token operator">:</span>  &#39;&#39;<span class="token punctuation">,</span> <span class="token comment">// 可选，默认的 url</span>
	value<span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token comment">// 栏目数组</span>
		<span class="token punctuation">[</span>
			name<span class="token punctuation">,</span>  <span class="token comment">// 栏目名称</span>
			kind<span class="token punctuation">,</span>   <span class="token comment">// 栏目类别ID</span>
			<span class="token punctuation">[</span>
				<span class="token comment">// 筛选类型数组</span>
				<span class="token punctuation">{</span>
					key<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">,</span> <span class="token comment">// 筛选类型关键字</span>
					name<span class="token operator">:</span> &#39;名称&#39;<span class="token punctuation">,</span> <span class="token comment">//  筛选类型名称</span>
					value<span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token comment">// 筛选项数组</span>
						<span class="token punctuation">{</span>name<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">,</span> value<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">}</span>
						...
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				...
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
			url<span class="token punctuation">,</span> <span class="token comment">// 可选，栏目的 url</span>
		    data<span class="token punctuation">,</span> <span class="token comment">// 可选，附加数据</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段名称的简写形式" tabindex="-1"><a class="header-anchor" href="#字段名称的简写形式" aria-hidden="true">#</a> 字段名称的简写形式</h3><table><thead><tr><th>关键字</th><th>简写形式</th></tr></thead><tbody><tr><td><code>url</code></td><td>-</td></tr><tr><td><code>name</code></td><td><code>n</code></td></tr><tr><td><code>value</code></td><td><code>v</code></td></tr><tr><td><code>key</code></td><td><code>k</code></td></tr><tr><td><code>kind</code></td><td><code>k</code> 或 <code>key</code></td></tr></tbody></table><p><strong>简写示例</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>@js<span class="token operator">:</span> result = <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&quot;$host/show/{kind}-{area}-{by}-{class}-----$page---{year}.html&quot;</span><span class="token punctuation">,</span>
  v<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 格式 1</span>
    <span class="token punctuation">[</span>&#39;电影&#39;<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        k<span class="token operator">:</span> &#39;class&#39;<span class="token punctuation">,</span>
        n<span class="token operator">:</span> &#39;剧情&#39;<span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;全部&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;喜剧&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;喜剧&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;爱情&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;爱情&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        k<span class="token operator">:</span> &#39;area&#39;<span class="token punctuation">,</span>
        n<span class="token operator">:</span> &#39;地区&#39;<span class="token punctuation">,</span>
        v<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;全部&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;大陆&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;大陆&#39;<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;中国香港&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;香港&#39;<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;美国&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;美国&#39;<span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 格式 2</span>
    <span class="token punctuation">{</span>
      n<span class="token operator">:</span> &#39;剧集&#39;<span class="token punctuation">,</span>
      k<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      url<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">,</span>
      v<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          k<span class="token operator">:</span> &#39;class&#39;<span class="token punctuation">,</span>
          n<span class="token operator">:</span> &#39;剧情&#39;<span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;全部&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;喜剧&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;v&quot;</span><span class="token operator">:</span> <span class="token string">&quot;爱情&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          k<span class="token operator">:</span> &#39;area&#39;<span class="token punctuation">,</span>
          n<span class="token operator">:</span> &#39;地区&#39;<span class="token punctuation">,</span>
          v<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;全部&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;&#39;<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;大陆&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;大陆&#39;<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;中国香港&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;香港&#39;<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>n<span class="token operator">:</span> &#39;美国&#39;<span class="token punctuation">,</span>v<span class="token operator">:</span> &#39;美国&#39;<span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
  	<span class="token punctuation">}</span><span class="token punctuation">,</span>
  	<span class="token punctuation">[</span>&#39;动漫&#39;<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function q(g,_){const a=i("RouterLink");return p(),e("div",null,[d,o(" more "),k,v,n("p",null,[m,s(" 可以是前面介绍的 "),c(a,{to:"/guide/001.html"},{default:u(()=>[s("请求规则")]),_:1}),s(" 的所有形式 "),b,s("。")]),h])}const w=t(r,[["render",q],["__file","002.html.vue"]]);export{w as default};
