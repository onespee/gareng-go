import { BeritaCard } from "@/components/BeritaCard";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Info Pembiayaan | GARENG GO!",
  description: "Dapatkan informasi terbaru mengenai akses pembiayaan dan permodalan UMKM.",
};

export default async function PembiayaanPage() {
  const supabase = createClient();
  const { data: items } = await supabase
    .from("pembiayaan")
    .select("*")
    .order("created_at", { ascending: false });

  const pembiayaans = items || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Info Pembiayaan</h1>
        <p className="text-gray-600 text-lg">Dapatkan informasi terbaru mengenai akses pembiayaan, KUR, dan permodalan untuk mengembangkan UMKM Anda.</p>
      </div>

      {pembiayaans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pembiayaans.map((item: any) => (
            <BeritaCard
              key={item.id}
              type="pembiayaan"
              slug={item.slug}
              title={item.judul}
              excerpt={item.konten?.replace(/<[^>]*>?/gm, '').substring(0, 100) + "..."}
              thumbnailUrl={item.thumbnail}
              date={item.tanggal || item.created_at}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
          <p className="text-gray-500 text-lg">Belum ada informasi pembiayaan saat ini.</p>
        </div>
      )}
    </div>
  );
}
