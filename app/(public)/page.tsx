import Link from "next/link";
import { ArrowRight, TrendingUp, Users, CalendarDays } from "lucide-react";
import { UMKMCard } from "@/components/UMKMCard";
import { BeritaCard } from "@/components/BeritaCard";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = createClient();
  
  // Fetch latest data
  const { data: umkms } = await supabase
    .from("umkm")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  const { data: pembiayaans } = await supabase
    .from("pembiayaan")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  const { data: events } = await supabase
    .from("event")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  // Fallbacks if data fetch fails
  const latestUMKM = umkms || [];
  const latestPembiayaan = pembiayaans || [];
  const latestEvent = events || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Tumbuh Bersama,<br />Go Level Up!
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Pusat informasi terpadu dan direktori UMKM Indonesia. Temukan potensi bisnis lokal, info pembiayaan, dan event pelatihan untuk mengembangkan usahamu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/umkm"
              className="w-full sm:w-auto bg-white text-primary-600 font-bold py-3.5 px-8 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              Jelajahi UMKM
            </Link>
            <Link
              href="/admin/login"
              className="w-full sm:w-auto bg-primary-700 text-white font-bold py-3.5 px-8 rounded-full hover:bg-primary-800 transition-colors border border-primary-500"
            >
              Masuk Admin
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex flex-col items-center text-center pt-4 md:pt-0">
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-2">{latestUMKM.length}+</h3>
            <p className="text-gray-500 font-medium">UMKM Terdaftar</p>
          </div>
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-2">{latestPembiayaan.length}+</h3>
            <p className="text-gray-500 font-medium">Info Pembiayaan</p>
          </div>
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <CalendarDays className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-2">{latestEvent.length}+</h3>
            <p className="text-gray-500 font-medium">Event & Pelatihan</p>
          </div>
        </div>
      </section>

      {/* Featured UMKM */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">UMKM Terbaru</h2>
            <p className="text-gray-600">Jelajahi potensi bisnis lokal di sekitarmu.</p>
          </div>
          <Link href="/umkm" className="hidden sm:inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {latestUMKM.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestUMKM.map((item: any) => (
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
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-500">Belum ada data UMKM.</p>
          </div>
        )}
      </section>

      {/* Info & Berita */}
      <section className="bg-gray-100 py-20 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Info & Agenda</h2>
              <p className="text-gray-600">Berita pembiayaan dan event pelatihan terkini.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPembiayaan.map((item: any) => (
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
            {latestEvent.map((item: any) => (
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
            {latestPembiayaan.length === 0 && latestEvent.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-500">Belum ada info terbaru.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
