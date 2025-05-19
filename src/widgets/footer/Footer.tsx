import React from 'react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-4 px-6 text-center text-sm text-gray-500 mt-8">
      © {new Date().getFullYear()} Vibe Coding Blog. All rights reserved.
    </footer>
  )
}
