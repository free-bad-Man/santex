import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({ title, description, path = "/", image = siteConfig.heroImage }: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressRegion: "Москва и Московская область",
    addressCountry: "RU",
  },
  areaServed: ["Москва", "Московская область"],
  openingHours: "Mo-Su 09:00-20:00",
  image: new URL(siteConfig.heroImage, siteConfig.url).toString(),
  priceRange: "₽₽₽",
};
