import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flexx flex-col">
      <div className="flex items-center justify-center p-4">
        <NewItem />
      </div>
    </main>
  );
}
