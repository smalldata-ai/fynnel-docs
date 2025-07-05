# Quality Checks & Validations

Fynnel provides built-in support for data quality checks by leveraging [dbt tests](https://docs.getdbt.com/docs/build/tests) and custom checks defined directly in your asset YAML files. This ensures that your data transformations are not only executed, but also validated for correctness and integrity as part of your pipeline workflow.

---

## 1. How Quality Checks Work

- Quality checks are defined directly in your asset YAML files, typically under each resource.
- Fynnel reads these definitions and translates them into dbt or SQL-based tests, which are executed as part of the pipeline or transformation process.
- Test results are displayed in the CLI and can be uploaded to Fynnel's backend for further analysis and reporting.

---

## 2. Defining Quality Checks in Asset YAML

You can specify quality checks for each resource in your asset file. For example:

```yaml
identity: myprojectone
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
    quality_checks:
      - column: transaction_id
        checks:
          - unique
          - not_null
      - column: amount
        checks:
          - not_null
```

- The `quality_checks` section allows you to specify which columns should be tested and what checks to apply (e.g., `unique`, `not_null`).
- Fynnel will use these definitions to generate and run the appropriate tests.

---

## 3. Running Quality Checks

Quality checks are typically run as part of the pipeline or transformation workflow:

```sh
fynnel pipeline run <workspace>/<pipeline>
```

or as part of dbt staging:

```sh
fynnel dbt-staging <workspace>
```

---

## 4. Types of Quality Checks

- **Built-in Checks:**
  - `unique`: Ensures all values in the column are unique.
  - `not_null`: Ensures no null values are present.
  - `allowed_values`: Ensures column values are restricted to a specified set of allowed values.
  - `value_range`: Checks that column values fall within a defined numeric or date range.
  - `regex_match`: Validates that column values conform to a specified regular expression pattern.
  - `length`: Asserts that the length of string values in a column meets specified minimum or maximum constraints.
  - `monotonicity`: Ensures that values in a column are strictly increasing or decreasing (monotonic).
  - `custom`: Allows you to define a user-specified SQL or logic-based test for advanced validation needs.
  - (Other dbt-compatible checks can be added as needed.)
- **Custom Checks:**
  - You can extend the checks section to include custom SQL-based tests if supported by your Fynnel/dbt integration.

---

## 5. Viewing and Interpreting Results

- Fynnel prints a summary of test results to the CLI after running quality checks.
- Failed tests are highlighted, and you can review the details in the CLI output or in the Fynnel UI (if integrated).
- Test results can be uploaded to Fynnel's backend for historical tracking and quality dashboards.

---

