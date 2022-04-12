### Certificate Renewal Process
1. Install `certbot`
1. Run `certbot certonly --manual --preferred-challenges dns` and use domains `imdevinc.com,*.imdevinc.com`
1. Use `aws kms-encrypt --key-id alias/site --plaintext fileb://<filepath> --output text --query CiphertextBlob` to generate encrypted secrets
1. Replace variables
1. Apply