import { BeritaCard } from "@/components/BeritaCard";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Event & Pelatihan | GARENG GO!",
  description: "Ikuti berbagai event dan pelatihan untuk meningkatkan kapasitas UMKM Anda.",
};

export default async function EventPage() {
  const supabase = createClient();
  const { data: items } = await supabase
    .from("event")
    .select("*")
    .order("created_at", { ascending: false });

  const events = items || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Event & Pelatihan</h1>
        <p className="text-gray-600 text-lg">Ikuti berbagai kegiatan, bazaar, dan pelatihan untuk meningkatkan kapasitas bisnis UMKM Anda.</p>
      </div>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item: any) => (
            <BeritaCard
              key={item.id}
              type="event"
              slug={item.slug}
              title={item.judul}
              excerpt={item.konten?.replace(/<[^>]*>?/gm, '').substring(0, 100) + "..."}
              thumbnailUrl={item.thumbnail}
              date={item.tanggal_mulai || item.created_at}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
          <p className="text-gray-500 text-lg">Belum ada event atau pelatihan saat ini.</p>
        </div>
      )}
    </div>
  );
}
