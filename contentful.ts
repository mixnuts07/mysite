import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_CONTENTFUL_PREVIEW_ACCESS_TOKEN || "",
});
