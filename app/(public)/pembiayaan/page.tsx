import { BeritaCard } from "@/components/BeritaCard";
import { InstitutionCard } from "@/components/InstitutionCard";
import { InstitutionCompare } from "@/components/InstitutionCompare";
import { financingInstitutions, ventureCapitalFirms } from "@/lib/financeData";
import { pembiayaanItems } from "@/lib/mockData";

type PembiayaanItem = {
  id: string | number;
  slug: string;
  judul?: string;
  konten?: string | null;
  thumbnail?: string | null;
  tanggal?: string | null;
  created_at?: string | null;
  sumber?: string | null;
};

export const metadata = {
  title: "VC & Pembiayaan | GARENG GO!",
  description: "Info lengkap tentang venture capital, pembiayaan, dan akses modal di Indonesia.",
};

export default async function PembiayaanPage() {
  const pembiayaans = pembiayaanItems;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-black text-gray-900 mb-4">VC & Pembiayaan untuk Bisnis</h1>
        <p className="text-gray-600 text-lg">Dapatkan informasi terbaru mengenai akses modal, venture capital, KUR, dan program pembiayaan yang mendukung pertumbuhan bisnis Anda.</p>
      </div>

      <InstitutionCompare institutions={[...ventureCapitalFirms, ...financingInstitutions]} />

      <div className="grid gap-6 mb-12 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Apa itu Venture Capital?</h2>
          <p className="text-gray-600 text-sm leading-6">Venture capital adalah modal investasi yang mendukung startup dan bisnis dengan potensi pertumbuhan cepat. Di Indonesia, VC menjadi alternatif pembiayaan untuk pengembang bisnis yang siap skala.</p>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Jenis Pembiayaan</h2>
          <p className="text-gray-600 text-sm leading-6">Pelajari pembiayaan berupa equity, pinjaman KUR, modal kerja, hingga program hibah dan crowdfunding. Setiap pilihan memiliki syarat dan manfaat berbeda untuk bisnis Anda.</p>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Persiapan Investor</h2>
          <p className="text-gray-600 text-sm leading-6">Siapkan rencana bisnis, proyeksi keuangan, dan nilai unik usaha Anda. Pitch deck, traction, dan legalitas mempermudah akses pendanaan.</p>
        </div>
      </div>

      <section className="mb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Daftar Venture Capital Indonesia</h2>
          <p className="text-gray-600">Beberapa lembaga VC terkemuka yang aktif mendanai startup dan bisnis di Indonesia.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ventureCapitalFirms.map((item) => (
            <InstitutionCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Lembaga Pembiayaan & Program Pendanaan</h2>
          <p className="text-gray-600">Institusi dan program yang menyediakan modal, kredit mikro, atau dukungan finansial untuk bisnis.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {financingInstitutions.map((item) => (
            <InstitutionCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      {pembiayaans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pembiayaans.map((item: PembiayaanItem) => (
            <BeritaCard
              key={item.id}
              type="pembiayaan"
              slug={item.slug}
              title={item.judul ?? "Untitled Info"}
              excerpt={(item.konten ?? "").replace(/<[^>]*>?/gm, '').substring(0, 100) + "..."}
              thumbnailUrl={item.thumbnail ?? undefined}
              date={item.tanggal || item.created_at || ""}
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
