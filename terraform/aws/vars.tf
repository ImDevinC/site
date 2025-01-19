variable "vpc_cidr" {
  type        = string
  description = "CIDR to use for the primary VPC"
}

variable "ami_id" {
  # aws ssm get-parameter --name /aws/service/bottlerocket/aws-ecs-2/arm64/latest/image_id \
  # --region us-west-1 --query "Parameter.Value" --output text
  type        = string
  description = "AMI to use for the EC2 instance"
}

variable "instance_type" {
  type        = string
  description = "Instance type"
}

variable "subnets" {
  type        = list(string)
  description = "AZ's for subnets"
}

variable "region" {
  type        = string
  description = "Region to create in"
}
