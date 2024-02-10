export function UpdatedAt(date: string) {
    return date.split("T")[0]
}
export function Thumbnail(url: string) {
    return `https:${url}`
}