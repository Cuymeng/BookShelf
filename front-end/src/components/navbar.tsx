import Link from 'next/link';
export default function Narbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/books">About</Link></li>
            </ul>
        </nav>
    )
}

