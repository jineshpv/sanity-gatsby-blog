export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dc2938685128a25b920fddd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9mawwnrw',
                  apiId: 'b6d32826-bfa0-4284-a2d2-63b05c9de330'
                },
                {
                  buildHookId: '5dc293865e715cc8baa0eb25',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pbj29unu',
                  apiId: 'dae1987d-38d5-4468-a788-6fe13d5279e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jineshpv/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pbj29unu.netlify.com', category: 'apps'}
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
