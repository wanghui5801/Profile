import { IconType } from 'react-icons';

interface SectionTitleProps {
  icon: IconType;
  title: string;
}

export default function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center space-x-4">
      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800 dark:to-transparent"></div>
    </div>
  );
} 