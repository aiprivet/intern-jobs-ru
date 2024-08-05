import { useEffect, useState } from "react";
import Button from "../ui/Button";

export default function VacancyItem({
  children,
  link,
  icon,
  date,
  isHHVacancy = false,
}) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoad(false), 1000);
  }, []);
  return (
    <>
      <div
        className={`relative  max-w-4xl  p-6 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="mt-2 flex items-center sm:gap-14 gap-8">
          {load ? (
            <div className="p-6 dark:bg-gray-500 bg-gray-200 animate-pulse rounded-full"></div>
          ) : (
            icon
          )}
          <div className="flex justify-between flex-row items-center w-full">
            <h5
              className={`${
                load
                  ? "dark:bg-gray-500 bg-gray-200 dark:text-gray-500 text-gray-200 animate-pulse rounded-lg"
                  : "text-gray-900 dark:text-white"
              } 2xl:text-2xl lg:text-xl text-sm font-semibold tracking-tight  `}
            >
              {children}
            </h5>
            {load ? (
              <Button color={"load"}>Перейти</Button>
            ) : (
              <a href={link}>
                <Button color={"blue"}>Перейти</Button>
              </a>
            )}
          </div>
          {isHHVacancy ? (
            load ? (
              <div className="absolute top-1 left-1 text-xs dark:bg-gray-500 bg-gray-200 animate-pulse rounded-xl dark:text-gray-500 text-gray-200">
                <p>Вакансия найдена на HH.ru</p>
              </div>
            ) : (
              <div className="absolute top-1 left-1 text-xs dark:text-gray-500 text-gray-600">
                <p>Вакансия найдена на HH.ru</p>
              </div>
            )
          ) : (
            ""
          )}
          {load ? (
            <div className="absolute top-1 right-1 text-xs dark:bg-gray-500 bg-gray-200 animate-pulse rounded-xl dark:text-gray-500 text-gray-200">
              <p>{date}</p>
            </div>
          ) : (
            <div className="absolute top-1 right-1 text-xs dark:text-gray-500 text-gray-600">
              <p>{date}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
