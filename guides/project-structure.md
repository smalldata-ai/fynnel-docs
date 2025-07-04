# Fynnel Project Structure

Fynnel organizes your data engineering workflows using a clear and modular structure. This guide explains the core concepts—**Project**, **Workspace**, **Pipelines**, **Connections**, and **Assets**—and how to create and manage them using Fynnel CLI.

---

## 1. Project
A **Project** is the top-level directory that contains all your data workflows, configurations, and assets. It acts as the root for your workspace, pipelines, and assets.

### Create a Project
```bash
fynnel init my_project
cd my_project
```

---

## 2. Workspace
A **Workspace** is an isolated environment within a project, allowing you to manage configurations, connections, and assets for different teams, environments, or use cases.

### Create a Workspace
```bash
fynnel workspaces create my_workspace
```

List all workspaces:
```bash
fynnel workspaces list
```

---

## 3. Connections
**Connections** define how Fynnel interacts with external data sources and destinations (e.g., PostgreSQL, ClickHouse, DuckDB, S3).

### Add a Connection
```bash
fynnel connections add --type postgresql --name my_pg --host localhost --port 5432 --user user --password pass --database dbname
```

List all connections:
```bash
fynnel connections list
```

---

## 4. Pipelines
A **Pipeline** is a sequence of data processing steps, such as extraction, transformation, and loading (ETL). Pipelines are defined in configuration files and executed via the CLI.

### Create a Pipeline
Create a pipeline configuration file (e.g., `pipeline.yaml`) describing your data flow.

Run a pipeline:
```bash
fynnel pipeline run --config pipeline.yaml
```

---

## 5. Assets
**Assets** are reusable components such as DBT models, SQL scripts, or data quality checks that can be managed within your project or workspace.

### Add an Asset
Scaffold a new DBT project as an asset:
```bash
fynnel dbt scaffold --project my_dbt_project
```

Add other assets (e.g., SQL scripts) by placing them in the appropriate directory within your project or workspace.

---

## Summary Table
| Concept     | Description                                      | Example Command(s)                                  |
|-------------|--------------------------------------------------|-----------------------------------------------------|
| Project     | Top-level directory for all workflows            | `fynnel init my_project`                            |
| Workspace   | Isolated environment for configs/assets          | `fynnel workspaces create my_workspace`             |
| Connections | Data source/destination definitions              | `fynnel connections add ...`                        |
| Pipelines   | ETL workflows defined in config files            | `fynnel pipeline run --config pipeline.yaml`        |
| Assets      | Reusable components (DBT, SQL, etc.)             | `fynnel dbt scaffold --project my_dbt_project`      |

---

