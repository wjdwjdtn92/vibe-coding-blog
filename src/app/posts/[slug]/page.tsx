import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const dynamicParams = true // generateStaticParams에 없는 경로도 동적 생성
export const revalidate = 600 // 10분마다 페이지 재생성 (600초)

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return {}
  const source = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(source)
  return {
    title: data.title,
    description: data.summary || data.title,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const Post = (await import(`@/content/posts/${slug}.mdx`)).default

  return (
    <article className="prose mx-auto">
      <Post />
    </article>
  )
}
