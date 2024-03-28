import { DiCode } from "react-icons/di";
import VacancyItem from "./components/VacancyItem";
import { useEffect, useState } from "react";
import getPublicationDate from "./utils/getPublicationDay";
import ChooseSpeciality from "./components/ChooseSpeciality";
import HHIcon from "./ui/Icons/HHIcon";
import YandexIcon from "./ui/Icons/YandexIcon";
import { useSpeicalityStore } from "./store/useStore";
import { vacancyRequestBySpeciality } from "./api/vacancyRequest";
import Spinner from "./ui/Spinner";

function App() {
  const [allVacancies, setAllVacancies] = useState([]);
  const [loading, setLoading] = useState(false);
  const speciality = useSpeicalityStore((state) => state.speciality);

  
  useEffect(() => {
    (async function () {
      if (speciality !== null) {
        setLoading(true);
        await wait(500);
        getVacancies().then((data) => setAllVacancies(data));
        setLoading(false);
      }
      function wait(t) {
        return new Promise((resolve) => {
          setTimeout(resolve, t);
        });
      }
      async function getVacancies() {
        let vacancies = await fetch(vacancyRequestBySpeciality[speciality]);
        vacancies = await vacancies.json();
        let { items } = vacancies;
        return items;
      }
    })();
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
        <div
          className={`${
            loading ? "mt-52" : "flex-col flex"
          } mt-8 relative gap-4`}
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              <VacancyItem
                icon={<YandexIcon />}
                link={"https://yandex.ru/yaintern/int_05"}
                date={"Круглый год"}
              >
                Стажер Frontend-разработчик в Yandex
              </VacancyItem>
              {allVacancies.map((vacancy) => (
                <VacancyItem
                  isHHVacancy={true}
                  key={vacancy.id}
                  icon={<HHIcon />}
                  link={vacancy.alternate_url}
                  date={getPublicationDate(vacancy.created_at)}
                >
                  {vacancy.name}
                </VacancyItem>
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
