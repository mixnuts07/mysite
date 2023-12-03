/* types.ts */
import { Document } from "@contentful/rich-text-types";

export type BlogItem = {
  sys: any;
  fields: {
    title: string;
    body: Document;
  };
};
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
  items: BlogItems;
};
