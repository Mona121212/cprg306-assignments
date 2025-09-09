import Link from "next/link";

export default function Home() {

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <ul>
                <li>
                    <Link className="text-shadow-blue-500 hover:text-amber-400 text-4xl" href="./week-2">CPRG 306: Web Development2 - Assignments</Link>
                </li>
            </ul>
        </main>
    )
}