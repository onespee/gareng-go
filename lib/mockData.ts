export type BeritaItem = {
  id: string | number;
  slug: string;
  judul: string;
  konten: string;
  thumbnail?: string;
  tanggal?: string;
  tanggal_mulai?: string;
  tanggal_selesai?: string;
  lokasi?: string;
  sumber?: string;
  created_at?: string;
};

export const homePembiayaans: BeritaItem[] = [
  {
    id: 1,
    slug: "akses-modal-bootstrapping",
    judul: "Strategi Pembiayaan untuk Startup Bootstrapping",
    konten: "Pelajari cara mengelola arus kas, membangun revenue stream, dan menarik modal awal dari investor yang tepat.",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-06-01",
    created_at: "2026-05-20",
    sumber: "https://example.com/bootstrapping",
  },
  {
    id: 2,
    slug: "kredit-umkm-digital",
    judul: "Kredit UMKM Digital: Solusi Akses Modal Cepat",
    konten: "Solusi pembiayaan digital kini semakin mudah diakses oleh UMKM yang ingin mempercepat ekspansi usaha.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-05-15",
    created_at: "2026-05-10",
    sumber: "https://example.com/kredit-umkm",
  },
  {
    id: 3,
    slug: "vc-untuk-growth",
    judul: "Venture Capital untuk Pertumbuhan Bisnis Skala Menengah",
    konten: "Bahas jawaban umum VC, persyaratan, dan tips memperkuat pitch deck untuk menarik perhatian investor.",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-05-10",
    created_at: "2026-05-08",
    sumber: "https://example.com/vc-growth",
  },
];

export const homeEvents: BeritaItem[] = [
  {
    id: 11,
    slug: "bootcamp-startup-2026",
    judul: "Bootcamp Startup 2026: Pitch Deck & Akses Modal",
    konten: "Workshop intensif untuk founder startup belajar membuat pitch deck, strategi go-to-market, dan berjejaring dengan investor.",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    tanggal_mulai: "2026-06-18",
    tanggal_selesai: "2026-06-20",
    lokasi: "Jakarta Convention Center",
    created_at: "2026-05-28",
  },
  {
    id: 12,
    slug: "webinar-vc-indonesia",
    judul: "Webinar VC Indonesia: Tren 2026",
    konten: "Diskusi online bersama venture capital dan founder untuk memahami dinamika investasi terbaru di ekosistem lokal.",
    thumbnail: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    tanggal_mulai: "2026-07-05",
    lokasi: "Online",
    created_at: "2026-05-25",
  },
  {
    id: 13,
    slug: "masterclass-fintech-pembiayaan",
    judul: "Masterclass Fintech Pembiayaan untuk UMKM",
    konten: "Belajar model pembiayaan fintech, risiko kredit, dan penggunaan teknologi dalam mengembangkan usaha.",
    thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    tanggal_mulai: "2026-07-22",
    lokasi: "Bandung Digital Hub",
    created_at: "2026-05-20",
  },
];

export const eventItems: BeritaItem[] = homeEvents;

export const pembiayaanItems: BeritaItem[] = homePembiayaans;

export function getEventBySlug(slug: string) {
  return eventItems.find((item) => item.slug === slug);
}

export function getPembiayaanBySlug(slug: string) {
  return pembiayaanItems.find((item) => item.slug === slug);
}
