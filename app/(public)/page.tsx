import Link from "next/link";
import { TrendingUp, CalendarDays } from "lucide-react";
import { BeritaCard } from "@/components/BeritaCard";
import { homePembiayaans, homeEvents, type BeritaItem } from "@/lib/mockData";

export default async function HomePage() {
  const latestPembiayaan = homePembiayaans;
  const latestEvent = homeEvents;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-24 pb-28 px-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%)]" />
        <div className="pointer-events-none absolute right-0 top-24 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(320px,0.7fr)] items-center">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300 mb-6">
                Venture Capital & Pembiayaan</p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.03] mb-6">
                Temukan modal strategis untuk mempercepat pertumbuhan bisnis Anda.
              </h1>
              <p className="text-lg text-slate-300 leading-8 mb-10">
                Platform terkurasi untuk mencari investor dan pembiayaan terbaik di Indonesia. Pelajari syarat, nilai pendanaan, dan pilih partner yang cocok untuk fase bisnis Anda.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/pembiayaan"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
                >
                  Jelajahi Pembiayaan
                </Link>
                <Link
                  href="/event"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-7 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
                >
                  Lihat Event & Workshop
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.4)] ring-1 ring-white/5 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-300 font-semibold">Marketplace VC</p>
                  <h2 className="mt-3 text-2xl font-black text-white">Pendanaan kelas global, untuk bisnis lokal.</h2>
                </div>
                <div className="rounded-3xl bg-slate-800/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Pilih Strategi</div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-950/80 p-5 border border-white/5">
                  <p className="text-sm text-slate-400">Dana awal untuk startup & usaha yang ingin scale dengan mentor VC.</p>
                  <p className="mt-3 text-3xl font-bold text-white">Rp 200 juta - Rp 10 miliar</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5 border border-white/5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Investasi</p>
                    <p className="mt-3 text-lg font-semibold text-white">VC, Angel, Debt</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5 border border-white/5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Fase</p>
                    <p className="mt-3 text-lg font-semibold text-white">Ide, Awal, Berkembang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex flex-col items-center text-center pt-4 md:pt-0">
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

      {/* VC & Pembiayaan Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Venture Capital Indonesia</h3>
            <p className="text-gray-600 text-sm leading-6">Temukan bagaimana modal VC membantu startup dan usaha skala kecil berkembang cepat melalui pendanaan dengan pendampingan strategis.</p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Akses Pembiayaan</h3>
            <p className="text-gray-600 text-sm leading-6">Pelajari opsi pembiayaan seperti KUR, modal kerja, pinjaman mikro, dan program pemerintah untuk mendukung bisnis Anda.</p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tips Persiapan</h3>
            <p className="text-gray-600 text-sm leading-6">Persiapkan pitch deck, proyeksi keuangan, dan strategi pertumbuhan untuk meningkatkan peluang pendanaan.</p>
          </div>
        </div>
      </section>

      {/* Info & Berita */}
      <section className="bg-gray-100 py-20 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Insight Pembiayaan & VC</h2>
              <p className="text-gray-600">Berita, program, dan agenda yang mendukung akses modal serta pertumbuhan bisnis.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPembiayaan.map((item: BeritaItem) => (
              <BeritaCard
                key={item.id}
                type="pembiayaan"
                slug={item.slug}
                title={item.judul ?? "Untitled Info"}
                excerpt={item.konten?.replace(/<[^>]*>?/gm, '').substring(0, 100) + "..."}
                thumbnailUrl={item.thumbnail ?? undefined}
                date={item.tanggal || item.created_at || ""}
              />
            ))}
            {latestEvent.map((item: BeritaItem) => (
              <BeritaCard
                key={item.id}
                type="event"
                slug={item.slug}
                title={item.judul ?? "Untitled Event"}
                excerpt={(item.konten ?? "").replace(/<[^>]*>?/gm, '').substring(0, 100) + "..."}
                thumbnailUrl={item.thumbnail ?? undefined}
                date={item.tanggal_mulai || item.created_at || ""}
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
