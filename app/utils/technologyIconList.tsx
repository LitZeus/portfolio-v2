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

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "JavaScript",
    icon: (
      <JavascriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <TypescriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Vue",
    icon: (
      <VueSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <ReactSVG
        color={color}
        size={35}
      />
    ),
  },

  {
    name: "Quasar",
    icon: (
      <QuasarSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <TailwindSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "PrimeVue",
    icon: (
      <PrimeVueSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "PrimeReact",
    icon: (
      <PrimeReactSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "heroui",
    icon: (
      <HerouiSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Shadcn",
    icon: (
      <ShadcnSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Express",
    icon: (
      <ExpressSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <MongoDBSVG
        color={color}
        size={35}
      />
    ),
  },
];
