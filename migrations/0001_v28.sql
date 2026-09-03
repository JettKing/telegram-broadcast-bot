PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS admins (
  user_id INTEGER PRIMARY KEY,
  role TEXT NOT NULL DEFAULT 'owner',
  enabled INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_roles (
  user_id INTEGER PRIMARY KEY,
  role TEXT NOT NULL DEFAULT 'editor',
  enabled INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS channels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chat_id TEXT NOT NULL UNIQUE,
  title TEXT,
  enabled INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS broadcasts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_id INTEGER NOT NULL,
  source_chat_id TEXT,
  source_message_id INTEGER,
  channel_id TEXT,
  channel_message_id INTEGER,
  content TEXT,
  content_type TEXT NOT NULL DEFAULT 'text',
  status TEXT NOT NULL DEFAULT 'draft',
  pin_after_publish INTEGER NOT NULL DEFAULT 0,
  scheduled_at TEXT,
  published_at TEXT,
  error_message TEXT,
  created_by INTEGER,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS drafts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_id INTEGER NOT NULL,
  source_chat_id TEXT,
  source_message_id INTEGER,
  content TEXT,
  content_type TEXT NOT NULL DEFAULT 'text',
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS web_nonces (
  nonce TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS web_sessions (
  token_hash TEXT PRIMARY KEY,
  admin_id INTEGER NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS web_audit_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_id INTEGER NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT,
  target_id TEXT,
  detail TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS broadcast_targets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  broadcast_id INTEGER NOT NULL,
  channel_id TEXT NOT NULL,
  pin_after_publish INTEGER NOT NULL DEFAULT 0,
  UNIQUE(broadcast_id, channel_id)
);

CREATE TABLE IF NOT EXISTS broadcast_media (
  broadcast_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (broadcast_id, media_id)
);

CREATE TABLE IF NOT EXISTS broadcast_buttons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  broadcast_id INTEGER NOT NULL,
  row_no INTEGER NOT NULL DEFAULT 0,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS scheduled_jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  broadcast_id INTEGER NOT NULL,
  run_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media_assets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_id INTEGER NOT NULL,
  r2_key TEXT,
  file_id TEXT,
  kind TEXT NOT NULL,
  file_name TEXT,
  mime_type TEXT,
  size_bytes INTEGER,
  public_url TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS broadcast_actions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  broadcast_id INTEGER NOT NULL,
  channel_id TEXT NOT NULL,
  message_id INTEGER,
  action TEXT NOT NULL,
  admin_id INTEGER NOT NULL,
  result TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS delivery_metrics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  broadcast_id INTEGER NOT NULL,
  channel_id TEXT NOT NULL,
  status TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 1,
  error TEXT,
  sent_at TEXT
);

CREATE TABLE IF NOT EXISTS ad_customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  telegram TEXT,
  contact TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ad_packages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price_usdt REAL NOT NULL DEFAULT 0,
  duration_days INTEGER,
  description TEXT,
  enabled INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ad_orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER NOT NULL,
  package_id INTEGER,
  amount_usdt REAL NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending',
  payment_status TEXT NOT NULL DEFAULT 'unpaid',
  start_at TEXT,
  end_at TEXT,
  content TEXT,
  media_id INTEGER,
  channel_id TEXT,
  message_id INTEGER,
  notes TEXT,
  created_by INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ad_payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  amount_usdt REAL NOT NULL DEFAULT 0,
  txid TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  paid_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS content_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_id INTEGER NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  category TEXT,
  tags TEXT,
  content_hash TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_audit_created ON web_audit_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_targets_broadcast ON broadcast_targets(broadcast_id);
CREATE INDEX IF NOT EXISTS idx_jobs_due ON scheduled_jobs(status,run_at);
CREATE INDEX IF NOT EXISTS idx_sessions_exp ON web_sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_media_admin ON media_assets(admin_id);
CREATE INDEX IF NOT EXISTS idx_media_r2 ON media_assets(r2_key);
CREATE INDEX IF NOT EXISTS idx_actions_broadcast ON broadcast_actions(broadcast_id);
CREATE INDEX IF NOT EXISTS idx_delivery_broadcast ON delivery_metrics(broadcast_id);
CREATE INDEX IF NOT EXISTS idx_buttons_broadcast ON broadcast_buttons(broadcast_id);
CREATE INDEX IF NOT EXISTS idx_ad_orders_customer ON ad_orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_ad_orders_dates ON ad_orders(start_at,end_at);
CREATE INDEX IF NOT EXISTS idx_content_hash ON content_items(content_hash);
CREATE INDEX IF NOT EXISTS idx_ad_payments_order ON ad_payments(order_id);
