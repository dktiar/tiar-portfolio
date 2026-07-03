import { createClient } from "@sanity/client";
import { sanityConfig } from "./config";

export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});

export function urlFor(source: { asset: { _ref: string } }) {
  // Simple image URL builder without installing @sanity/image-url
  const ref = source.asset._ref;
  const [, id, dimensions, format] = ref.split("-");
  return `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${id}-${dimensions}.${format}`;
}
