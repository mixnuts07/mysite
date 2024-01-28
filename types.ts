/* types.ts */
import { Document } from "@contentful/rich-text-types";

export type BlogItem = {
  sys: any;
  fields: {
    title: string;
    body: Document;
    // body: string;
  };
};
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
  items: BlogItems;
};

type AsseetType = {
  nodeType: string
  data: {
    target: {
      fields: {
        file: {
          details: {
            image: {
              width: number
              height: number
            }
          },
          fileName: string
          url: string
        }
      }
    }
  }
}