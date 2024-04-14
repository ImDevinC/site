locals {
  j1_external_id = "f708856c-35b7-4e1f-8543-22cc4cfab606"
}

data "aws_iam_policy_document" "j1" {
  statement {
    effect = "Allow"
    actions = [
      "batch:Describe*",
      "batch:List*",
      "cloudhsm:Describe*",
      "cloudhsm:List*",
      "cloudwatch:GetMetricData",
      "codebuild:BatchGetReportGroups",
      "codebuild:GetResourcePolicy",
      "codebuild:List*",
      "ec2:GetEbsDefaultKmsKeyId",
      "eks:Describe*",
      "eks:List*",
      "fms:List*",
      "glacier:List*",
      "glue:GetJob",
      "glue:GetTags",
      "glue:List*",
      "identitystore:List*",
      "lambda:GetFunction",
      "lex:List*",
      "macie2:GetFindings",
      "macie2:List*",
      "redshift-serverless:List*",
      "ses:GetConfigurationSet",
      "ses:GetEmailIdentity",
      "ses:List*",
      "signer:List*",
      "sns:GetSubscriptionAttributes",
      "ssm:GetDocument"
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
