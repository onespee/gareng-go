import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-4">
            <span className="text-2xl font-black text-white tracking-tight">GARENG GO!</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-6">
            Gandeng Renteng Go Level Up. Situs edukasi dan informasi tentang venture capital dan pembiayaan di Indonesia.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Eksplorasi</h4>
          <ul className="space-y-2">
            <li><Link href="/pembiayaan" className="hover:text-primary-400 transition-colors">Info Pembiayaan</Link></li>
            <li><Link href="/event" className="hover:text-primary-400 transition-colors">Event & Pelatihan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: halo@garenggo.id</li>
            <li>WhatsApp: +62 851 6361 2553</li>
            <li>Malang, Indonesia</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} GARENG GO! All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
        </div>
      </div>
    </footer>
  );
}
