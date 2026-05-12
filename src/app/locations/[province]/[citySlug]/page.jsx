import { locations } from "@/lib/locations";
import HomeClient from "@/app/HomeClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { province, citySlug } = params;
  const location = Object.values(locations).find(
    (l) => l.province.toLowerCase() === province.toLowerCase() && l.slug === citySlug
  );

  if (!location) return {};

  return {
    title: `Best Movers in ${location.city}, ${location.province} | TMM Logistics INC & Storage`,
    description: location.description,
    alternates: {
      canonical: `https://tmmgroup.ca/locations/${province.toLowerCase()}/${citySlug}/`,
    },
  };
}

export default function LocationPage({ params }) {
  const { province, citySlug } = params;

  // Find the location data
  const location = Object.values(locations).find(
    (l) => l.province.toLowerCase() === province.toLowerCase() && l.slug === citySlug
  );

  if (!location) {
    notFound();
  }

  // We can pass the location data to HomeClient or a specialized LocationClient
  // For now, let's use HomeClient but we'll need to update it to accept location context
  return <HomeClient location={location} />;
}
