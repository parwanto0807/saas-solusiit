// components/ElegantFooter.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ElegantFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Tentang Kami */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Tentang Kami</h3>
            <p className="text-gray-400">
              Perusahaan kami berkomitmen untuk memberikan solusi terbaik dan layanan berkualitas tinggi kepada pelanggan kami.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-full transition duration-300">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 text-white p-2 rounded-full transition duration-300">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 text-white p-2 rounded-full transition duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 text-white p-2 rounded-full transition duration-300">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Link Cepat */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Link Cepat</h3>
            <ul className="space-y-2">
              {['Beranda', 'Layanan', 'Portofolio', 'Tentang', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Kontak Kami */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Jl. Contoh No. 123, Jakarta</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-400">+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-400">info@example.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400">
              Berlangganan untuk mendapatkan update dan penawaran terbaru.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Alamat Email Anda" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-white"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nama Perusahaan. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}