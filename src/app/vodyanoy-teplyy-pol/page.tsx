import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const service = getServiceBySlug("vodyanoy-teplyy-pol")!;

export const metadata: Metadata = createMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: service.href,
});

export default function WarmFloorPage() {
  return <ServiceDetail service={service} />;
}
