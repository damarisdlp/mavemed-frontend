import { organizationSchema } from "@/lib/schema/schemaStore";

export default function OrganizationSchema() {
  return (
    <script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
