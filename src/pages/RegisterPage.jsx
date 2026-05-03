import RegisterForm from "../features/auth/RegisterForm.jsx";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="container mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl font-bold">Create your account</h1>
      <p className="mt-1 text-sm text-slate-500">Start managing your home with Homico.</p>
      <div className="mt-6">
        <RegisterForm />
      </div>
      <p className="mt-6 text-sm text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="text-orange-500 font-semibold">
          Sign in
        </Link>
      </p>
    </div>
  );
}
