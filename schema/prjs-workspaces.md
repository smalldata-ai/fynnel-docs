# Fynnel Project and Workspace Configuration

Fynnel organizes your data engineering workflows using a **project** and one or more **workspaces**. These are defined using YAML configuration files that describe your environment, connections, pipelines, and assets.

---

## 1. `project.yml`

The `project.yml` file sits at the root of your Fynnel project and defines global metadata and settings.

**Example:**

```yaml
name: my_fynnel_project
description: >
  This project orchestrates data pipelines for analytics and reporting.
default_workspace: analytics
workspaces:
  - analytics
  - marketing
  - finance
version: 1.0
```

**Key Fields:**
- `name`: The name of your Fynnel project.
- `description`: A brief description of the project's purpose.
- `default_workspace`: The workspace to use if none is specified.
- `workspaces`: A list of all workspaces in this project.
- `version`: Project version (optional).

---

## 2. `workspace/*.yml`

Each workspace has its own YAML file (e.g., `workspace/analytics.yml`) that defines its specific configuration, such as connections, pipelines, and assets.

**Example: `workspace/analytics.yml`**

```yaml
name: analytics
description: Analytics workspace for core business data.
pipelines:
  - name: transactions_pipeline
    asset: transactions_asset.yml
    schedule: "0 2 * * *"  # Runs daily at 2am
  - name: users_pipeline
    asset: users_asset.yml
    schedule: "0 3 * * *"  # Runs daily at 3am
```

**Key Fields:**
- `name`: The workspace name.
- `description`: Description of the workspace.
- `pipelines`: List of pipelines, each referencing an asset file and an optional schedule.

---

## 3. Example Asset File (`asset/transactions_asset.yml`)

```yaml
identity: transactions
source:
  connection: pg_source
destination:
  connection: clickhouse_dw
  dataset_name: public
resources:
  - source_table_name: transactions
    destination_table_name: transactions_dw
    write_disposition:
      type: replace
      strategy: full
    quality_checks:
      - column: transaction_id
        checks:
          - unique
          - not_null
      - column: amount
        checks:
          - not_null
          - value_range: { min: 0 }
      - column: status
        checks:
          - allowed_values: [pending, completed, failed]
```

---

## 4. How It All Fits Together

- The **project** file (`project.yml`) defines the overall structure and available workspaces.
- Each **workspace** file (`workspace/*.yml`) specifies connections and pipelines for a particular environment or team.
- **Asset files** (referenced in pipelines) describe the data movement, transformation, and quality checks for each pipeline.

---

## 5. Best Practices

- Use environment variables for secrets (e.g., `${PG_PASSWORD}`).
- Keep asset files modular and reusable.
- Use the `schedule` field to automate pipeline runs.
- Define quality checks in asset files to ensure data integrity.

