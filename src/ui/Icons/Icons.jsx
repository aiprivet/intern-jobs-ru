import HHIcon from "./HHIcon";
import YandexIcon from "./YandexIcon";

function Icons({ companyName }) {
  const iconsByCompanyName = {
    Yandex: <YandexIcon/>,
    HH: <HHIcon/>,
  };
  return iconsByCompanyName[companyName];
}

export default Icons;
