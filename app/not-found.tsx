import Link from "next/link";

export default function NotFound() {
    return (
        <div className='mt-20'>
            <h2 className='mb-10'>Not Found!!</h2>
            <Link href='/' className='underline underline-offset-4'>
                <h1>Go Back Home!!</h1>
            </Link>
        </div>
    )
}