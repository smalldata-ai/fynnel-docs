# Quickstart

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
fynnel connections add --type clickhouse --name my_click --host localhost --port 9000 --user default --password pass --database dbname --http_port 8123
```

---
### 4. Define Your asset in asset folder
```
identity: transactions
source:
  connection: my_pg
destination:
  connection: my_click
  dataset_name: public
resources:
  - source_table_name: transactions
    destination_table_name: transactions_dw
    write_disposition:
      type: replace
      strategy: full
```   

### 5. Define and Run a Pipeline

Add your pipeline configuration in my_workspace.yml.
```
pipelines:
  - identity: "transactions"
```

Run your pipeline:

```bash
fynnel pipeline run my_workspace/<pipeline_name>
```


