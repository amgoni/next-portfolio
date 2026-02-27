import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-[40%_60%] max-md:grid-cols-1 gap-5 mb-24 max-md:mb-12">
      <Reveal variant="left" className="flex flex-col justify-center">
        <h3 className="text-2xl max-md:text-xl font-bold mb-2 uppercase">
          {project.title}
        </h3>
        <p className="text-xl max-md:text-base leading-9 max-md:leading-relaxed py-2.5 pr-2.5">
          {project.description}
        </p>
        <div className="flex gap-3 mt-2">
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
      <Reveal variant="right" delay={0.3}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={500}
          className="w-full h-auto shadow-md"
        />
      </Reveal>
    </article>
  );
}
