import type { Component } from '@safidea_/engine/page'
import type { Post } from './template'

export const card = (post: Post): Component => ({
  component: 'Card',
  image: {
    src: post.image,
    alt: post.title,
  },
  title: {
    text: post.title,
  },
  paragraph: {
    text: post.description,
  },
  href: post.path,
})
