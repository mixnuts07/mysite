import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
});

export async function fetchEntries(
    limit = 2
): Promise<BlogItem[]> {
  const entries = await client.getEntries({
    content_type: "mySite",
    order: ["-sys.createdAt"],
    limit
  })
  return entries.items as unknown as BlogItem[]
}
export async function fetchEntry(id: string): Promise<BlogItem> {
  const entries = await client.getEntries({
    content_type: "mySite",
    order: ["-sys.createdAt"],
  })
  console.log(entries)
  return entries.items[0] as unknown as BlogItem
}

export type BlogItem = {
  sys: {
    id: string;
    updatedAt: string
  };
  fields: {
    title: string;
    body: string;
  };
};