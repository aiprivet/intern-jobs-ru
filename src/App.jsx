import VacancyItem from "./components/VacancyItem";
import { useEffect, useState } from "react";
import getPublicationDate from "./utils/getPublicationDay";
import ChooseSpeciality from "./components/ChooseSpeciality";
import Icons from "./ui/Icons/Icons";
import { useSpeicalityStore } from "./store/useStore";
import { vacancyRequestBySpeciality } from "./api/vacancyRequest";
import { baseVacancies } from "./data/baseVacancies";
import Spinner from "./ui/Spinner";
import Header from "./components/Header";

function App() {
  const [allVacancies, setAllVacancies] = useState([]);
  const [baseVacancy, setBaseVacancies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const speciality = useSpeicalityStore((state) => state.speciality);

  useEffect(() => {
    (async function () {
      if (speciality !== null) {
        try {
          setLoading(true);
          setBaseVacancies(baseVacancies[speciality]);
          await wait(250);
          getVacancies().then((data) => setAllVacancies(data));
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
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
  }, [speciality, baseVacancy]);

  return (
    <>
      <Header></Header>
      
      <main
        className={`flex items-center justify-center transition text-slate-800 dark:text-slate-100 flex-col`}
      >
        <h1
          className={`${
            speciality !== null ? "opacity-0 absolute top-0" : ""
          } text-center font-semibold text-4xl transition mt-16`}
        >
          Найди стажировку по своему направлению
        </h1>
        <div
          className={`mt-8 flex ${
            speciality ? "max-w-4xl " : "gap-3 max-w-2xl"
          } transition   justify-center flex-wrap`}
        >
          <ChooseSpeciality></ChooseSpeciality>
        </div>
        <div
          className={`mt-8 relative gap-4 flex-col flex`}
        >
          {loading ? (
            <div className="sm:mt-52 mt-32">
            <Spinner />
             </div>
          ) : (
            <>
              {baseVacancy.map((vacancy) => (
                <VacancyItem
                  key={vacancy.name}
                  icon={<Icons companyName={vacancy.company} />}
                  link={vacancy.link}
                  date={vacancy.date}
                >
                  {vacancy.name}
                </VacancyItem>
              ))}

              {allVacancies.map((vacancy) => (
                <VacancyItem
                  isHHVacancy={true}
                  key={vacancy.id}
                  icon={<Icons companyName={"HH"} />}
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
