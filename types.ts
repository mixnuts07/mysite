export type EntryType = {
    metadata: {
      tags: [
          {
              sys: {
                  id: string
              }
          }
      ]
    };
    sys: {
        id: string;
        updatedAt: string
    };
    fields: {
        title: string;
        body: string;
    };
};
export type BlogTypeProps = {
    props: BlogType
}
export type ArticleTypeProps = {
    props: ArticleType
}

type IdType = Pick<EntryType['sys'], 'id'>
type UpdatedAtType = Pick<EntryType['sys'], 'updatedAt'>
type TitleType = Pick<EntryType['fields'], 'title'>
type BodyType = Pick<EntryType['fields'], 'body'>
type BlogType = IdType & UpdatedAtType & TitleType
type ArticleType = TitleType & BodyType & UpdatedAtType