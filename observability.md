# Observability - WIP

Observability in Fynnel ensures that every step of your data pipeline is tracked, monitored, and auditable. By integrating with modular hooks, Fynnel provides robust logging, job tracking, and quality reporting for your data workflows.

---

## 1. What is Observability in Fynnel?

- **Observability** means being able to monitor, trace, and understand the state and health of your data pipelines.
- This enables you to answer questions like:  
  - Did my pipeline run successfully?
  - When did it run, and how long did it take?
  - Were there any errors or data quality issues?
  - What is the historical trend of pipeline health?

---

## 2. How Observability Works

- **Job Tracking:**  
  Every pipeline run is logged as a job, with metadata such as pipeline name, workspace, status (success/error), and timestamps.
- **Status Updates:**  
  Fynnel periodically observes the state of running pipelines and updates the backend with the latest status.
- **Quality Reporting:**  
  After a pipeline run, Fynnel uploads data quality check results (e.g., from dbt tests)  for centralized reporting.

---

## 3. Example: Observability in a Pipeline Run

When you run a pipeline with:

```sh
fynnel pipeline run <workspace>/<pipeline>
```

Fynnel will:

1. **Push pipeline definitions** to backend store.
2. **Log the start of the job** 
3. **Periodically observe the pipeline status** 
4. **Log job status updates** (success, error, etc.)
5. **Upload quality check results** (e.g., dbt test results) for further analysis.

---



## 5. Benefits of Observability

- **Transparency:**  
  Know the status of every pipeline run, including failures and successes.
- **Auditability:**  
  Maintain a historical record of all pipeline executions and their outcomes.
- **Data Quality:**  
  Centralize and track data quality metrics and test results.
- **Troubleshooting:**  
  Quickly identify and diagnose issues in your data workflows.

