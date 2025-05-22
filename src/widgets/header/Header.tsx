import Link from 'next/link'
import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <header className="w-full border-b bg-white py-4 px-6 flex items-center justify-between">
      <div className="font-bold text-xl text-primary">Vibe Coding Blog</div>
      <nav className="space-x-4 flex items-center">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <SearchInput />
      </nav>
    </header>
  )
}
