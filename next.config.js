/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // export can't optimise on-the-fly
  basePath: '',                  // leave empty because you serve from root
};
export default nextConfig;
