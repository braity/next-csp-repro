const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isPages = process.env.GITHUB_ACTIONS === 'true' && Boolean(repo);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isPages ? `/${repo}` : '',
  assetPrefix: isPages ? `/${repo}/` : undefined,
  images: { unoptimized: true },
};

module.exports = nextConfig;
