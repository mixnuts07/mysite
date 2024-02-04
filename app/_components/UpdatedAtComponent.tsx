export function UpdatedAtComponent({date}: {date: string}) {
    return <time dateTime={date}
                 className='font-sans font-thin text-gray-500 text-sm'>{date}</time>
}