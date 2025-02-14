"use client";
import { Contact, Home, Projects } from "@/app/components/tabSection";
import { Tab, Tabs } from "@heroui/tabs";

export default function TabMenu() {
  return (
    <>
      <Tabs className="flex justify-center mt-4 mb-8">
        <Tab
          key="homme"
          title="Home"
        >
          <Home />
        </Tab>

        <Tab
          key="projects"
          title="Projects"
        >
          <Projects />
        </Tab>

        <Tab
          key="contact"
          title="Contact"
        >
          <Contact />
        </Tab>
      </Tabs>
    </>
  );
}
