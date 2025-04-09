'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { SiUpwork } from 'react-icons/si'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Ahmad Fauzi',
    role: 'Lead Fullstack Developer',
    expertise: 'Next.js, Laravel, Node.js',
    bio: 'Spesialis dalam arsitektur sistem scalable dengan pengalaman 8+ tahun membangun aplikasi enterprise.',
    contact: 'ahmad@example.com'
  },
  {
    name: 'Dewi Anggraeni',
    role: 'IoT Solutions Architect',
    expertise: 'Embedded Systems, Raspberry Pi, Arduino',
    bio: 'Ahli dalam integrasi hardware-software dengan portofolio 50+ proyek IoT industri.',
    contact: 'dewi@example.com'
  },
  {
    name: 'Budi Santoso',
    role: 'Mobile Development Lead',
    expertise: 'Flutter, React Native, Kotlin',
    bio: 'Mengembangkan aplikasi mobile dengan performa tinggi untuk berbagai platform.',
    contact: 'budi@example.com'
  },
  {
    name: 'Rina Wijaya',
    role: 'UI/UX Specialist',
    expertise: 'Figma, Adobe XD, User Research',
    bio: 'Menciptakan pengalaman pengguna yang intuitif dan antarmuka yang memukau.',
    contact: 'rina@example.com'
  }
]

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="contact" className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 scroll-mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Hubungi Tim Profesional Kami
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto">
            Solusi teknologi terbaik untuk kebutuhan bisnis digital Anda
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Developer Kami</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tim kami terdiri dari profesional berpengalaman di bidang Software Development dan IoT dengan track record menyelesaikan 150+ proyek untuk klien di berbagai industri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2"></div>
                <div className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 mx-auto">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm text-center mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm text-center mb-4 font-medium">{member.expertise}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <a 
                    href={`mailto:${member.contact}`} 
                    className="text-blue-600 text-sm flex items-center justify-center hover:underline"
                  >
                    <FaEnvelope className="mr-2" /> {member.contact}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Tulis pesan Anda..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium flex items-center hover:shadow-lg transition-all"
                  >
                    Kirim Pesan <IoMdSend className="ml-2" />
                  </button>
                </form>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Info Kontak</h2>
                <div className="bg-gray-50 rounded-xl p-8 space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Telepon</h3>
                      <p className="text-gray-600">+62 812 3456 7890</p>
                      <p className="text-gray-600">+62 821 0987 6543</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@perusahaan.com</p>
                      <p className="text-gray-600">support@perusahaan.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Kantor</h3>
                      <p className="text-gray-600">Gedung Teknologi Lt.5</p>
                      <p className="text-gray-600">Jl. Digital No. 123, Jakarta</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="font-medium text-gray-900 mb-4">Temui Kami di Platform</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition">
                        <FaLinkedin size={20} />
                      </a>
                      <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition">
                        <FaGithub size={20} />
                      </a>
                      <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition">
                        <SiUpwork size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}