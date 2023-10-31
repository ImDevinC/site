module "cloudfront" {
  depends_on = [
    aws_acm_certificate.public
  ]
  source  = "terraform-aws-modules/cloudfront/aws"
  version = "3.2.1"
  aliases = [
    local.domain_name,
    "www.${local.domain_name}"
  ]
  price_class                  = "PriceClass_100"
  default_root_object          = "index.html"
  create_origin_access_control = true
  origin_access_control = {
    site_oac = {
      description      = "Cloudfront access to S3"
      origin_type      = "s3"
      signing_behavior = "always"
      signing_protocol = "sigv4"
    }
  }
  origin = {
    imdevinc_site_bucket = {
      domain_name           = module.bucket.s3_bucket_bucket_regional_domain_name
      origin_access_control = "site_oac"
    }
  }
  default_cache_behavior = {
    target_origin_id       = "imdevinc_site_bucket"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    query_string           = false
  }
  custom_error_response = [
    {
      error_code         = 404
      response_code      = 404
      response_page_path = "/404.html"
    },
    {
      error_code         = 403
      response_code      = 404
      response_page_path = "/404.html"
    }
  ]
  viewer_certificate = {
    acm_certificate_arn = aws_acm_certificate.public.arn
    ssl_support_method  = "sni-only"
  }
}


module "blog_cloudfront" {
  depends_on = [
    aws_acm_certificate.public
  ]
  source  = "terraform-aws-modules/cloudfront/aws"
  version = "3.2.1"
  aliases = [
    "blog.${local.domain_name}"
  ]
  price_class                  = "PriceClass_100"
  default_root_object          = "index.html"
  create_origin_access_control = true
  origin_access_control = {
    s3_oac = {
      description      = "Cloudfront access to S3"
      origin_type      = "s3"
      signing_behavior = "always"
      signing_protocol = "sigv4"
    }
  }
  origin = {
    s3 = {
      domain_name           = module.blog_bucket.s3_bucket_bucket_regional_domain_name
      origin_access_control = "s3_oac"
    }
  }
  default_cache_behavior = {
    target_origin_id       = "s3"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    query_string           = true
    function_association = {
      viewer-request = {
        function_arn = aws_cloudfront_function.rewrite_hugo.arn
      }
    }
  }
  viewer_certificate = {
    acm_certificate_arn = aws_acm_certificate.public.arn
    ssl_support_method  = "sni-only"
  }
}

resource "aws_cloudfront_function" "rewrite_hugo" {
  name    = "rewrite-hugo-index"
  runtime = "cloudfront-js-1.0"
  code    = <<EOF
  function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Check whether the URI is missing a file name.
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } 
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    return request;
  }
  EOF
}
