import Link from "next/link";

export default function MySecondPage() {
      let a = 3;
    let b = 4;
    return(
        <main>
            <h1>My Second Page</h1> 
            <p>This is my second page of my new react web app!</p>
            <Link href="https:www.sait.ca"> sait page</Link>
            <p>{a} added to {b} equal to {a + b}</p>
        </main>
    );
}