import Card from "./Card.jsx";

/**
 * Generic service card — used on the homepage and Services page.
 * Pass `icon` as a lucide component reference.
 */
export default function ServiceCard({ icon: Icon, title, description, onClick }) {
  return (
    <Card className="cursor-pointer transition hover:-translate-y-1 hover:border-orange-400" onClick={onClick}>
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-500/10">
        {Icon ? <Icon className="h-5 w-5" /> : null}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </Card>
  );
}
