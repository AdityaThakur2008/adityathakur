import { BookOpen, CheckCircle2 } from "lucide-react";

interface CourseListProps {
  courses: string[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={18} className="text-purple-600 dark:text-purple-400" />
        <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
          Relevant Coursework
        </h4>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
        {courses.map((course, index) => (
          <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
            <CheckCircle2
              size={18}
              className="text-purple-600 dark:text-purple-500 mt-0.5 shrink-0"
            />
            <span className="text-sm md:text-base">{course}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}