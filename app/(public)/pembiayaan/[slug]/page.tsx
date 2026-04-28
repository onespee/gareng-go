import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data: item } = await supabase.from("pembiayaan").select("judul").eq("slug", params.slug).single();
  
  if (!item) return { title: "Not Found" };
  
  return {
    title: `${item.judul} | GARENG GO!`,
  };
}

export default async function PembiayaanDetailPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  
  const { data: item } = await supabase
    .from("pembiayaan")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!item) {
    notFound();
  }

  const displayDate = item.tanggal || item.created_at;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        <Link href="/pembiayaan" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Info Pembiayaan
        </Link>
        
        <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
          {item.thumbnail && (
            <div className="w-full h-[400px] relative bg-gray-100">
              <Image src={item.thumbnail} alt={item.judul} fill className="object-cover" />
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Calendar className="w-4 h-4" />
              <time dateTime={displayDate}>{new Date(displayDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</time>
              <span className="mx-2">•</span>
              <span className="bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full font-medium">Info Pembiayaan</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">{item.judul}</h1>
            
            <div 
              className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: item.konten }}
            />
            
            {item.sumber && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <a href={item.sumber} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors border border-gray-200">
                  <ExternalLink className="w-4 h-4" /> Kunjungi Sumber Resmi
                </a>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
