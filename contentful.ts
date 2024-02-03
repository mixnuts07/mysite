import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
});

export async function fetchEntries(
    limit = 2
) {
  const entries = await client.getEntries({
    content_type: "mySite",
    order: ["-sys.createdAt"],
    limit
  })
  return entries.items as unknown as BlogQueryResult
}
export async function fetchEntry(id: string): Promise<BlogItem> {
  const entries = await client.getEntries({
    content_type: "mySite",
    order: ["-sys.createdAt"],
  })
  console.log(entries)
  return entries.items[0] as unknown as BlogItem
}

// export async function fetchEntries(
//   limit?: number
// ): Promise<BlogQueryResult | undefined> {
//   const entries = await client.getEntries({
//     content_type: "mySite",
//     order: ["-sys.createdAt"],
//     limit: limit ? limit : undefined,
//   });
//   if (entries.items) return entries as unknown as BlogQueryResult;
// }

type BlogItem = {
  sys: any;
  fields: {
    title: string;
    body: string;
  };
};
type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
  items: BlogItems;
};