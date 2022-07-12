export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62cce9befe55ee1877873d9e',
                  title: 'Sanity Studio',
                  name: 'test-tortoise-studio',
                  apiId: 'a797fa0d-8241-4000-8631-59c4ed62971d'
                },
                {
                  buildHookId: '62cce9bf66d54e29969185cc',
                  title: 'Portfolio Website',
                  name: 'test-tortoise-web',
                  apiId: '1307b74d-1a06-4295-bdb7-c0e46aeb2dff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ESitk/test-tortoise',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://test-tortoise-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
