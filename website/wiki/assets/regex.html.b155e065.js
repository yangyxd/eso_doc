import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as a,a as t,b as e,d as o,f as h,e as n,r as i}from"./app.918ef0ee.js";const s={},l={href:"http://yangyxd.gitee.io/ostool/#/regexp",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mp.weixin.qq.com/s/wkCHL_QzAJwWEg9JZaZnCQ",target:"_blank",rel:"noopener noreferrer"},x=t("p",null,"正则表达式具有伟大技术发明的一切特点，它简单、优美、功能强大、妙用无穷。对于很多实际工作来讲，正则表达式简直是灵丹妙药，能够成百倍地提高开发效率和程序质量。",-1),p=n('<h2 id="正则常见规则" tabindex="-1"><a class="header-anchor" href="#正则常见规则" aria-hidden="true">#</a> 正则常见规则</h2><h3 id="字符匹配" tabindex="-1"><a class="header-anchor" href="#字符匹配" aria-hidden="true">#</a> 字符匹配</h3><div style="font-size:14px;"><table><thead><tr><th>字符</th><th>说明</th></tr></thead><tbody><tr><td><code>\\</code></td><td>转义符</td></tr><tr><td><code>\\d</code></td><td>[0-9]。表示是一位数字。</td></tr><tr><td><code>\\D</code></td><td>[^0-9]。表示除数字外的任意字符。</td></tr><tr><td><code>\\w</code></td><td>[0-9a-zA-Z_]。表示数字、大小写字母和下划线。</td></tr><tr><td><code>\\W</code></td><td>[^0-9a-zA-Z_]。非单词字符。</td></tr><tr><td><code>\\s</code></td><td>[\\t\\v\\n\\r\\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。</td></tr><tr><td><code>\\S</code></td><td>[^\\t\\v\\n\\r\\f]。非空白符。</td></tr><tr><td><code>.</code></td><td>[^\\n\\r\\u2028\\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。</td></tr><tr><td><code>\\uxxxx</code></td><td>查找以十六进制数 xxxx 规定的 Unicode 字符。</td></tr><tr><td><code>\\f</code></td><td>匹配一个换页符 (U+000C)。</td></tr><tr><td><code>\\n</code></td><td>匹配一个换行符 (U+000A)。</td></tr><tr><td><code>\\r</code></td><td>匹配一个回车符 (U+000D)。</td></tr><tr><td><code>\\t</code></td><td>匹配一个水平制表符 (U+0009)。</td></tr><tr><td><code>\\v</code></td><td>匹配一个垂直制表符 (U+000B)。</td></tr><tr><td><code>\\0</code></td><td>匹配 NULL（U+0000）字符， 不要在这后面跟其它小数，因为 <code>\\0</code> 是一个八进制转义序列。</td></tr><tr><td><code>[\\b]</code></td><td>匹配一个退格(U+0008)。（不要和<code>\\b</code> 混淆了。）</td></tr><tr><td><code>[abc]</code></td><td>any of a, b, or c</td></tr><tr><td><code>[^abc]</code></td><td>not a, b, or c</td></tr><tr><td><code>[a-g]</code></td><td>character between a &amp; g</td></tr></tbody></table></div><h3 id="位置匹配" tabindex="-1"><a class="header-anchor" href="#位置匹配" aria-hidden="true">#</a> 位置匹配</h3><div style="font-size:14px;"><table><thead><tr><th>字符</th><th>说明</th></tr></thead><tbody><tr><td><code>^</code></td><td>一行的开始</td></tr><tr><td><code>$</code></td><td>一行的结束</td></tr><tr><td><code>\\b</code></td><td>是单词边界，具体就是<code>\\w</code> 和<code>\\W</code> 之间的位置，也包括<code>\\w</code> 和 <code>^</code> 之间的位置，也包括<code>\\w</code> 和<code>\\w</code>之间的位置。具体来说就是 <code>\\w</code> 与 <code>\\w</code>、<code>\\W</code> 与 <code>\\W</code>、与 <code>\\W</code>，<code>\\W</code> 与之间的位置</td></tr><tr><td><code>\\B</code></td><td>是 <code>\\b</code> 的反面的意思，非单词边界。例如在字符串中所有位置中，扣掉 <code>\\b</code>，剩下的都是 <code>\\B</code> 的。</td></tr><tr><td><code>\\G</code></td><td>前一个匹配的结束</td></tr><tr><td><code>^abc$</code></td><td>字符串开始、结束的位置</td></tr></tbody></table></div><h3 id="组" tabindex="-1"><a class="header-anchor" href="#组" aria-hidden="true">#</a> 组</h3><table><thead><tr><th>字符</th><th>说明</th></tr></thead><tbody><tr><td><code>(abc)</code></td><td>捕获组</td></tr><tr><td><code>\\n</code></td><td>回溯到组#n。分组引用，引用第 n 个捕获组匹配的内容, 其中 n 是正整数</td></tr><tr><td><code>(?:abc)</code></td><td>非捕获组</td></tr></tbody></table><h3 id="先行断言" tabindex="-1"><a class="header-anchor" href="#先行断言" aria-hidden="true">#</a> 先行断言</h3><div style="font-size:14px;"><table><thead><tr><th>字符</th><th>说明</th></tr></thead><tbody><tr><td><code>a(?=b)</code></td><td>positive lookahead，先行断言，a 只有在 b 前面才匹配</td></tr><tr><td><code>a(?!b)</code></td><td>negative lookahead，先行否定断言，a 只有不在 b 前面才匹配</td></tr></tbody></table></div><h3 id="后行断言" tabindex="-1"><a class="header-anchor" href="#后行断言" aria-hidden="true">#</a> 后行断言</h3><div style="font-size:14px;"><table><thead><tr><th>字符</th><th>说明</th></tr></thead><tbody><tr><td><span style="white-space:nowrap;"><code>(?&lt;=b)a</code></span></td><td>positive lookbehind，后行断言，a 只有在 b 后面才匹配</td></tr><tr><td><code>(?&lt;!b)a</code></td><td>negative lookbehind，后行否定断言，a 只有不在 b 后面才匹配</td></tr></tbody></table></div><h3 id="量词和分支" tabindex="-1"><a class="header-anchor" href="#量词和分支" aria-hidden="true">#</a> 量词和分支</h3><div style="font-size:14px;"><table><thead><tr><th>字符</th><th>说明</th></tr></thead><tbody><tr><td><code>a*</code></td><td>0 or more</td></tr><tr><td><code>a+</code></td><td>1 or more</td></tr><tr><td><code>a?</code></td><td>0 or 1</td></tr><tr><td><code>a{5}</code></td><td>正好5个</td></tr><tr><td><code>a{2,}</code></td><td>2个或更多</td></tr><tr><td><code>a{1,3}</code></td><td>1 和 3 个之间</td></tr><tr><td><code>a+?</code></td><td>惰性匹配，就是尽可能少的匹配</td></tr><tr><td><code>a{2,}?</code></td><td>惰性匹配，就是尽可能少的匹配</td></tr></tbody></table></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><div style="font-size:14px;"><table><thead><tr><th>字符</th><th>说明</th></tr></thead><tbody><tr><td><code>ab|cd</code></td><td>match ab or cd，匹配&#39;ab&#39;或者&#39;cd&#39;字符子串</td></tr></tbody></table></div><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2><div style="font-size:14px;"><table><thead><tr><th><span style="white-space:nowrap;">字符</span></th><th>说明</th></tr></thead><tbody><tr><td><code>i</code></td><td>执行对大小写不敏感的匹配。</td></tr><tr><td><code>g</code></td><td>执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。</td></tr><tr><td><code>m</code></td><td>执行多行匹配。</td></tr><tr><td><code>u</code></td><td>开启&quot;Unicode 模式&quot;，用来正确处理大于\\uFFFF 的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。</td></tr><tr><td><code>s</code></td><td>允许 . 匹配换行符。</td></tr><tr><td><code>y</code></td><td>作用与 <code>g</code> 修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g 修饰符只要剩余位置中存在匹配就可，而 y 修饰符确保匹配必须从剩余的第一个位置开始，这也就是&quot;粘连&quot;的涵义</td></tr></tbody></table></div>',17);function f(u,y){const d=i("ExternalLinkIcon");return c(),a("div",null,[t("ul",null,[t("li",null,[t("p",null,[t("a",l,[e("正则表达式在线工具"),o(d)])])]),t("li",null,[t("p",null,[t("a",b,[e("一文掌握开发利器：正则表达式"),o(d)])])])]),x,h(" more "),p])}const m=r(s,[["render",f],["__file","regex.html.vue"]]);export{m as default};
