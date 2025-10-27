import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <ul>
        <li>
          <Link
            className="text-shadow-blue-500 hover:text-amber-400 text-4xl"
            href="./week-2"
          >
            Week Two
          </Link>
          <br></br>
          <Link
            className="text-shadow-blue-500 hover:text-amber-400 text-4xl"
            href="./week-3"
          >
            Week Three
          </Link>
          <br></br>
          <Link
            className="text-shadow-blue-500 hover:text-amber-400 text-4xl"
            href="./week-4"
          >
            Week Four
          </Link>

          <br></br>
          <Link
            className="text-shadow-blue-500 hover:text-amber-400 text-4xl"
            href="./week-5"
          >
            Week Five
          </Link>
          <br></br>
          <Link
            className="text-shadow-blue-500 hover:text-amber-400 text-4xl"
            href="./week-6"
          >
            Week Six
          </Link>
          <br></br>
          <Link
            className="text-shadow-blue-500 hover:text-amber-400 text-4xl"
            href="./week-7"
          >
            Week Seven
          </Link>
        </li>
      </ul>
    </main>
  );
}
