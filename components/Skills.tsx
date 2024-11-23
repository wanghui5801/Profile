import { SiPython, SiR, SiCplusplus, SiLatex, SiJulia, SiGit, SiLinux, SiJavascript } from 'react-icons/si';
import { BiBrain } from 'react-icons/bi';
import SectionHeader from '@/components/SectionHeader';

export default function Skills() {
  const skills = [
    {
      name: "Python",
      icon: <SiPython />,
      color: "text-blue-500",
      bgGradient: "from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10",
      borderColor: "group-hover:border-blue-200 dark:group-hover:border-blue-800",
      description: "Data Analysis & ML",
      level: 95
    },
    {
      name: "R",
      icon: <SiR />,
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      description: "Statistical Analysis",
      level: 85
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      description: "Web Development & Frontend",
      level: 85
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      color: "text-blue-700",
      bgColor: "from-blue-700/20 to-blue-700",
      description: "High Performance Computing",
      level: 60
    },
    {
      name: "LaTeX",
      icon: <SiLatex />,
      color: "text-teal-600",
      bgColor: "from-teal-600/20 to-teal-600",
      description: "Document Preparation",
      level: 90
    },
    {
      name: "Julia",
      icon: <SiJulia />,
      color: "text-purple-600",
      bgColor: "from-purple-600/20 to-purple-600",
      description: "Scientific Programming",
      level: 60
    },
    {
      name: "Git",
      icon: <SiGit />,
      color: "text-red-500",
      bgColor: "from-red-500/20 to-red-500",
      description: "Version Control",
      level: 80
    },
    {
      name: "Linux",
      icon: <SiLinux />,
      color: "text-yellow-600",
      bgColor: "from-yellow-600/20 to-yellow-600",
      description: "Operating System",
      level: 90
    }
  ];

  return (
    <section className="space-y-8">
      <SectionHeader icon={BiBrain} title="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="group relative opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_forwards]"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`relative p-5 rounded-xl border border-gray-100/80 dark:border-gray-800/80 ${skill.bgGradient} ${skill.borderColor} transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-900/20`}>
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${skill.color} group-hover:scale-110 transition-all duration-300`}>
                  <div className="text-2xl">{skill.icon}</div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`absolute left-0 top-0 h-full ${skill.color} bg-current rounded-full transition-all duration-500 ease-out group-hover:opacity-80`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 