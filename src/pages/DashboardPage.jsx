import { useAuth } from "../context/AuthContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { bookingsApi } from "../api/bookings.js";
import Card from "../components/Card.jsx";
import { formatDate, formatINR } from "../utils/format.js";

export default function DashboardPage() {
  const { user } = useAuth();
  const { data, loading } = useFetch(() => bookingsApi.list(), []);
  const bookings = data?.results ?? data ?? [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Welcome, {user.full_name || user.email}</h1>
      <p className="mt-2 text-slate-500">Track your bookings, quotations and orders.</p>

      <h2 className="mt-10 text-xl font-semibold">Service bookings</h2>
      {loading ? (
        <p className="mt-4 text-slate-500">Loading…</p>
      ) : bookings.length === 0 ? (
        <p className="mt-4 text-slate-500">No bookings yet.</p>
      ) : (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {bookings.map((b) => (
            <Card key={b.id}>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{b.service?.title || `Service #${b.service}`}</p>
                <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-600">
                  {b.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                {formatDate(b.scheduled_date)} · {b.time_slot}
              </p>
              <p className="text-sm text-slate-500">{b.address}</p>
              <p className="mt-2 text-sm">Inspection: {formatINR(b.estimated_price)}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
