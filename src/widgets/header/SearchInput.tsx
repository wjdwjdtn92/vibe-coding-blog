'use client'
import { useState } from 'react'

export function SearchInput() {
  const [search, setSearch] = useState('')

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="검색..."
      aria-label="검색어 입력"
      className="ml-4 px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    />
  )
}
