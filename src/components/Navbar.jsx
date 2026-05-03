import { Link, NavLink } from "react-router-dom";
import { HardHat, Moon, Sun, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/materials", label: "Raw Materials" },
  { to: "/services", label: "Home Services" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-orange-500">
            <HardHat className="h-5 w-5" />
          </span>
          Hom<span className="text-orange-500">i</span>co
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition ${
                  isActive ? "text-orange-500" : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          {user ? (
            <>
              <Link to="/dashboard" className="rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white">
                Dashboard
              </Link>
              <button
                onClick={logout}
                aria-label="Log out"
                className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                Sign in
              </Link>
              <Link to="/register" className="rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
