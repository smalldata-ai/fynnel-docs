import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Fynnel",
  description: "A data engineering toolkit to simplify your Data Workflow.",
  base: "/fynnel-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
          text: 'Guide',
          items: [
          { text: 'Getting Started', link: '/guides/introduction'},
          { text: 'Core Concepts', link: '/concepts/projects.md' },
          { text: 'Configuration', link: '/concepts/projects.md' },
          { text: 'Transformations', link: '/concepts/projects.md' },
          { text: 'Quality Checks', link: '/concepts/projects.md' },
          { text: 'Observability', link: '/concepts/projects.md' },
        ]
      }
          
    ],

    sidebar: [
      { text: 'Getting Started', 
        items: [
          { text: 'Introduction', link: '/guides/introduction' },
          { text: 'Installation', link: '/guides/installation' },
          { text: 'Quickstart', link: '/guides/quickstart' },
          { text: 'CLI and Configuration', link: '/guides/getting-started' },
        ]
      },
      { text: 'Core Concepts', 
        items: [
          { text: 'Projects', link: '/concepts/projects' },
          { text: 'Workspace', link: '/concepts/workspaces' },
          { text: 'Connections', link: '/concepts/connections' },
          { text: 'Assets', link: '/concepts/assets' },
          { text: 'Pipelines', link: '/concepts/pipelines' },
          { text: 'Secrets', link: '/concepts/secrets' },
          { text: 'Transformations', link: '/concepts/transformations' },
          { text: 'Quality & Validations', link: '/concepts/quality' },
        ]
      },
      { text: 'Confirguration', 
        items: [
          { text: 'Projects and PIpelines', link: '/guides/getting-started' },
          { text: 'Connection Settings', link: '/guides/getting-started' },
          { text: 'Scheduling', link: '/guides/getting-started' },
          { text: 'Secrets & Environment Variables', link: '/guides/getting-started' }
        ]
      },
      { text: 'Transformations', 
        items: [
          { text: 'Projects and PIpelines', link: '/guides/getting-started' },
        ]
      },
      { text: 'Quality and Validations', 
        items: [
          { text: 'Projects and PIpelines', link: '/guides/getting-started' },
          
        ]
      },
      { text: 'Intgerations', 
        items: [
          { text: 'Projects and PIpelines', link: '/guides/getting-started' },
          
        ]
      },
    ]

    
  }
})
