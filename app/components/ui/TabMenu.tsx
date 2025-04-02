"use client";
import { Contact, Home, Projects } from "@/app/components/tabSection";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname } from "next/navigation";

export default function TabMenu() {
  const pathname = usePathname();

  const getTabStyle = (path: string) => {
    const isActive = pathname === path;
    return `px-3 py-1.5 rounded-lg transition-colors ${
      isActive
        ? "bg-white/10 text-white font-semibold"
        : "text-[#71717A] hover:text-white"
    }`;
  };

  return (
    <>
      <Tabs 
        className="flex justify-center mt-4 mb-8"
        selectedKey={pathname === "/" ? "home" : pathname.slice(1)}
      >
        <Tab
          key="home"
          title={
            <span className={getTabStyle("/")}>
              Home
            </span>
          }
        >
          <Home />
        </Tab>

        <Tab
          key="projects"
          title={
            <span className={getTabStyle("/projects")}>
              Projects
            </span>
          }
        >
          <Projects />
        </Tab>

        <Tab
          key="contact"
          title={
            <span className={getTabStyle("/contact")}>
              Contact
            </span>
          }
        >
          <Contact />
        </Tab>
      </Tabs>
    </>
  );
}
