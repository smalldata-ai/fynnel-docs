# Secrets
Fynnel uses **secrets** to securely manage sensitive information such as database passwords, API keys, and other credentials required for data connections and pipeline execution.

## How Secrets Work

- Secrets are typically stored in the `.env.yml` file or a dedicated secrets configuration file.
- They are referenced in your connection and pipeline configurations using variable placeholders.
- This approach keeps sensitive data out of your codebase and version control, improving security.

## Example `.env.yml` with Secrets

```yaml
connections:
  - name: my_pg
    type: PostgreSQL
    host: mydb.example.com
    port: 5432
    user: myuser
    password: ${PG_PASSWORD}
    database: mydb
```

In this example, `${PG_PASSWORD}` is a secrets variable. Its value can be provided by:
- Setting it as an environment variable before running Fynnel:
  ```sh
  export PG_PASSWORD=your_secret_password
  ```
- Or by using a secrets management tool or service, if integrated.

## Best Practices

- **Never commit secrets to version control.**
- Use environment variables or a secure secrets manager to inject secrets at runtime.
- Reference secrets in your configuration files using the `${VAR_NAME}` syntax.

## Loading Secrets

Fynnel automatically resolves secrets variables from the environment or from the `.env.yml` file at runtime. Ensure all required secrets are set before running pipelines or commands that need them.

---
