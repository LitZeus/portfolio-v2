import { ProjectType } from "@/app/types";
import { ProjectList } from "@/app/utils";
import { Project } from "../components/Project";

export default function Projects() {
  return (
    <section className="p-2 sm:p-4 pb-8 sm:pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="flex flex-col gap-12 sm:gap-20">
        {ProjectList.map((project: ProjectType) => (
          <Project
            key={`project-item-${project.title}`}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}