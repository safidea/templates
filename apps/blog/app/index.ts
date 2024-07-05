import type { App } from '@safidea_/engine'
import { blog } from './pages/blog'
import { template } from './pages/post/template'
import { posts } from './posts'

export const app: App = {
  name: 'Blog',
  features: [
    {
      name: 'blog',
      pages: [blog, ...posts.map((post) => template(post))],
    },
  ],
  server: {
    port: '$PORT',
  },
  theme: {
    fontFamily: {
      sans: ['Barlow'],
      serif: ['Merriweather'],
    },
  },
}
