# 徐胖虎资源社｜Telegram 广播机器人 V2.8

## V2.8「商业化运营版」

这是一个**全新安装版**。新建 Cloudflare D1 时，不需要执行 V2.3/V2.4/V2.5/V2.6 的历史迁移。

数据库初始化只执行：

```bash
npx wrangler d1 migrations apply DB --remote
```

当前 migrations 目录包括：

```text
0001_v28.sql
0002_scheduled_broadcast_silent.sql
```

### 功能

- Telegram 广播
- Telegram WebApp 管理员登录（服务端校验 `initData`；网页 Token 仅作应急入口）
- 草稿 / 排期 / 历史
- 多频道
- URL 按钮
- 静默发布 / 自动置顶
- R2 媒体库
- 广播编排
- 发送统计
- 操作审计
- 管理员角色
- 广告客户
- 广告套餐
- 广告订单
- 广告排期
- USDT 收款记录
- 财务汇总
- 内容库与 Hash 去重

### 首次部署

1. 创建 D1 数据库
2. 将 `wrangler.toml` 中 `database_id` 改成实际 D1 ID
3. 将 `ADMIN_USER_ID` 改成你的 Telegram 数字用户 ID
4. 创建 R2 Bucket：`xph-broadcast-media`
5. 设置 `BOT_TOKEN` 与 `ADMIN_WEB_TOKEN`
6. 执行 D1 migration（按 Wrangler migration 顺序执行）
7. 通过 GitHub Actions 的 Worker 发布工作流部署 Worker

### 管理员登录

从 Telegram Bot 的「控制台」菜单或 `/start` 消息打开后台时，登录页会使用 Telegram WebApp `initData` 完成身份验证，并根据 Telegram User ID 查询 `admins` 表权限。不要让用户手动填写 Telegram ID；Telegram ID 只有在服务端验证签名后才可信。

网页 `ADMIN_WEB_TOKEN` 登录仍保留为应急维护入口。Telegram WebApp 登录依赖 Worker 中已有的 `BOT_TOKEN`，不需要新增 Secret。

### 版本原则

V2.8 是当前正式运营版本。后续只处理 Bug、安全、部署、性能和已有功能维护，不继续为了版本号堆功能。

## 部署约定

- `.github/workflows/deploy.yml` 在 `main` 更新时运行 `npm ci`、源码检查和 Wrangler 部署；生产环境应在 GitHub Environment 中配置 Cloudflare Secrets。
- `pages.yml` 发布的是 GitHub Pages 静态站点，不等同于 Cloudflare Pages。
- 定时文本广播使用 D1 中保存的正文，通过 Telegram `sendMessage` 发布；来源消息型广播才使用 `copyMessage`。


## V2.8 R2 可选模式

V2.8 可以先在没有 Cloudflare R2 的情况下部署。D1、Telegram Bot、文字广播、定时排期、频道管理、商业中心、审计和统计不依赖 R2。

未启用 R2 时，媒体库会显示 R2 未启用，上传按钮自动禁用；媒体上传接口返回 503。开通 R2 后，在 `wrangler.toml` 恢复 `MEDIA` 绑定并重新部署即可启用媒体上传。
