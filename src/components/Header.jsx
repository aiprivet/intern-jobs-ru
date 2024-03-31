import { DiCode } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b dark:border-slate-900 border-neutral-300">
      <div className="flex text-slate-800  items-center pl-2 font-semibold dark:text-slate-100">
        <DiCode size="48"></DiCode>
        <span>IT Стажировки в РФ</span>
      </div>
      <a href="https://github.com/aiprivet/intern-jobs-ru">
        <div className="text-white text-2xl mr-2">
          <FaGithub />
        </div>
      </a>
    </header>
  );
}
