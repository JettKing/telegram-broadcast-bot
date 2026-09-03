const DASHBOARD = "<!doctype html>\n<html lang=\"zh-CN\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<title>徐胖虎资源社｜广播控制台 V2.8</title>\n<style>\n*{box-sizing:border-box}\n:root{font-family:-apple-system,BlinkMacSystemFont,\"SF Pro Display\",\"Segoe UI\",sans-serif}\nbody{margin:0;background:#f5f7fb;color:#111827}\nbutton,input,textarea,select{font:inherit}\nbutton{cursor:pointer;border:0;border-radius:10px;padding:10px 14px;background:#111827;color:#fff}\nbutton.secondary{background:#eef2f7;color:#111827}\nbutton.danger{background:#fee2e2;color:#991b1b}\n.app{display:grid;grid-template-columns:230px 1fr;min-height:100vh}\naside{background:#111827;color:#fff;padding:22px 14px}\n.brand{font-size:18px;font-weight:800;padding:8px 10px 22px}\nnav button{display:block;width:100%;text-align:left;background:transparent;color:#cbd5e1;margin:4px 0}\nnav button.active,nav button:hover{background:#1f2937;color:#fff}\nmain{padding:28px;max-width:1500px;width:100%}\n.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}\n.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}\n.card{background:#fff;border-radius:16px;padding:18px;box-shadow:0 4px 24px #0000000a}\n.stat b{font-size:28px;display:block;margin-top:8px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:15px 0}.stats>div{background:#f8fafc;border:1px solid #edf0f3;border-radius:12px;padding:14px}.stats b{font-size:24px;display:block;margin-bottom:5px}\n.muted{color:#6b7280}\n.panel{margin-top:18px}\n.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}\n.editor{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:18px}\ntextarea{width:100%;min-height:280px;border:1px solid #dbe2ea;border-radius:12px;padding:15px;resize:vertical}\ninput,select{width:100%;padding:11px;border:1px solid #dbe2ea;border-radius:10px;background:#fff}\nlabel{font-size:13px;font-weight:700;display:block;margin:14px 0 6px}\n.check{display:flex;align-items:center;gap:8px;margin:10px 0}\n.check input{width:auto}\n.table{overflow:auto}\ntable{width:100%;border-collapse:collapse}\nth,td{text-align:left;padding:12px;border-bottom:1px solid #edf0f3;white-space:nowrap}\n.badge{display:inline-block;padding:4px 8px;border-radius:999px;background:#eef2ff;font-size:12px}\n.channel{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #eee}\n.button-row{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;margin:8px 0}\n.preview{border:1px dashed #cbd5e1;border-radius:14px;padding:18px;background:#f8fafc;min-height:180px}\n.hidden{display:none}\n.toast{position:fixed;right:20px;bottom:20px;background:#111827;color:#fff;padding:12px 16px;border-radius:10px}\n@media(max-width:900px){\n  body{background:#f5f7fb;padding-bottom:82px}\n  .app{display:block;min-height:100vh}\n  aside{position:fixed;z-index:50;left:0;right:0;bottom:0;height:76px;padding:7px 8px;background:rgba(17,24,39,.97);border-top:1px solid #273244;box-shadow:0 -8px 28px #00000022}\n  .brand{display:none}\n  nav{display:flex;gap:5px;height:100%;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding:0 2px}nav::-webkit-scrollbar{display:none}\n  nav button{flex:0 0 76px;width:76px;margin:0;padding:8px 4px;border-radius:11px;text-align:center;background:transparent;font-size:11px;line-height:1.2;min-width:0;color:#cbd5e1;white-space:normal;overflow:hidden}\n  nav button.active{background:#374151;color:#fff}\n  main{padding:14px 12px 20px;max-width:none}\n  .top{position:sticky;top:0;z-index:20;background:#f5f7fb;margin:-14px -12px 14px;padding:12px;gap:10px;border-bottom:1px solid #e9edf2}\n  .top h1{font-size:20px;margin:0 0 2px}.top .muted{font-size:12px}\n  .top .row{gap:6px}.top button{padding:8px 10px;font-size:12px}\n  .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n  .card{border-radius:16px;padding:14px;box-shadow:0 4px 18px #0f172a0b;border:1px solid #eef1f5}\n  .stat b{font-size:23px}\n  h2{font-size:18px;margin:2px 0 12px}h3{font-size:15px}\n  .editor{grid-template-columns:1fr;gap:12px}\n  textarea{min-height:190px;font-size:16px}\n  input,select{font-size:16px;min-height:44px}\n  button{min-height:44px;padding:10px 13px}\n  .row{align-items:stretch}\n  .row>input,.row>select,.row>button{flex:1 1 100%;min-width:0}\n  .button-row{grid-template-columns:1fr;gap:8px}\n  .table{margin:0 -14px;padding:0 14px;overflow-x:auto;-webkit-overflow-scrolling:touch}\n  th,td{padding:10px 9px;font-size:13px}\n  .preview{min-height:130px}\n  .channel{gap:10px}\n  .toast{left:12px;right:12px;bottom:88px;text-align:center}\n}\n@media(max-width:430px){\n  nav button{font-size:10px}\n  .grid{gap:8px}.card{padding:12px}.stat b{font-size:21px}\n  .top .danger{display:none}\n}\n.top-left{display:flex;align-items:center;gap:10px}.menu-toggle{display:none}.menu-backdrop{display:none}\n@media(max-width:900px){\n  .menu-toggle{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;padding:0;font-size:20px;border-radius:12px}\n  .top-left{min-width:0}.top-left h1{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n  aside#sideMenu{position:fixed;z-index:100;left:0;top:0;bottom:0;right:auto;width:min(82vw,300px);height:100vh;padding:20px 14px;background:linear-gradient(180deg,#111827,#1e293b);transform:translateX(-105%);transition:transform .24s ease;box-shadow:12px 0 34px #0005}\n  aside#sideMenu.open{transform:translateX(0)}aside#sideMenu .brand{display:block;padding:8px 10px 22px;font-size:18px}\n  aside#sideMenu nav{display:flex;flex-direction:column;gap:4px;height:auto;overflow:visible;padding:0}\n  aside#sideMenu nav button{flex:initial;width:100%;min-height:46px;padding:11px 13px;text-align:left;font-size:14px;border-radius:12px;white-space:nowrap}\n  .menu-backdrop{display:block;position:fixed;z-index:90;inset:0;background:#0f172a66;opacity:0;pointer-events:none;transition:opacity .2s}.menu-backdrop.open{opacity:1;pointer-events:auto}\n  body{padding-bottom:18px}.top{margin:-12px -12px 14px;padding:10px 12px}  .top .danger{display:inline-flex;align-items:center;justify-content:center;text-align:center;line-height:1}\n}\n.section-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.section-heading h2{margin-top:0}.section-heading p{margin:4px 0 0}.step-chip{flex:none;padding:6px 9px;border-radius:999px;background:#eef2ff;color:#4f46e5;font-size:12px;font-weight:700}.broadcast-layout{display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:18px}.broadcast-content{min-height:260px}.compact-fold{margin-top:16px;border-top:1px solid #edf0f3;padding-top:12px}.compact-fold summary,.commercial-group summary{cursor:pointer;list-style:none;font-weight:750;color:#253247;padding:4px 0}.compact-fold summary::-webkit-details-marker,.commercial-group summary::-webkit-details-marker{display:none}.compact-fold summary:after,.commercial-group summary:after{content:'＋';float:none;color:#64748b;display:inline-flex;align-items:center;justify-content:center;line-height:1;width:22px;height:22px;border-radius:7px;background:#f1f5f9}.compact-fold[open] summary:after,.commercial-group[open] summary:after{content:'－'}\n.action-bar button,.top .danger{display:inline-flex;align-items:center;justify-content:center;text-align:center;line-height:1}.compact-fold summary,.commercial-group summary{display:flex;align-items:center;justify-content:space-between;gap:12px}.action-bar{display:flex;gap:10px;margin-top:18px;padding-top:14px;border-top:1px solid #edf0f3}.action-bar button{flex:1}.full-action{width:100%;margin-top:16px}.channel-picker{display:grid;gap:8px}.channel-picker .check{padding:10px 12px;border:1px solid #e5eaf0;border-radius:10px;background:#fafcff}.commercial-group{margin-top:10px;border:1px solid #e7edf3;border-radius:14px;padding:0 14px;background:#fff}.commercial-group summary{padding:15px 0}.commercial-group summary small{display:block;color:#94a3b8;font-size:12px;font-weight:500;margin-top:3px}.group-body{padding:0 0 14px}.compact-row{gap:8px}.compact-row>input,.compact-row>select{flex:1 1 180px}\n@media(max-width:900px){.broadcast-layout{display:flex;flex-direction:column;gap:12px}.broadcast-main{order:1}.broadcast-settings{order:2}.broadcast-content{min-height:210px}.section-heading{align-items:center}.section-heading h2{font-size:18px}.action-bar{position:sticky;bottom:0;background:rgba(255,255,255,.96);margin:16px -14px -14px;padding:12px 14px;z-index:10}.compact-fold{margin-top:14px}.commercial-shell{padding:12px}.commercial-shell>.section-heading{padding:2px 2px 5px}.commercial-group{padding:0 12px}.commercial-group summary{padding:14px 0}.group-body{padding-bottom:12px}.compact-row>input,.compact-row>select{flex:1 1 100%}.full-action{min-height:46px}.stats{margin:12px 0 14px}}\n.metric-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0}.metric-cards>div{padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e7edf3}.metric-cards b{display:block;font-size:24px}.metric-cards span{font-size:12px;color:#64748b}.item{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;margin:8px 0;border:1px solid #e7edf3;border-radius:12px;background:#fbfdff}.item-label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-actions{display:flex;gap:5px;flex:none}.small{min-height:34px;padding:6px 9px;font-size:12px;border-radius:8px;box-shadow:none}button:disabled{opacity:.5;cursor:not-allowed;transform:none;box-shadow:none}\n.finance-meta{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:-4px 0 12px;color:#94a3b8;font-size:12px}.finance-received{border-color:#bbf7d0!important;background:#f0fdf4!important}.finance-received b{color:#15803d}.finance-pending{border-color:#fed7aa!important;background:#fff7ed!important}.finance-pending b{color:#c2410c}.finance-orders{border-color:#bfdbfe!important;background:#eff6ff!important}.finance-orders b{color:#1d4ed8}.payment-cards{display:grid;gap:10px}.payment-card{border:1px solid #e7edf3;border-radius:14px;padding:13px;background:#fbfdff}.payment-head,.payment-meta,.payment-tx{display:flex;align-items:center;justify-content:space-between;gap:10px}.payment-head{font-size:13px}.payment-status{padding:4px 8px;border-radius:999px;font-size:12px;font-weight:700}.is-paid{background:#dcfce7;color:#15803d}.is-pending{background:#ffedd5;color:#c2410c}.payment-amount{font-size:23px;font-weight:800;color:#111827;margin:11px 0}.payment-amount small{font-size:12px;color:#64748b}.payment-meta{color:#64748b;font-size:12px;flex-wrap:wrap}.payment-tx{border-top:1px solid #edf0f3;margin-top:10px;padding-top:10px;font-size:12px;color:#64748b}.payment-tx code{color:#334155;font-family:ui-monospace,SFMono-Regular,monospace}.empty-state{padding:20px 12px;text-align:center;color:#64748b;background:#f8fafc;border-radius:12px;font-size:14px}.empty-state small{font-size:12px;color:#94a3b8}\n@media(max-width:900px){.metric-cards{gap:7px}.metric-cards>div{padding:11px 7px;text-align:center}.metric-cards b{font-size:20px}.item{align-items:flex-start;padding:10px;gap:8px}.item-actions{flex-wrap:wrap;justify-content:flex-end}.item-actions .small{min-height:36px;padding:7px 8px}.metrics-shell .table,.history-shell .table,.record-table{margin-top:10px}.finance-meta{align-items:flex-start}.finance-meta .small{min-height:36px}.payment-card{padding:12px}.payment-amount{font-size:22px}.payment-tx{align-items:flex-start}.payment-tx span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.payment-tx .small{flex:none;min-height:36px}}\n\n</style>\n</head>\n<body>\n<div id=\"app\" class=\"app\">\n<aside id=\"sideMenu\">\n  <div class=\"brand\">📢 徐胖虎资源社</div>\n  <nav>\n    <button class=\"active\" data-page=\"dashboard\">📊 仪表盘</button>\n    <button data-page=\"broadcast\">📣 新建广播</button>\n    <button data-page=\"drafts\">📝 草稿箱</button>\n    <button data-page=\"schedule\">⏰ 排期</button>\n    <button data-page=\"channels\">📺 频道</button>\n    <button data-page=\"history\">📚 历史</button>\n    <button data-page=\"media\">🖼️ 媒体库</button>\n    <button data-page=\"builder\">🧩 广播编排</button>\n    <button data-page=\"metrics\">📊 发送统计</button><button data-page=\"commercial\">💰 商业中心</button>\n    <button data-page=\"audit\">🔐 操作审计</button>\n    <button data-page=\"admins\">👥 管理员</button>\n  </nav>\n</aside>\n<div id=\"menuBackdrop\" class=\"menu-backdrop\"></div>\n<main>\n  <div class=\"top\"><div class=\"top-left\"><button class=\"menu-toggle secondary\" id=\"menuToggle\" aria-label=\"打开菜单\">☰</button><div><h1 id=\"title\">仪表盘</h1><div class=\"muted\">V2.8 · 运营控制台</div></div></div>\n  <div class=\"row\"><button class=\"secondary\" id=\"refresh\">刷新</button><button class=\"danger\" onclick=\"location.href='/admin/logout'\">退出登录</button></div></div>\n\n  <section id=\"dashboard\" class=\"page\">\n    <div class=\"grid\">\n      <div class=\"card stat\">📣 <b id=\"sTotal\">0</b><span class=\"muted\">广播记录</span></div>\n      <div class=\"card stat\">📝 <b id=\"sDraft\">0</b><span class=\"muted\">草稿</span></div>\n      <div class=\"card stat\">⏰ <b id=\"sScheduled\">0</b><span class=\"muted\">待排期</span></div>\n      <div class=\"card stat\">✅ <b id=\"sPublished\">0</b><span class=\"muted\">已发布</span></div>\n    </div>\n    <div class=\"card panel\"><h2>最近广播</h2><div id=\"recent\"></div></div>\n  </section>\n\n  <section id=\"broadcast\" class=\"page hidden\">\n    <div class=\"broadcast-layout\">\n      <div class=\"card broadcast-main\">\n        <div class=\"section-heading\"><div><h2>新建广播</h2><p class=\"muted\">先写内容，再选择频道发布。</p></div><span class=\"step-chip\">1 / 3</span></div>\n        <label>广播内容</label>\n        <textarea id=\"content\" class=\"broadcast-content\" placeholder=\"输入文字内容……\"></textarea>\n        <details class=\"compact-fold\"><summary>添加按钮或媒体</summary>\n          <label>媒体 file_id / R2 URL（可选）</label>\n          <input id=\"mediaUrl\" type=\"text\" placeholder=\"R2 未启用时暂不可上传媒体\">\n          <label>按钮</label><div id=\"buttons\"></div>\n          <button class=\"secondary\" id=\"addButton\">＋ 添加按钮</button>\n        </details>\n        <div class=\"action-bar\"><button class=\"secondary\" id=\"saveDraft\">保存草稿</button><button id=\"publishNow\">立即发布</button></div>\n      </div>\n      <div class=\"card broadcast-settings\">\n        <div class=\"section-heading\"><div><h2>发布设置</h2><p class=\"muted\">选择目标后即可发布。</p></div><span class=\"step-chip\">2 / 3</span></div>\n        <label>目标频道</label><div id=\"targetChannels\" class=\"channel-picker\"></div>\n        <details class=\"compact-fold\" open><summary>高级发布设置</summary>\n          <label>发布时间</label><input id=\"scheduledAt\" type=\"datetime-local\">\n          <label class=\"check\"><input id=\"pin\" type=\"checkbox\"> 发布后自动置顶</label>\n          <label class=\"check\"><input id=\"silent\" type=\"checkbox\"> 静默发布</label>\n        </details>\n        <details class=\"compact-fold preview-fold\"><summary>实时预览</summary><div class=\"preview\" id=\"preview\">等待输入内容……</div></details>\n        <button class=\"secondary full-action\" id=\"scheduleBtn\">创建定时广播</button>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"drafts\" class=\"page hidden\"><div class=\"card\"><h2>草稿箱</h2><div id=\"draftList\"></div></div></section>\n  <section id=\"schedule\" class=\"page hidden\"><div class=\"card\"><h2>排期中心</h2><div id=\"scheduleList\"></div></div></section>\n  <section id=\"channels\" class=\"page hidden\"><div class=\"card\"><h2>频道管理</h2><p class=\"muted\">先把机器人添加为频道管理员，再填写频道用户名或 Chat ID。</p><div class=\"row\"><input id=\"channelChatId\" placeholder=\"@频道用户名 或数字 Chat ID\"><input id=\"channelTitle\" placeholder=\"频道名称（可选）\"><button id=\"addChannel\">新增频道</button></div><div id=\"channelList\"></div></div></section>\n  <section id=\"history\" class=\"page hidden\"><div class=\"card\"><h2>广播历史</h2><div id=\"historyList\"></div></div></section>\n  <section id=\"media\" class=\"page hidden\"><div class=\"card\"><h2>媒体库</h2>\n<p class=\"muted\" id=\"mediaStatus\">R2 状态：由 Worker 自动检测。</p>\n<div class=\"row\"><input id=\"mediaFile\" type=\"file\"><button id=\"uploadMedia\">上传到 R2</button></div>\n<div id=\"mediaList\"></div></div></section>\n<section id=\"builder\" class=\"page hidden\"><div class=\"card\"><h2>🧩 广播编排</h2>\n<p class=\"muted\">拖拽媒体和按钮调整顺序；发布前可直接检查内容。</p>\n<textarea id=\"builderContent\" placeholder=\"广播正文\"></textarea>\n<h3>按钮</h3><div id=\"builderButtons\"></div>\n<div class=\"row\"><input id=\"btnLabel\" placeholder=\"按钮文字\"><input id=\"btnUrl\" placeholder=\"https://example.com\"><button id=\"addBtn\">添加按钮</button></div>\n<h3>媒体 ID</h3><div id=\"builderMedia\" class=\"dropzone\"></div>\n<div class=\"row\"><input id=\"builderMediaId\" placeholder=\"媒体库 ID\"><button id=\"addMedia\">添加媒体</button><button id=\"saveBuilder\">保存草稿</button></div></div></section>\n<section id=\"metrics\" class=\"page hidden\"><div class=\"card metrics-shell\"><div class=\"section-heading\"><div><h2>📊 发送统计</h2><p class=\"muted\">查看广播发送结果汇总。</p></div></div><div class=\"metric-cards\"><div><b id=\"metricTotal\">0</b><span>总投递</span></div><div><b id=\"metricSuccess\">0</b><span>成功</span></div><div><b id=\"metricFailed\">0</b><span>失败</span></div></div><div id=\"metricsList\"></div></div></section>\n  <section id=\"commercial\" class=\"page hidden\"><div class=\"card commercial-shell\"><div class=\"section-heading\"><div><h2>💰 商业中心</h2><p class=\"muted\">客户、套餐、订单和收款统一管理。</p></div><span class=\"step-chip\">运营</span></div>\n  <div class=\"stats financial-stats\"><div class=\"finance-received\"><b id=\"finReceived\">0.00 USDT</b><span>已收款</span></div><div class=\"finance-pending\"><b id=\"finPending\">0.00 USDT</b><span>待收款</span></div><div class=\"finance-orders\"><b id=\"finOrders\">0</b><span>订单数</span></div></div><div class=\"finance-meta\"><span id=\"finUpdated\">数据尚未刷新</span><button class=\"secondary small\" id=\"refreshFinance\">刷新财务</button></div>\n  <details class=\"commercial-group\" open><summary>客户管理 <small>客户资料与联系方式</small></summary><div class=\"group-body\"><div id=\"customers\"></div><div class=\"row compact-row\"><input id=\"custName\" placeholder=\"客户名称\"><input id=\"custTg\" placeholder=\"Telegram\"><input id=\"custContact\" placeholder=\"联系方式\"><button id=\"addCustomer\">新增客户</button></div></div></details>\n  <details class=\"commercial-group\"><summary>广告套餐 <small>价格与投放时长</small></summary><div class=\"group-body\"><div id=\"packages\"></div><div class=\"row compact-row\"><input id=\"pkgName\" placeholder=\"套餐名称\"><input id=\"pkgPrice\" type=\"number\" step=\"0.01\" placeholder=\"价格 USDT\"><input id=\"pkgDays\" type=\"number\" placeholder=\"时长（天）\"><input id=\"pkgDesc\" placeholder=\"套餐说明\"><button id=\"addPackage\">新增套餐</button></div></div></details>\n  <details class=\"commercial-group\"><summary>广告订单 <small>创建和查看订单</small></summary><div class=\"group-body\"><div id=\"orders\"></div><div class=\"row compact-row\"><input id=\"orderCustomer\" placeholder=\"客户 ID\"><input id=\"orderPackage\" placeholder=\"套餐 ID（可选）\"><input id=\"orderAmount\" type=\"number\" step=\"0.01\" placeholder=\"金额 USDT\"><input id=\"orderStart\" type=\"datetime-local\"><input id=\"orderEnd\" type=\"datetime-local\"><button id=\"addOrder\">创建订单</button></div></div></details>\n  <details class=\"commercial-group\"><summary>USDT 收款 <small>登记链上收款</small></summary><div class=\"group-body\"><div id=\"payments\" class=\"payment-cards\"></div><div class=\"row compact-row\"><input id=\"paymentOrder\" placeholder=\"订单 ID\"><input id=\"paymentAmount\" type=\"number\" step=\"0.01\" placeholder=\"金额 USDT\"><input id=\"paymentTxid\" placeholder=\"链上 TXID\"><select id=\"paymentStatus\"><option value=\"paid\">已收款</option><option value=\"pending\">待确认</option></select><button id=\"addPayment\">登记收款</button></div></div></details>\n  <details class=\"commercial-group\"><summary>广告排期 <small>按日期查看投放安排</small></summary><div class=\"group-body\"><div id=\"adCalendar\"></div></div></details>\n  <details class=\"commercial-group\"><summary>内容库与 Hash 去重 <small>避免重复内容</small></summary><div class=\"group-body\"><div id=\"contentItems\"></div><div class=\"row compact-row\"><input id=\"contentTitle\" placeholder=\"标题\"><input id=\"contentCategory\" placeholder=\"分类\"><input id=\"contentTags\" placeholder=\"标签，逗号分隔\"></div><textarea id=\"contentBody\" placeholder=\"输入内容，系统会自动计算 Hash 并检测重复\"></textarea><button id=\"addContent\">保存内容</button></div></details></div></section><section id=\"audit\" class=\"page hidden\"><div class=\"card\"><h2>操作审计</h2><div id=\"auditList\"></div></div></section>\n<section id=\"admins\" class=\"page hidden\"><div class=\"card\"><div class=\"section-heading\"><div><h2>管理员</h2><p class=\"muted\">只有 owner 可以新增、修改或停用管理员。</p></div></div><div id=\"adminList\"></div>\n<div class=\"row\" style=\"margin-top:15px\"><input id=\"adminId\" placeholder=\"Telegram numeric user ID\"><select id=\"adminRole\"><option value=\"viewer\">viewer</option><option value=\"editor\">editor</option><option value=\"owner\">owner</option></select><button id=\"addAdmin\">添加/更新</button></div></div></section>\n</main>\n</div>\n<div id=\"toast\" class=\"toast hidden\"></div>\n<script>\nconst $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];\nlet channels=[];\nfunction toast(t){$(\"#toast\").textContent=t;$(\"#toast\").classList.remove(\"hidden\");setTimeout(()=>$(\"#toast\").classList.add(\"hidden\"),2200)}\nfunction esc(s=\"\"){return s.replace(/[&<>\"']/g,m=>({\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\"}[m]))}\nasync function api(path,opt={}){const r=await fetch(\"/api\"+path,{credentials:\"include\",...opt,headers:{\"content-type\":\"application/json\",...(opt.headers||{})}});if(r.status===401){location.href=\"/admin/login\";throw Error(\"未登录\")}const d=await r.json();if(!r.ok)throw Error(d.error||\"请求失败\");return d}\nfunction page(name){$$(\".page\").forEach(x=>x.classList.add(\"hidden\"));$(\"#\"+name).classList.remove(\"hidden\");$$(\"nav button\").forEach(x=>x.classList.toggle(\"active\",x.dataset.page===name));$(\"#title\").textContent={dashboard:\"仪表盘\",broadcast:\"新建广播\",drafts:\"草稿箱\",schedule:\"排期中心\",channels:\"频道管理\",history:\"广播历史\",audit:\"操作审计\",media:\"媒体库\",builder:\"广播编排\",metrics:\"发送统计\",commercial:\"商业中心\",admins:\"管理员\"}[name]||name;load(name)}\nconst sideMenu=$(\"#sideMenu\"),menuBackdrop=$(\"#menuBackdrop\");function closeMenu(){sideMenu.classList.remove(\"open\");menuBackdrop.classList.remove(\"open\")}$(\"#menuToggle\").onclick=()=>{sideMenu.classList.toggle(\"open\");menuBackdrop.classList.toggle(\"open\")};menuBackdrop.onclick=closeMenu;$$(\"nav button\").forEach(b=>b.onclick=()=>{page(b.dataset.page);closeMenu()});$(\"#refresh\").onclick=()=>load(document.querySelector(\"nav button.active\").dataset.page);\nfunction table(rows,heads,render){if(!rows.length)return '<div class=\"muted\">暂无数据</div>';return `<div class=\"table\"><table><tr>${heads.map(h=>`<th>${h}</th>`).join(\"\")}</tr>${rows.map(render).join(\"\")}</table></div>`}\n$(\"#addChannel\").onclick=async()=>{const chat_id=$(\"#channelChatId\").value.trim(),title=$(\"#channelTitle\").value.trim();if(!chat_id){toast(\"请填写频道用户名或 Chat ID\");return}try{await api(\"/channels\",{method:\"POST\",body:JSON.stringify({chat_id,title,enabled:true})});$(\"#channelChatId\").value=\"\";$(\"#channelTitle\").value=\"\";toast(\"频道已添加\");load(\"channels\")}catch(e){toast(e.message)}};\nasync function load(p){\n  try{\n    if(p===\"dashboard\"){let d=await api(\"/dashboard\");$(\"#sTotal\").textContent=d.stats.total;$(\"#sDraft\").textContent=d.stats.drafts;$(\"#sScheduled\").textContent=d.stats.scheduled;$(\"#sPublished\").textContent=d.stats.published;$(\"#recent\").innerHTML=table(d.recent,[\"ID\",\"状态\",\"类型\",\"频道\",\"时间\"],x=>`<tr><td>#${x.id}</td><td><span class=badge>${esc(x.status)}</span></td><td>${esc(x.content_type)}</td><td>${esc(x.channel_id)}</td><td>${esc(x.published_at||x.scheduled_at||x.created_at)}</td></tr>`)}\n    if(p===\"channels\"){let d=await api(\"/channels\");channels=d.channels;$(\"#channelList\").innerHTML=channels.map(x=>`<div class=channel><span>📺 ${esc(x.title||x.chat_id)}<br><small class=muted>${esc(x.chat_id)}</small></span><span class=badge>${x.enabled?\"启用\":\"停用\"}</span></div>`).join(\"\")||\"暂无频道\";renderTargets()}\n    if(p===\"drafts\"){let d=await api(\"/drafts\");$(\"#draftList\").innerHTML=table(d.rows,[\"ID\",\"类型\",\"状态\",\"创建时间\",\"操作\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.content_type)}</td><td>${esc(x.status)}</td><td>${esc(x.created_at)}</td><td><button onclick=\"publish(${x.id})\">发布</button> <button class=secondary onclick=\"delDraft(${x.id})\">删除</button></td></tr>`)}\n    if(p===\"schedule\"){let d=await api(\"/scheduled\");$(\"#scheduleList\").innerHTML=table(d.rows,[\"ID\",\"状态\",\"频道\",\"排期\",\"操作\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.status)}</td><td>${esc(x.channel_id)}</td><td>${esc(x.scheduled_at)}</td><td><button class=danger onclick=\"cancelSchedule(${x.id})\">取消</button></td></tr>`)}\n    if(p===\"history\"){let d=await api(\"/history\");$(\"#historyList\").innerHTML=table(d.rows,[\"ID\",\"状态\",\"类型\",\"频道\",\"消息ID\",\"发布时间\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.status)}</td><td>${esc(x.content_type)}</td><td>${esc(x.channel_id)}</td><td>${x.channel_message_id||\"-\"}</td><td>${esc(x.published_at||\"-\")}</td></tr>`)}\n    if(p===\"metrics\"){let d=await api(\"/metrics\"),rows=d.rows||[],total=rows.reduce((n,x)=>n+Number(x.count||0),0),success=rows.filter(x=>[\"sent\",\"published\",\"success\"].includes(x.status)).reduce((n,x)=>n+Number(x.count||0),0),failed=rows.filter(x=>[\"failed\",\"error\"].includes(x.status)).reduce((n,x)=>n+Number(x.count||0),0);$(\"#metricTotal\").textContent=total;$(\"#metricSuccess\").textContent=success;$(\"#metricFailed\").textContent=failed;$(\"#metricsList\").innerHTML=table(rows,[\"状态\",\"数量\"],x=>`<tr><td>${esc(x.status||\"未知\")}</td><td>${Number(x.count||0)}</td></tr>`)}\n    if(p===\"commercial\"){loadCommercial()} if(p===\"commercial\"){loadCommercial()}\n    if(p===\"audit\"){let d=await api(\"/audit\");$(\"#auditList\").innerHTML=table(d.rows,[\"管理员\",\"操作\",\"目标\",\"详情\",\"时间\"],x=>`<tr><td>${x.admin_id}</td><td>${esc(x.action)}</td><td>${esc((x.target_type||\"\")+\" \"+(x.target_id||\"\"))}</td><td>${esc(x.detail||\"\")}</td><td>${esc(x.created_at)}</td></tr>`)}\n    if(p===\"media\"){let st=await api(\"/media/status\");$(\"#mediaStatus\").textContent=st.enabled?\"R2 状态：已启用\":\"R2 状态：未启用，媒体上传暂不可用\";$(\"#uploadMedia\").disabled=!st.enabled;let d=await api(\"/media\");$(\"#mediaList\").innerHTML=table(d.rows,[\"ID\",\"类型\",\"文件名\",\"MIME\",\"大小\",\"创建时间\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.kind)}</td><td>${esc(x.file_name||\"-\")}</td><td>${esc(x.mime_type||\"-\")}</td><td>${x.size_bytes||\"-\"}</td><td>${esc(x.created_at)}</td></tr>`)}\n    if(p===\"admins\"){let d=await api(\"/roles\");$(\"#adminList\").innerHTML=table(d.rows,[\"User ID\",\"角色\",\"状态\",\"操作\"],x=>`<tr><td>${x.user_id}</td><td><span class=\"badge role-${esc(x.role)}\">${esc(x.role)}</span></td><td><span class=\"badge ${x.enabled?'status-on':'status-off'}\">${x.enabled?'启用':'停用'}</span></td><td>${x.enabled?`<button class=\"danger small\" onclick=\"disableAdmin(${x.user_id})\">停用</button>`:`<button class=\"secondary small\" onclick=\"enableAdmin(${x.user_id})\">恢复</button>`} <button class=\"danger small\" onclick=\"deleteAdmin(${x.user_id})\">删除</button></td></tr>`)}\n  }catch(e){toast(e.message)}\n}\nfunction renderTargets(){if(!channels.length){$(\"#targetChannels\").innerHTML='<span class=muted>暂无频道，请先添加频道</span>';return}$(\"#targetChannels\").innerHTML=channels.map(x=>`<label class=check><input type=checkbox value=\"${esc(x.chat_id)}\" checked> ${esc(x.title||x.chat_id)}</label>`).join(\"\")}\n$(\"#content\").oninput=()=>{$(\"#preview\").innerHTML=esc($(\"#content\").value).replace(/\\n/g,\"<br>\")||\"等待输入内容……\"}\n$(\"#addButton\").onclick=()=>{let d=document.createElement(\"div\");d.className=\"button-row\";d.innerHTML='<input class=\"bl\" placeholder=\"按钮文字\"><input class=\"bu\" placeholder=\"https://example.com\"><button class=\"danger\" onclick=\"this.parentElement.remove()\">×</button>';$(\"#buttons\").appendChild(d)}\nasync function create(status){const targets=$$(\"#targetChannels input:checked\").map(x=>x.value);if(!targets.length)throw Error(\"请选择频道\");const body={content:$(\"#content\").value,media_url:$(\"#mediaUrl\")?.value||null,targets,scheduled_at:$(\"#scheduledAt\").value||null,pin:$(\"#pin\").checked,silent:$(\"#silent\").checked,buttons:$$(\".button-row\").map(r=>({label:$(\".bl\",r).value,url:$(\".bu\",r).value})).filter(x=>x.label&&x.url),status};return api(\"/broadcasts\",{method:\"POST\",body:JSON.stringify(body)})}\n$(\"#saveDraft\").onclick=async()=>{try{await create(\"draft\");toast(\"已保存草稿\");page(\"drafts\")}catch(e){toast(e.message)}}\n$(\"#publishNow\").onclick=async()=>{try{await create(\"publish\");toast(\"已发布\");page(\"history\")}catch(e){toast(e.message)}}\n$(\"#scheduleBtn\").onclick=async()=>{if(!$(\"#scheduledAt\").value){toast(\"请选择时间\");return}try{await create(\"scheduled\");toast(\"排期创建成功\");page(\"schedule\")}catch(e){toast(e.message)}}\n$(\"#addAdmin\").onclick=async()=>{try{await api(\"/roles\",{method:\"POST\",body:JSON.stringify({user_id:Number($(\"#adminId\").value),role:$(\"#adminRole\").value})});$(\"#adminId\").value=\"\";toast(\"管理员已新增/更新\");load(\"admins\")}catch(e){toast(e.message)}}\nasync function disableAdmin(id){if(!confirm(\"确定停用管理员 #\"+id+\"？\"))return;try{await api(\"/roles/\"+id,{method:\"DELETE\"});toast(\"管理员已停用\");load(\"admins\")}catch(e){toast(e.message)}}\nasync function enableAdmin(id){try{await api(\"/roles/\"+id+\"/enable\",{method:\"POST\"});toast(\"管理员已恢复\");load(\"admins\")}catch(e){toast(e.message)}}\nasync function deleteAdmin(id){if(!confirm(\"永久删除管理员 #\"+id+\"？删除后将无法恢复，请确认。\"))return;try{await api(\"/roles/\"+id+\"/delete\",{method:\"DELETE\"});toast(\"管理员已永久删除\");load(\"admins\")}catch(e){toast(e.message)}}\nasync function publish(id){try{await api(\"/drafts/\"+id+\"/publish\",{method:\"POST\"});toast(\"发布成功\");load(\"drafts\")}catch(e){toast(e.message)}}\nasync function delDraft(id){if(!confirm(\"删除草稿？\"))return;try{await api(\"/drafts/\"+id,{method:\"DELETE\"});toast(\"已删除\");load(\"drafts\")}catch(e){toast(e.message)}}\nasync function cancelSchedule(id){if(!confirm(\"取消排期？\"))return;try{await api(\"/scheduled/\"+id,{method:\"DELETE\"});toast(\"已取消\");load(\"schedule\")}catch(e){toast(e.message)}}\npage(\"dashboard\"); load(\"channels\");\n\nlet builderButtons=[],builderMedia=[];\nfunction moveItem(arr,i,delta){const j=i+delta;if(j<0||j>=arr.length)return;[arr[i],arr[j]]=[arr[j],arr[i]];renderBuilder()}\nfunction renderBuilder(){\n  $(\"#builderButtons\").innerHTML=builderButtons.map((x,i)=>`<div class=\"item\" data-i=\"${i}\"><span class=\"item-label\">${esc(x.label)}</span><span class=\"item-actions\"><button class=\"secondary small\" onclick=\"moveItem(builderButtons,${i},-1)\">上移</button><button class=\"secondary small\" onclick=\"moveItem(builderButtons,${i},1)\">下移</button><button class=\"danger small\" onclick=\"builderButtons.splice(${i},1);renderBuilder()\">删除</button></span></div>`).join(\"\");\n  $(\"#builderMedia\").innerHTML=builderMedia.map((x,i)=>`<div class=\"item\" data-i=\"${i}\"><span class=\"item-label\">媒体 #${x}</span><span class=\"item-actions\"><button class=\"secondary small\" onclick=\"moveItem(builderMedia,${i},-1)\">上移</button><button class=\"secondary small\" onclick=\"moveItem(builderMedia,${i},1)\">下移</button><button class=\"danger small\" onclick=\"builderMedia.splice(${i},1);renderBuilder()\">删除</button></span></div>`).join(\"\");\n}\n$(\"#addBtn\").onclick=()=>{let l=$(\"#btnLabel\").value,u=$(\"#btnUrl\").value;if(l&&/^https?:\\/\\//.test(u)){builderButtons.push({label:l,url:u});$(\"#btnLabel\").value=\"\";$(\"#btnUrl\").value=\"\";renderBuilder()}};\n$(\"#addMedia\").onclick=()=>{let x=Number($(\"#builderMediaId\").value);if(x){builderMedia.push(x);$(\"#builderMediaId\").value=\"\";renderBuilder()}};\n$(\"#saveBuilder\").onclick=async()=>{try{let r=await api(\"/broadcast-builder\",{method:\"POST\",body:JSON.stringify({content:$(\"#builderContent\").value,buttons:builderButtons,media_ids:builderMedia,status:\"draft\"})});toast(\"草稿已保存 #\"+r.id)}catch(e){toast(e.message)}};\n$(\"#uploadMedia\").onclick=async()=>{let f=$(\"#mediaFile\").files[0];if(!f){toast(\"请选择文件\");return}try{\n  let m=await api(\"/media/upload-url\",{method:\"POST\",body:JSON.stringify({file_name:f.name,mime_type:f.type,size_bytes:f.size,kind:(f.type||\"\").startsWith(\"image/\")?\"photo\":(f.type||\"\").startsWith(\"video/\")?\"video\":\"document\"})});\n  let r=await fetch(m.upload_url,{method:\"PUT\",headers:{\"Content-Type\":f.type||\"application/octet-stream\"},body:f});\n  if(!r.ok)throw Error(\"R2 上传失败\");\n  toast(\"媒体上传成功\");load(\"media\");\n}catch(e){toast(e.message)}};\n\nasync function copyText(text){try{await navigator.clipboard.writeText(text);toast(\"TXID 已复制\")}catch(e){toast(\"复制失败，请长按 TXID 复制\")}}\n$(\"#refreshFinance\").onclick=()=>loadCommercial();\nasync function loadCommercial(){\n try{let f=await api(\"/commercial/finance\");$(\"#finReceived\").textContent=Number(f.received||0).toFixed(2)+\" USDT\";$(\"#finPending\").textContent=Number(f.pending||0).toFixed(2)+\" USDT\";$(\"#finOrders\").textContent=f.orders||0;$(\"#finUpdated\").textContent=\"更新于 \"+new Date().toLocaleTimeString()}catch(e){}\n try{\n  let c=await api(\"/commercial/customers\");$(\"#customers\").innerHTML=table(c.rows,[\"ID\",\"客户\",\"Telegram\",\"联系方式\",\"状态\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.name)}</td><td>${esc(x.telegram||\"-\")}</td><td>${esc(x.contact||\"-\")}</td><td>${esc(x.status)}</td></tr>`);\n  let p=await api(\"/commercial/packages\");$(\"#packages\").innerHTML=table(p.rows,[\"ID\",\"套餐\",\"价格 USDT\",\"天数\",\"说明\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.name)}</td><td>${Number(x.price_usdt||0).toFixed(2)}</td><td>${x.duration_days||\"-\"}</td><td>${esc(x.description||\"-\")}</td></tr>`);\n  let o=await api(\"/commercial/orders\");$(\"#orders\").innerHTML=table(o.rows,[\"ID\",\"客户\",\"套餐\",\"金额\",\"订单\",\"收款\",\"开始\",\"结束\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.customer_name||x.customer_id)}</td><td>${esc(x.package_name||\"-\")}</td><td>${Number(x.amount_usdt||0).toFixed(2)}</td><td>${esc(x.status)}</td><td>${esc(x.payment_status)}</td><td>${esc(x.start_at||\"-\")}</td><td>${esc(x.end_at||\"-\")}</td></tr>`);\n  let pay=await api(\"/commercial/payments\");$(\"#payments\").innerHTML=(pay.rows||[]).map(x=>{let tx=String(x.txid||\"\");return `<article class=\"payment-card\"><div class=\"payment-head\"><strong>订单 #${x.order_id}</strong><span class=\"payment-status ${x.status==='paid'?'is-paid':'is-pending'}\">${x.status==='paid'?'已收款':'待确认'}</span></div><div class=\"payment-amount\">${Number(x.amount_usdt||0).toFixed(2)} <small>USDT</small></div><div class=\"payment-meta\"><span>客户：${esc(x.customer_name||'-')}</span><span>${esc(x.paid_at||x.created_at||'-')}</span></div><div class=\"payment-tx\"><span>TXID：<code>${esc(tx?tx.slice(0,10)+'…'+tx.slice(-8):'-')}</code></span>${tx?`<button class=\"secondary small\" onclick=\"copyText(${JSON.stringify(tx)})\">复制</button>`:''}</div></article>`}).join(\"\")||'<div class=\"empty-state\">暂无收款记录<br><small>登记收款后会显示在这里</small></div>';\n  let c2=await api(\"/commercial/orders/calendar\");$(\"#adCalendar\").innerHTML=table(c2.rows,[\"订单\",\"客户\",\"金额\",\"状态\",\"开始\",\"结束\",\"频道\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.customer_name||\"-\")}</td><td>${Number(x.amount_usdt||0).toFixed(2)}</td><td>${esc(x.status)}</td><td>${esc(x.start_at||\"-\")}</td><td>${esc(x.end_at||\"-\")}</td><td>${esc(x.channel_id||\"-\")}</td></tr>`);\n  let ci=await api(\"/commercial/content\");$(\"#contentItems\").innerHTML=table(ci.rows,[\"ID\",\"标题\",\"分类\",\"标签\",\"状态\",\"Hash\"],x=>`<tr><td>#${x.id}</td><td>${esc(x.title||\"-\")}</td><td>${esc(x.category||\"-\")}</td><td>${esc(x.tags||\"-\")}</td><td>${esc(x.status)}</td><td><small>${esc(x.content_hash||\"-\")}</small></td></tr>`);\n }catch(e){toast(e.message)}\n}\n$(\"#addCustomer\").onclick=async()=>{try{await api(\"/commercial/customers\",{method:\"POST\",body:JSON.stringify({name:$(\"#custName\").value,telegram:$(\"#custTg\").value,contact:$(\"#custContact\").value})});toast(\"客户已创建\");loadCommercial()}catch(e){toast(e.message)}};\n$(\"#addPackage\").onclick=async()=>{try{await api(\"/commercial/packages\",{method:\"POST\",body:JSON.stringify({name:$(\"#pkgName\").value,price_usdt:Number($(\"#pkgPrice\").value),duration_days:Number($(\"#pkgDays\").value)||null,description:$(\"#pkgDesc\").value})});toast(\"套餐已创建\");loadCommercial()}catch(e){toast(e.message)}};\n$(\"#addOrder\").onclick=async()=>{try{await api(\"/commercial/orders\",{method:\"POST\",body:JSON.stringify({customer_id:Number($(\"#orderCustomer\").value),package_id:Number($(\"#orderPackage\").value)||null,amount_usdt:Number($(\"#orderAmount\").value),start_at:$(\"#orderStart\").value,end_at:$(\"#orderEnd\").value})});toast(\"订单已创建\");loadCommercial()}catch(e){toast(e.message)}};\n$(\"#addPayment\").onclick=async()=>{try{await api(\"/commercial/payments\",{method:\"POST\",body:JSON.stringify({order_id:Number($(\"#paymentOrder\").value),amount_usdt:Number($(\"#paymentAmount\").value),txid:$(\"#paymentTxid\").value,status:$(\"#paymentStatus\").value})});toast(\"收款已登记\");loadCommercial()}catch(e){toast(e.message)}};\n$(\"#addContent\").onclick=async()=>{try{await api(\"/commercial/content\",{method:\"POST\",body:JSON.stringify({title:$(\"#contentTitle\").value,category:$(\"#contentCategory\").value,tags:$(\"#contentTags\").value,content:$(\"#contentBody\").value,status:\"draft\"})});toast(\"内容已保存\");loadCommercial()}catch(e){toast(e.message)}};\n</script>\n</body>\n</html>";

const headers={"content-type":"application/json; charset=utf-8"};
const json=(x,s=200)=>new Response(JSON.stringify(x),{status:s,headers});
const now=()=>new Date().toISOString().slice(0,19).replace("T"," ");
const html=(x,s=200)=>new Response(x,{status:s,headers:{"content-type":"text/html; charset=utf-8"}});
async function tg(env,m,p={}){const r=await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${m}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(p)});const d=await r.json();if(!d.ok)throw Error(d.description||m);return d.result}
async function ensureBootstrapAdmin(env){
  const configured=String(env.ADMIN_USER_ID||"").trim();
  if(!configured || !/^\d+$/.test(configured)) return;
  const id=Number(configured);
  const exists=await env.DB.prepare("SELECT user_id FROM admins WHERE user_id=?").bind(id).first();
  if(!exists) await env.DB.prepare("INSERT INTO admins(user_id,role,enabled) VALUES(?,\'owner\',1)").bind(id).run();
}
async function isAdmin(env,id){return !!(id&&await env.DB.prepare("SELECT user_id FROM admins WHERE user_id=? AND enabled=1").bind(id).first())}
async function audit(env,uid,a,t,i,d){await env.DB.prepare("INSERT INTO web_audit_logs(admin_id,action,target_type,target_id,detail) VALUES(?,?,?,?,?)").bind(uid,a,t||null,i==null?null:String(i),d||null).run()}
async function channels(env){return (await env.DB.prepare("SELECT id,chat_id,title,enabled FROM channels ORDER BY id").all()).results||[]}
async function publishRecord(env,record){
  const buttons=(await env.DB.prepare("SELECT row_no,label,url FROM broadcast_buttons WHERE broadcast_id=? ORDER BY row_no,id").bind(record.id).all()).results||[];
  const rows=[];for(const b of buttons)(rows[b.row_no]??=[]).push({text:b.label,url:b.url});
  const p={chat_id:record.channel_id,from_chat_id:record.source_chat_id,message_id:record.source_message_id};
  if(rows.length)p.reply_markup={inline_keyboard:rows.filter(Boolean)};
  const s=await tg(env,"copyMessage",p);
  if(record.pin_after_publish)await tg(env,"pinChatMessage",{chat_id:record.channel_id,message_id:s.message_id,disable_notification:true});
  await env.DB.prepare("UPDATE broadcasts SET status='published',channel_message_id=?,published_at=?,error_message=NULL WHERE id=?").bind(s.message_id,now(),record.id).run();
}
async function api(request,env,uid,path,body){
  const u=new URL(request.url);
  if(path==="/dashboard"){
    const s=await env.DB.prepare(`SELECT COUNT(*) total,
      SUM(status='published') published,SUM(status='scheduled') scheduled FROM broadcasts`).first();
    const d=await env.DB.prepare("SELECT COUNT(*) drafts FROM drafts WHERE status='draft'").first();
    const recent=(await env.DB.prepare("SELECT id,status,content_type,channel_id,scheduled_at,published_at,created_at FROM broadcasts ORDER BY id DESC LIMIT 20").all()).results||[];
    return json({stats:{total:s.total||0,published:s.published||0,scheduled:s.scheduled||0,drafts:d.drafts||0},recent})
  }
  if(path==="/channels"&&request.method==="GET")return json({channels:await channels(env)});
  if(path==="/channels"&&request.method==="POST"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可管理频道"},403);
    if(!body.chat_id)return json({error:"chat_id 必填"},400);
    const r=await env.DB.prepare("INSERT INTO channels(chat_id,title,enabled) VALUES(?,?,?) ON CONFLICT(chat_id) DO UPDATE SET title=excluded.title,enabled=excluded.enabled")
      .bind(String(body.chat_id),body.title||null,body.enabled===false?0:1).run();
    return json({ok:true,id:r.meta.last_row_id});
  }
  if(path==="/roles"&&request.method==="GET"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可管理管理员"},403);
    return json({rows:(await env.DB.prepare("SELECT a.user_id,a.role,a.enabled,a.created_at FROM admins a ORDER BY a.user_id").all()).results||[]});
  }
  if(path==="/roles"&&request.method==="POST"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可管理管理员"},403);
    const id=Number(body.user_id); if(!Number.isSafeInteger(id)||id<=0)return json({error:"无效 Telegram User ID"},400);
    const role=["owner","editor","viewer"].includes(body.role)?body.role:"viewer";
    await env.DB.prepare("INSERT INTO admins(user_id,role,enabled) VALUES(?,?,1) ON CONFLICT(user_id) DO UPDATE SET role=excluded.role,enabled=1").bind(id,role).run();
    return json({ok:true,user_id:id,role});
  }
  const roleDisable=path.match(/^\/roles\/(\d+)$/);
  if(roleDisable&&request.method==="DELETE"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可管理管理员"},403);
    const id=Number(roleDisable[1]); if(id===uid)return json({error:"不能停用当前登录管理员"},400);
    await env.DB.prepare("UPDATE admins SET enabled=0 WHERE user_id=?").bind(id).run();
    await audit(env,uid,"disable_admin","admin",id);
    return json({ok:true,user_id:id,enabled:0});
  }
  const rolePermanentDelete=path.match(/^\/roles\/(\d+)\/delete$/);
  if(rolePermanentDelete&&request.method==="DELETE"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可管理管理员"},403);
    const id=Number(rolePermanentDelete[1]); if(id===uid)return json({error:"不能删除当前登录管理员"},400);
    const target=await env.DB.prepare("SELECT role FROM admins WHERE user_id=?").bind(id).first();
    if(!target)return json({error:"管理员不存在"},404);
    if(target.role==="owner"){
      const owners=await env.DB.prepare("SELECT COUNT(*) AS n FROM admins WHERE role='owner' AND enabled=1").first();
      if(Number(owners?.n||0)<=1)return json({error:"至少需要保留一名启用中的 owner"},400);
    }
    await env.DB.prepare("DELETE FROM admins WHERE user_id=?").bind(id).run();
    await audit(env,uid,"delete_admin","admin",id);
    return json({ok:true,user_id:id,deleted:true});
  }
  const roleEnable=path.match(/^\/roles\/(\d+)\/enable$/);
  if(roleEnable&&request.method==="POST"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可管理管理员"},403);
    const id=Number(roleEnable[1]); await env.DB.prepare("UPDATE admins SET enabled=1 WHERE user_id=?").bind(id).run();
    await audit(env,uid,"enable_admin","admin",id);
    return json({ok:true,user_id:id,enabled:1});
  }
  if(path==="/drafts")return json({rows:(await env.DB.prepare("SELECT * FROM drafts ORDER BY id DESC LIMIT 100").all()).results||[]});
  if(path==="/scheduled")return json({rows:(await env.DB.prepare("SELECT * FROM broadcasts WHERE status='scheduled' ORDER BY scheduled_at").all()).results||[]});
  if(path==="/history")return json({rows:(await env.DB.prepare("SELECT * FROM broadcasts ORDER BY id DESC LIMIT 200").all()).results||[]});
  if(path==="/audit")return json({rows:(await env.DB.prepare("SELECT * FROM web_audit_logs ORDER BY id DESC LIMIT 200").all()).results||[]});
  if(path==="/broadcasts"&&request.method==="POST"){
    if(!body.content?.trim())return json({error:"广播内容不能为空"},400);
    if(!Array.isArray(body.targets)||!body.targets.length)return json({error:"至少选择一个频道"},400);
    const status=body.status==="publish"?"published":body.status==="scheduled"?"scheduled":"draft";
    const first=body.targets[0];
    const r=await env.DB.prepare(`INSERT INTO broadcasts
      (admin_id,source_chat_id,source_message_id,channel_id,content_type,status,pin_after_publish,scheduled_at)
      VALUES(?,?,?,?,?,'draft',?,?)`).bind(uid,uid,0,first,"text",!!body.pin,body.scheduled_at||null).run();
    const id=r.meta.last_row_id;
    for(const ch of body.targets)await env.DB.prepare("INSERT OR IGNORE INTO broadcast_targets(broadcast_id,channel_id,pin_after_publish) VALUES(?,?,?)").bind(id,ch,!!body.pin).run();
    for(const b of (body.buttons||[]))if(/^https?:\/\//i.test(b.url))await env.DB.prepare("INSERT INTO broadcast_buttons(broadcast_id,row_no,label,url) VALUES(?,?,?,?)").bind(id,0,b.label,b.url).run();
    /* Web text broadcasts use sendMessage; media broadcasting remains available through the Bot workflow.
       A source-message based pipeline can be added without changing the dashboard API. */
    if(status==="published"){
      for(const ch of body.targets){
        const buttons=(await env.DB.prepare("SELECT row_no,label,url FROM broadcast_buttons WHERE broadcast_id=? ORDER BY row_no,id").bind(id).all()).results||[];
        const rows=[];for(const b of buttons)(rows[b.row_no]??=[]).push({text:b.label,url:b.url});
        const p={chat_id:ch,text:body.content,disable_notification:!!body.silent};if(rows.length)p.reply_markup={inline_keyboard:rows.filter(Boolean)};
        const sent=await tg(env,"sendMessage",p);if(body.pin)await tg(env,"pinChatMessage",{chat_id:ch,message_id:sent.message_id,disable_notification:true});
        await env.DB.prepare(`INSERT INTO broadcasts
          (admin_id,source_chat_id,source_message_id,channel_id,channel_message_id,content_type,status,pin_after_publish,published_at)
          VALUES(?,?,?,?,?,'text','published',?,?)`).bind(uid,0,0,ch,sent.message_id,!!body.pin,now()).run();
      }
      await env.DB.prepare("DELETE FROM broadcasts WHERE id=?").bind(id).run();
    }else if(status==="scheduled"){
      await env.DB.prepare("UPDATE broadcasts SET status='scheduled' WHERE id=?").bind(id).run();
    }else{
      const d=await env.DB.prepare("INSERT INTO drafts(admin_id,content,content_type,status) VALUES(?,?,?,?)")
        .bind(uid,body.content,"text","draft").run();
      return json({ok:true,id:d.meta.last_row_id});
    }
    await audit(env,uid,"create_broadcast","broadcast",id,status);
    return json({ok:true,id})
  }
  const md=path.match(/^\/drafts\/(\d+)\/publish$/);
  if(md&&request.method==="POST"){
    const d=await env.DB.prepare("SELECT * FROM drafts WHERE id=? AND admin_id=? AND status='draft'").bind(Number(md[1]),uid).first();
    if(!d)return json({error:"草稿不存在"},404);
    const ch=await env.DB.prepare("SELECT chat_id FROM channels WHERE enabled=1 LIMIT 1").first();
    if(!ch)return json({error:"没有启用频道"},400);
    const sent=d.content ? await tg(env,"sendMessage",{chat_id:ch.chat_id,text:d.content}) : await tg(env,"copyMessage",{chat_id:ch.chat_id,from_chat_id:d.source_chat_id,message_id:d.source_message_id});
    await env.DB.prepare(`INSERT INTO broadcasts
      (admin_id,source_chat_id,source_message_id,channel_id,channel_message_id,content,content_type,status,published_at)
      VALUES(?,?,?,?,?,?,?,'published',?)`).bind(uid,d.source_chat_id||null,d.source_message_id||null,ch.chat_id,d.content||null,sent.message_id,d.content_type,now()).run();
    await env.DB.prepare("UPDATE drafts SET status='published' WHERE id=?").bind(d.id).run();
    await audit(env,uid,"publish_draft","draft",d.id);
    return json({ok:true})
  }
  const dd=path.match(/^\/drafts\/(\d+)$/);
  if(dd&&request.method==="DELETE"){await env.DB.prepare("UPDATE drafts SET status='cancelled' WHERE id=? AND admin_id=?").bind(Number(dd[1]),uid).run();await audit(env,uid,"delete_draft","draft",dd[1]);return json({ok:true})}
  const sd=path.match(/^\/scheduled\/(\d+)$/);
  if(sd&&request.method==="DELETE"){await env.DB.prepare("UPDATE broadcasts SET status='cancelled' WHERE id=? AND status='scheduled'").bind(Number(sd[1])).run();await audit(env,uid,"cancel_schedule","broadcast",sd[1]);return json({ok:true})}

  if(path==="/media/status"&&request.method==="GET"){return json({enabled:!!env.MEDIA,provider:env.MEDIA?"r2":"none"});}
  if(path==="/media/upload-url"&&request.method==="POST"){
    if(!env.MEDIA)return json({error:"R2 尚未启用，请先在 Cloudflare Worker 配置 MEDIA。"},503);
    const name=String(body.file_name||"file"), mime=String(body.mime_type||"application/octet-stream");
    const key=await v26R2Key(uid,name);
    const r=await env.DB.prepare("INSERT INTO media_assets(admin_id,r2_key,kind,file_name,mime_type,size_bytes) VALUES(?,?,?,?,?,?)")
      .bind(uid,key,body.kind||"document",name,mime,body.size_bytes||null).run();
    return json({ok:true,id:r.meta.last_row_id,key,upload_url:v26UploadUrl(key)});
  }
  if(path==="/media/upload"&&request.method==="PUT"){
    if(!env.MEDIA)return json({error:"R2 未绑定"},500);
    const key=u.searchParams.get("key");
    if(!key || !key.startsWith(`uploads/${uid}/`))return json({error:"非法媒体 Key"},403);
    const data=await request.arrayBuffer();
    if(data.byteLength>50*1024*1024)return json({error:"单文件限制 50MB"},413);
    await env.MEDIA.put(key,data,{httpMetadata:{contentType:request.headers.get("Content-Type")||"application/octet-stream"}});
    await env.DB.prepare("UPDATE media_assets SET size_bytes=? WHERE r2_key=? AND admin_id=?").bind(data.byteLength,key,uid).run();
    return json({ok:true,key,size_bytes:data.byteLength});
  }
  if(path==="/media"&&request.method==="GET"){
    return json({rows:(await env.DB.prepare("SELECT id,kind,file_name,mime_type,size_bytes,r2_key,created_at FROM media_assets WHERE admin_id=? ORDER BY id DESC LIMIT 200").bind(uid).all()).results||[]});
  }
  if(path==="/media/"+u.pathname.split("/").pop()&&false){}
  if(path.match(/^\/media\/(\d+)\/download$/)&&request.method==="GET"){
    const id=Number(path.match(/^\/media\/(\d+)\/download$/)[1]);
    const m=await env.DB.prepare("SELECT * FROM media_assets WHERE id=? AND admin_id=?").bind(id,uid).first();
    if(!m?.r2_key||!env.MEDIA)return json({error:"媒体不存在"},404);
    const obj=await env.MEDIA.get(m.r2_key);
    if(!obj)return json({error:"R2 文件不存在"},404);
    return new Response(obj.body,{headers:{"Content-Type":m.mime_type||"application/octet-stream","Content-Disposition":`inline; filename="${v26SafeName(m.file_name||"file")}"`}});
  }
  if(path==="/broadcast-builder"&&request.method==="POST"){
    if(!can(await v25Role(env,uid),"draft"))return json({error:"Forbidden"},403);
    const content=String(body.content||"");
    const buttons=Array.isArray(body.buttons)?body.buttons:[], media=Array.isArray(body.media_ids)?body.media_ids:[];
    const r=await env.DB.prepare("INSERT INTO broadcasts(content,status,scheduled_at,created_by) VALUES(?,?,?,?)")
      .bind(content,body.status||"draft",body.scheduled_at||null,uid).run();
    const bid=r.meta.last_row_id;
    for(let i=0;i<buttons.length;i++) if(buttons[i].label&&/^https?:\/\//.test(buttons[i].url))
      await env.DB.prepare("INSERT INTO broadcast_buttons(broadcast_id,label,url,sort_order) VALUES(?,?,?,?)").bind(bid,buttons[i].label,buttons[i].url,i).run();
    for(let i=0;i<media.length;i++) await env.DB.prepare("INSERT OR IGNORE INTO broadcast_media(broadcast_id,media_id,sort_order) VALUES(?,?,?)").bind(bid,Number(media[i]),i).run();
    await audit(env,uid,"create_broadcast","broadcast",bid,"v2.8 builder");
    return json({ok:true,id:bid});
  }
  if(path==="/metrics"&&request.method==="GET"){
    const rows=(await env.DB.prepare("SELECT status,COUNT(*) count FROM delivery_metrics GROUP BY status").all()).results||[];
    return json({rows});
  }


  // V2.8 Commercial Center
  if(path==="/commercial/customers"&&request.method==="GET"){
    if(!["owner","editor"].includes(await v25Role(env,uid)))return json({error:"Forbidden"},403);
    return json({rows:(await env.DB.prepare("SELECT * FROM ad_customers ORDER BY id DESC LIMIT 500").all()).results||[]});
  }
  if(path==="/commercial/customers"&&request.method==="POST"){
    if(!["owner","editor"].includes(await v25Role(env,uid)))return json({error:"Forbidden"},403);
    if(!body.name)return json({error:"客户名称必填"},400);
    const r=await env.DB.prepare("INSERT INTO ad_customers(name,telegram,contact,notes) VALUES(?,?,?,?)")
      .bind(body.name,body.telegram||null,body.contact||null,body.notes||null).run();
    await audit(env,uid,"create_ad_customer","customer",r.meta.last_row_id,body.name);
    return json({ok:true,id:r.meta.last_row_id});
  }
  if(path==="/commercial/packages"&&request.method==="GET")
    return json({rows:(await env.DB.prepare("SELECT * FROM ad_packages WHERE enabled=1 ORDER BY price_usdt").all()).results||[]});
  if(path==="/commercial/packages"&&request.method==="POST"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可管理套餐"},403);
    const r=await env.DB.prepare("INSERT INTO ad_packages(name,price_usdt,duration_days,description) VALUES(?,?,?,?)")
      .bind(body.name,Number(body.price_usdt||0),body.duration_days||null,body.description||null).run();
    return json({ok:true,id:r.meta.last_row_id});
  }
  if(path==="/commercial/orders"&&request.method==="GET"){
    if(!["owner","editor"].includes(await v25Role(env,uid)))return json({error:"Forbidden"},403);
    return json({rows:(await env.DB.prepare(`SELECT o.*,c.name customer_name,p.name package_name
      FROM ad_orders o LEFT JOIN ad_customers c ON c.id=o.customer_id
      LEFT JOIN ad_packages p ON p.id=o.package_id ORDER BY o.id DESC LIMIT 500`).all()).results||[]});
  }
  if(path==="/commercial/orders"&&request.method==="POST"){
    if(!["owner","editor"].includes(await v25Role(env,uid)))return json({error:"Forbidden"},403);
    if(!body.customer_id)return json({error:"customer_id 必填"},400);
    const r=await env.DB.prepare(`INSERT INTO ad_orders(customer_id,package_id,amount_usdt,status,payment_status,start_at,end_at,content,media_id,channel_id,notes,created_by)
      VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`).bind(Number(body.customer_id),body.package_id||null,Number(body.amount_usdt||0),
      body.status||"pending",body.payment_status||"unpaid",body.start_at||null,body.end_at||null,body.content||null,
      body.media_id||null,body.channel_id||null,body.notes||null,uid).run();
    return json({ok:true,id:r.meta.last_row_id});
  }
  if(path==="/commercial/orders/calendar"&&request.method==="GET"){
    if(!["owner","editor"].includes(await v25Role(env,uid)))return json({error:"Forbidden"},403);
    const from=u.searchParams.get("from")||"1970-01-01",to=u.searchParams.get("to")||"2999-12-31";
    return json({rows:(await env.DB.prepare(`SELECT o.id,c.name customer_name,o.amount_usdt,o.status,o.payment_status,o.start_at,o.end_at,o.channel_id
      FROM ad_orders o LEFT JOIN ad_customers c ON c.id=o.customer_id
      WHERE COALESCE(o.end_at,o.start_at,'9999')>=? AND COALESCE(o.start_at,o.end_at,'0000')<=? ORDER BY o.start_at`).bind(from,to).all()).results||[]});
  }
  if(path==="/commercial/payments"&&request.method==="GET"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可查看收款"},403);
    return json({rows:(await env.DB.prepare(`SELECT p.*,o.customer_id,c.name customer_name FROM ad_payments p LEFT JOIN ad_orders o ON o.id=p.order_id LEFT JOIN ad_customers c ON c.id=o.customer_id ORDER BY p.id DESC LIMIT 500`).all()).results||[]});
  }
  if(path==="/commercial/payments"&&request.method==="POST"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可登记收款"},403);
    const r=await env.DB.prepare("INSERT INTO ad_payments(order_id,amount_usdt,txid,status,paid_at) VALUES(?,?,?,?,?)")
      .bind(Number(body.order_id),Number(body.amount_usdt||0),body.txid||null,body.status||"paid",body.status==="paid"?now():null).run();
    if(body.status==="paid")await env.DB.prepare("UPDATE ad_orders SET payment_status='paid' WHERE id=?").bind(Number(body.order_id)).run();
    return json({ok:true,id:r.meta.last_row_id});
  }
  if(path==="/commercial/finance"&&request.method==="GET"){
    if(await v25Role(env,uid)!=="owner")return json({error:"仅 owner 可查看财务"},403);
    const a=await env.DB.prepare("SELECT COALESCE(SUM(amount_usdt),0) total FROM ad_payments WHERE status='paid'").first();
    const b=await env.DB.prepare("SELECT COALESCE(SUM(amount_usdt),0) total FROM ad_orders WHERE payment_status!='paid'").first();
    const c=await env.DB.prepare("SELECT COUNT(*) count FROM ad_orders").first();
    return json({received:Number(a?.total||0),pending:Number(b?.total||0),orders:Number(c?.count||0)});
  }
  if(path==="/commercial/content"&&request.method==="GET"){
    return json({rows:(await env.DB.prepare("SELECT * FROM content_items ORDER BY id DESC LIMIT 500").all()).results||[]});
  }
  if(path==="/commercial/content"&&request.method==="POST"){
    const content=String(body.content||"").trim(), hash=await v24Sha256(content.toLowerCase().replace(/\s+/g," "));
    const dup=await env.DB.prepare("SELECT id FROM content_items WHERE content_hash=? LIMIT 1").bind(hash).first();
    if(dup)return json({ok:false,duplicate:true,id:dup.id},409);
    const r=await env.DB.prepare("INSERT INTO content_items(admin_id,title,content,category,tags,content_hash,status) VALUES(?,?,?,?,?,?,?)")
      .bind(uid,body.title||null,content,body.category||null,Array.isArray(body.tags)?body.tags.join(","):body.tags||null,hash,body.status||"draft").run();
    return json({ok:true,id:r.meta.last_row_id});
  }

  return json({error:"Not Found"},404)
}
async function authFromHeader(request,env){
  const sessionUser=await v24SessionUser(request,env);
  if(sessionUser && await isAdmin(env,sessionUser)) return sessionUser;
  const a=request.headers.get("Authorization")||"";
  if(!env.ADMIN_WEB_TOKEN||a!=="Bearer "+env.ADMIN_WEB_TOKEN)return null;
  const row=await env.DB.prepare("SELECT user_id FROM admins WHERE enabled=1 ORDER BY user_id LIMIT 1").first();
  return row?.user_id||null;
}
async function bot(env,m){
  const uid=m.from?.id,cid=m.chat?.id;if(!await isAdmin(env,uid))return;
  if(m.text==="/start"){await tg(env,"sendMessage",{chat_id:cid,text:"📢 徐胖虎资源社｜广播控制中心\n\n请直接发送需要广播的内容，或打开 Web 控制台。"});return}
  if(!m.text?.startsWith("/")){
    const r=await env.DB.prepare("INSERT INTO drafts(admin_id,source_chat_id,source_message_id,content_type) VALUES(?,?,?,?)").bind(uid,cid,m.message_id,m.photo?"photo":m.video?"video":m.document?"document":"text").run();
    await tg(env,"sendMessage",{chat_id:cid,text:`📝 已保存草稿 #${r.meta.last_row_id}`});
  }
}

async function v24Sha256(s){
  const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("");
}
function v24Cookie(v,maxAge){return `xph_session=${v}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`}
async function v24SessionUser(request,env){
  const raw=request.headers.get("Cookie")?.match(/xph_session=([^;]+)/)?.[1];
  if(!raw)return null;
  const h=await v24Sha256(raw);
  const r=await env.DB.prepare("SELECT admin_id,expires_at FROM web_sessions WHERE token_hash=?").bind(h).first();
  return r && r.expires_at>now() ? r.admin_id : null;
}
async function v24LoginPage(env){
  const nonce=crypto.randomUUID();
  await env.DB.prepare("INSERT INTO web_nonces(nonce) VALUES(?)").bind(nonce).run();
  return html(`<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1">
<title>徐胖虎资源社｜登录</title><style>
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f5f7fb;display:grid;place-items:center;min-height:100vh}
.box{background:#fff;padding:30px;border-radius:20px;box-shadow:0 10px 40px #0001;width:min(420px,90vw)}
input,button{width:100%;padding:12px;margin-top:10px;border-radius:10px;border:1px solid #ddd}
button{background:#111827;color:#fff;border:0}
</style><div class=box><h1>📢 徐胖虎资源社</h1><p>V2.8 管理后台</p>
<form method=post action="/admin/login"><input type=hidden name=nonce value="${nonce}">
<input name=token type=password placeholder="管理员 Web Token" autocomplete=current-password required>
<button>登录</button></form></div>`);
}
async function v24Login(request,env){
  const fd=await request.formData();
  const token=String(fd.get("token")||""), nonce=String(fd.get("nonce")||"");
  const n=await env.DB.prepare("SELECT nonce FROM web_nonces WHERE nonce=?").bind(nonce).first();
  if(!n || !env.ADMIN_WEB_TOKEN || token!==env.ADMIN_WEB_TOKEN)return new Response("登录失败",{status:401});
  await env.DB.prepare("DELETE FROM web_nonces WHERE nonce=?").bind(nonce).run();
  const a=await env.DB.prepare("SELECT user_id FROM admins WHERE enabled=1 ORDER BY user_id LIMIT 1").first();
  if(!a)return new Response("未配置管理员",{status:403});
  const raw=crypto.randomUUID()+"."+crypto.randomUUID();
  const h=await v24Sha256(raw);
  const exp=new Date(Date.now()+8*60*60*1000).toISOString().slice(0,19).replace("T"," ");
  await env.DB.prepare("INSERT INTO web_sessions(token_hash,admin_id,expires_at) VALUES(?,?,?)").bind(h,a.user_id,exp).run();
  return new Response("",{status:302,headers:{location:"/admin","set-cookie":v24Cookie(raw,28800)}});
}


async function v25Role(env,uid){
  const r=await env.DB.prepare("SELECT role FROM admin_roles WHERE user_id=? AND enabled=1").bind(uid).first();
  if(r?.role)return r.role;
  const a=await env.DB.prepare("SELECT role FROM admins WHERE user_id=? AND enabled=1").bind(uid).first();
  return a?.role||"viewer";
}
function can(role,action){
  const map={viewer:["read"],editor:["read","draft","publish"],owner:["read","draft","publish","manage"]};
  return (map[role]||[]).includes(action);
}
async function v25Action(env,uid,action,bid,ch,msg,result){
  await env.DB.prepare("INSERT INTO broadcast_actions(broadcast_id,channel_id,message_id,action,admin_id,result) VALUES(?,?,?,?,?,?)")
    .bind(bid,ch,msg||null,action,uid,result||null).run();
}
async function v25SendMedia(env,p){
  const {chat_id,kind,file_id,caption,reply_markup,disable_notification}=p;
  const method={photo:"sendPhoto",video:"sendVideo",document:"sendDocument",audio:"sendAudio",voice:"sendVoice"}[kind];
  if(!method)throw Error("不支持的媒体类型");
  const payload={chat_id,caption:caption||undefined,disable_notification:!!disable_notification};
  payload[{photo:"photo",video:"video",document:"document",audio:"audio",voice:"voice"}[kind]]=file_id;
  if(reply_markup)payload.reply_markup=reply_markup;
  return tg(env,method,payload);
}
async function v25DeleteMessage(env,uid,bid,ch,msg){
  if(!await can(await v25Role(env,uid),"publish"))throw Error("无删除权限");
  const r=await tg(env,"deleteMessage",{chat_id:ch,message_id:msg});
  await v25Action(env,uid,"delete",bid,ch,msg,"ok");
  return r;
}


function v26SafeName(name="file"){
  return name.replace(/[^a-zA-Z0-9._-]/g,"_").slice(0,120)||"file";
}
async function v26R2Key(uid,name){
  return `uploads/${uid}/${new Date().toISOString().slice(0,10)}/${crypto.randomUUID()}-${v26SafeName(name)}`;
}
function v26UploadUrl(key){return `/api/media/upload?key=${encodeURIComponent(key)}`;}
async function v26Keyboard(env,bid){
  const rows=await env.DB.prepare("SELECT label,url FROM broadcast_buttons WHERE broadcast_id=? ORDER BY sort_order,id").bind(bid).all();
  if(!rows.results?.length)return undefined;
  return {inline_keyboard:rows.results.map(x=>[{text:x.label,url:x.url}])};
}
async function v26Metric(env,bid,ch,status,attempts,error=null){
  await env.DB.prepare("INSERT INTO delivery_metrics(broadcast_id,channel_id,status,attempts,error,sent_at) VALUES(?,?,?,?,?,?)")
    .bind(bid,String(ch),status,attempts,error,status==="sent"?now():null).run();
}

export default {
 async fetch(request,env){
  const u=new URL(request.url);
  if(u.pathname==="/")return new Response("XPH Telegram Broadcast Bot V2.8 OK");
  if(u.pathname==="/health")return json({ok:true,version:"2.8.0"});
  if(u.pathname==="/admin"){
    const uid=await v24SessionUser(request,env);
    if(!uid || !await isAdmin(env,uid))return new Response("",{status:302,headers:{location:"/admin/login"}});
    return html(DASHBOARD);
  }
  if(u.pathname==="/admin/login"&&request.method==="GET")return v24LoginPage(env);
  if(u.pathname==="/admin/login"&&request.method==="POST")return v24Login(request,env);
  if(u.pathname==="/admin/logout"){
    const raw=request.headers.get("Cookie")?.match(/xph_session=([^;]+)/)?.[1];
    if(raw)await env.DB.prepare("DELETE FROM web_sessions WHERE token_hash=?").bind(await v24Sha256(raw)).run();
    return new Response("",{status:302,headers:{location:"/admin/login","set-cookie":v24Cookie("",0)}});
  }
  if(u.pathname==="/admin/login")return html("<meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'><style>body{font-family:sans-serif;display:grid;place-items:center;min-height:100vh;background:#f5f7fb}.box{background:white;padding:30px;border-radius:18px;max-width:440px;width:90%}input,button{width:100%;padding:12px;margin-top:10px}</style><div class=box><h1>📢 广播控制台</h1><p>使用 Authorization: Bearer ADMIN_WEB_TOKEN 访问。</p></div>");
  if(u.pathname.startsWith("/api/")){
    const uid=await authFromHeader(request,env);if(!uid)return json({error:"Unauthorized"},401);
    let body={};if(request.method!=="GET"){try{body=await request.json()}catch{}}
    try{return await api(request,env,uid,u.pathname.slice(4),body)}catch(e){console.error(e);return json({error:e.message||"Internal Server Error"},500)}
  }
  if(request.method==="POST"&&u.pathname==="/telegram/webhook"){const up=await request.json();try{if(up.message)await bot(env,up.message)}catch(e){console.error(e)}return json({ok:true})}
  return new Response("Not Found",{status:404})
 },
 async scheduled(c,env,ctx){
   ctx.waitUntil((async()=>{
     const rows=(await env.DB.prepare("SELECT * FROM broadcasts WHERE status='scheduled' AND scheduled_at<=? ORDER BY scheduled_at LIMIT 20").bind(now()).all()).results||[];
     for(const r of rows)try{await publishRecord(env,r)}catch(e){await env.DB.prepare("UPDATE broadcasts SET status='failed',error_message=? WHERE id=?").bind(e.message.slice(0,500),r.id).run()}
   })())
 }
};