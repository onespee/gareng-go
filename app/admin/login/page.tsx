"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-primary-600 mb-2 tracking-tight">GARENG GO!</h1>
          <p className="text-gray-500 font-medium">Panel Admin sekarang dapat diakses tanpa Supabase.</p>
        </div>

        <div className="mb-6 p-4 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl text-sm text-center">
          Sistem autentikasi dihapus. Klik tombol di bawah untuk melanjutkan ke dashboard admin.
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl transition-colors"
        >
          Masuk ke Dashboard
        </button>

        <div className="mt-8 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-primary-600 font-medium">
            &larr; Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
