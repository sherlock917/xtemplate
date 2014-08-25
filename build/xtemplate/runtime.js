modulex.add("xtemplate/runtime",[],function(n,t,e){var r,a,i,o,f;r=function(n){function t(){var n="";for(var t in r)n+=t+"|";return n=n.slice(0,-1),i=new RegExp(n,"g")}var e,r={"&":"&amp;",">":"&gt;","<":"&lt;","`":"&#x60;","/":"&#x2F;",'"':"&quot;","'":"&#x27;"},a=/[&<>"'`]/,i=t(),o=/\\?\{([^{}]+)\}/g,f="undefined"!=typeof global?global:window,s=Object.prototype.toString;return n=e={isArray:Array.isArray||function(n){return s.call(n)},keys:Object.keys||function(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(t);return e},each:function(n,t,r){if(n){var a,i,o,f=0,s=n&&n.length,c=void 0===s||"[object Function]"===Object.prototype.toString.call(n);if(r=r||null,c)for(o=e.keys(n);f<o.length&&(a=o[f],t.call(r,n[a],a,n)!==!1);f++);else for(i=n[0];s>f&&t.call(r,i,f,n)!==!1;i=n[++f]);}return n},mix:function(n,t){for(var e in t)n[e]=t[e];return n},globalEval:function(n){f.execScript?f.execScript(n):!function(n){f.eval.call(f,n)}(n)},substitute:function(n,t,e){return"string"==typeof n&&t?n.replace(e||o,function(n,e){return"\\"===n.charAt(0)?n.slice(1):void 0===t[e]?"":t[e]}):n},escapeHtml:function(n){return n=""+n,a.test(n)?(n+"").replace(i,function(n){return r[n]}):n},log:function(){"undefined"!=typeof console&&console.log.apply(console,arguments)}}}(),a=function(n){function t(n){this.data=arguments.length?n:{},this.affix=e,this.root=this}var e;return t.prototype={isScope:1,setParent:function(n){this.parent=n,this.root=n.root},set:function(n,t){this.affix||(this.affix={}),this.affix[n]=t},setData:function(n){this.data=n},getData:function(){return this.data},mix:function(n){var t=this.affix;t||(t=this.affix={});for(var e in n)t[e]=n[e]},get:function(n){var t,r=this.data,a=this.affix;return t=a&&a[n],t!==e?t:(r!==e&&null!==r&&(t=r[n]),t!==e?t:"this"===n?r:"root"===n?this.root.data:t)},resolve:function(n,t){var r,a=this;if(!t&&1===n.length){if(r=a.get(n[0]),r!==e)return r;t=1}var i,o=n.length,f=a;if(o&&"root"===n[0])n.shift(),f=f.root,o--;else if(t)for(;f&&t--;)f=f.parent;if(!f)return e;if(!o)return f.data;var s=n[0];do r=f.get(s);while(r===e&&(f=f.parent));if(r&&f){for(i=1;r&&o>i;i++)r=r[n[i]];return r}return e}},n=t}(),i=function(n){function t(n){this.list=n,this.init()}function e(n,e){var r=this;r.config=e,r.head=new t(r),r.callback=n,this.init()}var a,i=r;return t.prototype={constructor:t,isBuffer:1,init:function(){this.data=""},append:function(n){return this.data+=n,this},write:function(n){return null!=n&&this.append(n),this},writeEscaped:function(n){return null!=n&&this.append(i.escapeHtml(n)),this},async:function(n){var e=this,r=e.list,a=new t(r),i=new t(r);return i.next=e.next,a.next=i,e.next=a,e.ready=!0,n(a),i},error:function(n){var t=this.list.callback;t&&(t(n,a),this.list.callback=null)},end:function(){var n=this;return n.list.callback&&(n.ready=!0,n.list.flush()),n}},e.prototype={constructor:e,init:function(){this.data=""},append:function(n){this.data+=n},end:function(){this.callback(null,this.data)},flush:function(){for(var n=this,t=n.head;t;){if(!t.ready)return;this.append(t.data),t=t.next,n.head=t}n.end()}},e.Buffer=t,n=e}(),o=function(n){var t=a,e=r,i={range:function(n,t){var e=t.params,r=e[0],a=e[1],i=e[2];i?(r>a&&i>0||a>r&&0>i)&&(i=-i):i=r>a?-1:1;for(var o=[],f=r;a>r?a>f:f>a;f+=i)o.push(f);return o},each:function(n,r,a){var i,o,f,s=r.params,c=s[0],u=s[2]||"xindex",l=s[1];if(c)if(e.isArray(c)){i=c.length;for(var h=0;i>h;h++)o=new t(c[h]),f=o.affix={xcount:i},f[u]=h,l&&(f[l]=c[h]),o.setParent(n),a=r.fn(o,a)}else for(var p in c)o=new t(c[p]),f=o.affix={},f[u]=p,l&&(f[l]=c[p]),o.setParent(n),a=r.fn(o,a);return a},"with":function(n,e,r){var a=e.params,i=a[0];if(i){var o=new t(i);o.setParent(n),r=e.fn(o,r)}return r},"if":function(n,t,e){var r=t.params,a=r[0];if(a){var i=t.fn;i&&(e=i(n,e))}else{var o=!1,f=t.elseIfs,s=t.inverse;if(f)for(var c=0,u=f.length;u>c;c++){var l=f[c];if(o=l.test(n)){e=l.fn(n,e);break}}!o&&s&&(e=s(n,e))}return e},set:function(n,t,e){return n.mix(t.hash),e},include:function(n,e,r){var a,i,o=e.params,f=o.length;for(i=n,e.hash&&(i=new t(e.hash),i.setParent(n)),a=0;f>a;a++)r=this.root.include(o[a],this,i,e,r);return r},parse:function(n,e,r){return i.include.call(this,new t,e,r)},extend:function(n,t,e){return this.runtime.extendTplName=t.params[0],e},block:function(n,t,e){var r,a=this,i=a.runtime,o=t.params,f=o[0];2===o.length&&(r=o[0],f=o[1]);var s,c=i.blocks=i.blocks||{},u=c[f],l={fn:t.fn,type:r};if(u){if(u.type)if("append"===u.type)l.next=u,c[f]=l;else if("prepend"===u.type){var h;for(s=u;s&&"prepend"===s.type;)h=s,s=s.next;l.next=s,h.next=l}}else c[f]=l;if(!i.extendTplName)for(s=c[f];s;)s.fn&&(e=s.fn.call(a,n,e)),s=s.next;return e},macro:function(n,e,r){var a=e.hash,i=e.params,o=i[0],f=i.slice(1),s=this,c=s.runtime,u=c.macros=c.macros||{};if(e.fn)u[o]={paramNames:f,hash:a,fn:e.fn};else{var l,h=u[o],p=h.hash||{};if(!h||!(l=h.paramNames)){var d="in file: "+s.name+" can not find macro: "+name+'" at line '+s.pos.line+", col "+s.pos.col;throw new Error(d)}for(var m=0,v=l.length;v>m;m++){var g=l[m];p[g]=f[m]}if(a)for(var x in a)p[x]=a[x];var y=new t(p);r=h.fn.call(s,y,r)}return r}};return i["debugger"]=function(){e.globalEval("debugger")},n=i}(),f=function(t){function e(n,t,e){var r=e[0],a=n&&n[r]||t&&t[r]||p[r];if(1===e.length)return a;if(a)for(var i=e.length,o=1;i>o&&(a=a[e[o]],a);o++);return a}function f(n,t){var e=n.split("/"),r=t.split("/");e.pop();for(var a=0,i=r.length;i>a;a++){var o=r[a];"."===o||(".."===o?e.pop():e.push(o))}return e.join("/")}function s(n,t,e){e=n.fn(t,e);var r=n.runtime,a=r.extendTplName;return a&&(delete r.extendTplName,e=n.root.include(a,n,t,null,e)),e.end()}function c(n,t,r,a,i,o){var f,s,c,u;if(o||(u=e(n.runtime.commands,n.root.config.commands,i)),u)return u.call(n,t,r,a);if(f="in file: "+n.name+" can not call: "+i.join(".")+'" at line '+n.pos.line+", col "+n.pos.col,s=t.resolve(i.slice(0,-1),o),c=s[i[i.length-1]])return c.apply(s,r.params);if(f)throw new Error(f);return a}function u(n,t){var e=this;e.fn=n,t=e.config=t||{},t.loader=t.loader||u.loader,this.subNameResolveCache={}}var l=r,h=o,p={},d=a,m=i,v={callFn:c,callCommand:function(n,t,e,r,a){return c(n,t,e,r,a)}},g={cache:{},load:function(t,e){var r=t.name,a=this.cache;return a[r]?e(void 0,a[r]):void n([r],{success:function(n){a[r]=n,e(void 0,n)},error:function(){var n='template "'+t.name+'" does not exist';l.log(n,"error"),e(n)}})}};return l.mix(u,{loader:g,version:"1.2.1",nativeCommands:h,utils:v,util:l,addCommand:function(n,t){p[n]=t},removeCommand:function(n){delete p[n]}}),u.prototype={constructor:u,Scope:d,nativeCommands:h,utils:v,removeCommand:function(n){var t=this.config;t.commands&&delete t.commands[n]},addCommand:function(n,t){var e=this.config;e.commands=e.commands||{},e.commands[n]=t},resolve:function(n,t){if("."!==n.charAt(0))return n;if(!t){var e="parent template does not have name for relative sub tpl name: "+n;throw new Error(e)}var r=this.subNameResolveCache[t]=this.subNameResolveCache[t]||{};return r[n]?r[n]:n=r[n]=f(t,n)},include:function(n,t,e,r,a){var i=this,o=t.name,f=i.resolve(n,o);return a.async(function(a){i.config.loader.load({root:i,parentName:o,originalName:n,name:f,scope:e,option:r},function(n,i){n?a.error(n):"string"==typeof i?(r&&r.escaped?a.writeEscaped(i):a.append(i),a.end()):s({root:t.root,fn:i,name:f,runtime:t.runtime},e,a)})})},render:function(n,t,e){var r="",a=this,i=a.fn;"function"==typeof t&&(e=t,t=null),t=t||{},e=e||function(n,t){if(n)throw n instanceof Error||(n=new Error(n)),n;r=t};var o=a.config.name;!o&&i.TPL_NAME&&(o=i.TPL_NAME);var f=new d(n),c=new u.LinkedBuffer(e,a.config).head;return s({name:o,fn:i,runtime:{commands:t.commands},root:a},f,c),r}},u.Scope=d,u.LinkedBuffer=m,t=u}(),e.exports=f});