import * as fs from 'fs'
import * as path from 'path'
import type { Post } from './pages/post/template'

function readMarkdownFile(filePath: string, fileName: string): Post {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const [meta, content] = fileContent.split('---meta---')

  const metaLines = meta.split('\n').filter((line) => line.trim())
  const metaObject: { [key: string]: string } = {}

  metaLines.forEach((line) => {
    const [key, value] = line.split(':').map((part) => part.trim())
    metaObject[key.toLowerCase()] = value
  })

  return {
    path: '/' + fileName.replace('.md', ''),
    title: metaObject['title'],
    description: metaObject['description'],
    image: metaObject['image'],
    author: metaObject['author'],
    date: metaObject['date'],
    content: content.trim(),
  }
}

function readMarkdownFiles(folderPath: string): Post[] {
  const files = fs.readdirSync(folderPath)
  const posts: Post[] = []

  files.forEach((file) => {
    if (file.endsWith('.md')) {
      const filePath = path.join(folderPath, file)
      const post = readMarkdownFile(filePath, file)
      posts.push(post)
    }
  })

  return posts
}

const folderPath = process.cwd() + '/posts'
export const posts = readMarkdownFiles(folderPath)
