import Button from "../ui/Button";
import { TbBrandJavascript } from "react-icons/tb";
import { ImDatabase } from "react-icons/im";
import { BiMobile } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { useSpeicalityStore } from "../store/useStore";

export default function ChooseSpeciality() {
  const updateSpeciality = useSpeicalityStore(
    (state) => state.updateSpeciality
  );
  const speciality = useSpeicalityStore(
    (state) => state.speciality
  );
  return (
    <>
      <Button
        onClick={() => updateSpeciality("Frontend")}
        color={"yellow"}
        mini={speciality !== null ? true : false}
        icon={<TbBrandJavascript></TbBrandJavascript>}
      >
        Frontend
      </Button>
      <Button
        onClick={() => updateSpeciality("Backend")}
        color={"gray"}
        mini={speciality !== null ? true : false}

        icon={<ImDatabase></ImDatabase>}
      >
        Backend
      </Button>
      <Button
        onClick={() => updateSpeciality("Mobile")}
        color={"blue"}
        mini={speciality !== null ? true : false}

        icon={<BiMobile></BiMobile>}
      >
        Mobile
      </Button>
      <Button
        onClick={() => updateSpeciality("QA")}
        color={"green"}
        mini={speciality !== null ? true : false}

        icon={<SiPostman></SiPostman>}
      >
        QA
      </Button>
      <Button
        onClick={() => updateSpeciality("DevOps")}
        color={"purple"}
        mini={speciality !== null ? true : false}

        icon={<FaLinux></FaLinux>}
      >
        DevOps
      </Button>
      <Button
        onClick={() => updateSpeciality("Data analysis")}
        color={"blue"}
        mini={speciality !== null ? true : false}

        icon={<SiSimpleanalytics></SiSimpleanalytics>}
      >
        Data analysis
      </Button>
      <Button
        onClick={() => updateSpeciality("PM")}
        color={"red"}
        mini={speciality !== null ? true : false}

        icon={<FaBriefcase></FaBriefcase>}
      >
        PM
      </Button>
      <Button
        onClick={() => updateSpeciality("Machine learning")}
        color={"gray"}
        mini={speciality !== null ? true : false}

        icon={<GiArtificialIntelligence></GiArtificialIntelligence>}
      >
        Machine learning
      </Button>
    </>
  );
}
