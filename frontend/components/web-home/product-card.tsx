// components/ProductCard.tsx
export default function ProductCard({ 
  title, 
  description, 
  link 
}: { 
  title: string, 
  description: string, 
  link: string 
}) {
  return (
      <div className="group relative bg-white rounded-2xl shadow-sm overflow-hidden w-full max-w-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2 border border-gray-100 hover:border-blue-100 mx-2 cursor-pointer">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          
          {/* Content container */}
          <div className="relative p-8 h-full flex flex-col z-10">
              {/* Icon placeholder - you can replace with actual icon */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
              </div>

              {/* Title with elegant effect */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  <span className="relative inline-block">
                      {title}
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover:w-full opacity-90"></span>
                  </span>
              </h3>
              
              {/* Description with improved readability */}
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {description}
              </p>
      
              {/* Enhanced link with animated arrow */}
              <div className="mt-auto">
                  <a 
                      href={link} 
                      className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 group/link"
                  >
                      <span className="relative overflow-hidden inline-block">
                          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5">
                              Pelajari lebih lanjut
                          </span>
                          <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 ml-2 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-blue-800" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                          >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                      </span>
                  </a>
              </div>
          </div>
          
          {/* Subtle floating elements for depth */}
          <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-blue-100 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-blue-100 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
              <div className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-md filter opacity-30"></div>
              </div>
          </div>
      </div>
  );
}