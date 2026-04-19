variable "sentry_dsn" {
  description = "Sentry DSN for mythicforge application error tracking"
  type        = string
  sensitive   = true
}

variable "sentry_org" {
  description = "Sentry organization slug"
  type        = string
  sensitive   = true
}

variable "sentry_project" {
  description = "Sentry project name for mythicforge"
  type        = string
  sensitive   = true
}

variable "sentry_auth_token" {
  description = "Sentry auth token for source map uploads"
  type        = string
  sensitive   = true
}
