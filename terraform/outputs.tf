output "cloudflare_zone_id" {
  value = cloudflare_zone.main.id
}

output "mythicforge_zone_id" {
  value = cloudflare_zone.mythicforge.id
}

output "mythicforge_nameservers" {
  description = "Nameservers to configure at domain registrar (Namecheap)"
  value       = cloudflare_zone.mythicforge.name_servers
}

output "mythicforge_pages_url" {
  description = "Cloudflare Pages deployment URL"
  value       = "https://${cloudflare_pages_project.mythicforge.subdomain}"
}
