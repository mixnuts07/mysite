import { fetchEntry } from "../../api/contentful";
import ArticleComponent from "@/app/_components/ArticleComponent";
import {Thumbnail, UpdatedAt} from "@/app/lib";

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await fetchEntry(params.id);
  const { title, body} = entry.fields;
  const { tags } = entry.metadata
  const { sys } = entry;
  const updatedAt = UpdatedAt(sys.updatedAt)
  const url = Thumbnail(entry.fields?.thumbnail?.fields?.file?.url)
  console.log('=======')
  console.log(entry.metadata.tags)
  return (
    <div className='mb-32'>
      <title>{title}</title>
      <ArticleComponent props={{ title, body, url ,updatedAt, tags }} />
    </div>
  );
}
