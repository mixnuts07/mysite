import { fetchEntry } from "@/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await fetchEntry(params.id);
  const { title, body } = entry.fields;
  return (
    <div className="mt-10">
      <h1>{title?.toString()}</h1>
      <div>{documentToReactComponents(body)}</div>
    </div>
  );
}
//
