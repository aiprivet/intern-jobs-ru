import HHIcon from "./HHIcon";
import KasperskyIcon from "./KasperskyIcon";
import TinkoffIcon from "./TinkoffIcon";
import VKIcon from "./VKIcon";
import YandexIcon from "./YandexIcon";

function Icons({ companyName }) {
  const iconsByCompanyName = {
    Yandex: <YandexIcon />,
    HH: <HHIcon />,
    VK: <VKIcon />,
    Kaspersky: <KasperskyIcon />,
    Tinkoff: <TinkoffIcon />,
  };
  return iconsByCompanyName[companyName];
}

export default Icons;
