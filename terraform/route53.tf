module "zones" {
  source = "terraform-aws-modules/route53/aws//modules/zones"
  zones = {
    (local.domain_name) = {}
  }
}

locals {
  imdevinc_records = [
    for dvo in aws_acm_certificate.public.domain_validation_options : {
      name    = dvo.resource_record_name
      records = [dvo.resource_record_value]
      type    = dvo.resource_record_type
    }
  ]
}

module "records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  zone_id = module.zones.route53_zone_zone_id[local.domain_name]

  records = [
    {
      name = ""
      type = "A"
      alias = {
        name    = module.cloudfront.cloudfront_distribution_domain_name
        zone_id = module.cloudfront.cloudfront_distribution_hosted_zone_id
      }
    },
    {
      name               = local.imdevinc_records[0].name
      records            = local.imdevinc_records[0].records
      type               = local.imdevinc_records[0].type
      full_name_override = true
      ttl                = 300
    },
    {
      name    = "www"
      type    = "CNAME"
      records = [local.domain_name]
      ttl     = 3600
    },
    {
      name = "blog"
      type = "A"
      alias = {
        name    = module.blog_cloudfront.cloudfront_distribution_domain_name
        zone_id = module.blog_cloudfront.cloudfront_distribution_hosted_zone_id
      }
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
  ]

  depends_on = [module.zones]
}
