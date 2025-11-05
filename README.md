# Leagl Document Server

legal assistant tool that helps users search and summarize legal
documents

## 📋 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Installation](#-installation)
- [API Endpoints](#-api-endpoints)
- [Frontend Repository](#-frontend-repository)

## ✨ Features

- **List of Legal Documents**: Has multiple categories legal documents
- **Elastic Search**: It has a global search box where users can search and view the document with the power of elastic search

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.x

- yarn

## 🔐 Environment Variables

```env
# Server Configuration
NODE_ENV=node_environmnet
PORT=port_number

# Elastic Search Configuration
ELASTIC_NODE='elastic_server'
ELASTIC_API_KEY='elastic_api_key'
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tusharahmmed/acme-server.git

# Navigate to project directory
cd acme-server

# Install dependencies
yarn install

# Copy environment variables
cp .env.example .env

# Configure your .env file with database and other settings

# Start development server
yarn dev

# Or start production server
yarn start
```

The API will be available at `http://localhost:5000`

---

## 💠 API Endpoints

- http://localhost:5000/api/legal-docs?q=search_term - [GET]

## 🔗 Frontend Repository

This backend connects to the Legal Document Frontend UI.

**Frontend Repository**: [https://github.com/tusharahmmed/acme-frontend](https://github.com/tusharahmmed/acme-frontend)

**Built with ❤️ using Node.js, Express, TypeScript and Elastic Search**
