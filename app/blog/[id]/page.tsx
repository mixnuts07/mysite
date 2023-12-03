import { fetchEntry } from "@/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await fetchEntry(params.id);
  const { title, body } = entry.fields;
  const { sys } = entry;
  const dateOnly = sys.updatedAt.split("T")[0];
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="font-sans font-medium">{title?.toString()}</h1>
      <h1 className="pt-3 pb-10 font-sans font-thin">{dateOnly}</h1>
      <div className="[&>p]:mb-8 [&>h2]:font-extrabold [&>h1]:font-extrabold">
        {documentToReactComponents(body)}
      </div>
    </div>
  );
}
//
