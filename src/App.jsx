import { DiCode } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { ImDatabase } from "react-icons/im";
import { BiMobile } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

import Button from "./ui/Button";
function App() {
  return (
    <div className="h-screen bg-neutral-50 dark:bg-slate-950 w-screen">
      <header className="flex justify-between items-center border-b dark:border-slate-900 border-neutral-300">
        <div className="text-slate-800 flex items-center pl-2 font-semibold dark:text-slate-100">
          <DiCode size="48"></DiCode>
          <span>IT Стажировки в РФ</span>
        </div>
      </header>
      <main className="flex items-center justify-center mt-12 text-slate-800 dark:text-slate-100 flex-col">
        <h1 className="text-center font-semibold text-4xl">
          Найди стажировку по своему направлению
        </h1>
        <div className="mt-8 flex gap-2 max-w-2xl flex-wrap justify-center">
          <Button
            color={"yellow"}
            icon={<TbBrandJavascript></TbBrandJavascript>}
          >
            Frontend
          </Button>
          <Button color={"gray"} icon={<ImDatabase></ImDatabase>}>
            Backend
          </Button>
          <Button color={"blue"} icon={<BiMobile></BiMobile>}>
            Mobile
          </Button>
          <Button color={"green"} icon={<SiPostman></SiPostman>}>
            QA
          </Button>
          <Button color={"purple"} icon={<FaLinux></FaLinux>}>
            DevOps
          </Button>
          <Button color={"blue"} icon={<SiSimpleanalytics></SiSimpleanalytics>}>
            Data analysis
          </Button>
          <Button color={"purple"} icon={<FaBriefcase></FaBriefcase>}>
            Product manager
          </Button>
          <Button
            color={"gray"}
            icon={<GiArtificialIntelligence></GiArtificialIntelligence>}
          >
            Machine learning
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
