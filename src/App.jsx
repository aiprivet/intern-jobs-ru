import { DiCode } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";

import Button from "./ui/Button";
function App() {
  return (
    <>
      <header className="flex justify-between items-center border-b border-neutral-300">
        <div className="text-slate-800 flex items-center pl-2 font-semibold">
          <DiCode size="48"></DiCode>
          <span>Стажировки для IT специалистов</span>
        </div>
      </header>
      <main className="flex items-center justify-center mt-12 text-slate-800 flex-col">
        <h1 className="text-center font-semibold text-3xl">
          Найди стажировку по своему направлению
        </h1>
        <div className="mt-4">
          <Button
            color={"yellow"}
            icon={<TbBrandJavascript></TbBrandJavascript>}
          >
            Frontend
          </Button>
        </div>
      </main>
    </>
  );
}

export default App;
