# Asset

The **asset file** in Fynnel is a YAML configuration that defines the data movement, transformation, and quality requirements for a pipeline. It specifies how data should be extracted from a source, loaded into a destination, and validated for quality.

## 1. Purpose

- **Declarative Data Movement:**  
  Clearly describes what data to move, from where, to where, and how.
- **Transformation & Quality:**  
  Supports specifying write strategies, column mappings, and data quality checks.
- **Reproducibility:**  
  Asset files are version-controllable and portable, ensuring consistent pipeline behavior.

---

## 2. Asset File Schema

Below is a typical schema for an asset file:

```yaml
identity: <string>  # Unique identifier for the asset/pipeline

source:
  connection: <string>  # Name of the source connection

destination:
  connection: <string>  # Name of the destination connection
  dataset_name: <string>  # (Optional) Target schema/database

resources:
  - source_table_name: <string>  # Table in the source
    destination_table_name: <string>  # Table in the destination
    write_disposition:
      type: <string>  # e.g., replace, append, merge
      strategy: <string>  # e.g., full, incremental
    column_mapping:  # (Optional) Map source columns to destination columns
      <source_column>: <destination_column>
    quality_checks:  # (Optional) List of quality checks for columns
      - column: <string>
        checks:
          - unique
          - not_null
          - allowed_values: [<value1>, <value2>]
          - value_range: { min: <min>, max: <max> }
          - regex_match: <pattern>
          - length: { min: <min>, max: <max> }
          - monotonicity: increasing|decreasing
          - custom: <custom_sql_or_description>
```

---

## 3. Example Asset File

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
    column_mapping:
      txn_id: transaction_id
      txn_date: transaction_date
      amount: amount
    transformations:
      - cast: { column: amount, type: float }
      - trim: { column: description }
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
      - column: description
        checks:
          - length: { min: 1, max: 255 }
      - column: created_at
        checks:
          - monotonicity: increasing
      - column: reference_code
        checks:
          - regex_match: '^TXN-[0-9]{6}$'
      - column: custom_col
        checks:
          - custom: 'amount > 0 OR status = "pending"'
```

---

## 4. Field Explanations

- **identity:**  
  Unique name for the asset/pipeline.
- **source/destination:**  
  Specify the source and destination connections and (optionally) the target schema/database.
- **resources:**  
  List of tables to move, with mapping, transformation, and quality check details.
- **write_disposition:**  
  - `type`: How to write to the destination (replace, append, merge).
  - `strategy`: Full or incremental load.
- **column_mapping:**  
  Map source columns to destination columns if names differ.
- **transformations:**  
  List of transformations (e.g., type casting, trimming, custom logic).
- **quality_checks:**  
  List of checks for each column, including built-in and custom checks.

---

## 5. Supported Quality Checks (One-liners)

- **unique**: Ensures all values in the column are unique.
- **not_null**: Ensures no null values are present.
- **allowed_values**: Restricts column values to a specified set.
- **value_range**: Checks values fall within a defined range.
- **regex_match**: Validates values against a regex pattern.
- **length**: Asserts string length constraints.
- **monotonicity**: Ensures values are strictly increasing or decreasing.
- **custom**: User-defined SQL or logic for advanced validation.

---

## 6. Best Practices

- Use clear, descriptive names for connections and tables.
- Reference secrets in connection names using environment variables.
- Modularize asset files for each pipeline or data domain.
- Define quality checks to ensure data integrity and reliability.

