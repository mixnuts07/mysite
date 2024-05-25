export function TitleComponent({
	title,
	className,
}: { title: string; className?: string }) {
	return (
		<h1 className={`font-medium font-extrabold text-2lg ${className}`}>
			{title}
		</h1>
	);
}
