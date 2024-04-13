provider "aws" {
  region = "us-west-2"
}

provider "aws" {
  region = "us-east-1"
  alias  = "useast1"
}

terraform {
  backend "s3" {
    bucket         = "imdevinc-tf-storage"
    region         = "us-west-1"
    key            = "site"
    dynamodb_table = "terraform-state-lock"
  }
}

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

