export const vacancyRequestBySpeciality = {
  Frontend:
    "https://api.hh.ru/vacancies?search_field=name&search_field=company_name&search_field=description&ored_clusters=true&enable_snippets=true&L_save_area=true&employment=probation&experience=noExperience&text=name%3A%28%21%22frontend%22+or+%21%22front+end%22%29+and+description%3A%28vue+or+vuejs+or+vue.js+or+angular+or+react%29",
  Backend:
    "https://api.hh.ru/vacancies?ored_clusters=true&enable_snippets=true&hhtmFrom=vacancy_search_list&hhtmFromLabel=vacancy_search_line&employment=probation&search_field=name&search_field=company_name&search_field=description&text=NAME%3A%28%21%22backend%22+or+%21%22бекенд%22%29",
  QA: "https://api.hh.ru/vacancies?ored_clusters=true&enable_snippets=true&hhtmFrom=vacancy_search_list&hhtmFromLabel=vacancy_search_line&employment=probation&search_field=name&search_field=company_name&search_field=description&text=NAME%3A%28%21%22тестировщик%22+or+%21%22QA%22%29",
  DevOps:
    "https://api.hh.ru/vacancies?search_field=name&search_field=company_name&search_field=description&ored_clusters=true&enable_snippets=true&L_save_area=true&employment=probation&text=NAME%3A%28%21%22devops%22%29",
  PM: "https://api.hh.ru/vacancies?ored_clusters=true&enable_snippets=true&hhtmFrom=vacancy_search_list&hhtmFromLabel=vacancy_search_line&employment=probation&search_field=name&search_field=company_name&search_field=description&text=NAME%3A%28%21%22product+manager%22+or+%21%22продукт+менеджер%22+or+%22Project+manager%22%29",
  "Machine learning":
    "https://api.hh.ru/vacancies?search_field=name&search_field=company_name&search_field=description&ored_clusters=true&enable_snippets=true&L_save_area=true&employment=probation&text=NAME%3A%28%21%22ML%22%29",
  "Data analysis":
    "https://api.hh.ru/vacancies?ored_clusters=true&enable_snippets=true&hhtmFrom=vacancy_search_list&hhtmFromLabel=vacancy_search_line&employment=probation&search_field=name&search_field=company_name&search_field=description&text=NAME%3A%28%21%22data+analyst%22+or+%21%22аналитик+данных%22+or+%21%22Data+scientist%22+or+%21%22Data+science%22%29",
  Mobile:
    "https://api.hh.ru/vacancies?ored_clusters=true&enable_snippets=true&hhtmFrom=vacancy_search_list&hhtmFromLabel=vacancy_search_line&employment=probation&search_field=name&search_field=company_name&search_field=description&text=name%3A%28%21%22ios%22+or+%22swift%22+or+%21%22android%22+or+%21%22kotlin%22+or+%21%22flutter%22+or+%21%22dart%22+or+%21%22react+native%22%29",
};
