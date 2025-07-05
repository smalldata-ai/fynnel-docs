# Projects

In Fynnel, a project serves as the fundamental organizational unit for managing data workflows, configurations, and assets. It encapsulates all the resources, settings, and metadata required to define, execute, and monitor data pipelines within a specific context or multiple workspaces.

Create a new Fynnel project:

```bash
fynnel init my_project
cd my_project
```
---

## Key Aspects of a Fynnel Project
### Workspace Association
Each project is typically associated with multiple workspaces, which provides an isolated environment for managing related data assets, connections, and pipelines.

### Configuration Management
Projects contain configuration files that define:
- Data sources and connections (e.g., databases, cloud storage)
- Pipeline definitions and schedules
- Transformation logic (such as dbt models or SQL scripts)
- Environment-specific settings (credentials, endpoints, etc.)

### Pipeline Orchestration
Within a project, users can define and manage multiple data pipelines. These pipelines specify the flow of data from source to destination, including any transformation or quality checks that need to be applied.

### Reproducibility and Collaboration
By encapsulating all relevant files and settings, a project ensures that data workflows are reproducible and can be  version-controlled. This is essential for collaboration among team members.
