module "zones" {
  source = "terraform-aws-modules/route53/aws//modules/zones"
  zones = {
    (local.domain_name)  = {}
    (local.molly_domain) = {}
  }
}

locals {
  records = [
    for dvo in aws_acm_certificate.public.domain_validation_options: {
      name = dvo.resource_record_name
      record = dvo.resource_record_value
      type = dvo.resource_record_type
    }
  ]
}

module "records" {
  source    = "terraform-aws-modules/route53/aws//modules/records"
  zone_name = local.domain_name

  records = concat([local.records], [
    {
      name = ""
      type = "A"
      alias = {
        name    = module.cloudfront.cloudfront_distribution_domain_name
        zone_id = module.cloudfront.cloudfront_distribution_hosted_zone_id
      }
    },
    {
      name    = "www"
      type    = "CNAME"
      records = [local.domain_name]
      ttl     = 3600
    },
    {
      name    = ""
      type    = "TXT"
      records = [local.keybase_validation]
      ttl     = 3600
    },
    {
      name = ""
      type = "MX",
      records = [
        "1 aspmx.l.google.com",
        "5 alt1.aspmx.l.google.com",
        "5 alt2.aspmx.l.google.com",
        "10 alt3.aspmx.l.google.com",
        "10 alt4.aspmx.l.google.com"
      ]
      ttl = 1800
    }
  ])

  depends_on = [module.zones]
}

module "records_molly" {
  source    = "terraform-aws-modules/route53/aws//modules/records"
  zone_name = local.molly_domain
  records = [
    {
      name    = "www"
      type    = "CNAME"
      records = [local.molly_domain]
      ttl     = 3600
    },
    {
      name    = "google-site-verification"
      type    = "TXT"
      records = [local.molly_site_verification]
      ttl     = 3600
    },
    {
      name = "_acme-challenge"
      type = "TXT"
      records = [
        local.molly_dns_validation_1,
        local.molly_dns_validation_2
      ]
      ttl = 3600
    },
    {
      name = ""
      type = "MX",
      records = [
        "1 aspmx.l.google.com",
        "5 alt1.aspmx.l.google.com",
        "5 alt2.aspmx.l.google.com",
        "10 alt3.aspmx.l.google.com",
        "10 alt4.aspmx.l.google.com"
      ]
      ttl = 1800
    }
  ]

  depends_on = [module.zones]
}
