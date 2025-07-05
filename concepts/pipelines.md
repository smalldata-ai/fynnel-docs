# Pipelines
Fynnel enables you to orchestrate and execute data pipelines that move and transform data between sources and destinations. 
Running a pipeline involves specifying the pipeline configuration, ensuring all required connections and assets are in place, 
and using the Fynnel CLI to trigger the job.

---



## 1. Pipeline Configuration

Before running a pipeline, you need to define its configuration. This typically involves:

- **Asset File:**  
  Describes the data movement (see earlier in this file for details).
- **Connections:**  
  Ensure all referenced connections (e.g., `my_pg`, `my_click`) are configured using the `fynnel connections` commands.
- **Environment Config:**  
  The `.env.yml` file should be present and contain all necessary connection and environment details.

---

**Example Asset File:**

```yaml
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

**Example `.env.yml` (snippet):**

```yaml
connections:
  - name: my_pg
    type: PostgreSQL
    host: <host>
    port: <port>
    user: <user>
    password: <password>
    database: <database>
  - name: my_click
    type: ClickHouse
    host: <host>
    port: <port>
    user: <user>
    password: <password>
    database: <database>
```

---

## 2. Running a Pipeline

Use the Fynnel CLI to run a pipeline. The basic command is:

```sh
fynnel pipeline run <workspace-name>/<pipeline-name>
```

- `<workspace-name>`: The name of your workspace.
- `<pipeline-name>`: The name/identity of your pipeline (as defined in the asset file).

**Example:**

```sh
fynnel pipeline run analytics/transactions
```

This command will:
- Load the pipeline configuration and asset file.
- Use the specified connections to extract, transform, and load data.
- Print the result or any errors to the console.

---

## 3. Additional Pipeline Commands

- **Schedule a Pipeline:**  
  Schedule a pipeline to run at a specific interval.
  ```sh
  fynnel pipeline schedule <workspace-name>/<pipeline-name>
  ```

- **Stop a Scheduled Pipeline:**  
  ```sh
  fynnel pipeline stop <workspace-name>/<pipeline-name>
  ```

- **List Scheduled Jobs:**  
  ```sh
  fynnel pipeline list-jobs
  ```

---

## 4. Troubleshooting

- Ensure all connections referenced in your asset file are configured and tested.
- Check that your `.env.yml` is present and correctly formatted.
- Use `fynnel connections test <connection-name>` to verify connectivity.
- Review error messages in the CLI for missing files or misconfigurations.

---