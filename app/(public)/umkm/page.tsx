import { UMKMCard } from "@/components/UMKMCard";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Direktori UMKM | GARENG GO!",
  description: "Eksplorasi direktori lengkap UMKM di Indonesia.",
};

export default async function UMKMPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string; halal?: string; nib?: string; pirt?: string };
}) {
  const supabase = createClient();
  let query = supabase.from("umkm").select("*").order("created_at", { ascending: false });

  if (searchParams.q) {
    query = query.ilike("nama", `%${searchParams.q}%`);
  }
  if (searchParams.category) {
    query = query.eq("kategori", searchParams.category);
  }
  if (searchParams.halal === "true") {
    query = query.eq("has_halal", true);
  }
  if (searchParams.nib === "true") {
    query = query.eq("has_nib", true);
  }
  if (searchParams.pirt === "true") {
    query = query.eq("has_pirt", true);
  }

  const { data: umkms } = await query;
  const items = umkms || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Direktori UMKM</h1>
        <p className="text-gray-600">Temukan berbagai produk dan layanan dari UMKM terbaik di sekitar Anda.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 flex-shrink-0">
          <form className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4">Pencarian</h3>
            <div className="mb-6">
              <input
                type="text"
                name="q"
                defaultValue={searchParams.q}
                placeholder="Cari nama UMKM..."
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Kategori</h3>
            <div className="mb-6 space-y-2">
              {["Kuliner", "Fashion", "Kerajinan", "Jasa", "Pertanian", "Lainnya"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    defaultChecked={searchParams.category === cat}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-gray-700 text-sm">{cat}</span>
                </label>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Sertifikasi</h3>
            <div className="mb-6 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="nib" value="true" defaultChecked={searchParams.nib === "true"} className="text-primary-600 rounded" />
                <span className="text-gray-700 text-sm">NIB</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="pirt" value="true" defaultChecked={searchParams.pirt === "true"} className="text-primary-600 rounded" />
                <span className="text-gray-700 text-sm">PIRT</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="halal" value="true" defaultChecked={searchParams.halal === "true"} className="text-primary-600 rounded" />
                <span className="text-gray-700 text-sm">Halal</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-xl transition-colors">
              Terapkan Filter
            </button>
            <a href="/umkm" className="block text-center w-full mt-2 text-gray-500 hover:text-gray-700 text-sm font-medium py-2">
              Reset
            </a>
          </form>
        </aside>

        <main className="flex-1">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {items.map((item: any) => (
                <UMKMCard
                  key={item.id}
                  slug={item.slug}
                  name={item.nama}
                  category={item.kategori || "Lainnya"}
                  photoUrl={item.foto_usaha?.[0]}
                  address={item.alamat}
                  whatsapp={item.whatsapp}
                  legalitas={{
                    nib: item.has_nib,
                    pirt: item.has_pirt,
                    halal: item.has_halal,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
              <p className="text-gray-500 text-lg">Tidak ada UMKM yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
