import * as contentful from "contentful";
import { EntrySkeletonType } from "contentful";
import { IMySiteFields } from "./@types/generated/contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
});

export async function fetchEntries(limit?: number) {
  const entries = await client.getEntries({
    content_type: "mySite",
    order: ["-sys.createdAt"],
    limit: limit ? limit : undefined,
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
