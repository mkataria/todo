
Downloads:
1. React, node
Mongo DB: 
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

for docker
Docker desktop

for aws
# Install Chocolatey if not already installed
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install AWS CLI
choco install awscli -y

# Install eksctl
choco install eksctl -y

# Install kubectl
choco install kubernetes-cli -y

Tools:

1. Next.js, MUI, Redux, react form hook,
2. GraphQL
3. Docker
4. EKS (on AWS)
5. AWS Incognito
6. MongoDB Atlas
7. S3 (for images and whatever it can be used for)
8. Grafana
9. Prometheus
10. EFK for logging
11. Terraform for creating AWS resources.
12. AWS X-Ray
13. GitHub Action
14. AWS Secret Manager

Progression:

1. Create a server app
2. Create a react app
3. Add redux
4. Add docker 
5. Add unit test to both
