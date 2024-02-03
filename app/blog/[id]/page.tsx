import { fetchEntry } from "@/contentful";
import ArticleComponent from "@/app/_components/ArticleComponent";

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await fetchEntry(params.id);
  // const entry = await fetchEntry(params.id);
  const { title, body } = entry.fields;
  const { sys } = entry;
  const updatedAt = sys.updatedAt.split("T")[0];
  return (
    <div className="w-3/5 mx-10">
      <title>{title}</title>
      <ArticleComponent props={{title,body, updatedAt}} />
    </div>
  );
}
