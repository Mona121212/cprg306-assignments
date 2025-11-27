import Link from "next/link";

export default function Home() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Course Schedule</h1>
        <p className="text-slate-400 text-lg">Select a week to view content</p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-2xl">
        {weeks.map((week) => (
          <Link
            key={week}
            href={`./week-${week}`}
            className="group relative px-8 py-6 bg-slate-800/50 border border-slate-700 rounded-xl 
                       hover:bg-slate-700/50 hover:border-blue-500 hover:scale-105
                       transition-all duration-300 ease-out"
          >
            <span className="text-slate-400 text-sm font-medium group-hover:text-blue-400 transition-colors">
              Week
            </span>
            <span className="block text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {week}
            </span>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-slate-500 text-sm">
        &copy; 2025 All Rights Reserved
      </footer>
    </main>
  );
}
