export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'arlaptiev/pony-studio-design-clone',
    branch: 'main',
  },
  media_folder: 'public/assets/img',
  public_folder: '/assets/img',
  logo_url: 'https://demo.serverless.page/img/logo-cms.jpg',
  site_url: 'https://demo.serverless.page',
  collections: [
    {
      name: 'works',
      label: 'Work',
      folder: 'src/content/works',
      create: true,
      slug: '{{slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
        },
        {
          label: 'Theme color',
          name: 'theme_color',
          widget: 'text',
        },
        {
          label: 'Image / Video',
          name: 'file',
          widget: 'file',
        },
        {
          label: 'Featured?',
          name: 'is_featured',
          widget: 'boolean',
          default: false,
        },
      ],
    },
    {
      name: 'comments',
      label: 'Comments',
      folder: 'src/content/comments',
      create: true,
      slug: '{{slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Avatar Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
        },
      ],
    },
  ],
};
