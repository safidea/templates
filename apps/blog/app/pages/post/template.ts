import type { Page } from '@safidea_/engine/page'

export interface Post {
  path: string
  title: string
  description: string
  image: string
  author: string
  date: string
  content: string
}

export const template = (post: Post): Page => ({
  name: post.title,
  path: post.path,
  head: {
    title: post.title,
    metas: [
      {
        name: 'description',
        content: post.description,
      },
    ],
  },
  body: [
    {
      component: 'Container',
      width: 'lg',
      children: [
        {
          component: 'Link',
          label: 'Back to blog',
          href: '/',
          active: false,
          prefixIcon: {
            name: 'ArrowLeft',
          },
        },
        {
          component: 'Spacer',
          size: 'lg',
        },
        {
          component: 'Title',
          text: post.title,
          size: '2xl',
        },
        {
          component: 'Divider',
        },
        {
          component: 'Paragraph',
          text: `By ${post.author} on ${post.date}`,
          size: 'md',
        },
        {
          component: 'Spacer',
          size: 'lg',
        },
        {
          component: 'Markdown',
          content: post.content,
        },
      ],
    },
  ],
})
