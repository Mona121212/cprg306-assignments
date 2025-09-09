import Link from "next/link";

export default function StudentInfo() {
    return(
        <main className="text-3xl">
            <br />
            <h1 className="">Mona He</h1>
            <ul>
                <li><Link className="text-pink-600 hover:text-emerald-500" href="https://github.com/Mona121212"> Welcome to my github</Link></li>
            </ul>
        </main>
    )
}