<<<<<<< HEAD
// @ts-nocheck

import createMDX from '@next/mdx'
=======
import type { NextConfig } from "next";
>>>>>>> parent of c309bd7 (merge: Merge pull request #8 from wjdwjdtn92/feature/3-블로그-포스트-기능)

const nextConfig: NextConfig = {
  /* config options here */
};

<<<<<<< HEAD
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
=======
export default nextConfig;
>>>>>>> parent of c309bd7 (merge: Merge pull request #8 from wjdwjdtn92/feature/3-블로그-포스트-기능)
