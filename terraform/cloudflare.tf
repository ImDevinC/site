locals {
  cloudflare_account_id = "160dde3020d94b782e2085939a53c2d6"
  keybase_validation    = "keybase-site-verification=fI_s0HjMznP9oeK_le26opYH3ndOpT8LLXDX7gGvOQQ"
  atproto_validation    = "did=did:plc:fmuum4ytzifhp2qmwrurgtbe"
  name                  = "imdevinc"
  hostname              = "${local.name}.com"
  mx_records = {
    "aspmx.l.google.com"      = 1,
    "alt1.aspmx.l.google.com" = 5,
    "alt2.aspmx.l.google.com" = 5,
    "alt3.aspmx.l.google.com" = 10,
    "alt4.aspmx.l.google.com" = 10
  }
  tunnel_domain = "52197ab3-92e1-4432-b0a4-0e0f98ad1a8b.cfargotunnel.com"
  tunneled_domains = toset([
    "gha-dashboard",
    "homeassistant",
    "obsidian-livesync",
    "wallabag",
    "dnd-proxy",
    "auth",
    "lego",
    "files",
    "umami",
    "couchdb",
    "macrotrack",
    "chat",
  ])
}

resource "cloudflare_zone" "main" {
  account_id = local.cloudflare_account_id
  zone       = local.hostname
  jump_start = true
}

resource "cloudflare_pages_project" "main" {
  depends_on        = [cloudflare_zone.main]
  account_id        = local.cloudflare_account_id
  name              = local.name
  production_branch = "main"

  build_config {
    build_caching   = false
    build_command   = "hugo --minify"
    destination_dir = "public"
  }

  source {
    type = "github"
    config {
      owner             = "ImDevinC"
      production_branch = "main"
      repo_name         = "blog"
    }
  }
}

resource "cloudflare_pages_domain" "main" {
  account_id   = local.cloudflare_account_id
  project_name = cloudflare_pages_project.main.name
  domain       = local.hostname
}

resource "cloudflare_record" "www" {
  zone_id = cloudflare_zone.main.id
  name    = "www"
  value   = local.hostname
  proxied = true
  type    = "CNAME"
  comment = "managed by terraform"
}

resource "cloudflare_record" "main" {
  zone_id = cloudflare_zone.main.id
  name    = local.hostname
  value   = "${local.name}.pages.dev"
  proxied = true
  type    = "CNAME"
  comment = "managed by terraform"
}

resource "cloudflare_record" "keybase" {
  zone_id = cloudflare_zone.main.id
  name    = local.hostname
  value   = "\"${local.keybase_validation}\""
  type    = "TXT"
  comment = "managed by terraform"
}

resource "cloudflare_record" "atproto" {
  zone_id = cloudflare_zone.main.id
  name    = "_atproto"
  value   = "\"${local.atproto_validation}\""
  type    = "TXT"
  comment = "managed by terraform"
}

resource "cloudflare_record" "mx" {
  for_each = local.mx_records
  zone_id  = cloudflare_zone.main.id
  name     = "@"
  value    = each.key
  proxied  = false
  priority = each.value
  type     = "MX"
  comment  = "managed by terraform"
}

resource "cloudflare_record" "tunnel" {
  for_each = local.tunneled_domains
  zone_id  = cloudflare_zone.main.id
  name     = each.value
  value    = local.tunnel_domain
  proxied  = true
  type     = "CNAME"
  comment  = "managed by terraform"
}

resource "cloudflare_record" "spf" {
  zone_id = cloudflare_zone.main.id
  name    = "@"
  value   = "v=spf1 include:_spf.google.com -all"
  type    = "TXT"
  comment = "managed by terraform"
}

resource "cloudflare_record" "dkim" {
  zone_id = cloudflare_zone.main.id
  name    = "google._domainkey"
  value   = "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApeKeZkIvnWjQRBH816hDEsiDq32g0NggeGHXW0zJBB467s3f6rYvy3e4f08aLBir7UqIH4JtMYtkkN9rvUtxvCRq74aFE0VBiShasbUuQEDbDzwKEybVdHNt+1K23foaOWHkKLbMfHLaGVY+4Zf1VGqGEh0eCZLz2yzruEZpet7QEMLGptmc5p2xjMhPQg/+skp78Uo2RIG8jK3kRReFbZx+ERFJ/PV01+8o2oGqMqfQ/vW1f0qFtGlupRp+m3m3k8qfmkuJFyuMAESrjX+44xspH9tCHTU/LjyVMepKrkGQi9Q2+m29F9btoYjZPUNTyZw4EmXJlBQsiE6yO4k5XwIDAQAB"
  type    = "TXT"
  comment = "managed by terraform"
}

resource "cloudflare_record" "dmarc" {
  zone_id = cloudflare_zone.main.id
  name    = "_dmarc"
  value   = "v=DMARC1; p=none; rua=mailto:dmarc-reports@imdevinc.com"
  type    = "TXT"
  comment = "managed by terraform"
}
