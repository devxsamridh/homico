import { useFetch } from "../hooks/useFetch.js";
import { materialsApi } from "../api/materials.js";
import Card from "../components/Card.jsx";
import { formatINR } from "../utils/format.js";

export default function MaterialsPage() {
  const { data, loading, error } = useFetch(() => materialsApi.list(), []);
  if (loading) return <div className="container mx-auto p-10">Loading materials…</div>;
  if (error) return <div className="container mx-auto p-10 text-red-500">Failed to load materials.</div>;

  const items = data?.results ?? data ?? [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Raw Materials</h1>
      <p className="mt-2 text-slate-500">Cement, steel, bricks and more — delivered to your site.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((m) => (
          <Card key={m.id}>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-xs uppercase tracking-wide text-slate-400">{m.category}</p>
            <p className="mt-3 text-2xl font-bold">{formatINR(m.price)}</p>
            <p className="text-xs text-slate-500">per {m.unit}</p>
          </Card>
        ))}
        {items.length === 0 && <p className="text-slate-500">No materials in catalog yet.</p>}
      </div>
    </div>
  );
}
