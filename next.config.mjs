/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats; AVIF first, WebP fallback, original as last resort.
    formats: ["image/avif", "image/webp"],
    // Allowed quality values usable via the Image `quality` prop (Next 16 requires this).
    qualities: [75, 82, 90],
    // Cache optimized images for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;