export function CreatedAt(date: string) {
    return date.split("T")[0]
}
export function Thumbnail(url?: string){
    return url != null ? `https:${url}` : ""
}