export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} Homico — your complete home ecosystem.
      </div>
    </footer>
  );
}
