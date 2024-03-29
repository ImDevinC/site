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

resource "aws_acm_certificate" "molly" {
  domain_name       = "mollycollins.me"
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
  provider = aws.useast1
}
