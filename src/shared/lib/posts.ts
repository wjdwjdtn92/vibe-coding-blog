import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { PostMeta } from '@/entities/post/types'

const POSTS_PATH = path.join(process.cwd(), 'src/content/posts')

export function getAllPostsMeta(): PostMeta[] {
  const files = fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith('.mdx'))
  return files.map((file) => {
    const filePath = path.join(POSTS_PATH, file)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(source)
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title ?? '',
      date: data.date ?? '',
      tags: data.tags ?? [],
    }
  })
}
