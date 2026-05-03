import { Link } from "react-router-dom";
import { Wrench, Truck, Ruler, HardHat, CalendarCheck, MapPin, ClipboardCheck, CheckCircle2 } from "lucide-react";
import ServiceCard from "../components/ServiceCard.jsx";
import Card from "../components/Card.jsx";

const SERVICES = [
  { icon: Wrench, title: "Home Services", description: "Plumbing, electrical, AC repair & house help." },
  { icon: Ruler, title: "Architecture & Planning", description: "Designs & consultations from licensed architects." },
  { icon: Truck, title: "Raw Materials", description: "Cement, steel, bricks — delivered to site." },
  { icon: HardHat, title: "Full Construction", description: "End-to-end turnkey home building." },
];

const STEPS = [
  { icon: CalendarCheck, title: "Book a service", desc: "Pick the service, slot and address in under a minute." },
  { icon: MapPin, title: "Expert visits you", desc: "A verified pro inspects on-site for ₹89." },
  { icon: ClipboardCheck, title: "Get a quotation", desc: "Transparent breakdown of labor + materials." },
  { icon: CheckCircle2, title: "Approve & start", desc: "Accept the quote and the work begins." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero ----------------------------------------------------------- */}
      <section className="container mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 dark:bg-orange-500/10">
            Your complete home ecosystem
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Build, Repair & Manage Your Home — <span className="text-orange-500">All in One Place</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-500">
            Book on-demand home services, order raw materials, hire architects and manage full home construction from one app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white">
              Explore Services
            </Link>
            <Link to="/materials" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-700">
              Order Materials
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-900 to-orange-600" />
      </section>

      {/* Services ------------------------------------------------------- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Everything you need, in one place</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* How it works --------------------------------------------------- */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">How it works</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Card key={s.title}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <s.icon className="mb-2 h-6 w-6 text-orange-500" />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
