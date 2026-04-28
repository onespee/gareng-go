import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, MessageCircle, ArrowLeft } from "lucide-react";
import { LegalitasBadge } from "@/components/LegalitasBadge";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data: umkm } = await supabase.from("umkm").select("nama, deskripsi").eq("slug", params.slug).single();
  
  if (!umkm) return { title: "Not Found" };
  
  return {
    title: `${umkm.nama} | GARENG GO!`,
    description: umkm.deskripsi || `Profil UMKM ${umkm.nama}`,
  };
}

export default async function UMKMDetailPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  
  const { data: umkm } = await supabase
    .from("umkm")
    .select("*, produk(*)")
    .eq("slug", params.slug)
    .single();

  if (!umkm) {
    notFound();
  }

  const photos = umkm.foto_usaha || [];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner & Gallery */}
      <div className="w-full h-[40vh] bg-gray-900 relative">
        {photos[0] ? (
          <Image src={photos[0]} alt={umkm.nama} fill className="object-cover opacity-60" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 bg-gray-200">
            Tidak ada foto
          </div>
        )}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/umkm" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
            <div className="flex-1">
              <div className="inline-block bg-primary-50 text-primary-700 font-semibold px-3 py-1 rounded-full text-sm mb-4">
                {umkm.kategori || "Lainnya"}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{umkm.nama}</h1>
              
              <div className="flex items-start gap-2 text-gray-500 mb-6">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-lg">{umkm.alamat || "Alamat tidak tersedia."}</p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <LegalitasBadge type="NIB" certified={umkm.has_nib} />
                <LegalitasBadge type="PIRT" certified={umkm.has_pirt} />
                <LegalitasBadge type="Halal" certified={umkm.has_halal} />
              </div>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>{umkm.deskripsi}</p>
              </div>
            </div>

            {umkm.whatsapp && (
              <div className="w-full md:w-auto bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tertarik dengan Produk Ini?</h3>
                <p className="text-sm text-gray-500 mb-6">Hubungi pemilik usaha langsung via WhatsApp</p>
                <a
                  href={`https://wa.me/${umkm.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
                >
                  Chat WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Section if multiple photos */}
        {photos.length > 1 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeri Foto</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.slice(1).map((url: string, idx: number) => (
                <div key={idx} className="relative h-48 rounded-2xl overflow-hidden bg-gray-100">
                  <Image src={url} alt={`${umkm.nama} - foto ${idx + 2}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Produk / Menu Section */}
        {umkm.produk && umkm.produk.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Katalog Produk / Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {umkm.produk.map((prod: any) => (
                <div key={prod.id} className="bg-white p-5 rounded-2xl border border-gray-200 flex gap-4">
                  <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    {prod.foto ? (
                      <Image src={prod.foto} alt={prod.nama} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Image</div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{prod.nama}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-2 flex-1">{prod.deskripsi}</p>
                    {prod.harga && (
                      <p className="font-bold text-primary-600">Rp {Number(prod.harga).toLocaleString("id-ID")}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
