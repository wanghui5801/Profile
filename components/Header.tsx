'use client';

import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-transparent dark:bg-transparent">
      <div className="max-w-4xl mx-auto py-10">
        <nav className="flex justify-between items-center px-4 md:px-0 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-2xl hover:bg-white/40 dark:hover:bg-gray-900/40 transition-colors duration-300">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/avatar.jpg"
              alt="SOTO"
              width={38}
              height={38}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden md:block text-2xl font-bold text-gray-900 dark:text-white">
              Hui
            </span>
          </Link>
          
          <div className="flex items-center">
            <ul className="flex mr-4">
              <li className="mr-4">
                <Link 
                  href="/" 
                  className={`
                    relative text-lg font-bold px-3 py-2 rounded-lg transition-all duration-200 
                    ${pathname === '/' 
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent after:absolute after:inset-0 after:rounded-lg after:transition-colors after:duration-200 hover:after:bg-gray-200 dark:hover:after:bg-gray-800 after:-z-[1]' 
                      : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link 
                  href="/about" 
                  className={`
                    relative text-lg font-bold px-3 py-2 rounded-lg transition-all duration-200 
                    ${pathname === '/about' 
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent after:absolute after:inset-0 after:rounded-lg after:transition-colors after:duration-200 hover:after:bg-gray-200 dark:hover:after:bg-gray-800 after:-z-[1]' 
                      : 'text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  About
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}