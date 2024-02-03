export default function TagComponent( { tagName }: { tagName: string }) {
    return (
        <h5 className='border-2 rounded-xl text-gray-700 w-2/5'>{tagName}</h5>
    )
}