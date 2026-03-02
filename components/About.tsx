import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";

const skills = [
  "Web Development",
  "User Experience",
  "Content Writing",
  "Digital Marketing",
  "IT Support",
];

const tools = [
  "HTML | CSS | Sass",
  "Javascript | ReactJS | NextJS",
  "Firebase | Laravel | AWS",
  "MS Office",
  "Canva",
];

export default function About() {
  return (
    <section
      id="about"
      className="to-dark-text bg-linear-to-br from-[#3a7bd5] py-16 text-white dark:bg-black dark:bg-none"
    >
      <Reveal variant="up">
        <h2 className="font-montserrat mb-8 text-center text-3xl font-bold md:text-5xl">
          ABOUT ME
        </h2>
      </Reveal>

      <div className="mx-auto flex flex-col items-center gap-4 px-4 md:w-4/5">
        {/* Image + Bio */}
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Reveal
            variant="left"
            className="flex w-full items-center justify-center md:w-[30%]"
          >
            <Image
              src="/img/profile.jpg"
              alt="Amin Mohammed Goni — Web Developer"
              width={400}
              height={400}
              sizes="(max-width: 768px) 70vw, 24vw"
              className="w-[70%] shadow-lg md:w-full"
              priority
            />
          </Reveal>
          <Reveal
            variant="right"
            className="w-full text-base leading-relaxed md:w-[70%] md:text-lg md:leading-9"
          >
            <p className="mb-4">
              I&apos;m a fullstack web developer passionate about building
              modern, and user-centered digital experiences. With a strong
              foundation in React and Next.js and growing expertise in backend
              architecture, I focus on creating applications that are intuitive,
              accessible, and useful.
            </p>
            <p className="mb-4">
              I&apos;m particularly interested in how strong system architecture
              and user experience intersect, designing high-performance
              applications that bridge the gap between complex backend logic and
              high-impact user interfaces.
            </p>
            <p className="mb-4">
              Beyond software development, I enjoy writing football, movies and
              TV shows, reading, and playing video games.
            </p>
          </Reveal>
        </div>

        {/* Skills & Tools */}
        <div className="mt-4 flex w-full flex-col justify-evenly gap-8 px-4 md:flex-row">
          <Reveal variant="right" delay={0.3}>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">My Skills:</h3>
            <ol className="list-disc leading-6 md:leading-8">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ol>
          </Reveal>
          <Reveal variant="right" delay={0.5}>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">My Tools:</h3>
            <ol className="list-disc leading-6 md:leading-8">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.4}>
          <Button asChild color="white" variant="outlined" className="mt-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
