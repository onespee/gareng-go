import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import { LegalitasBadge } from "./LegalitasBadge";

interface UMKMCardProps {
  slug: string;
  name: string;
  category: string;
  photoUrl?: string;
  whatsapp?: string;
  address?: string;
  legalitas: {
    nib: boolean;
    pirt: boolean;
    halal: boolean;
  };
}

export function UMKMCard({
  slug,
  name,
  category,
  photoUrl,
  whatsapp,
  address,
  legalitas,
}: UMKMCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 overflow-hidden">
      <Link href={`/umkm/${slug}`} className="relative h-48 w-full overflow-hidden bg-gray-100">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
            No Image
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
          {category}
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/umkm/${slug}`} className="hover:text-primary-600 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{name}</h3>
        </Link>
        
        {address && (
          <div className="flex items-start gap-1.5 text-gray-500 text-sm mb-4">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{address}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          <LegalitasBadge type="NIB" certified={legalitas.nib} />
          <LegalitasBadge type="PIRT" certified={legalitas.pirt} />
          <LegalitasBadge type="Halal" certified={legalitas.halal} />
        </div>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/umkm/${slug}`}
            className="flex-1 text-center bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 rounded-xl transition-colors"
          >
            Lihat Detail
          </Link>
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-xl transition-colors shadow-sm shadow-green-200"
              title="Hubungi via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
