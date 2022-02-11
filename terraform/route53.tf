module "zones" {
  source = "terraform-aws-modules/route53/aws//modules/zones"
  zones = {
    (local.domain_name) = {}
  }
}

module "records" {
  source    = "terraform-aws-modules/route53/aws//modules/records"
  zone_name = keys(module.zones.route53_zone_zone_id)[0]
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
      name    = "www"
      type    = "CNAME"
      records = [local.domain_name]
      ttl     = 3600
    },
    {
      name    = "_acme-challenge"
      type    = "TXT"
      records = [local.dns_validation_1, local.dns_validation_2]
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
  ]

  depends_on = [module.zones]
}
