import type { Component, Page } from '@safidea_/engine/page'
import { card } from './post/card'
import { posts } from '../posts'

export const blog: Page = {
  name: 'blog',
  path: '/',
  body: [
    {
      component: 'Container',
      children: [
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
        {
          component: 'Columns',
          children: posts.map((post) => card(post)),
        },
      ],
    },
  ],
}
