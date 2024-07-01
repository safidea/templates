import type { Page } from '@safidea_/engine/page'

export const blog: Page = {
  name: 'blog',
  path: '/',
  body: [
    {
      component: 'Hero',
      title: {
        text: 'Welcome to my blog!',
      },
      paragraph: {
        text: 'This is a blog about my thoughts and experiences.',
      },
      buttons: [],
    },
  ],
}
