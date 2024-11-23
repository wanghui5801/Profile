import { FaBook } from 'react-icons/fa';
import SectionHeader from '@/components/SectionHeader';

export default function Publications() {
  const publications = [
    {
      year: "2024",
      month: "07",
      title: "Environmental forcing and policy synergy: A multidimensional approach in the governance of air pollution and carbon emission",
      authors: "Qianwen Li, Tingyu Qian, Hui Wang, Longhao Bai, Ruyin Long",
      journal: "Environmental Research",
      doi: "10.1016/j.envres.2024.119747",
      paperUrl: "https://www.sciencedirect.com/science/article/pii/S0013935124016529"
    },
    {
        year: "2024",
        month: "06",
        title: "Hedging the climate change risks of China's brown assets: Green assets or precious metals?",
        authors: "Jianfeng Li, Xiaoyang Yao, Hui Wang, Wei Le",
        journal: "International Review of Economics & Finance",
        doi: "10.1016/j.iref.2024.103426",
        paperUrl: "https://www.sciencedirect.com/science/article/pii/S1059056024004180"
    }
    // Add more publications...
  ];

  return (
    <section className="space-y-8">
      <SectionHeader icon={FaBook} title="Publications" />

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div 
            key={index} 
            className="group relative pl-8 opacity-0 translate-y-4 animate-[fadeInUp_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-600 dark:border-blue-400 group-hover:scale-110 transition-transform" />
            <div className="absolute left-[7px] top-4 h-full w-0.5 bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-800" />
            
            <div className="space-y-2">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {pub.year}.{pub.month}
              </span>
              <a 
                href={pub.paperUrl}
                className="block group/link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors flex items-center">
                  {pub.title}
                  <span className="inline-block ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-gray-600 dark:text-gray-300">
                {pub.authors}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                {pub.journal}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 