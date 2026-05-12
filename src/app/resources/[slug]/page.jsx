import ResourceClient from "./ResourceClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const titles = {
    "packing-checklist": "Ultimate Packing Checklist | TMM Logistics INC",
    "senior-relocation-guide": "Senior Relocation Guide | TMM Logistics INC",
    "long-distance-moving-guide": "Province to Province Moving Guide | TMM Logistics INC",
  };

  return {
    title: titles[slug] || "Moving Resources | TMM Logistics INC",
    description: "Expert tips and guides for a stress-free relocation experience in Saskatoon and beyond.",
  };
}

export default async function ResourcePage({ params }) {
  const { slug } = await params;
  return <ResourceClient slug={slug} />;
}
