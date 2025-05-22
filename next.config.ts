// @ts-nocheck

import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ['remark-gfm'],
      ['remark-frontmatter'],
      ['remark-mdx-frontmatter', { name: 'meta' }],
    ],
    rehypePlugins: [['rehype-prism-plus', { ignoreMissing: true }]],
  },
})

export default withMDX(nextConfig)
