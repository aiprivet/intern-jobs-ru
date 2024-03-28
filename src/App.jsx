import { DiCode } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { ImDatabase } from "react-icons/im";
import { BiMobile } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaYandexInternational } from "react-icons/fa";
import Button from "./ui/Button";
import VacancyItem from "./ui/VacancyItem";
import { useEffect, useState } from "react";
function App() {
  const [allVacancies, setAllVacancies] = useState([]);
  useEffect(() => {
    getVacancies().then((data) => setAllVacancies(data));
    async function getVacancies() {
      let vacancies = await fetch(
        "https://api.hh.ru/vacancies?search_field=name&search_field=company_name&search_field=description&ored_clusters=true&enable_snippets=true&L_save_area=true&employment=probation&experience=noExperience&text=name%3A%28%21%22frontend%22+or+%21%22front+end%22%29+and+description%3A%28vue+or+vuejs+or+vue.js+or+angular+or+react%29"
      );
      vacancies = await vacancies.json();
      let { items } = vacancies;
      console.log(items[0]);
      return items;
    }
  }, []);

  function dayTitle(number) {
    if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return "дней";
    let last_num = number % 10;
    if (last_num == 1) return "день";
    if ([2, 3, 4].includes(last_num)) return "дня";
    if ([5, 6, 7, 8, 9, 0].includes(last_num)) return "дней";
  }
  function dayDiffs(vacancyCreatedStr, currentDay = new Date()) {
    const vacancyCreated = new Date(vacancyCreatedStr);
    const diffTime = Math.abs(vacancyCreated - currentDay);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  return (
    <>
      <header className="flex  justify-between items-center border-b dark:border-slate-900 border-neutral-300">
        <div className="text-slate-800 flex items-center pl-2 font-semibold dark:text-slate-100">
          <DiCode size="48"></DiCode>
          <span>IT Стажировки в РФ</span>
        </div>
      </header>
      <main className="flex items-center justify-center mt-16 text-slate-800 dark:text-slate-100 flex-col">
        <h1 className="text-center font-semibold text-4xl">
          Найди стажировки по своему направлению
        </h1>
        <div className="mt-8 flex gap-3 max-w-2xl flex-wrap justify-center">
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
          <Button color={"red"} icon={<FaBriefcase></FaBriefcase>}>
            Product manager
          </Button>
          <Button
            color={"gray"}
            icon={<GiArtificialIntelligence></GiArtificialIntelligence>}
          >
            Machine learning
          </Button>
        </div>
        <div className="mt-8 relative flex flex-col gap-4">
          {allVacancies.map((vacancy) => (
            <VacancyItem
              key={vacancy.id}
              icon={
                <img width={48} height={48} src="/public/min-hh-red.png"></img>
              }
              link={vacancy.alternate_url}
              date={`Опубликовано ${dayDiffs(vacancy.created_at)} ${dayTitle(
                dayDiffs(vacancy.created_at)
              )} назад`}
            >
              {vacancy.name}
            </VacancyItem>
          ))}
          {/* <VacancyItem
            icon={<FaYandexInternational></FaYandexInternational>}
            link={"https://yandex.ru/yaintern/int_05"}
            date={"Круглый год"}
          >
            Стажер Frontend-разработчик в Yandex
          </VacancyItem> */}
        </div>
      </main>
    </>
  );
}

export default App;
