# Assets
Assets in Fynnel is a declarative YAML configuration that describes the data movement requirements for a specific data pipeline or job. It acts as a blueprint for how data should be transferred, transformed, and written from a source to a destination, including details about tables, write strategies, and optional transformations.

## Key Components of the Asset File

### 1. Identity
- **Purpose:**  
  Uniquely identifies the asset or pipeline.
- **Example:**
  ```yaml
  identity: transactions
  ```
### 2. Source
- **Purpose:**  
  Specifies the source connection from which data will be extracted.
- **Fields:**
  - `connection`: The name of the configured source connection.
- **Example:**
  ```yaml
  source:
    connection: my_pg
  ```

### 3. Destination
- **Purpose:**  
  Defines where the data will be loaded.
- **Fields:**
  - `connection`: The name of the configured destination connection.
  - `dataset_name`: (Optional) The target schema, database, or dataset.
- **Example:**
  ```yaml
  destination:
    connection: my_click
    dataset_name: public
  ```

  ### 4. Resources
- **Purpose:**  
  Lists the specific tables or resources to be moved, along with their mapping and write strategies.
- **Fields:**
  - `source_table_name`: Name of the table in the source.
  - `destination_table_name`: Name of the table in the destination.
  - `write_disposition`:  
    - `type`: The write mode (e.g., `replace`, `append`, `merge`).
    - `strategy`: The specific strategy for the write operation (e.g., `full`, `incremental`).
  - (Optional) Transformation or mapping rules.
- **Example:**
  ```yaml
  resources:
    - source_table_name: transactions
      destination_table_name: transactions_dw
      write_disposition:
        type: replace
        strategy: full
  ```

---

## How the Asset File Works

- **Declarative:**  
  The asset file provides a clear, human-readable specification of what data should move, from where, to where, and how.
- **Automation:**  
  Fynnel uses this file to automate the extraction, transformation, and loading (ETL) process, ensuring consistency and repeatability.
- **Write Disposition:**  
  The `write_disposition` section controls how data is written to the destination:
  - `replace`: Overwrites the destination table.
  - `append`: Adds new data to the existing table.
  - `merge`: Updates existing records and inserts new ones.

---

