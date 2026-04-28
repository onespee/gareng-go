"use client";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-red-600 rounded-xl hover:bg-red-50 font-medium transition-colors">
      <LogOut className="w-5 h-5" /> Keluar
    </button>
  );
}
