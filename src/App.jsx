import { DiCode } from "react-icons/di";
import VacancyItem from "./components/VacancyItem";
import { useEffect, useState } from "react";
import getPublicationDate from "./utils/getPublicationDay";
import ChooseSpeciality from "./components/ChooseSpeciality";
import HHIcon from "./ui/Icons/HHIcon";
import YandexIcon from "./ui/Icons/YandexIcon";
import { useSpeicalityStore } from "./store/useStore";
import { vacancyRequestBySpeciality } from "./api/vacancyRequest";

function App() {
  const [allVacancies, setAllVacancies] = useState([]);
  const speciality = useSpeicalityStore((state) => state.speciality);

  useEffect(() => {
    if (speciality !== null) {
      getVacancies().then((data) => setAllVacancies(data));
    }
    async function getVacancies() {
      let vacancies = await fetch(vacancyRequestBySpeciality[speciality]);
      vacancies = await vacancies.json();
      let { items } = vacancies;
      return items;
    }
  }, [speciality]);

  return (
    <>
      <header className="flex justify-between items-center border-b dark:border-slate-900 border-neutral-300">
        <div className="text-slate-800 flex items-center pl-2 font-semibold dark:text-slate-100">
          <DiCode size="48"></DiCode>
          <span>IT Стажировки в РФ</span>
        </div>
      </header>
      <main
        className={`flex items-center justify-center ${
          speciality ? "mt-0" : "mt-16"
        } transition text-slate-800 dark:text-slate-100 flex-col`}
      >
        <h1
          className={`${
            speciality ? "opacity-0 h-0 text-[0px]" : ""
          }text-center font-semibold text-4xl transition`}
        >
          Найди стажировки по своему направлению
        </h1>
        <div className="mt-8 flex gap-3 max-w-2xl flex-wrap justify-center">
          <ChooseSpeciality></ChooseSpeciality>
        </div>
        <div className="mt-8 relative flex flex-col gap-4">
          <VacancyItem
            icon={<YandexIcon></YandexIcon>}
            link={"https://yandex.ru/yaintern/int_05"}
            date={"Круглый год"}
          >
            Стажер Frontend-разработчик в Yandex
          </VacancyItem>
          {allVacancies.map((vacancy) => (
            <VacancyItem
              isHHVacancy={true}
              key={vacancy.id}
              icon={<HHIcon></HHIcon>}
              link={vacancy.alternate_url}
              date={getPublicationDate(vacancy.created_at)}
            >
              {vacancy.name}
            </VacancyItem>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
