module "cloudfront" {
  depends_on = [
    aws_acm_certificate.public.arn
  ]
  source = "terraform-aws-modules/cloudfront/aws"
  aliases = [
    local.domain_name,
    "www.${local.domain_name}"
  ]
  price_class                   = "PriceClass_100"
  create_origin_access_identity = true
  default_root_object           = "index.html"
  origin_access_identities = {
    imdevinc_site_bucket = "site CF to site S3"
  }
  origin = {
    imdevinc_site_bucket = {
      domain_name = module.bucket.s3_bucket_bucket_regional_domain_name
      s3_origin_config = {
        origin_access_identity = "imdevinc_site_bucket"
      }
    }
  }
  default_cache_behavior = {
    target_origin_id       = "imdevinc_site_bucket"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    query_string           = false

    function_association = {
      viewer-request = {
        function_arn = aws_cloudfront_function.redirect.arn
      }
    }
  }
  custom_error_response = {
    404 = {
      error_code         = 404
      response_code      = 404
      response_page_path = "/404.html"
    }
    403 = {
      error_code         = 403
      response_code      = 404
      response_page_path = "/404.html"
    }
  }
  viewer_certificate = {
    acm_certificate_arn = aws_acm_certificate.public.arn
    ssl_support_method  = "sni-only"
  }
}

resource "aws_cloudfront_function" "redirect" {
  name    = "redirect-site-to-index-1"
  runtime = "cloudfront-js-1.0"
  code    = <<EOF
function handler(event) {
  var request = event.request;
  if (request.uri.endsWith("/")) {
    request.uri += "index.html";
  }
  return request;
}
  EOF
}
