import Button from "./Button";

export default function VacancyItem({ children, link, icon, date }) {
  return (
    <>
      <div className="relative  max-w-4xl  p-6 bg-white border border-neutral-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="mt-2 flex items-center gap-14">
          {icon}
          <div className="flex justify-between flex-row items-center w-full">
            <h5 className=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {children}
            </h5>
            <a href={link}>
              <Button color={"blue"}>Перейти</Button>
            </a>
          </div>
          <div className="absolute top-1 left-1 text-xs dark:text-gray-500 text-gray-600">
            <p>Вакансия найдена на HH.ru</p>
          </div>
          <div className="absolute top-1 right-1 text-xs dark:text-gray-500 text-gray-600">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
