const SITE_URL = "https://www.mavemedspa.com";

export async function getServerSideProps({ res }) {
  const content = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;

  res.setHeader("Content-Type", "text/plain");
  res.write(content);
  res.end();

  return {
    props: {},
  };
}

export default function Robots() {
  return null;
}
