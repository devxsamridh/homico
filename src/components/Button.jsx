/** Variant-aware Button. */
const variants = {
  primary: "bg-orange-500 text-white hover:bg-orange-600",
  outline: "border border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800",
  ghost: "hover:bg-slate-100 dark:hover:bg-slate-800",
};

export default function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition disabled:opacity-50 ${variants[variant]} ${className}`}
    />
  );
}
