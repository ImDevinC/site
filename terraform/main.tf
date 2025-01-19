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

    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "cloudflare" {}

provider "aws" {
  region = "us-west-1"
}

