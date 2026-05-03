import { useState } from "react";
import { bookingsApi } from "../../api/bookings.js";
import Button from "../../components/Button.jsx";

const SLOTS = ["09:00 - 11:00", "11:00 - 13:00", "14:00 - 16:00", "16:00 - 18:00"];

/**
 * Modal-style booking form for a single ServiceItem.
 * Posts to /api/bookings/services/ — requires auth.
 */
export default function BookingForm({ service, onClose }) {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    scheduled_date: "",
    time_slot: SLOTS[0],
    problem: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await bookingsApi.create({
        ...form,
        service: service.id,
        estimated_price: service.is_hourly ? service.hourly_rate : service.inspection_fee,
      });
      setDone(true);
    } catch (err) {
      setError(err.response?.data?.detail || "Booking failed. Are you signed in?");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="text-sm text-slate-500">
              {service.is_hourly ? `₹${service.hourly_rate}/hr` : `Inspection visit fee: ₹${service.inspection_fee}`}
            </p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>

        {done ? (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-sm text-green-700">
            Booking confirmed! Track it in your dashboard.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 grid grid-cols-2 gap-3">
            <Field label="Full name" value={form.full_name} onChange={handle("full_name")} required />
            <Field label="Phone" value={form.phone} onChange={handle("phone")} required />
            <Field className="col-span-2" label="Address" value={form.address} onChange={handle("address")} required />
            <Field label="City" value={form.city} onChange={handle("city")} />
            <Field label="Pincode" value={form.pincode} onChange={handle("pincode")} />
            <Field label="Date" type="date" value={form.scheduled_date} onChange={handle("scheduled_date")} required />
            <label className="block">
              <span className="text-sm font-medium">Time slot</span>
              <select
                value={form.time_slot}
                onChange={handle("time_slot")}
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
              >
                {SLOTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <Field className="col-span-2" label="Describe the problem" value={form.problem} onChange={handle("problem")} />
            {error && <p className="col-span-2 text-sm text-red-500">{error}</p>}
            <Button type="submit" disabled={submitting} className="col-span-2 mt-2">
              {submitting ? "Booking…" : "Confirm booking"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <input
        {...props}
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-orange-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
      />
    </label>
  );
}
