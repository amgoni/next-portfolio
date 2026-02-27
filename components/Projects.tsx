import Reveal from "@/components/ui/reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pb-12">
      <Reveal variant="up">
        <h1 className="text-5xl max-md:text-[1.8em] font-bold w-fit mx-auto py-12">
          FEATURED PROJECTS
        </h1>
      </Reveal>
      <div className="w-4/5 mx-auto flex flex-col items-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
