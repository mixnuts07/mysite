import * as contentful from "contentful";
import { EntrySkeletonType } from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    order: ["-sys.createdAt"],
  });
  return entries.items ? entries.items : [];
}

export async function fetchEntriesLimit2() {
  const entries = await client.getEntries({
    order: ["-sys.createdAt"],
    limit: 2,
  });
  return entries.items ? entries.items : [];
}

export async function fetchAssets() {
  const assets = await client.getAssets();
  return assets.items ? assets.items : [];
}

type BlogPostSkelton = {
  contentTypeId: "mySite";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    body: {
      content: Array<{
        content: Array<{ value: string }>;
      }>;
    };
  };
};
export async function fetchEntry(id: string) {
  const entry = await client.getEntry(id);
  return entry;
}
