import HHIcon from "./HHIcon";
import VKIcon from "./VKIcon";
import YandexIcon from "./YandexIcon";

function Icons({ companyName }) {
  const iconsByCompanyName = {
    Yandex: <YandexIcon/>,
    HH: <HHIcon/>,
    VK:<VKIcon/>
  };
  return iconsByCompanyName[companyName];
}

export default Icons;
