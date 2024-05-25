export type EntryType = {
	metadata: {
		tags: [
			{
				sys: {
					id: string;
				};
			},
		];
	};
	sys: {
		id: string;
		updatedAt: string;
		createdAt: string;
	};
	fields: {
		title: string;
		body: string;
		thumbnail: {
			fields: {
				title: string;
				file: {
					url: string;
				};
			};
		};
	};
};
export type BlogTypeProps = {
	props: BlogType;
};
export type ArticleTypeProps = {
	props: ArticleType;
};

type IdType = Pick<EntryType["sys"], "id">;
type CreatedAt = Pick<EntryType["sys"], "createdAt">;
type TitleType = Pick<EntryType["fields"], "title">;
type BodyType = Pick<EntryType["fields"], "body">;
type ThumbnailType = Pick<
	EntryType["fields"]["thumbnail"]["fields"]["file"],
	"url"
>;
export type MetadataType = Pick<EntryType["metadata"], "tags">;
type BlogType = IdType & CreatedAt & TitleType & MetadataType;
type ArticleType = TitleType &
	BodyType &
	ThumbnailType &
	CreatedAt &
	MetadataType;
