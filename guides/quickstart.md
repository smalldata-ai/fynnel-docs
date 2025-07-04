## Quickstart

Get up and running with Fynnel in just a few steps!

### 1. Initialize a New Project

Create a new Fynnel project directory:

```bash
fynnel init my_project
cd my_project
```

---

### 2. Create a Workspace

Set up a workspace for your environment or team:

```bash
fynnel workspaces create my_workspace
```

---

### 3. Add a source Connection

Connect to your data source (example: PostgreSQL):

```bash
fynnel connections add --type postgresql --name my_pg --host localhost --port 5432 --user user --password pass --database dbname
```

### 3. Add a destination Connection

Connect to your data source (example: CLickhouse):

```bash
fynnel connections add --type clickhouse --name clickhs --host localhost --port 6349 --user user --password pass --database dbname
```

---

### 4. Scaffold a DBT Project (Optional)

If you use DBT for transformations, scaffold a new DBT project:

```bash
fynnel dbt scaffold --project my_dbt_project
```

---

### 5. Define and Run a Pipeline

Create a pipeline configuration file (e.g., `pipeline.yaml`) describing your data flow.

Run your pipeline:

```bash
fynnel pipeline run --config pipeline.yaml
```


