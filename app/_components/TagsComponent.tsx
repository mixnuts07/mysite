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

function TagComponent({ tagName }: { tagName: string }) {
    return (
        <h5 className='bg-white text-gray-700 font-bold leading-sm border rounded-full px-3 py-1 text-xs inline-flex items-center'>
            {tagName}
        </h5>
    )
}