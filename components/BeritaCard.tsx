import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

interface BeritaCardProps {
  type: "pembiayaan" | "event";
  slug: string;
  title: string;
  excerpt: string;
  thumbnailUrl?: string;
  date: string;
}

export function BeritaCard({ type, slug, title, excerpt, thumbnailUrl, date }: BeritaCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 overflow-hidden">
      <Link href={`/${type}/${slug}`} className="relative h-48 w-full overflow-hidden bg-gray-100">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
            No Image
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-primary-700 shadow-sm uppercase tracking-wide">
          {type === "pembiayaan" ? "Info Pembiayaan" : "Event"}
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>{new Date(date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</time>
        </div>
        
        <Link href={`/${type}/${slug}`} className="group-hover:text-primary-600 transition-colors mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{title}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-5">
          {excerpt}
        </p>

        <Link
          href={`/${type}/${slug}`}
          className="mt-auto inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Baca Selengkapnya
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
