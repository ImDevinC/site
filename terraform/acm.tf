resource "aws_acm_certificate" "public" {
  domain_name = "imdevinc.com"
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "public" {
  certificate_arn = aws_acm_certificate.public.arn
  validation_record_fqdns = [for k,v in module.records.route53_record_fqdn : v]
}

resource "aws_acm_certificate" "main" {
  private_key       = data.aws_kms_secrets.acm.plaintext["acm_priv_key"]
  certificate_body  = data.aws_kms_secrets.acm.plaintext["acm_cert"]
  certificate_chain = data.aws_kms_secrets.acm.plaintext["acm_chain"]
  provider          = aws.useast1
}

data "aws_kms_secrets" "acm" {
  secret {
    name    = "acm_cert"
    payload = local.acm_cert
  }

  secret {
    name    = "acm_priv_key"
    payload = local.acm_priv_key
  }

  secret {
    name    = "acm_chain"
    payload = local.acm_chain
  }
}
