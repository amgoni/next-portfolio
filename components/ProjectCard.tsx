import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 gap-8 px-4 md:grid-cols-[40%_60%] md:px-0">
      <Reveal variant="left" className="flex flex-col justify-center">
        <h3 className="mb-4 text-xl font-bold uppercase md:mb-2 md:text-2xl dark:text-white">
          {project.title}
        </h3>

        {/* Mobile preview image */}
        <div className="mb-6 block md:hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={800}
            height={500}
            sizes="90vw"
            className="w-full shadow-md"
          />
        </div>

        <p className="mb-4 text-base leading-relaxed md:text-xl md:leading-9 dark:text-white">
          {project.description}
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          <Button asChild size="default">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              See Live
            </a>
          </Button>
          {project.codeUrl && (
            <Button asChild variant="default" color="accent">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Code
              </a>
            </Button>
          )}
        </div>
      </Reveal>
      <Reveal variant="right" className="hidden md:block">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={500}
          sizes="48vw"
          className="w-full shadow-md"
        />
      </Reveal>
    </article>
  );
}
