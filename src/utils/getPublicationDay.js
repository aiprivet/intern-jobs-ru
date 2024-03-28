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

export default function getPublicationDate(createdAt) {
  return `Опубликовано ${dayDiffs(createdAt)} ${dayTitle(
    dayDiffs(createdAt)
  )} назад`;
}
