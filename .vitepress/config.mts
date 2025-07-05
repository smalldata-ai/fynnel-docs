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
          { text: 'Observability', link: '/observability' },
        ]
      }
          
    ],

    sidebar: [
      { text: 'Getting Started', 
        items: [
          { text: 'Introduction', link: '/guides/introduction' },
          { text: 'Installation', link: '/guides/installation' },
          { text: 'Quickstart', link: '/guides/quickstart' },
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
      { text: 'Configuration', 
        items: [
          { text: 'Projects and Workspaces', link: '/schema/prjs-workspaces' },
          { text: 'Connections', link: '/schema/connections' },
          { text: 'Assets', link: '/schema/assets' },
          
        ]
      },
      { text: 'Observability', link: '/observability' }
      
    ]

    
  }
})
