import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-3 text-slate-500">This page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white">
        Go home
      </Link>
    </div>
  );
}
