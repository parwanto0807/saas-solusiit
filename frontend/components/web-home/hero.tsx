"use client";

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-white to-gray-50 text-gray-900 py-36 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-8 left-1/3 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Container utama */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        {/* Bagian kiri - teks */}
        <div className="flex-1 text-center md:text-left mb-16 md:mb-0 px-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="block text-gray-900">Transformasi Digital</span>
            <span className="block text-blue-600 mt-4">Bisnis Anda</span>
          </h1>
          
          <p className="max-w-2xl mx-auto md:mx-0 text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Solusi SaaS Web Development terintegrasi untuk mempercepat pertumbuhan bisnis Anda dengan teknologi mutakhir dan desain elegan.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mb-16">
            <Link 
              href="/demo" 
              className="px-10 py-5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Request Demo Gratis
              <span className="ml-2">→</span>
            </Link>
            
            <Link 
              href="/pricing" 
              className="px-10 py-5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-blue-400 transition-all duration-300 flex items-center"
            >
              Lihat Paket
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Indikator kepercayaan */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-10">
            <div className="flex items-center bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">100% Cloud-Based</span>
            </div>
            
            <div className="flex items-center bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">Deployment Cepat</span>
            </div>
            
            <div className="flex items-center bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">Solusi Terbaik 2024</span>
            </div>
          </div>
        </div>
        
        {/* Mockup dashboard */}
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-2/5 relative mt-16 md:mt-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-20"></div>
            <div className="absolute -bottom-1 -left-1 -right-1 h-4 bg-gradient-to-t from-gray-100 to-transparent rounded-b-3xl"></div>
            <div className="absolute top-4 left-4 right-4 h-8 bg-white bg-opacity-30 rounded-t-lg backdrop-blur-sm"></div>
            <div className="absolute top-5 left-6 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Dashboard SaaS"
              width={1350}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-indigo-100 rounded-full opacity-20"></div>
        </div>
      </div>
      
      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;