import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex flex-wrap gap-1">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center gap-1">
            {index > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:underline text-gray-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}