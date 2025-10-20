import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="p-4 max-w-xl mx-auto">
            <div>
                <h1 className="text-2xl p-4">Shopping List</h1>
            <ItemList />
            </div>
            
        </main>
    )
}