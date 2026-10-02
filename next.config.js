/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: '/Mostafa_Wahba_Frontend_Developer_CV.pdf',
      },
      {
        source: '/cv.pdf',
        destination: '/Mostafa_Wahba_Frontend_Developer_CV.pdf',
      },
      {
        source: '/resume.pdf',
        destination: '/Mostafa_Wahba_Frontend_Developer_CV.pdf',
      },
    ];
  },
};

module.exports = nextConfig;
