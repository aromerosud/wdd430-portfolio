import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e8eef5] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Welcome Back</h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to manage your portfolio
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
