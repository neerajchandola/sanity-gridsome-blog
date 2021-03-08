export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6045b84c73cb3925504e81d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-kgf5e2rz',
                  apiId: '5a4c80c3-9f3e-4f21-94a9-d495cc6d0258'
                },
                {
                  buildHookId: '6045b84dac1bd31d7fb46027',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-pmv3tkmo',
                  apiId: '45ca1404-3754-4e64-8e0d-724454647073'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neerajchandola/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-pmv3tkmo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
