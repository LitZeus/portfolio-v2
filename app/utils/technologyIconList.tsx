import {
    ExpressSVG,
    HerouiSVG,
    JavascriptSVG,
    MongoDBSVG,
    PrimeReactSVG,
    PrimeVueSVG,
    QuasarSVG,
    ReactSVG,
    ShadcnSVG,
    TailwindSVG,
    TypescriptSVG,
    VueSVG
} from "../components/ui/icons";
import { iconType } from "../types";

const defaultColor = "#9ca3af";

export const techonologyIconList: iconType[] = [
  {
    name: "JavaScript",
    icon: JavascriptSVG,
    color: defaultColor
  },
  {
    name: "TypeScript",
    icon: TypescriptSVG,
    color: defaultColor
  },
  {
    name: "Vue",
    icon: VueSVG,
    color: defaultColor
  },
  {
    name: "React",
    icon: ReactSVG,
    color: defaultColor
  },
  {
    name: "Quasar",
    icon: QuasarSVG,
    color: defaultColor
  },
  {
    name: "Tailwind",
    icon: TailwindSVG,
    color: defaultColor
  },
  {
    name: "PrimeVue",
    icon: PrimeVueSVG,
    color: defaultColor
  },
  {
    name: "PrimeReact",
    icon: PrimeReactSVG,
    color: defaultColor
  },
  {
    name: "heroui",
    icon: HerouiSVG,
    color: defaultColor
  },
  {
    name: "Shadcn",
    icon: ShadcnSVG,
    color: defaultColor
  },
  {
    name: "Express",
    icon: ExpressSVG,
    color: defaultColor
  },
  {
    name: "MongoDB",
    icon: MongoDBSVG,
    color: defaultColor
  }
];
