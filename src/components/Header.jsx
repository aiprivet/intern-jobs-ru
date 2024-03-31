import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b dark:border-slate-900 border-neutral-300">
      <div className="flex text-slate-800  items-center pl-2 font-semibold dark:text-slate-100">
        <span className="text-2xl p-2">👩🏼‍💻</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-500">
          IT Стажировки в РФ
        </span>
      </div>
      <a href="https://github.com/aiprivet/intern-jobs-ru">
        <div className="text-white text-2xl p-2">
          <FaGithub />
        </div>
      </a>
    </header>
  );
}
