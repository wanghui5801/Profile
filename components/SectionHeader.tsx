import { IconType } from 'react-icons';

interface SectionHeaderProps {
  icon: IconType;
  title: string;
}

export default function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="flex-1 ml-6">
        <div className="h-px bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400" />
      </div>
    </div>
  );
} 