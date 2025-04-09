'use client'

import { FaLaptopCode, FaMobileAlt, FaCloud, FaCogs, FaLayerGroup, FaPencilRuler, FaTools, FaHandshake } from 'react-icons/fa'

const services = [
  {
    title: 'Pembuatan Web App',
    icon: <FaLaptopCode />,
    description: 'Web app modern menggunakan Next.js, Laravel, dan React.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Mobile App',
    icon: <FaMobileAlt />,
    description: 'Pengembangan aplikasi mobile dengan Flutter dan React Native.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'ERP/CRM Kustom',
    icon: <FaLayerGroup />,
    description: 'Solusi ERP atau CRM yang disesuaikan untuk kebutuhan bisnis Anda.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Integrasi API',
    icon: <FaCogs />,
    description: 'Integrasi sistem dan proses otomatisasi backend.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPencilRuler />,
    description: 'Desain antarmuka pengguna yang intuitif dan menarik.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Konsultasi Teknologi',
    icon: <FaHandshake />,
    description: 'Diskusikan solusi teknologi terbaik untuk bisnis Anda.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Maintenance',
    icon: <FaTools />,
    description: 'Layanan perawatan sistem dan dukungan teknis berkelanjutan.',
    color: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud />,
    description: 'Penerapan DevOps dan infrastruktur cloud untuk skalabilitas.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function LayananSection() {
  return (
    <section id="layanan" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Solusi teknologi lengkap untuk mengembangkan bisnis Anda di era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 bg-gradient-to-br ${service.color} text-white`}>
                  <div className="text-xl">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}