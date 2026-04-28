import { createClient } from "@/lib/supabase/server";
import { Store, DollarSign, CalendarDays } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const supabase = createClient();
  
  const [{ count: umkmCount }, { count: pembiayaanCount }, { count: eventCount }] = await Promise.all([
    supabase.from("umkm").select("*", { count: "exact", head: true }),
    supabase.from("pembiayaan").select("*", { count: "exact", head: true }),
    supabase.from("event").select("*", { count: "exact", head: true })
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-black text-gray-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium mb-1">Total UMKM</p>
            <h3 className="text-3xl font-black text-gray-900">{umkmCount || 0}</h3>
          </div>
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
            <Store className="w-7 h-7" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium mb-1">Info Pembiayaan</p>
            <h3 className="text-3xl font-black text-gray-900">{pembiayaanCount || 0}</h3>
          </div>
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <DollarSign className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium mb-1">Total Event</p>
            <h3 className="text-3xl font-black text-gray-900">{eventCount || 0}</h3>
          </div>
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
            <CalendarDays className="w-7 h-7" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Aksi Cepat</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/admin/umkm/tambah" className="bg-primary-50 text-primary-700 hover:bg-primary-100 font-medium py-3 px-6 rounded-xl transition-colors">
            + Tambah UMKM
          </Link>
          <Link href="/admin/pembiayaan/tambah" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium py-3 px-6 rounded-xl transition-colors">
            + Tambah Pembiayaan
          </Link>
          <Link href="/admin/event/tambah" className="bg-purple-50 text-purple-700 hover:bg-purple-100 font-medium py-3 px-6 rounded-xl transition-colors">
            + Tambah Event
          </Link>
        </div>
      </div>
    </div>
  );
}
