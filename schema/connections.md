# Managing Connections

The `.env.yml` file is a central configuration file in Fynnel that securely stores connection details for all your data sources and destinations. It allows you to manage credentials, host information, and transformation rules in a single, environment-specific location.


## 1. Purpose

- **Centralized Configuration:**  
  `.env.yml` consolidates all connection information, making it easy to manage and update credentials and endpoints for your pipelines.
- **Security:**  
  Sensitive information (like passwords and API keys) can be referenced using environment variables or secrets, keeping them out of version control.

---

## 2. Example `.env.yml` File

```yaml
connections:
  - name: my_pg
    type: postgresql
    host: mydb.example.com
    port: 5432
    user: analytics_user
    password: ${PG_PASSWORD}
    database: analytics
  - name: my_click
    type: clickhouse
    host: clickhouse.example.com
    port: 9000
    user: ch_user
    password: ${CH_PASSWORD}
    database: analytics_dw
```

---

## 3. Key Fields

- **name:**  
  Unique identifier for the connection (referenced in asset and workspace files).
- **type:**  
  Type of the data source (e.g., `postgresql`, `clickhouse`, `s3`).
- **connection parameters:**  
  Parameters for connection based on database

---

## 4. Using Secrets and Environment Variables

- Reference secrets using `${VAR_NAME}` syntax.
- Set environment variables before running Fynnel:
  ```sh
  export PG_PASSWORD=your_postgres_password
  export CH_PASSWORD=your_clickhouse_password
  ```
- This keeps sensitive data out of your YAML files and version control.

---


## 6. Best Practices

- **Never commit actual secrets to version control.** Always use environment variables for sensitive fields.
- **Keep `.env.yml` out of public repositories** by adding it to `.gitignore`.
- **Use descriptive connection names** for clarity in asset and workspace files.
- **Regularly rotate credentials** and update the `.env.yml` file as needed.

---

## 7. Troubleshooting

- Ensure all referenced environment variables are set before running Fynnel commands.
- Double-check connection names for typos—these must match those used in your asset and workspace YAML files.
- If you encounter connection errors, verify host, port, and credentials in `.env.yml`.

