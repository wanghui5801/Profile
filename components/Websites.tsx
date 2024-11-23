import { BiGlobe } from 'react-icons/bi';
import { MdMonitor, MdDeviceThermostat } from 'react-icons/md';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import { TbWorld } from 'react-icons/tb';

export default function Websites() {
  const websites = [
    {
      title: "Personal Website",
      url: "https://huiw.org",
      icon: BiGlobe,
      description: "My personal website and blog",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "VPS Monitor",
      url: "https://vps.1101949.xyz",
      icon: MdMonitor,
      description: "Server monitoring dashboard",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      title: "US Temperature",
      url: "https://amtemp.top",
      icon: MdDeviceThermostat,
      description: "US temperature monitoring system",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="space-y-8">
      <SectionHeader icon={TbWorld} title="Websites" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {websites.map((site) => {
          const Icon = site.icon;
          return (
            <Link
              key={site.url}
              href={site.url}
              target="_blank"
              className="group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${site.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative flex flex-col items-center text-center space-y-3">
                <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {site.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
} 