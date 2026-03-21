import { contact, professionalSummary } from "@/content/portfolio";
import { getSiteUrl } from "@/config/site";

/** Schema.org Person para rich results e contexto semântico. */
export function PersonJsonLd() {
  const base = getSiteUrl().origin;
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "João Ferraz",
    url: base,
    image: `${base}/logo.jpg`,
    jobTitle: "Desenvolvedor Full-stack Sênior",
    description: professionalSummary,
    email: contact.email,
    sameAs: [contact.linkedin, contact.github],
    knowsAbout: [
      "Desenvolvimento full-stack",
      "Microsserviços",
      "Integração de sistemas",
      "TypeScript",
      "React",
      "Node.js",
      "NestJS",
      ".NET",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
