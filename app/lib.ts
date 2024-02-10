export function UpdatedAt(date: string) {
    return date.split("T")[0]
}
export function Thumbnail(url?: string){
    if( url != null ) return `https:${url}`
    return ''
}