import type { App } from '@safidea_/engine'
import { blog } from './pages/blog'

export const app: App = {
  name: 'Blog',
  features: [
    {
      name: 'blog',
      pages: [blog],
    },
  ],
  server: {
    port: '$PORT',
  },
}
