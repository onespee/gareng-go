import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Edit, Trash2, Plus } from "lucide-react";

export default async function AdminUMKMPage() {
  const supabase = createClient();
  const { data: umkms } = await supabase.from("umkm").select("*").order("created_at", { ascending: false });
  const items = umkms || [];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-gray-900">Kelola UMKM</h1>
        <Link href="/admin/umkm/tambah" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-xl transition-colors">
          <Plus className="w-5 h-5" /> Tambah UMKM
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-4 font-bold">Nama Usaha</th>
                <th className="px-6 py-4 font-bold">Kategori</th>
                <th className="px-6 py-4 font-bold">Sertifikasi</th>
                <th className="px-6 py-4 font-bold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.length > 0 ? items.map((item: any) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.nama}</td>
                  <td className="px-6 py-4">{item.kategori || "-"}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {item.has_nib && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">NIB</span>}
                      {item.has_pirt && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">PIRT</span>}
                      {item.has_halal && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Halal</span>}
                      {(!item.has_nib && !item.has_pirt && !item.has_halal) && <span className="text-gray-400 text-xs">Belum ada</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/admin/umkm/${item.id}/edit`} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">Belum ada data UMKM.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
