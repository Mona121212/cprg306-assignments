import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";



export default function Home(){

  return (
    <main>
      <h1 className="text-3xl">CPRG Class Examples</h1>
      <MyFirstComponent />
      <p>This is my first page</p>
        <h2>Class Example Links</h2>
        <ul>
          <li>
            <Link className="text-amber-300 hover:text-amber-800" href="./week2/">Week 2 - Introduction to React</Link>
          </li>
        </ul>
    </main>
  );
}