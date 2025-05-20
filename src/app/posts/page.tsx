import { getAllPostsMeta } from '@/shared/lib/posts'
import Link from 'next/link'

export default function PostsPage() {
  const posts = getAllPostsMeta()
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">블로그 포스트</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white rounded shadow p-4">
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <div className="text-gray-500 text-sm mt-1">{post.date}</div>
            {post.tags && (
              <div className="mt-2 space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
