export function BlogTagComponent({ tagName }: { tagName: string }) {
    return (
        <h5 className='bg-white text-gray-700 font-bold leading-sm border rounded-full px-3 py-1 text-xs inline-flex items-center'>{tagName}</h5>
    )
}