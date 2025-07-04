import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fynnel",
  description: "A data engineering toolkit to simplify your Data Workflow.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', 
              items: [
                { text: 'Introduction', link: '/guides/getting-started' },
                { text: 'Installation', link: '/guides/getting-started' },
              ]
            },
            { text: 'Project Structure', link: '/apis/basic.html' },
            { text: 'gRPC', link: '/gRPC/getting-started' },
            { text: 'Sources', link: '/sources/postgres' },
            { text: 'Destinations', link: '/sources/' }
          ]
        }
    ],

    sidebar: [
      { text: 'Getting Started', 
        items: [
          { text: 'Introduction', link: '/guides/getting-started' },
          { text: 'Installation', link: '/guides/getting-started' },
          { text: 'Quickstart', link: '/guides/getting-started' },
          { text: 'CLI and Configuration', link: '/guides/getting-started' },
        ]
      },
      { text: 'Core Concepts', 
        items: [
          { text: 'Projects', link: '/guides/getting-started' },
          { text: 'Workspace', link: '/guides/getting-started' },
          { text: 'Connections', link: '/guides/getting-started' },
          { text: 'Assets', link: '/guides/getting-started' },
          { text: 'Pipelines', link: '/guides/getting-started' },
          { text: 'Transformations', link: '/guides/getting-started' },
          { text: 'Quality Checks', link: '/guides/getting-started' },
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
