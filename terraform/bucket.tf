// Site bucket
module "bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.15.1"
  bucket  = local.bucket_name
  server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        kms_master_key_id = module.kms_key.key_id
        sse_algorithm     = "aws:kms"
      }
    }
  }
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    effect = "Allow"
    principals {
      identifiers = ["cloudfront.amazonaws.com"]
      type        = "Service"
    }
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${module.bucket.s3_bucket_id}/*"]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [module.cloudfront.cloudfront_distribution_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = module.bucket.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_policy.json
}

// Blog bucket
module "blog_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.15.1"
  bucket  = local.blog_bucket_name
  server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        kms_master_key_id = module.kms_key.key_id
        sse_algorithm     = "aws:kms"
      }
    }
  }
}

data "aws_iam_policy_document" "blog_s3_policy" {
  statement {
    effect = "Allow"
    principals {
      identifiers = ["cloudfront.amazonaws.com"]
      type        = "Service"
    }
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${module.blog_bucket.s3_bucket_id}/*"]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      # values   = ["arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${module.blog_cloudfront.cloudfront_origin_access_controls_ids[0]}"]
      values = [module.blog_cloudfront.cloudfront_distribution_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "blog_bucket_policy" {
  bucket = module.blog_bucket.s3_bucket_id
  policy = data.aws_iam_policy_document.blog_s3_policy.json
}
