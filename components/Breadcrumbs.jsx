import Script from "next/script";
import NextLink from "next/link";

const SITE_URL = "https://www.mavemedspa.com";

export default function Breadcrumbs({ items = [], className = "" }) {
  if (!items.length) return null;

  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.href ? `${SITE_URL}${item.href}` : SITE_URL,
  }));

  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <NextLink href={item.href} className="hover:text-black underline-offset-2 hover:underline">
                    {item.label}
                  </NextLink>
                ) : (
                  <span className="text-gray-700">{item.label}</span>
                )}
                {!isLast && <span className="text-gray-400">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaItems,
          }),
        }}
      />
    </>
  );
}
