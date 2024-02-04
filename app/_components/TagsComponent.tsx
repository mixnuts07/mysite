import {TagComponent} from "@/app/_components/TagComponent";
import { MetadataType } from "@/types";

export function TagsComponent({tags}: MetadataType) {
    return (
        <div className='flex flex-row space-x-2'>
            {tags.map(tag => {
                return <TagComponent tagName={tag.sys.id} key={tag.sys.id}/>
            })}
        </div>
    )
}