import { getServerSideProps } from 'next';

export const getServerSideProps = async ({ res }) => {
  // Define the pages you want to include in the sitemap
  const pages = [
    '/',  // Homepage
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/blog/post-1',
    '/blog/post-2', // example of dynamic blog posts
  ];

  // Create the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">\n` +
    pages.map(page => `  <url>\n    <loc>${`https://www.yourdomain.com${page}`}</loc>\n  </url>`).join('\n') +
    `</urlset>`;

  // Set the response header and return the sitemap
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}, // Return an empty props object since we won't use it
  };
};

export default getServerSideProps;