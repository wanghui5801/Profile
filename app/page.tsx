"use client";

import PageTransition from '@/components/PageTransition';
import SequentialTypeWriter from '@/components/SequentialTypeWriter'
import Image from 'next/image';

export default function Home() {
  return (
    <PageTransition>
      <main className="flex-1 flex flex-col px-4 pt-10 md:pt-10 pb-20 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-blue-100/30 via-cyan-100/30 to-transparent dark:from-blue-900/10 dark:via-cyan-900/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tl from-teal-100/30 via-blue-100/30 to-transparent dark:from-teal-900/10 dark:via-blue-900/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
          <div className="space-y-16 md:space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent animate-fadeIn">
              Hi there! <span className="text-black dark:text-white wave">👋</span>
            </h1>
            
            <div className="space-y-12 font-inter text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              <p className="transition-colors duration-300 animate-fadeInUp">
                Welcome! I&apos;m <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">Hui Wang</span>, a MPhil student at{' '}
                <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">Monash University</span>.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 animate-fadeInUp [animation-delay:200ms]">
                I'm from Zhejiang, China <Image src="/China-flag.png" alt="China Flag" width={30} height={22} className="inline-block align-middle -mt-0.5 mx-0.5 rounded" />, and currently studying in Melbourne, Australia <Image src="/Australia-flag.svg" alt="Australia Flag" width={39} height={22} className="inline-block align-middle -mt-0.5 mx-0.5 rounded" />.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 animate-fadeInUp [animation-delay:400ms]">
                I'm majoring in Statistics and interested in chaos theory and causality. 
                Recently, I'm working on <a href="http://www.stavroglou.com/pattern_causality/index.html" className="font-bold bg-gradient-to-r from-blue-600 to-gray-400 dark:from-blue-300 dark:to-gray-500 bg-clip-text text-transparent">pattern causality</a>, a new causality detection algorithm based on chaos theory.
              </p>
            </div>
              
            <div className="flex flex-col space-y-6 pt-2">
              <SequentialTypeWriter 
                sentences={[
                  "I was raised in Wenling, Zhejiang, a beautiful place near the East China Sea.",
                  "Python and R are my favorite programming languages.",
                  "I'm also becoming a qualified MJJ.",
                  "In my free time, I love playing table tennis even though I didn't find any partner here."
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}