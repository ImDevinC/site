locals {
  j1_external_id = "f708856c-35b7-4e1f-8543-22cc4cfab606"
}

data "aws_iam_policy_document" "j1" {
  statement {
    effect = "Allow"
    actions = [
      "access-analyzer:List*",
      "batch:Describe*",
      "batch:List*",
      "cloudhsm:DescribeBackups",
      "cloudhsm:DescribeClusters",
      "cloudhsm:ListTags",
      "cloudwatch:GetMetricData",
      "cloudwatch:List*",
      "codecommit:ListRepositories",
      "codecommit:GetRepository",
      "codecommit:ListTagsForResource",
      "codepipeline:List*",
      "dynamodb:Describe*",
      "dynamodb:List*",
      "ec2:GetEbsDefaultKmsKeyId",
      "ec2:GetEbsEncryptionByDefault",
      "ecr:Describe*",
      "ecr:GetLifecyclePolicy",
      "ecr:GetRepositoryPolicy",
      "ecr:List*",
      "elasticache:List*",
      "elasticfilesystem:Describe*",
      "elasticmapreduce:List*",
      "es:List*",
      "inspector2:ListCoverage",
      "inspector2:ListFindings",
      "kinesis:Describe*",
      "kinesis:List*",
      "lambda:GetFunction",
      "macie2:GetFindings",
      "macie2:ListFindings",
      "s3:GetObjectRetention",
      "s3:GetObjectLegalHold",
      "s3:Get*Configuration",
      "shield:GetSubscriptionState",
      "sns:GetTopicAttributes",
      "sns:GetSubscriptionAttributes",
      "sns:ListTopics",
      "sns:ListSubscriptions",
      "sns:ListTagsForResource",
      "waf:List*",
      "waf:Get*",
      "waf-regional:List*",
      "waf-regional:Get*",
      "workspaces:List*"
    ]
    resources = ["*"]
  }

  statement {
    effect    = "Allow"
    actions   = ["apigateway:GET"]
    resources = ["arn:aws:apigateway:*::/*"]
  }
}

data "aws_iam_policy_document" "j1_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    condition {
      test     = "StringEquals"
      values   = [local.j1_external_id]
      variable = "sts:ExternalId"
    }
    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::612791702201:root"]
    }
  }
}

resource "aws_iam_role" "j1" {
  name               = "JupiterOne"
  assume_role_policy = data.aws_iam_policy_document.j1_assume.json
}

resource "aws_iam_role_policy_attachment" "j1" {
  policy_arn = aws_iam_policy.j1.arn
  role       = aws_iam_role.j1.name
}

resource "aws_iam_policy" "j1" {
  name   = "JupiterOneSecurityAudit"
  policy = data.aws_iam_policy_document.j1.json
}

resource "aws_iam_role_policy_attachment" "j1_security_audit" {
  policy_arn = "arn:aws:iam::aws:policy/SecurityAudit"
  role       = aws_iam_role.j1.name
}
