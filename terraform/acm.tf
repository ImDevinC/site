resource "aws_acm_certificate" "public" {
  domain_name       = "imdevinc.com"
  validation_method = "DNS"
  subject_alternative_names = [
    "*.imdevinc.com"
  ]
  lifecycle {
    create_before_destroy = true
  }
  provider = aws.useast1
}

# resource "aws_acm_certificate_validation" "public" {
#   certificate_arn = aws_acm_certificate.public.arn
#   validation_record_fqdns = [for k,v in module.records.route53_record_fqdn : v]
# }
