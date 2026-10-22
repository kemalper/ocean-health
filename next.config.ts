import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Legacy URLs from the previous multilingual site (still requested by Google): send to the closest current page.
  async redirects() {
    const plastic = '/treatments/plastic-surgery-istanbul'
    const map: [string, string][] = [
      ['/en/contact-us', '/contact'],
      ['/en/complaints-policy', '/complaints-policy'],
      ['/en/medical-services-brokerage-agreement', '/brokerage-agreement'],
      ['/en/facelift-rhytidectomy', plastic],
      ['/en/labioplasty-labia-reduction-surgery', plastic],
      ['/en/eyelid-aesthetics', plastic],
      ['/en/healthcare-services-surgical-procedures', plastic],
      ['/en/healthcare-services-aesthetic', plastic],
      ['/en/scarlet-x-skin-rejuvenation-and-tightening', plastic],
      ['/en/root-canal-treatment', '/treatments/dental-istanbul'],
      ['/en/travel-details', '/faq'],
      ['/en/payment-options', '/faq'],
      ['/en/blog', '/'],
    ]
    return [
      ...map.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/', permanent: true },
      { source: '/de', destination: '/', permanent: true },
      { source: '/de/:path*', destination: '/', permanent: true },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "dbs.surgicheck.net" }],
          destination: "/treatments/dbs-assessment",
        },
      ],
    };
  },
};

export default nextConfig;
