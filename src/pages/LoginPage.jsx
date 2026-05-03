import LoginForm from "../features/auth/LoginForm.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="container mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="mt-1 text-sm text-slate-500">Welcome back to Homico.</p>
      <div className="mt-6">
        <LoginForm />
      </div>
      <p className="mt-6 text-sm text-slate-500">
        New here?{" "}
        <Link to="/register" className="text-orange-500 font-semibold">
          Create an account
        </Link>
      </p>
    </div>
  );
}
