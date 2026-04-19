locals {
  mythicforge_domain = "mythicforge.app"
}

# Cloudflare zone for mythicforge.app
resource "cloudflare_zone" "mythicforge" {
  name = local.mythicforge_domain
  account = {
    id = local.cloudflare_account_id
  }
}

# Cloudflare Pages project for mythicforge
resource "cloudflare_pages_project" "mythicforge" {
  depends_on        = [cloudflare_zone.mythicforge]
  account_id        = local.cloudflare_account_id
  name              = "mythicforge"
  production_branch = "main"

  build_config = {
    build_command   = "npm run build"
    destination_dir = "dist"
  }

  source = {
    type = "github"
    config = {
      owner                         = "ImDevinC"
      repo_name                     = "spellcards"
      production_branch             = "main"
      pr_comments_enabled           = true
      production_deployment_enabled = true
      preview_deployment_setting    = "all"
    }
  }

  deployment_configs = {
    production = {
      env_vars = {
        "NODE_VERSION" = {
          type  = "plain_text"
          value = "22"
        }
        "NODE_ENV" = {
          type  = "plain_text"
          value = "production"
        }
        "VITE_SENTRY_DSN" = {
          type  = "secret_text"
          value = var.sentry_dsn
        }
        "SENTRY_ORG" = {
          type  = "secret_text"
          value = var.sentry_org
        }
        "SENTRY_PROJECT" = {
          type  = "secret_text"
          value = var.sentry_project
        }
        "SENTRY_AUTH_TOKEN" = {
          type  = "secret_text"
          value = var.sentry_auth_token
        }
      }
      fail_open = false
    }

    preview = {
      env_vars = {
        "NODE_VERSION" = {
          type  = "plain_text"
          value = "22"
        }
        "NODE_ENV" = {
          type  = "plain_text"
          value = "production"
        }
        "VITE_SENTRY_DSN" = {
          type  = "secret_text"
          value = var.sentry_dsn
        }
        "SENTRY_ORG" = {
          type  = "secret_text"
          value = var.sentry_org
        }
        "SENTRY_PROJECT" = {
          type  = "secret_text"
          value = var.sentry_project
        }
        "SENTRY_AUTH_TOKEN" = {
          type  = "secret_text"
          value = var.sentry_auth_token
        }
      }
      fail_open = false
    }
  }
}

# Custom domain for Pages project: mythicforge.app
resource "cloudflare_pages_domain" "mythicforge" {
  account_id   = local.cloudflare_account_id
  project_name = cloudflare_pages_project.mythicforge.name
  name         = local.mythicforge_domain
}

# DNS: Apex domain (mythicforge.app) points to Pages
resource "cloudflare_dns_record" "mythicforge_apex" {
  zone_id = cloudflare_zone.mythicforge.id
  name    = "@"
  content = "mythicforge.pages.dev"
  proxied = true
  type    = "CNAME"
  comment = "managed by terraform"
  ttl     = 1
}

# DNS: www.mythicforge.app redirects to apex
resource "cloudflare_dns_record" "mythicforge_www" {
  zone_id = cloudflare_zone.mythicforge.id
  name    = "www"
  content = local.mythicforge_domain
  proxied = true
  type    = "CNAME"
  comment = "managed by terraform"
  ttl     = 1
}
