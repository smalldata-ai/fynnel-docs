## 🚀 Installation

Fynnel can be installed and run as a command-line tool. Follow the steps below to get started.

### Prerequisites

- **Go 1.18+** must be installed  

- Access to your desired data storage backends:
  - PostgreSQL  
  - ClickHouse  
  - DuckDB  
  - S3
  - Others...

### 📦 Clone and Build from Source

```bash
git clone https://github.com/smalldata-ai/fynnel.git
cd fynnel
go build -o fynnel .
```
This will create a fynnel executable in your current directory.

```bash
go install github.com/smalldata-ai/fynnel@latest
```

✅ Verify Installation

```bash
fynnel -v
```