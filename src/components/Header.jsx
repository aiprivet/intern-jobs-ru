import { DiCode } from "react-icons/di";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b dark:border-slate-900 border-neutral-300">
      <div className="text-slate-800 flex items-center pl-2 font-semibold dark:text-slate-100">
        <DiCode size="48"></DiCode>
        <span>IT Стажировки в РФ</span>
      </div>
    </header>
  );
}
