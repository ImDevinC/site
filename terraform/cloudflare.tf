terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_token
}

locals {
  cloudflare_account_id = "160dde3020d94b782e2085939a53c2d6"
}

resource "cloudflare_zone" "main" {
  account_id = local.cloudflare_account_id
  zone       = "emoavenue.com"
  jump_start = true
}

resource "cloudflare_pages_project" "main" {
  depends_on        = [cloudflare_zone.main]
  account_id        = local.cloudflare_account_id
  name              = "emoavenue"
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
  domain       = "emoavenue.com"
}
