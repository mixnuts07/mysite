import { fetchEntry } from "@/contentful";
import PostComponent from "@/app/_components/PostComponent";
import {Metadata} from "next";

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await fetchEntry(params.id);
  // const entry = await fetchEntry(params.id);
  const { title, body } = entry.fields;
  const { sys } = entry;
  const updatedAt = sys.updatedAt.split("T")[0];
  return (
    <div className="w-3/5 mx-10">
      <title>{title}</title>
      <PostComponent props={{title,body, updatedAt}} />
    </div>
  );
}
