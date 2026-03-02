import Reveal from "@/components/ui/reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-16 dark:bg-black">
      <Reveal variant="up">
        <h2 className="font-montserrat mb-8 text-center text-3xl font-bold md:text-5xl dark:text-white">
          FEATURED PROJECTS
        </h2>
      </Reveal>
      <div className="mx-auto flex flex-col items-center gap-16 md:w-4/5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
