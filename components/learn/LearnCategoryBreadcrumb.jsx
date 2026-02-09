import NextLink from "next/link";

export default function LearnCategoryBreadcrumb({
  locale = "en",
  categoryLabel = "",
  categoryAnchor = "",
}) {
  const learnHref = locale === "es" ? "/es/learn" : "/learn";
  const categoryHref = `${learnHref}#${categoryAnchor}`;
  const learnLabel = locale === "es" ? "Aprende" : "Learn";

  return (
    <nav aria-label="Category breadcrumb" className="mt-2">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <li>
          <NextLink href={learnHref} className="hover:text-black hover:underline underline-offset-2">
            {learnLabel}
          </NextLink>
        </li>
        <li className="text-gray-400">/</li>
        <li>
          <NextLink
            href={categoryHref}
            className="text-gray-700 hover:text-black hover:underline underline-offset-2"
          >
            {categoryLabel}
          </NextLink>
        </li>
      </ol>
    </nav>
  );
}
