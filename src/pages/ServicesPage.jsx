import { useFetch } from "../hooks/useFetch.js";
import { servicesApi } from "../api/services.js";
import Card from "../components/Card.jsx";
import BookingForm from "../features/bookings/BookingForm.jsx";
import { useState } from "react";

export default function ServicesPage() {
  const { data: categories, loading, error } = useFetch(() => servicesApi.listCategories(), []);
  const [selected, setSelected] = useState(null);

  if (loading) return <div className="container mx-auto p-10">Loading services…</div>;
  if (error) return <div className="container mx-auto p-10 text-red-500">Failed to load services.</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Home Services</h1>
      <p className="mt-2 text-slate-500">
        Book an inspection visit (₹89). The vendor surveys your problem and shares a transparent quote.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {(categories?.results ?? categories ?? []).map((cat) => (
          <Card key={cat.id}>
            <h3 className="text-xl font-semibold">{cat.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{cat.description}</p>
            <ul className="mt-4 space-y-2">
              {cat.items.map((item) => (
                <li key={item.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-800">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-slate-500">
                      {item.is_hourly ? `₹${item.hourly_rate}/hr` : `Inspection ₹${item.inspection_fee}`}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(item)}
                    className="rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white"
                  >
                    Book
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {selected && <BookingForm service={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
