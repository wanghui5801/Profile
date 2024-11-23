import { FiPackage } from 'react-icons/fi';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

export default function Packages() {
  const packages = [
    {
      name: "pattern-causality",
      description: "Pattern Causality Algorithm in Python and C++",
      language: "Python",
      url: "https://pypi.org/project/pattern-causality/",
      logo: "/python-logo.svg",
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      name: "patterncausality",
      description: "Pattern Causality Algorithm in R",
      language: "R",
      url: "https://CRAN.R-project.org/package=patterncausality",
      logo: "/R-logo.svg",
      color: "text-teal-500 dark:text-teal-400"
    },
    {
      name: "tsdss",
      description: "Time series analysis tools",
      language: "Python",
      url: "https://pypi.org/project/tsdss/",
      logo: "/python-logo.svg",
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      name: "usmerge",
      description: "Data discretization tools",
      language: "Python",
      url: "https://pypi.org/project/usmerge/",
      logo: "/python-logo.svg",
      color: "text-blue-500 dark:text-blue-400"
    }
  ];

  return (
    <section className="space-y-8">
      <SectionHeader icon={FiPackage} title="Open Source" />
      
      <div className="space-y-6">
        {packages.map((pkg, index) => (
          <a
            key={pkg.name}
            href={pkg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_forwards]"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative flex items-center space-x-5 p-5 rounded-xl bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent hover:from-blue-50/50 dark:hover:from-blue-900/20 transition-all duration-300">
              <div className="relative shrink-0 w-12 h-12 flex items-center justify-center">
                <Image
                  src={pkg.logo}
                  alt={`${pkg.language} logo`}
                  width={32}
                  height={32}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {pkg.name}
                  </h3>
                  <span className={`ml-4 px-3 py-1 text-sm font-medium rounded-full ${pkg.language === 'Python' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20'}`}>
                    {pkg.language}
                  </span>
                </div>
                
                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
                  {pkg.description}
                </p>
              </div>

              <div className="shrink-0 ml-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 