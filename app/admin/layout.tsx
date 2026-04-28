import Link from "next/link";
import { LayoutDashboard, Store, DollarSign, CalendarDays } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/LogoutButton";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex h-screen bg-gray-100">
      {user && (
        <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex">
          <div className="p-6 border-b border-gray-200">
            <Link href="/">
              <span className="text-2xl font-black text-primary-600 tracking-tight">Admin GARENG</span>
            </Link>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-colors">
              <LayoutDashboard className="w-5 h-5 text-gray-400" /> Dashboard
            </Link>
            <Link href="/admin/umkm" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-colors">
              <Store className="w-5 h-5 text-gray-400" /> Kelola UMKM
            </Link>
            <Link href="/admin/pembiayaan" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-colors">
              <DollarSign className="w-5 h-5 text-gray-400" /> Info Pembiayaan
            </Link>
            <Link href="/admin/event" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-colors">
              <CalendarDays className="w-5 h-5 text-gray-400" /> Event
            </Link>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <LogoutButton />
          </div>
        </aside>
      )}
      
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
