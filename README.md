# 徐胖虎资源社｜Telegram 广播机器人 V2.8

## V2.8「商业化运营版」

这是一个**全新安装版**。新建 Cloudflare D1 时，不需要执行 V2.3/V2.4/V2.5/V2.6 的历史迁移。

数据库初始化只执行：

```bash
npx wrangler d1 migrations apply DB --remote
```

当前 migrations 目录只有：

```text
0001_v28.sql
```

### 功能

- Telegram 广播
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
6. 执行 D1 migration
7. 部署 Worker

### 版本原则

V2.8 是当前正式运营版本。后续只处理 Bug、安全、部署、性能和已有功能维护，不继续为了版本号堆功能。


## V2.8 R2 可选模式

V2.8 可以先在没有 Cloudflare R2 的情况下部署。D1、Telegram Bot、文字广播、定时排期、频道管理、商业中心、审计和统计不依赖 R2。

未启用 R2 时，媒体库会显示 R2 未启用，上传按钮自动禁用；媒体上传接口返回 503。开通 R2 后，在 `wrangler.toml` 恢复 `MEDIA` 绑定并重新部署即可启用媒体上传。
