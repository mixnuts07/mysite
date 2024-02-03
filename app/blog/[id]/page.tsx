import { fetchEntry } from "@/contentful";
import ArticleComponent from "@/app/_components/ArticleComponent";
import {UpdatedAt} from "@/app/lib";

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await fetchEntry(params.id);
  const { title, body } = entry.fields;
  const { tags } = entry.metadata
  const { sys } = entry;
  const updatedAt = UpdatedAt(sys.updatedAt)
  return (
    <div className="mx-10">
      <title>{title}</title>
      <ArticleComponent props={{title,body, updatedAt, tags}} />
    </div>
  );
}
