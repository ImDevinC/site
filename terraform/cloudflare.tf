locals {
  cloudflare_account_id = "160dde3020d94b782e2085939a53c2d6"
  name                  = "imdevinc"
  hostname              = "${local.name}.com"
  mx_records = {
    "aspmx.l.google.com"      = 1,
    "alt1.aspmx.l.google.com" = 5,
    "alt2.aspmx.l.google.com" = 5,
    "alt3.aspmx.l.google.com" = 10,
    "alt4.aspmx.l.google.com" = 10
  }
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
    build_command   = "exit 0"
    destination_dir = "static"
  }

  source {
    type = "github"
    config {
      owner             = "ImDevinC"
      production_branch = "main"
      repo_name         = "site"
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
}

resource "cloudflare_record" "main" {
  zone_id = cloudflare_zone.main.id
  name    = local.hostname
  value   = "${local.name}.pages.dev"
  proxied = true
  type    = "CNAME"
}

resource "cloudflare_record" "keybase" {
  zone_id = cloudflare_zone.main.id
  name    = local.hostname
  value   = local.keybase_validation
  type    = "TXT"
}

resource "cloudflare_record" "mx" {
  for_each = local.mx_records
  zone_id  = cloudflare_zone.main.id
  name     = "@"
  value    = each.key
  proxied  = false
  priority = each.value
  type     = "MX"
}
