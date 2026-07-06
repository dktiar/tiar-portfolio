import { fallbackProfile } from "@/lib/utils/data";

export default function JsonLd() {
  const profile = fallbackProfile;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    email: profile.email,
    telephone: profile.phone,
    url: "https://tiar-portfolio.vercel.app",
    sameAs: [
      profile.linkedin,
      profile.github,
    ].filter(Boolean),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Kristen Duta Wacana",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yogyakarta",
        addressCountry: "ID",
      },
    },
    knowsAbout: [
      "IT Infrastructure",
      "ISO 27001",
      "CrowdStrike Falcon",
      "Cybersecurity",
      "Network Management",
      "IT Budgeting",
      "SDLC",
      "ReactJS",
    ],
    description: profile.bioEn,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
