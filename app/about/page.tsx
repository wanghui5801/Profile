import PageTransition from '@/components/PageTransition';
import Education from '@/components/Education';
import Packages from '@/components/Packages';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Websites from '@/components/Websites';

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="flex-1 px-4 pt-10 md:pt-10 pb-20 relative min-h-screen">
        <div className="absolute top-20 left-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-blue-100/20 via-cyan-100/20 to-transparent dark:from-blue-900/10 dark:via-cyan-900/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-20 right-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-tl from-teal-100/20 via-blue-100/20 to-transparent dark:from-teal-900/10 dark:via-blue-900/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="relative group">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent pb-2">
              Hui Wang
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full transition-all duration-300 group-hover:w-32" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="font-inter text-xl text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              A passionate student focused on statistics and programming
            </p>
          </div>
          
          <Education />
          <Publications />
          <Skills />
          <Websites />
          <Packages />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200/50 dark:via-gray-800/50 to-transparent animate-pulse" />
        </div>
      </main>
    </PageTransition>
  );
} 