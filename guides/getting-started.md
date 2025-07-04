---
outline: deep
---

# 🚀 Getting Started with Fynnel

**Fynnel** is a powerful toolkit for building, managing, and orchestrating data pipelines with support for multiple storage backends and integrated data quality checks.
This guide will walk you through installation and your first data ingestion example.

## Prerequisites
- Go 1.18+ installed
- Access to your desired data storage backends (e.g., PostgreSQL, ClickHouse, DuckDB, S3)
- (Optional) DBT for advanced data transformations

Ferry can be installed using **pip**:

```sh
pip install ferry
```

Verify the installation:
```sh
ferry --version
```

## ⚡ Your First Data Ingestion
Let's use cURL with Ferry’s HTTP API to ingest data. In this example, we'll transfer data from a `PostgreSQL` database to a `ClickHouse` data warehouse.

### Step 1: Start the Ferry Server
Run the Ferry service locally:

```sh
ferry serve
```

### Step 2: Send Data Using cURL
Use cURL to transfer data from a `PostgreSQL` database to a `ClickHouse` data warehouse.

```sh
curl -X POST http://localhost:8000/ingest \
  -H "Content-Type: application/json" \
  -d '{
    "identity": "fgXOw4zY"
    "source_uri": "postgresql://postgres:password@localhost:5432/db_name",
    "destination_uri": "clickhouse://default:password@localhost:9000/db_name?http_port=8123&secure=0",
    "resources": [
      {"source_table_name": "users"}
    ]
  }'
```

Required parameters:
- `identity`: a unique identifier for the ingestion
- `source_uri`: the source database uri
- `destination_uri`: the destination database uri
- `resources`: a list of resources you want to ingest



