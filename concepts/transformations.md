# Transformations

Fynnel integrates with [dbt](https://www.getdbt.com/) to enable robust, modular, and testable SQL transformations as part of your data pipelines. The Fynnel CLI provides commands to scaffold, build, and test dbt models, making it easy to manage your transformation layer.

---

## 1. Overview

- **dbt (data build tool)** is an open-source tool for transforming data in your warehouse using SQL.
- Fynnel automates the setup and execution of dbt projects within your workspace, including staging model creation, running transformations, and testing data quality.

---

## 2. Workflow: Running dbt Staging Transformations

Fynnel provides a convenient command to scaffold and run all staging models and tests for a given workspace:

```sh
fynnel dbt-staging <workspace>
```

This command will:

1. **Find the project root and workspace paths.**
2. **Scaffold the dbt project** for your workspace (if not already present).
3. **Ensure your raw tables live in the `analytics` schema** 
4. **Install dbt packages** (dependencies).
5. **Create dbt_artifacts tables** (for run and test results).
6. **Build all staging models** using dbt.
7. **Test all staging models** using dbt.
8. **Fetch and display data quality stats** for your staging models.

---

## 3. Example Usage

```sh
fynnel dbt-staging my_workspace
```

---

## 5. Customizing dbt Models

- You can edit or add dbt models in the generated dbt project directory for your workspace.
- Use standard dbt features: models, seeds, snapshots, macros, and tests.

---

