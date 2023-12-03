import * as contentful from "contentful";
import { BlogItem, BlogQueryResult } from "./types";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
});

export async function fetchEntries(
  limit?: number
): Promise<BlogQueryResult | undefined> {
  const entries = await client.getEntries({
    content_type: "mySite",
    order: ["-sys.createdAt"],
    limit: limit ? limit : undefined,
  });
  if (entries.items) return entries as unknown as BlogQueryResult;
}

// export async function fetchEntry(
//   id: string
// ): Promise<BlogQueryResult | undefined> {
//   const options = {
//     content_type: "mySite",
//     "fields.body[match]": id,
//   };
//   const entry = await client.getEntries(options);
//   if (entry.items) return entry.items as unknown as BlogQueryResult;
// }
export async function fetchEntry(id: string): Promise<BlogItem | undefined> {
  const entry = await client.getEntry(id);
  if (entry) return entry as unknown as BlogItem;
}

export async function fetchAssets() {
  const assets = await client.getAssets();
  return assets.items ? assets.items : [];
}
