# Bank Crypto Integration Suite

**Bank Crypto Integration Suite** est une plateforme permettant :
- L’intégration d’API bancaires et crypto
- La réception et conversion de fichiers tokenisés
- La gestion d’un nœud blockchain sécurisé
- L’orchestration de transactions fiat/crypto

## 📌 Modules
- **infra/** : Configuration des serveurs et scripts d’installation
- **api/** : Backend API (Node.js)
- **blockchain/** : Connexion et monitoring des nœuds blockchain
- **tokenization/** : Scripts de tokenisation et détokenisation
- **docs/** : Documentation, CIS, schémas d’architecture

## 🚀 Installation
```bash
git clone https://github.com/<TON_COMPTE>/bank-crypto-integration-suite.git
cd bank-crypto-integration-suite
docker-compose up -d
```

## 🛠 Stack technique
- Node.js / Express.js
- Docker & Docker Compose
- PostgreSQL / MariaDB
- Web3.js / Ethers.js
- Nginx (reverse proxy)
- HashiCorp Vault (gestion des clés)

## 📄 Licence
MIT
