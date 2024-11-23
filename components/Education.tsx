import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeader from '@/components/SectionHeader';

export default function Education() {
  return (
    <section className="space-y-8">
      <SectionHeader icon={FaGraduationCap} title="Education" />
      
      <div className="space-y-8">
        <div className="group relative hover:translate-x-1 transition-transform duration-300 md:hover:translate-x-1">
          <div className="absolute -left-4 top-1/2 w-1.5 h-0 bg-gradient-to-b from-blue-800 to-blue-300 dark:from-blue-600 dark:to-blue-400 group-hover:h-full transition-all duration-300 -translate-y-1/2 rounded-full md:block hidden" />
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl dark:hover:shadow-2xl-dark transition-all duration-300">
            <div className="flex items-start space-x-3 md:space-x-8 relative">
              <div className="shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 p-2 md:p-3 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/monash-logo.svg" 
                    alt="Monash Logo" 
                    width={96}
                    height={96}
                    className="w-full h-full object-contain animate-float"
                  />
                </div>
              </div>
              
              <div className="min-w-0 flex-1 space-y-2 md:space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Monash University
                    </h3>
                  </div>
                  <span className="font-semibold shrink-0 px-2.5 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full whitespace-nowrap">
                    Present
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    MPhil | Econometrics and Business Statistics
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center text-sm md:text-base text-gray-500 dark:text-gray-400 space-y-1.5 md:space-y-0">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>2024.7 - Present</span>
                  </div>
                  <span className="hidden md:inline mx-2">•</span>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Melbourne, Australia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative hover:translate-x-1 transition-transform duration-300 md:hover:translate-x-1">
          <div className="absolute -left-4 top-1/2 w-1.5 h-0 bg-gradient-to-b from-blue-800 to-blue-300 dark:from-blue-600 dark:to-blue-400 group-hover:h-full transition-all duration-300 -translate-y-1/2 rounded-full md:block hidden" />
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl dark:hover:shadow-2xl-dark transition-all duration-300">
            <div className="flex items-start space-x-3 md:space-x-8 relative">
              <div className="shrink-0">
                <div className="w-16 h-16 md:w-24 md:h-24 p-2 md:p-3 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/CJLU-logo.png" 
                    alt="CJLU Logo" 
                    width={96}
                    height={96}
                    className="w-full h-full object-contain animate-float"
                  />
                </div>
              </div>
              
              <div className="min-w-0 flex-1 space-y-2 md:space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      China Jiliang University
                    </h3>
                  </div>
                  <span className="font-semibold shrink-0 px-2.5 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 rounded-full whitespace-nowrap">
                    Graduated
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    BEcon | Financial Engineering
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center text-sm md:text-base text-gray-500 dark:text-gray-400 space-y-1.5 md:space-y-0">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>2019.9 - 2023.6</span>
                  </div>
                  <span className="hidden md:inline mx-2">•</span>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Hangzhou, China</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 