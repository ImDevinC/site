resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
}

resource "aws_route_table" "main" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }
}

resource "aws_subnet" "private" {
  count                   = length(var.subnets)
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(aws_vpc.main.cidr_block, 8, sum([count.index, 1]))
  map_public_ip_on_launch = false
  availability_zone       = var.subnets[count.index]
}

resource "aws_route_table_association" "private" {
  count          = length(var.subnets)
  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.main.id
}

resource "aws_security_group" "main" {
  name   = local.name
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = -1
    self        = "false"
    cidr_blocks = ["0.0.0.0/0"]
    description = "any"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_key_pair" "main" {
  key_name   = "ec2"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC/bJ99zzHQa+YUa2uH8zLB8/aQO5WAis3Z2U+rDIBjVM7ty2Jpi2eIFW5+sM25skfpm77nS9CwK6A0ltKwNt9cw/L/e9otNWNUAK5170VSHr/qOPx657Q50P3GXFYlyV4D4GO9lO6GTjem+4IzSchf78ptYlxfPVdIddfw0Fx0Xf7EdCSIcRtP8g4/P+GJjn+ejaPi3STFsCwDlBv90EWctzS5HEMCcKRyZqpmAfoBy7TPPpnYJH/qzSh7PhBzdcpEsUdP9i/cuTHXYoMYLbaB0QGZ+xRudVnia0OTOvA66tQ/wZn3bYkcKkL/1EOgpzbe42EnoWnp4X7AXYKkAv9wNRtjdQ61tfXbCE+VNOkycjosbL0Px42a0BF9SfOyLwvMdiCPFhRjlR7BNQVO4sBxzE074SB9bO8mWejJ+u9jo1Ck5WIdwLcRcqWrm84hB9oF/FCMgUtHNaIrQgpzeUBBzjW1aKyHiVdiWG/LNLdyRmXchLA1iSWUxGj28yO9sf5CsFhQosU3nk23kd4kHu45MFmLd7IYBVSN1iP+pXZMwCYnS453t75AyH9ArLTZvdxAbqmrJQWMxg22c6zpEvuMu0vSOQjjRPVzhBnhYNUUsHSWApuXVjmYNzPbuByV9TyQOGoVO2LNi9JuXlZldC40+je+eyJ4Srk4TcPRj7BOdQ== cardno:9_245_407"
}
