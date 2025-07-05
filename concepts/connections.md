# Connections
Fynnel supports connecting to a variety of data sources and destinations, such as PostgreSQL, ClickHouse, and S3. The Connections feature allows you to manage these data source configurations centrally, making it easy to add, test, list, and remove connections for your data pipelines.

## Supported Connection Types
- PostgreSQL
- ClickHouse
- S3
- Mongodb
- Mysql
- Mariadb
- Snowflake
- DuckDb
- Motherduck

## Managing Connections
Fynnel provides a set of CLI commands to manage your connections:

### Add a New Connection
Add a new connection by specifying a unique connection name and following the prompts for required configuration details.
```bash
fynnel connections add --type <type> --name <name> --host <host> --port <port> --user <user> --password <pass> --database <db>
```
---
You will be prompted to select the data source type and enter the necessary connection parameters (host, port, user, password, etc.).

### List All Connections
View all configured connections:
```bash
fynnel connections list
```
---
This will display a list of all connections, including their names and types.

### Test a Connection
View all configured connections:
```bash
fynnel connections test <connection-name>
```
---
Fynnel will attempt to connect to the specified data source and report success or any errors encountered.

### Delete a Connection
View all configured connections:
```bash
fynnel connections delete <connection-name>
```
---
This will permanently remove the connection from your environment configuration.

## How Connections Work
Connection details are stored in your environment configuration file (typically .env.yml).
When adding a connection, Fynnel prompts you for all required fields based on the data source type.
You can manage connections interactively via the CLI, ensuring that your pipelines always have access to the correct data sources.

