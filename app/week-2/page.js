import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
       {/** change header and studentInfo align should add div put them into same block */}
      <div>
        <h1 className="text-3xl">Shopping list</h1>
        <StudentInfo />
      </div>
    </main>
  );
}
