export function TitleComponent({title, className}: {title: string, className?: String}) {
    return <h1 className={`font-sans font-medium font-extrabold text-2lg ${className}`}>{title}</h1>
}