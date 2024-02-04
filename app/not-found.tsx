import Link from "next/link";

export default function NotFound() {
    return (
        <div className='mt-20'>
            <h2>見つかんねぇ</h2>
            <Link href='/'>
                <h3>Go Back Home!!</h3>
            </Link>
        </div>
    )
}