import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "",
});

export const fetchEntries = async () => {
  const entries = await client.getEntries({
    order: "-sys.createdAt",
    limit: 2,
  });
  return entries.items ? entries.items : [];
};

export const fetchAssets = async () => {
  const assets = await client.getAssets();
  return assets.items ? assets.items : [];
};
